import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import AnalyticsRouteTracker from "@/components/analytics/AnalyticsRouteTracker";
import CookieBanner from "@/components/consent/CookieBanner";
import JsonLd from "@/components/marketing/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.opny.ai"),
  title: {
    default: "Opny | KI-Governance für Automotive-Zulieferer",
    template: "%s | Opny",
  },
  description:
    "Opny unterstützt Automotive-Zulieferer beim kontrollierten KI-Einsatz: mit TrustArch, NodeX, KI-Beratung und KI-Schulungen.",
  alternates: {
    canonical: "https://www.opny.ai/",
  },
  openGraph: {
    title: "Opny | KI-Governance für Automotive-Zulieferer",
    description:
      "KI kontrolliert einführen – mit TrustArch, NodeX, Beratung und Schulung für Automotive-Zulieferer.",
    url: "https://www.opny.ai/",
    siteName: "Opny",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://www.opny.ai/media/opny/automotive-quality-inspection-v2.jpg",
        width: 1672,
        height: 941,
        alt: "Qualitätsprüfung eines bearbeiteten Aluminiumgehäuses bei einem Automotive-Zulieferer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opny | KI-Governance für Automotive-Zulieferer",
    description:
      "KI kontrolliert einführen – mit TrustArch, NodeX, Beratung und Schulung.",
    images: ["https://www.opny.ai/media/opny/automotive-quality-inspection-v2.jpg"],
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
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://www.opny.ai/#website",
                name: "Opny",
                url: "https://www.opny.ai/",
                inLanguage: "de-DE",
                publisher: { "@id": "https://www.opny.ai/#organization" },
              },
              {
                "@type": "Corporation",
                "@id": "https://www.opny.ai/#organization",
                name: "Novationtec GmbH",
                legalName: "Novationtec GmbH",
                alternateName: "Opny AI",
                url: "https://www.opny.ai",
                email: "info@opny.ai",
                telephone: "+49 1511 1956479",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "An der Schelmenhalde 35",
                  postalCode: "71665",
                  addressLocality: "Vaihingen an der Enz",
                  addressCountry: "DE",
                },
                logo: "https://www.opny.ai/images/brand/opny-logo.png",
                brand: { "@id": "https://www.opny.ai/#brand" },
                sameAs: [
                  "https://www.youtube.com/@Opny_AI",
                  "https://www.tiktok.com/@opny.ai",
                  "https://www.instagram.com/opny.ai",
                ],
                areaServed: ["DE", "AT", "CH"],
                knowsAbout: [
                  "KI-Governance",
                  "KI-Compliance",
                  "Automotive-Zulieferindustrie",
                  "Kontrollierter KI-Betrieb",
                  "KI-Implementierung im Mittelstand",
                  "KI-Beratung für Automotive",
                  "KI-Schulungen",
                  "ChatGPT-Schulungen",
                  "Google-Gemini-Schulungen",
                  "Microsoft-Copilot-Schulungen",
                ],
              },
              {
                "@type": "Brand",
                "@id": "https://www.opny.ai/#brand",
                name: "Opny",
                url: "https://www.opny.ai",
                logo: "https://www.opny.ai/images/brand/opny-logo.png",
              },
              {
                "@type": "Person",
                "@id": "https://www.opny.ai/ueber-opny#mehmet-catalsakal",
                name: "Mehmet Catalsakal",
                jobTitle: "Gründer von Opny",
                affiliation: {
                  "@id": "https://www.opny.ai/#organization",
                },
                sameAs: [
                  "https://www.linkedin.com/in/mehmet-catalsakal-43264a15b/",
                ],
                description:
                  "Gründer von Opny mit zehn Jahren Automotive-Erfahrung bei Bosch als Projektmanager und leitender Angestellter.",
              },
            ],
          }}
        />
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
