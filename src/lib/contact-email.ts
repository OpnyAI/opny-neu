export type ContactEmailConfig = {
  apiKey: string;
  to: string;
  from: string;
};

export function readContactEmailConfig(
  environment: NodeJS.ProcessEnv,
): ContactEmailConfig | null {
  const apiKey = environment.RESEND_API_KEY;
  const to = environment.CONTACT_TO_EMAIL;
  const from = environment.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) return null;
  return { apiKey, to, from };
}

export async function sendResendEmail({
  apiKey,
  to,
  from,
  subject,
  html,
  replyTo,
  idempotencyKey,
  fetcher = fetch,
}: {
  apiKey: string;
  to: string;
  from: string;
  subject: string;
  html: string;
  replyTo?: string;
  idempotencyKey: string;
  fetcher?: typeof fetch;
}) {
  const response = await fetcher("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
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
    throw new Error(`email_provider_rejected_${response.status}`);
  }
}
