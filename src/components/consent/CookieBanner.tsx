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
  type ConsentValue,
  readConsent,
} from "@/lib/consent";
import {
  GA_ID,
  GOOGLE_ADS_ID,
  META_PIXEL_ID,
  HAS_MARKETING,
  HAS_TRACKING,
} from "@/lib/tracking-config";

export default function CookieBanner() {
  // Use the same initial snapshot on the server and during hydration. The
  // persisted browser choice is read after hydration, before future updates.
  const consent = useSyncExternalStore(
    subscribeToConsent,
    readConsent,
    getServerConsent,
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogTitleRef = useRef<HTMLHeadingElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const closeSettings = useCallback(() => {
    setIsModalOpen(false);
    window.requestAnimationFrame(() => previousFocusRef.current?.focus());
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
      {consent === null && !isModalOpen ? (
        <div className="cookie-banner fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white p-4 shadow-[0_-8px_24px_rgba(0,0,0,0.08)]">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-neutral-800">
              {HAS_MARKETING
                ? "Mit Ihrer Einwilligung messen wir die Nutzung unserer Website und ermöglichen Werbung und Wiederansprache."
                : "Mit Ihrer Einwilligung messen wir mit Google Analytics Seitenaufrufe, Produktinteresse und erfolgreiche Anfragen."}{" "}
              Mehr in der{" "}
              <Link
                href="/datenschutz"
                className="underline underline-offset-2"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>

            <div className="cookie-banner-actions flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={openSettings}
                className="button button-secondary button-small"
              >
                Einstellungen
              </button>

              <button
                type="button"
                onClick={() => persist("declined")}
                className="button button-secondary button-small"
              >
                Ablehnen
              </button>

              {GA_ID && HAS_MARKETING ? (
                <button
                  type="button"
                  onClick={() => persist("statistics")}
                  className="button button-secondary button-small"
                >
                  Nur Statistik
                </button>
              ) : null}
              <button
                type="button"
                onClick={() =>
                  persist(
                    HAS_MARKETING
                      ? GA_ID
                        ? "all"
                        : "marketing"
                      : "statistics",
                  )
                }
                className="button button-primary button-small"
              >
                {HAS_MARKETING ? "Alle akzeptieren" : "Statistik erlauben"}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 p-4"
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
            className="cookie-settings-panel w-full max-w-lg rounded-card bg-white p-5 shadow-xl"
          >
            <h2
              ref={dialogTitleRef}
              id="cookie-settings-title"
              tabIndex={-1}
              className="text-lg font-semibold text-neutral-900"
            >
              Cookie-Einstellungen
            </h2>
            <p
              id="cookie-settings-description"
              className="mt-2 text-sm leading-relaxed text-neutral-600"
            >
              {GA_ID && HAS_MARKETING
                ? "Sie wählen Statistik und Werbung unabhängig voneinander."
                : GA_ID
                  ? "Sie entscheiden über Nutzungsstatistiken mit Google Analytics."
                  : "Sie entscheiden über Werbung und Wiederansprache."}{" "}
              Ihre Auswahl können Sie jederzeit ändern. Notwendig ist nur das
              Speichern Ihrer Auswahl.
            </p>

            {GA_ID ? (
              <div className="consent-category mt-4 flex items-center justify-between gap-4 rounded-button border border-border-subtle-light p-3">
                <span
                  id="analytics-consent-label"
                  className="text-sm text-neutral-800"
                >
                  Statistik · Google Analytics
                </span>

                <button
                  type="button"
                  role="switch"
                  aria-labelledby="analytics-consent-label"
                  aria-checked={analyticsEnabled}
                  onClick={() => setAnalyticsEnabled((prev) => !prev)}
                  className="consent-switch"
                >
                  <span className="consent-switch-track" />
                </button>
              </div>
            ) : null}
            {HAS_MARKETING ? (
              <div className="consent-category mt-4 flex items-center justify-between gap-4 rounded-button border border-border-subtle-light p-3">
                <span
                  id="marketing-consent-label"
                  className="text-sm text-text-primary-light"
                >
                  Marketing ·{" "}
                  {[
                    GOOGLE_ADS_ID ? "Google Ads / YouTube" : "",
                    META_PIXEL_ID ? "Meta (Facebook / Instagram)" : "",
                  ]
                    .filter(Boolean)
                    .join(" und ")}
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-labelledby="marketing-consent-label"
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
            <div className="mt-5 flex flex-wrap justify-end gap-2">
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
                Speichern
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
