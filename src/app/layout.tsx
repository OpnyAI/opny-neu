import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "opny.ai – KI Plattform für Governance, Sicherheit & AI Orchestrierung",
  description:
    "opny.ai ist eine Enterprise KI Plattform für kontrollierte KI-Nutzung: AI Gateway, KI Governance, Sicherheit, Routing, Observability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
