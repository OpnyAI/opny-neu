"use client";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useSyncExternalStore } from "react";
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

const LOCATION_COMMITTED = "opny-tracking-location-change";

function subscribeToLocation(listener: () => void) {
  window.addEventListener("hashchange", listener);
  window.addEventListener("popstate", listener);
  window.addEventListener(LOCATION_COMMITTED, listener);
  return () => {
    window.removeEventListener("hashchange", listener);
    window.removeEventListener("popstate", listener);
    window.removeEventListener(LOCATION_COMMITTED, listener);
  };
}
function readLocation() {
  return window.location.href;
}
function getServerLocation() {
  return "";
}

function TrackingLocationSync({ marketing }: { marketing: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const location = useSyncExternalStore(
    subscribeToLocation,
    readLocation,
    getServerLocation,
  );
  useEffect(() => {
    syncTrackingConsent();
    trackCurrentPage();
    // Next can render a new pathname before committing window.location. Notify
    // the external store after commit so a newly safe URL can load the Pixel.
    window.dispatchEvent(new Event(LOCATION_COMMITTED));
  }, [pathname, searchParams, location]);
  return marketing && META_PIXEL_ID && location && safeMetaLocation() ? (
    <Script
      id="opny-meta-pixel"
      src="https://connect.facebook.net/en_US/fbevents.js"
      strategy="afterInteractive"
      onReady={markMetaReady}
    />
  ) : null;
}

export default function GoogleAnalytics() {
  const choice = useSyncExternalStore(
    subscribeToConsent,
    readConsent,
    getServerConsent,
  );
  const selected = preferences(choice);
  useEffect(() => {
    syncTrackingConsent();
    trackCurrentPage();
  }, [choice]);
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
      <Suspense fallback={null}>
        <TrackingLocationSync marketing={selected.marketing} />
      </Suspense>
      {googleId ? (
        <Script
          id="opny-google-tag"
          src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`}
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}
