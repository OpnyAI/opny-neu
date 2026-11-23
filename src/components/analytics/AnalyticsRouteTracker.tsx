"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackCurrentPage } from "@/lib/tracking";
export default function AnalyticsRouteTracker() {
  const pathname = usePathname();
  useEffect(() => {
    trackCurrentPage();
  }, [pathname]);
  return null;
}
