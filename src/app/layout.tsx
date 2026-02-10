import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import AnalyticsRouteTracker from "@/components/analytics/AnalyticsRouteTracker";
import CookieBanner from "@/components/consent/CookieBanner";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "opny.ai – KI Plattform für Governance, Sicherheit & AI Orchestrierung",
  description:
    "opny.ai ist eine Enterprise KI Plattform für kontrollierte KI-Nutzung: AI Gateway, KI Governance, Sicherheit, Routing, Observability.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon-v2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${geistSans.className} antialiased`}>
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <AnalyticsRouteTracker />
        </Suspense>
        <CookieBanner />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
