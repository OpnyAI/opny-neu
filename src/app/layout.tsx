import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import AnalyticsRouteTracker from "@/components/analytics/AnalyticsRouteTracker";
import CookieBanner from "@/components/consent/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.opny.ai"),
  title: {
    default: "Opny | KI-Beratung und datenschutzkonforme KI-Lösungen",
    template: "%s | Opny",
  },
  description:
    "Opny begleitet Unternehmen mit KI-Beratung, Governance und datenschutzkonformen KI-Lösungen von der Einführung bis zum kontrollierten Betrieb mit NodeX.",
  alternates: {
    canonical: "https://www.opny.ai/",
  },
  openGraph: {
    title: "Opny | KI-Beratung und datenschutzkonforme KI-Lösungen",
    description:
      "Opny begleitet Unternehmen mit KI-Beratung, Governance und datenschutzkonformen KI-Lösungen von der Einführung bis zum kontrollierten Betrieb mit NodeX.",
    url: "https://www.opny.ai/",
    siteName: "Opny",
    locale: "de_DE",
    type: "website",
  },

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
      <body className="antialiased">
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
