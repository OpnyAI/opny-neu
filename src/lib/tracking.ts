import {
  GA_ID,
  GOOGLE_ADS_ID,
  META_PIXEL_ID,
  HAS_MARKETING,
} from "./tracking-config";
import { preferences, readConsent } from "./consent";
import { syncLinkedInVisit } from "./linkedin-visit";

type EventName =
  | "page_view"
  | "view_product"
  | "cta_contact_click"
  | "form_start"
  | "form_validation_error"
  | "form_submit_error"
  | "generate_lead";
type Params = {
  form_id?: "opny_contact";
  product?: "authentictrust" | "nodex" | "services" | "general";
  placement?: "header" | "hero" | "closing" | "footer" | "content";
  field_name?: "name" | "company" | "email" | "companySize" | "privacy";
  error_type?: "invalid" | "too_fast" | "request_failed";
  lead_source?: "website";
};
type GoogleCommand =
  | ["consent", "default" | "update", Record<string, unknown>]
  | ["js", Date]
  | ["config", string, Record<string, unknown>]
  | ["event", string, Record<string, unknown>]
  | ["set", string, unknown];
type MetaFn = {
  (...args: unknown[]): void;
  queue?: unknown[];
  callMethod?: (...args: unknown[]) => void;
  push?: MetaFn;
  loaded?: boolean;
  version?: string;
  disablePushState?: boolean;
};
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: GoogleCommand) => void;
    fbq?: MetaFn;
    _fbq?: MetaFn;
  }
}
const titles: Record<string, string> = {
  "/": "Opny | Compliance-Software",
  "/produkte/authentictrust": "AuthenticTrust | Opny",
  "/produkte/nodex": "NodeX | Opny",
  "/tisax-software": "TISAX-Software | Opny",
  "/produkte": "Produkte | Opny",
  "/loesungen": "Beratung und Schulung | Opny",
  "/kontakt": "Kontakt | Opny",
  "/ueber-opny": "Über Opny",
  "/automotive": "Automotive | Opny",
  "/ki-governance-automotive": "KI-Governance | Opny",
  "/loesungen/ki-beratung-automotive": "KI-Beratung | Opny",
  "/loesungen/ki-schulungen-automotive": "KI-Schulungen | Opny",
  "/wissen/ki-im-unternehmen-einfuehren": "KI im Unternehmen einführen | Opny",
  "/impressum": "Impressum | Opny",
  "/datenschutz": "Datenschutz | Opny",
};
let bootstrapped = false;
let gaConfigured = false;
let adsConfigured = false;
let metaConfigured = false;
let metaReady = false;
let lastAnalyticsPath = "";
let lastMarketingPath = "";
function safePath() {
  return titles[window.location.pathname] ? window.location.pathname : "/404";
}
function context() {
  let referrer = "";
  try {
    if (document.referrer) referrer = new URL(document.referrer).origin;
  } catch {
    /* No referrer. */
  }
  const path = safePath();
  return {
    page_location: `${window.location.origin}${path}`,
    page_path: path,
    page_title: titles[path] || "Seite nicht gefunden | Opny",
    page_referrer: referrer,
  };
}
export function productForInterest(value: string): Params["product"] {
  if (value === "AuthenticTrust Demo") return "authentictrust";
  if (value === "NodeX Einsatz") return "nodex";
  return ["KI-Beratung", "KI-Schulung", "KI-Governance-Check"].includes(value)
    ? "services"
    : "general";
}
function bootstrapGoogle() {
  if (bootstrapped) return;
  window.dataLayer = window.dataLayer || [];
  // Google's command queue consumes Arguments entries, not arbitrary object events.
  window.gtag =
    window.gtag ||
    function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("set", "ads_data_redaction", true);
  window.gtag("js", new Date());
  bootstrapped = true;
}
function deleteMeasurementCookies(statistics: boolean, marketing: boolean) {
  const domains = [
    "",
    window.location.hostname,
    `.${window.location.hostname}`,
    ".opny.ai",
  ];
  for (const part of document.cookie.split(";")) {
    const name = part.trim().split("=")[0];
    const analyticsCookie = /^(_ga(?:_|$)|_gid$|_gat)/.test(name);
    const marketingCookie = /^(_fbp$|_fbc$|_gcl_)/.test(name);
    if (!((!statistics && analyticsCookie) || (!marketing && marketingCookie)))
      continue;
    for (const domain of domains)
      document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ""} SameSite=Lax`;
  }
}
export function syncTrackingConsent() {
  if (typeof window === "undefined") return;
  const choice = preferences(readConsent());
  const marketing = choice.marketing && HAS_MARKETING;
  const googleMarketing = choice.marketing && Boolean(GOOGLE_ADS_ID);
  if (!choice.statistics) {
    lastAnalyticsPath = "";
    gaConfigured = false;
  }
  if (!marketing) lastMarketingPath = "";
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] =
    !choice.statistics;
  if (GA_ID || GOOGLE_ADS_ID) {
    bootstrapGoogle();
    window.gtag!("consent", "update", {
      analytics_storage: choice.statistics ? "granted" : "denied",
      ad_storage: googleMarketing ? "granted" : "denied",
      ad_user_data: googleMarketing ? "granted" : "denied",
      ad_personalization: googleMarketing ? "granted" : "denied",
    });
    if (choice.statistics && GA_ID) {
      window.gtag!("config", GA_ID, {
        ...context(),
        send_page_view: false,
        allow_google_signals: googleMarketing,
        allow_ad_personalization_signals: googleMarketing,
      });
      gaConfigured = true;
    }
    if (googleMarketing && GOOGLE_ADS_ID && !adsConfigured) {
      window.gtag!("config", GOOGLE_ADS_ID, {
        ...context(),
        send_page_view: false,
      });
      adsConfigured = true;
    }
  }
  deleteMeasurementCookies(choice.statistics, marketing);
  syncMetaConsent();
  syncLinkedInVisit(Boolean(titles[location.pathname]));
}
export function safeMetaLocation(): boolean {
  if (typeof window === "undefined" || !titles[location.pathname]) return false;
  const url = new URL(location.href);
  const keys = [...url.searchParams.keys()];
  const interests = [
    "AuthenticTrust Demo",
    "NodeX Einsatz",
    "KI-Beratung",
    "KI-Schulung",
    "KI-Governance-Check",
    "Allgemeine Anfrage",
  ];
  if (
    keys.length &&
    !(
      keys.length === 1 &&
      keys[0] === "interesse" &&
      interests.includes(url.searchParams.get("interesse") || "")
    )
  )
    return false;
  if (
    url.hash &&
    ![
      "#anfrage",
      "#fragen",
      "#standards",
      "#arbeitsweise",
      "#dokumente",
      "#bewertungen",
      "#massnahmen",
      "#produktvideo",
      "#kontrollmodell",
    ].includes(url.hash)
  )
    return false;
  if (document.referrer) {
    try {
      const ref = new URL(document.referrer);
      if (
        ref.search ||
        ref.hash ||
        (ref.pathname !== "/" &&
          !(ref.origin === location.origin && titles[ref.pathname]))
      )
        return false;
    } catch {
      return false;
    }
  }
  return true;
}
// A loaded Pixel survives client navigation. Revoke it on an unsafe URL even
// when the visitor's saved marketing preference remains enabled.
function syncMetaConsent(): boolean {
  try {
    const allowed =
      Boolean(META_PIXEL_ID) &&
      preferences(readConsent()).marketing &&
      safeMetaLocation();
    if (!allowed) {
      lastMarketingPath = "";
      if (window.fbq?.queue)
        window.fbq.queue = window.fbq.queue.filter((entry) => {
          const command = (entry as unknown[])[0];
          return ![
            "track",
            "trackCustom",
            "trackSingle",
            "trackSingleCustom",
            "consent",
          ].includes(command as string);
        });
      window.fbq?.("consent", "revoke");
      return false;
    }
    initializeMeta();
    return metaReady && Boolean(window.fbq);
  } catch {
    return false;
  }
}
export function markMetaReady() {
  metaReady = true;
  trackCurrentPage();
}
export function initializeMeta() {
  if (
    !META_PIXEL_ID ||
    !preferences(readConsent()).marketing ||
    !safeMetaLocation()
  )
    return;
  if (!window.fbq) {
    const fn: MetaFn = function (...args: unknown[]) {
      if (fn.callMethod) fn.callMethod(...args);
      else fn.queue!.push(args);
    };
    fn.queue = [];
    fn.push = fn;
    fn.loaded = true;
    fn.version = "2.0";
    // Original Meta SDK 2.9.441 checks this before installing automatic SPA
    // hooks. Keep page views manual so URL changes cannot bypass our safety gate.
    fn.disablePushState = true;
    window.fbq = fn;
    window._fbq = fn;
  }
  // No init or event is queued while the remote library is still loading.
  if (!metaReady) return;
  window.fbq("consent", "grant");
  if (metaConfigured) return;
  window.fbq("set", "autoConfig", false, META_PIXEL_ID);
  window.fbq("init", META_PIXEL_ID);
  metaConfigured = true;
}

export function trackEvent(name: EventName, params: Params = {}) {
  try {
    if (
      typeof window === "undefined" ||
      !GA_ID ||
      !preferences(readConsent()).statistics
    )
      return false;
    if (!gaConfigured) syncTrackingConsent();
    if (!window.gtag) return false;
    window.gtag("event", name, { ...context(), ...params, send_to: GA_ID });
    return true;
  } catch {
    return false;
  }
}
export function trackCurrentPage() {
  if (typeof window === "undefined") return;
  const metaAllowed = syncMetaConsent();
  syncLinkedInVisit(Boolean(titles[location.pathname]));
  if (!titles[location.pathname]) return;
  const path = safePath();
  const choice = preferences(readConsent());
  if (
    choice.statistics &&
    path !== lastAnalyticsPath &&
    trackEvent("page_view")
  ) {
    lastAnalyticsPath = path;
    if (
      [
        "/produkte/authentictrust",
        "/tisax-software",
        "/produkte/nodex",
      ].includes(path)
    )
      trackEvent("view_product", {
        product: path.endsWith("nodex") ? "nodex" : "authentictrust",
      });
  }
  if (metaAllowed && path !== lastMarketingPath) {
    window.fbq?.("trackSingle", META_PIXEL_ID, "PageView");
    lastMarketingPath = path;
  }
}
export function trackLead(interest: string) {
  trackEvent("generate_lead", {
    form_id: "opny_contact",
    product: productForInterest(interest),
    lead_source: "website",
  });
  try {
    if (syncMetaConsent())
      window.fbq?.("trackSingle", META_PIXEL_ID, "Lead", {
        content_category: productForInterest(interest),
      });
  } catch {
    /* Best-effort telemetry never affects delivery. */
  }
}
export function trackContactClick(event: MouseEvent) {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest<HTMLAnchorElement>("a[href]");
  if (!link) return;
  let url: URL;
  try {
    url = new URL(link.href);
  } catch {
    return;
  }
  if (url.origin !== location.origin || url.pathname !== "/kontakt") return;
  const placement = link.closest("header")
    ? "header"
    : link.closest("footer")
      ? "footer"
      : link.closest(".closing-cta")
        ? "closing"
        : link.closest(".at-hero, .marketing-hero-grid")
          ? "hero"
          : "content";
  const interest = url.searchParams.get("interesse") || "";
  trackEvent("cta_contact_click", {
    product: productForInterest(interest),
    placement,
  });
}
