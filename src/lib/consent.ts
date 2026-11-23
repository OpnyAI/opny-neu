export const CONSENT_KEY = "opny_consent_v3";
export const LEGACY_CONSENT_KEY = "cookie_consent_v2";
export const CONSENT_CHANGE_EVENT = "opny-consent-change";
export const OPEN_COOKIE_SETTINGS_EVENT = "open-cookie-settings";
export type ConsentValue = "declined" | "statistics" | "marketing" | "all";
let memoryChoice: ConsentValue | null = null;
export function preferences(value: ConsentValue | null) {
  return {
    statistics: value === "statistics" || value === "all",
    marketing: value === "marketing" || value === "all",
  };
}
export function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (raw) {
      const value = JSON.parse(raw);
      if (
        value.version === 3 &&
        typeof value.statistics === "boolean" &&
        typeof value.marketing === "boolean"
      )
        return value.statistics
          ? value.marketing
            ? "all"
            : "statistics"
          : value.marketing
            ? "marketing"
            : "declined";
    }
    const legacy = window.localStorage.getItem(LEGACY_CONSENT_KEY);
    if (legacy === "accepted") return "statistics";
    if (legacy === "declined") return "declined";
  } catch {
    return memoryChoice;
  }
  return memoryChoice;
}
export function saveConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ version: 3, ...preferences(value) }),
    );
    memoryChoice = null;
  } catch {
    memoryChoice = value;
    /* The current tab still honors the visitor's choice. */
  }
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}
export function subscribeToConsent(listener: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, listener);
  window.addEventListener("storage", listener);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, listener);
    window.removeEventListener("storage", listener);
  };
}
export function getServerConsent(): ConsentValue | null {
  return null;
}
