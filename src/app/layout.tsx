import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import AnalyticsRouteTracker from "@/components/analytics/AnalyticsRouteTracker";
import CookieBanner from "@/components/consent/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`${geistSans.className} antialiased`}>
        <GoogleAnalytics />
        <AnalyticsRouteTracker />
        <CookieBanner />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
