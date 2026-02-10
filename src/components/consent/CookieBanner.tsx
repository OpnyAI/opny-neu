"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { gaPageView } from "@/components/analytics/GoogleAnalytics";
import { CONSENT_KEY, type ConsentValue, readConsent } from "@/lib/consent";

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

function currentUrl(): string {
  return `${window.location.pathname}${window.location.search}`;
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentValue | null>(() => {
    if (!HAS_GA_ID) return null;
    return readConsent();
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

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

  // Close modal on ESC
  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  const persistAccepted = () => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    setConsentGranted();
    setConsent("accepted");
    gaPageView(currentUrl());
    setIsModalOpen(false);
  };

  const persistDeclined = () => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(CONSENT_KEY, "declined");
    setConsentDenied();
    setConsent("declined");
    setIsModalOpen(false);
  };

  const handleAccept = () => {
    persistAccepted();
  };

  const handleDecline = () => {
    persistDeclined();
  };

  const handleOpenSettings = () => {
    setAnalyticsEnabled(consent === "accepted");
    setIsModalOpen(true);
  };

  const handleCancelSettings = () => {
    setIsModalOpen(false);
  };

  const handleSaveSettings = () => {
    if (analyticsEnabled) persistAccepted();
    else persistDeclined();
  };

  if (!HAS_GA_ID) return null;

  // If user already decided, do not render banner/modal.
  if (consent !== null) return null;

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white p-4 shadow-[0_-8px_24px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-800">
            Wir verwenden Cookies fuer Reichweitenmessung (Google Analytics). Mehr in der{" "}
            <Link href="/datenschutz" className="underline underline-offset-2">
              Datenschutzerklaerung
            </Link>
            .
          </p>

          <div className="flex items-center gap-2">
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

      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            className="w-full max-w-md rounded-lg bg-white p-5 shadow-xl"
          >
            <h2 id="cookie-settings-title" className="text-lg font-semibold text-neutral-900">
              Cookie-Einstellungen
            </h2>

            <div className="mt-4 flex items-center justify-between gap-4 rounded-md border border-neutral-200 p-3">
              <span className="text-sm text-neutral-800">Analytics (Google Analytics)</span>

              <button
                type="button"
                role="switch"
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
