"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  CONSENT_CHANGE_EVENT,
  CONSENT_KEY,
  OPEN_COOKIE_SETTINGS_EVENT,
  type ConsentValue,
  readConsent,
} from "@/lib/consent";

const HAS_GA_ID = Boolean(process.env.NEXT_PUBLIC_GA_ID);

function setConsentGranted(): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function setConsentDenied(): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentValue | null>(() => {
    if (!HAS_GA_ID) return null;
    return readConsent();
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogTitleRef = useRef<HTMLHeadingElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Ensure "denied" on first load when no stored consent (but do not store anything).
  useEffect(() => {
    if (!HAS_GA_ID || typeof window === "undefined") return;

    const stored = readConsent();
    if (stored === null) {
      setConsentDenied();
      return;
    }

    if (stored === "accepted") setConsentGranted();
    if (stored === "declined") setConsentDenied();
  }, []);

  const closeSettings = useCallback(() => {
    setIsModalOpen(false);
    window.requestAnimationFrame(() => previousFocusRef.current?.focus());
  }, []);

  const openSettings = useCallback(() => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setAnalyticsEnabled(readConsent() === "accepted");
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    if (!HAS_GA_ID) return;
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

  const persistAccepted = () => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    setConsentGranted();
    setConsent("accepted");
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
    closeSettings();
  };

  const persistDeclined = () => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(CONSENT_KEY, "declined");
    setConsentDenied();
    setConsent("declined");
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
    closeSettings();
  };

  const handleAccept = () => {
    persistAccepted();
  };

  const handleDecline = () => {
    persistDeclined();
  };

  const handleOpenSettings = () => {
    openSettings();
  };

  const handleCancelSettings = () => {
    closeSettings();
  };

  const handleSaveSettings = () => {
    if (analyticsEnabled) persistAccepted();
    else persistDeclined();
  };

  if (!HAS_GA_ID) return null;

  return (
    <>
      {consent === null && !isModalOpen ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white p-4 shadow-[0_-8px_24px_rgba(0,0,0,0.08)]">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-neutral-800">
              Mit Ihrer Einwilligung laden wir Google Analytics zur
              Reichweitenmessung. Mehr in der{" "}
              <Link href="/datenschutz" className="underline underline-offset-2">
                Datenschutzerklärung
              </Link>
              .
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleOpenSettings}
                className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Einstellungen
              </button>

              <button
                type="button"
                onClick={handleDecline}
                className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Ablehnen
              </button>

              <button
                type="button"
                onClick={handleAccept}
                className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Akzeptieren
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
            className="w-full max-w-md rounded-lg bg-white p-5 shadow-xl"
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
              Sie entscheiden, ob Google Analytics für die Reichweitenmessung
              geladen werden darf. Ihre Auswahl können Sie jederzeit ändern.
            </p>

            <div className="mt-4 flex items-center justify-between gap-4 rounded-md border border-neutral-200 p-3">
              <span
                id="analytics-consent-label"
                className="text-sm text-neutral-800"
              >
                Analytics (Google Analytics)
              </span>

              <button
                type="button"
                role="switch"
                aria-labelledby="analytics-consent-label"
                aria-checked={analyticsEnabled}
                onClick={() => setAnalyticsEnabled((prev) => !prev)}
                className={`inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ${
                  analyticsEnabled ? "bg-black" : "bg-neutral-300"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    analyticsEnabled ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={handleCancelSettings}
                className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Abbrechen
              </button>
              <button
                type="button"
                onClick={handleSaveSettings}
                className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
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
