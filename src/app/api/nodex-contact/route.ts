import { NextResponse, type NextRequest } from "next/server";
import { createHash } from "node:crypto";
import {
  readContactEmailConfig,
  sendResendEmail,
} from "@/lib/contact-email";

export const runtime = "nodejs";

const interests = new Set([
  "TrustArch Demo",
  "NodeX Einsatz",
  "KI-Beratung Automotive",
  "KI-Schulung Automotive",
  "KI-Governance-Check",
  "Allgemeine Anfrage",
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

    const emailConfig = readContactEmailConfig(process.env);

    if (!emailConfig) {
      console.error("Opny contact delivery is not configured.");
      return NextResponse.json({ ok: false }, { status: 503 });
    }
    const { apiKey, to, from } = emailConfig;

    const submissionKey = createHash("sha256")
      .update(`${email}|${interest}|${renderedAt}`)
      .digest("hex");

    const rows = [
      ["Name", name],
      ["Unternehmen", company],
      ["E-Mail", email],
      ["Telefon", phone || "-"],
      ["Unternehmensgröße", companySize],
      ["Interesse", interest],
      ["Nachricht", message || "-"],
      ["Quelle", "Opny Website"],
      ["Zeitstempel", submittedAt],
    ];

    const internalHtml = `
      <h1>Neue Anfrage über die Opny Website</h1>
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
      <p>vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und melden uns bei Ihnen zurück.</p>
      <p>Je nach Anliegen prüfen wir vorab, ob es um TrustArch, NodeX, KI-Beratung, KI-Schulung oder KI-Governance geht, damit wir das Gespräch sinnvoll vorbereiten können.</p>
      <p>Viele Grüße<br />Opny</p>
    `;

    try {
      await sendResendEmail({
        apiKey,
        to,
        from,
        subject: `Opny Anfrage: ${interest} - ${company}`,
        html: internalHtml,
        replyTo: email,
        idempotencyKey: `opny-internal-${submissionKey}`,
      });
    } catch (error) {
      console.error(
        "Opny contact delivery failed.",
        error instanceof Error ? error.message : "unknown_provider_error",
      );
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    try {
      await sendResendEmail({
        apiKey,
        to: email,
        from,
        subject: "Ihre Anfrage bei Opny ist eingegangen",
        html: confirmationHtml,
        idempotencyKey: `opny-confirmation-${submissionKey}`,
      });
    } catch (error) {
      console.warn(
        "Opny contact confirmation could not be sent.",
        error instanceof Error ? error.message : "unknown_provider_error",
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Opny contact request failed.", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
