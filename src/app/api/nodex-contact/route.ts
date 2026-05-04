import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";

const interests = new Set([
  "KI-Beratung",
  "KI-Training",
  "NodeX Demo",
  "Allgemeine Anfrage",
  "KI-Governance-Check",
  "Pilotprojekt besprechen",
]);

const companySizes = new Set([
  "1-50 Mitarbeitende",
  "51-250 Mitarbeitende",
  "251-1.000 Mitarbeitende",
  "1.000+ Mitarbeitende",
]);

type RateEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MIN_SUBMIT_TIME_MS = 3000;

function trim(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt < now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX;
}

function hasSpamPatterns(...values: string[]) {
  const combined = values.join(" ").toLowerCase();
  const linkCount = (combined.match(/https?:\/\//g) || []).length;

  return (
    linkCount > 2 ||
    /\b(?:casino|crypto|viagra|loan|porn|seo backlinks)\b/i.test(combined) ||
    /<\s*a\s+href|<script/i.test(combined)
  );
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function sendResendEmail({
  to,
  from,
  subject,
  html,
  replyTo,
}: {
  to: string;
  from: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("NodeX contact email skipped: RESEND_API_KEY is not configured.");
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      reply_to: replyTo,
    }),
  });

  if (!response.ok) {
    const responseText = await response.text();
    let responseBody: unknown = responseText;

    try {
      responseBody = JSON.parse(responseText);
    } catch {
      // Keep the raw response text when Resend does not return JSON.
    }

    throw {
      message: "Resend email request failed.",
      status: response.status,
      statusText: response.statusText,
      body: responseBody,
      to,
      subject,
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);

    // Best-effort only: serverless instances do not share this in-memory store.
    if (isRateLimited(ip)) {
      return NextResponse.json({ ok: false }, { status: 429 });
    }

    const body = await request.json();
    const honeypot = trim(body.website);
    const renderedAt = Number(body.renderedAt);

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!Number.isFinite(renderedAt) || Date.now() - renderedAt < MIN_SUBMIT_TIME_MS) {
      return NextResponse.json({ ok: true });
    }

    const name = trim(body.name);
    const company = trim(body.company);
    const email = trim(body.email).toLowerCase();
    const phone = trim(body.phone);
    const companySize = trim(body.companySize);
    const interest = trim(body.interest);
    const message = trim(body.message).slice(0, 1500);
    const privacy = body.privacy === true;
    const submittedAt = new Date().toISOString();

    if (
      name.length < 2 ||
      company.length < 2 ||
      !isValidEmail(email) ||
      !companySizes.has(companySize) ||
      !interests.has(interest) ||
      !privacy ||
      message.length > 1500 ||
      hasSpamPatterns(name, company, email, phone, message)
    ) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from) {
      console.error(
        "NodeX contact email failed: CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not configured.",
      );
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const rows = [
      ["Name", name],
      ["Unternehmen", company],
      ["E-Mail", email],
      ["Telefon", phone || "-"],
      ["Unternehmensgröße", companySize],
      ["Interesse", interest],
      ["Nachricht", message || "-"],
      ["Quelle", "NodeX Landingpage"],
      ["Zeitstempel", submittedAt],
    ];

    const internalHtml = `
      <h1>Neue NodeX Anfrage</h1>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight:bold;border:1px solid #e5e7eb">${escapeHtml(
                label,
              )}</td><td style="border:1px solid #e5e7eb">${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
    `;

    const confirmationHtml = `
      <p>Hallo ${escapeHtml(name)},</p>
      <p>vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und melden uns in der Regel innerhalb von 24 Stunden bei Ihnen zurück.</p>
      <p>Je nach Anliegen prüfen wir vorab, ob es um KI-Beratung, KI-Training oder NodeX geht, damit wir das Gespräch direkt sinnvoll vorbereiten können.</p>
      <p>Viele Grüße<br />Opny</p>
    `;

    try {
      await Promise.all([
        sendResendEmail({
          to,
          from,
          subject: `NodeX Anfrage: ${interest} - ${company}`,
          html: internalHtml,
          replyTo: email,
        }),
        sendResendEmail({
          to: email,
          from,
          subject: "Ihre Anfrage bei Opny ist eingegangen",
          html: confirmationHtml,
        }),
      ]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("RESEND FULL ERROR:", error)
      console.error("RESEND JSON:", JSON.stringify(error, null, 2))

      return new Response(
        JSON.stringify({
          success: false,
          error: error?.message,
          full: error
        }),
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("NodeX contact request failed.", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
