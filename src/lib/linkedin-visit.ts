import { LINKEDIN_PARTNER_ID } from "./tracking-config";
import { preferences, readConsent } from "./consent";

let sent = false;
let pixel: HTMLImageElement | null = null;

// LinkedIn's own tag includes this image endpoint. This integration intentionally
// records one domain visit per document, without the SDK's click/dwell listeners.
// An origin-only Referer prevents page queries, fragments and form values from
// being attached. Matching still depends on the visitor's browser/cookie policy.
export function syncLinkedInVisit(locationAllowed: boolean) {
  if (typeof window === "undefined") return;
  try {
    const allowed = Boolean(LINKEDIN_PARTNER_ID) &&
      preferences(readConsent()).marketing && locationAllowed;
    if (!allowed) {
      pixel?.removeAttribute("src");
      pixel = null;
      return;
    }
    if (sent) return;
    const visit = new Image(1, 1);
    visit.referrerPolicy = "origin";
    visit.alt = "";
    // No contact values, conversion ID, current URL or custom event parameters.
    visit.src = `https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`;
    pixel = visit;
    sent = true;
  } catch {
    // Measurement must never affect the website or contact form.
  }
}
