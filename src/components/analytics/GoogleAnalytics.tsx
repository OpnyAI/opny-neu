"use client";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";
import {
  getServerConsent,
  preferences,
  readConsent,
  subscribeToConsent,
} from "@/lib/consent";
import { GA_ID, GOOGLE_ADS_ID, META_PIXEL_ID } from "@/lib/tracking-config";
import {
  markMetaReady,
  safeMetaLocation,
  syncTrackingConsent,
  trackContactClick,
  trackCurrentPage,
} from "@/lib/tracking";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const choice = useSyncExternalStore(
    subscribeToConsent,
    readConsent,
    getServerConsent,
  );
  const selected = preferences(choice);
  useEffect(() => {
    syncTrackingConsent();
    trackCurrentPage();
  }, [choice, pathname]);
  useEffect(() => {
    document.addEventListener("click", trackContactClick);
    return () => document.removeEventListener("click", trackContactClick);
  }, []);
  const googleId =
    selected.statistics && GA_ID
      ? GA_ID
      : selected.marketing && GOOGLE_ADS_ID
        ? GOOGLE_ADS_ID
        : "";
  return (
    <>
      {googleId ? (
        <Script
          id="opny-google-tag"
          src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`}
          strategy="afterInteractive"
        />
      ) : null}
      {selected.marketing && META_PIXEL_ID && safeMetaLocation() ? (
        <Script
          id="opny-meta-pixel"
          src="https://connect.facebook.net/en_US/fbevents.js"
          strategy="afterInteractive"
          onReady={markMetaReady}
        />
      ) : null}
    </>
  );
}
