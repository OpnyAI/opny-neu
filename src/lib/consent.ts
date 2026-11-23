import { MARKETING_REVISION } from "./tracking-config";

export const CONSENT_KEY = "opny_consent_v4";
export const PREVIOUS_CONSENT_KEY = "opny_consent_v3";
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
type ConsentState = { choice: ConsentValue | null; review: boolean };
function stateFromPreferences(statistics: boolean, marketing: boolean): ConsentValue {
  return statistics
    ? marketing ? "all" : "statistics"
    : marketing ? "marketing" : "declined";
}
function readState(): ConsentState {
  if (typeof window === "undefined") return { choice: null, review: false };
  // A choice made in this tab still applies if writing browser storage failed.
  if (memoryChoice !== null) return { choice: memoryChoice, review: false };
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (raw) {
      const value = JSON.parse(raw);
      if (
        value?.version === 4 &&
        typeof value.statistics === "boolean" &&
        typeof value.marketing === "boolean"
      ) {
        const review = value.marketing && value.marketingRevision !== MARKETING_REVISION;
        return {
          choice: stateFromPreferences(value.statistics, value.marketing && !review),
          review,
        };
      }
      // A malformed current record must not resurrect an older approval.
      return { choice: null, review: false };
    }
    const previousRaw = window.localStorage.getItem(PREVIOUS_CONSENT_KEY);
    if (previousRaw) {
      const value = JSON.parse(previousRaw);
      if (
        value?.version === 3 &&
        typeof value.statistics === "boolean" &&
        typeof value.marketing === "boolean"
      )
        return {
          choice: stateFromPreferences(value.statistics, false),
          review: value.marketing,
        };
      return { choice: null, review: false };
    }
    const legacy = window.localStorage.getItem(LEGACY_CONSENT_KEY);
    if (legacy === "accepted") return { choice: "statistics", review: false };
    if (legacy === "declined") return { choice: "declined", review: false };
  } catch {
    /* Unreadable storage cannot grant a new provider permission. */
  }
  return { choice: null, review: false };
}
export function readConsent(): ConsentValue | null {
  return readState().choice;
}
export function needsMarketingReview(): boolean {
  return readState().review;
}
export function getServerMarketingReview(): boolean {
  return false;
}
export function saveConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ version: 4, ...preferences(value), marketingRevision: MARKETING_REVISION }),
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
