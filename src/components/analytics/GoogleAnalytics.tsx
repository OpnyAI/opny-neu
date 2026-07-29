"use client";

import Script from "next/script";
import { useCallback, useEffect, useState } from "react";
import {
  CONSENT_CHANGE_EVENT,
  readConsent,
} from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type GtagCommand =
  | ["js", Date]
  | ["config", string, Record<string, unknown>?]
  | ["consent", "default" | "update", Record<string, unknown>]
  | ["event", string, Record<string, unknown>?];

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: GtagCommand) => void;
  }
}

function canTrack(): boolean {
  return (
    typeof window !== "undefined" &&
    Boolean(GA_ID) &&
    readConsent() === "accepted" &&
    typeof window.gtag === "function"
  );
}

export function gaEvent(action: string, params?: Record<string, unknown>): void {
  if (!canTrack()) return;
  window.gtag!("event", action, params);
}

export function gaPageView(url: string): void {
  if (!canTrack() || !GA_ID) return;
  window.gtag!("config", GA_ID, {
    page_location: window.location.href,
    page_path: url,
    page_title: document.title,
  });
}

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;

    const syncConsent = () => {
      setEnabled(readConsent() === "accepted");
    };

    syncConsent();
    window.addEventListener(CONSENT_CHANGE_EVENT, syncConsent);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, syncConsent);
  }, []);

  const initializeAnalytics = useCallback(() => {
    if (!GA_ID || readConsent() !== "accepted") return;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      ((...args: GtagCommand) => {
        window.dataLayer.push(args);
      });
    window.gtag("js", new Date());
    window.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("config", GA_ID, {
      send_page_view: true,
      anonymize_ip: true,
    });
  }, []);

  if (!GA_ID || !enabled) return null;

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      strategy="afterInteractive"
      onReady={initializeAnalytics}
    />
  );
}
