export const CONSENT_KEY = "cookie_consent_v2";
export const CONSENT_CHANGE_EVENT = "opny-consent-change";
export const OPEN_COOKIE_SETTINGS_EVENT = "open-cookie-settings";

export type ConsentValue = "accepted" | "declined";

export function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(CONSENT_KEY);
  return stored === "accepted" || stored === "declined" ? stored : null;
}
