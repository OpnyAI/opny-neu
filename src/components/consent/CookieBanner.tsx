"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  preferences,
  saveConsent,
  subscribeToConsent,
  getServerConsent,
  needsMarketingReview,
  getServerMarketingReview,
  type ConsentValue,
  readConsent,
} from "@/lib/consent";
import {
  GA_ID,
  GOOGLE_ADS_ID,
  META_PIXEL_ID,
  LINKEDIN_PARTNER_ID,
  HAS_MARKETING,
  HAS_TRACKING,
} from "@/lib/tracking-config";

const marketingProviders = [
  GOOGLE_ADS_ID ? "Google Ads / YouTube" : "",
  META_PIXEL_ID ? "Meta (Facebook / Instagram)" : "",
  LINKEDIN_PARTNER_ID ? "LinkedIn" : "",
].filter(Boolean).join(" und ");

export default function CookieBanner() {
  // Use the same initial snapshot on the server and during hydration. The
  // persisted browser choice is read after hydration, before future updates.
  const consent = useSyncExternalStore(
    subscribeToConsent,
    readConsent,
    getServerConsent,
  );

  const marketingReview = useSyncExternalStore(
    subscribeToConsent,
    needsMarketingReview,
    getServerMarketingReview,
  );
  const savedStatistics = preferences(consent).statistics;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogTitleRef = useRef<HTMLHeadingElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const bannerSettingsRef = useRef<HTMLButtonElement>(null);

  const closeSettings = useCallback(() => {
    setIsModalOpen(false);
    window.requestAnimationFrame(() => {
      const opener = previousFocusRef.current;
      const target = opener?.isConnected
        ? opener
        : bannerSettingsRef.current ?? document.querySelector<HTMLElement>("[data-cookie-settings-opener]");
      target?.focus({ preventScroll: true });
    });
  }, []);

  const openSettings = useCallback(() => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const choice = preferences(readConsent());
    setAnalyticsEnabled(choice.statistics);
    setMarketingEnabled(choice.marketing);
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    if (!HAS_TRACKING) return;
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    return () =>
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
  }, [openSettings]);

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    const backgroundElements = [
      document.querySelector<HTMLElement>("header"),
      document.querySelector<HTMLElement>("#site-content"),
      document.querySelector<HTMLElement>("footer"),
    ].filter((element): element is HTMLElement => Boolean(element));
    const previousStates = backgroundElements.map((element) => ({
      element,
      ariaHidden: element.getAttribute("aria-hidden"),
      inert: element.inert,
    }));

    document.body.style.overflow = "hidden";
    backgroundElements.forEach((element) => {
      element.setAttribute("aria-hidden", "true");
      element.inert = true;
    });
    dialogTitleRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSettings();
        return;
      }

      if (event.key !== "Tab") return;
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const activeElement =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      const activeIndex = activeElement
        ? Array.from(focusables).indexOf(activeElement)
        : -1;

      if (activeIndex === -1) {
        event.preventDefault();
        if (event.shiftKey) last.focus();
        else first.focus();
      } else if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousStates.forEach(({ element, ariaHidden, inert }) => {
        if (ariaHidden === null) element.removeAttribute("aria-hidden");
        else element.setAttribute("aria-hidden", ariaHidden);
        element.inert = inert;
      });
    };
  }, [closeSettings, isModalOpen]);

  const persist = (value: ConsentValue) => {
    saveConsent(value);
    closeSettings();
  };
  const handleSaveSettings = () =>
    persist(
      analyticsEnabled && Boolean(GA_ID)
        ? marketingEnabled && HAS_MARKETING
          ? "all"
          : "statistics"
        : marketingEnabled && HAS_MARKETING
          ? "marketing"
          : "declined",
    );

  if (!HAS_TRACKING) return null;

  return (
    <>
      {(consent === null || marketingReview) && !isModalOpen ? (
        <aside className="cookie-banner" aria-label="Cookies und Datenschutz">
          <div className="cookie-banner-content">
            <div className="consent-heading">
              <span className="consent-symbol" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M12 3 4 6v6c0 4 4 7 8 9 4-2 8-5 8-9V6l-8-3Z" />
                  <path d="m8 12 3 3 5-6" />
                </svg>
              </span>
              <h2>{marketingReview ? "Ihre Marketing-Auswahl aktualisieren" : "Sie entscheiden, was wir messen."}</h2>
            </div>
            <p className="consent-intro">
              {marketingReview ? (
                <>Die eingerichteten Marketing-Dienste haben sich geändert. Mit Ihrer Zustimmung erfassen wir Besuche für Anzeigenmessung und mögliche spätere Werbung über {marketingProviders}. Ihre Statistik-Auswahl bleibt unverändert. Marketing bleibt bis zu Ihrer Zustimmung aus.</>
              ) : (
                <>
                  {GA_ID ? "Statistik mit Google Analytics zeigt uns, welche Seiten und Produktinformationen genutzt werden. " : ""}
                  {HAS_MARKETING ? `Marketing mit ${marketingProviders} ermöglicht Anzeigenmessung und mögliche spätere Werbung für Websitebesucher. ` : ""}
                  Diese Dienste sind freiwillig und starten erst nach Ihrer Zustimmung.
                </>
              )}
            </p>
            <p className="consent-note">
              Ihre Auswahl können Sie jederzeit ändern. Weitere Informationen unter{" "}
              <Link href="/datenschutz">Datenschutz</Link>.
            </p>

            <div className="cookie-banner-actions flex flex-wrap items-center gap-2">
              <button
                ref={bannerSettingsRef}
                type="button"
                onClick={openSettings}
                className="button button-secondary button-small"
              >
                Einstellungen
              </button>

              <button
                type="button"
                onClick={() => persist(marketingReview && savedStatistics ? "statistics" : "declined")}
                className="button button-primary button-small consent-decision"
              >
                {marketingReview ? "Ohne Marketing fortfahren" : "Ablehnen"}
              </button>

              <button
                type="button"
                onClick={() =>
                  persist(
                    marketingReview
                      ? savedStatistics ? "all" : "marketing"
                      : HAS_MARKETING
                      ? GA_ID
                        ? "all"
                        : "marketing"
                      : "statistics",
                  )
                }
                className="button button-primary button-small consent-decision"
              >
                {marketingReview ? "Marketing erlauben" : HAS_MARKETING ? "Alle akzeptieren" : "Statistik erlauben"}
              </button>
            </div>
          </div>
        </aside>
      ) : null}

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 p-[12px] sm:p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeSettings();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            aria-describedby="cookie-settings-description"
            className="cookie-settings-panel w-full max-w-xl rounded-card p-[12px] shadow-xl sm:p-6"
          >
            <div className="flex items-start justify-between gap-3">
            <h2
              ref={dialogTitleRef}
              id="cookie-settings-title"
              tabIndex={-1}
              className="text-lg font-semibold text-neutral-900"
            >
              Cookie-Auswahl
            </h2>
            <button type="button" className="consent-close" aria-label="Cookie-Einstellungen schließen" onClick={closeSettings}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>
            </div>
            <p
              id="cookie-settings-description"
              className="mt-2 text-sm leading-relaxed text-neutral-600"
            >
              {GA_ID && HAS_MARKETING
                ? "Sie wählen Statistik und Werbung unabhängig voneinander."
                : GA_ID
                  ? "Sie entscheiden über Nutzungsstatistiken mit Google Analytics."
                  : "Sie entscheiden über Werbung und Wiederansprache."}{" "}
              Die Website ist auch ohne optionale Dienste nutzbar. Sie können Ihre
              Einwilligung jederzeit hier oder über den Link im Seitenfuß widerrufen.
            </p>
            <div className="consent-essential">
              <strong>Ihre Auswahl speichern</strong>
              <span>Immer aktiv</span>
              <p>Wir speichern Ihre Entscheidung in diesem Browser, damit wir sie beim nächsten Besuch beachten.</p>
            </div>

            {GA_ID ? (
              <div className="consent-category mt-4 flex items-center justify-between gap-4 rounded-button border border-border-subtle-light p-[12px] sm:p-3">
                <div className="consent-category-copy">
                <span
                  id="analytics-consent-label"
                  className="text-sm text-neutral-800"
                >
                  Statistik · Google Analytics
                </span>
                <p id="analytics-consent-description">Zeigt uns Seitenaufrufe, Produktinteresse und erfolgreiche Anfragen. Google erhält dabei Nutzungsdaten und technische Kennungen.</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-labelledby="analytics-consent-label"
                  aria-describedby="analytics-consent-description"
                  aria-checked={analyticsEnabled}
                  onClick={() => setAnalyticsEnabled((prev) => !prev)}
                  className="consent-switch"
                >
                  <span className="consent-switch-track" />
                </button>
              </div>
            ) : null}
            {HAS_MARKETING ? (
              <div className="consent-category mt-4 flex items-center justify-between gap-4 rounded-button border border-border-subtle-light p-[12px] sm:p-3">
                <div className="consent-category-copy">
                  <span id="marketing-consent-label" className="text-sm text-text-primary-light">
                    Marketing · {marketingProviders}
                  </span>
                  <p id="marketing-consent-description">Ermöglicht Anzeigenmessung und spätere Werbung. Die Anbieter erhalten Besuchsdaten und können diese Ihrem Nutzerkonto zuordnen.{LINKEDIN_PARTNER_ID ? " LinkedIn erfasst nur Besuche." : ""}</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-labelledby="marketing-consent-label"
                  aria-describedby="marketing-consent-description"
                  aria-checked={marketingEnabled}
                  className="consent-switch"
                  onClick={() => setMarketingEnabled(!marketingEnabled)}
                >
                  <span className="consent-switch-track" />
                </button>
              </div>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-text-muted-light">
                Marketing-Tags sind derzeit nicht eingerichtet und bleiben
                inaktiv.
              </p>
            )}
            <p className="consent-note mt-4">Daten können auch in den USA verarbeitet werden. Details zu Empfängern, Daten und Ihren Rechten finden Sie unter <Link href="/datenschutz">Datenschutz</Link>.</p>
            <div className="consent-settings-actions mt-5 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={closeSettings}
                className="button button-secondary button-small"
              >
                Abbrechen
              </button>
              <button
                type="button"
                onClick={handleSaveSettings}
                className="button button-primary button-small"
              >
                Auswahl speichern
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
