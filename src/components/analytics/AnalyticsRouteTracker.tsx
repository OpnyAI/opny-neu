"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { gaPageView } from "@/components/analytics/GoogleAnalytics";
import { readConsent } from "@/lib/consent";

const HAS_GA_ID = Boolean(process.env.NEXT_PUBLIC_GA_ID);

export default function AnalyticsRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!HAS_GA_ID || typeof window === "undefined") return;

    const consent = readConsent();
    if (consent !== "accepted") return;

    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    gaPageView(url);
  }, [pathname, searchParams]);

  return null;
}
