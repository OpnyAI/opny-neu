export type ServiceNavigationItem = {
  label: string;
  href: string;
};

export type PrimaryNavigationLink =
  | {
      label: string;
      href: string;
    }
  | {
      label: string;
      href: string;
      items: readonly ServiceNavigationItem[];
    };

export const companyEmail = "info@opny.ai";
export const companyPhone = "+49 1511 1956479";
export const companyPhoneHref = "tel:+4915111956479";

export const companyCtas = {
  generalInquiry: "/kontakt?interesse=Allgemeine%20Anfrage#anfrage",
  trustarchDemo: "/kontakt?interesse=TrustArch%20Demo#anfrage",
  nodexInquiry: "/kontakt?interesse=NodeX%20Einsatz#anfrage",
  consultingInquiry: "/kontakt?interesse=KI-Beratung%20Automotive#anfrage",
  trainingInquiry: "/kontakt?interesse=KI-Schulung%20Automotive#anfrage",
  contact: `mailto:${companyEmail}`,
} as const;

export const serviceNavigationLinks: readonly ServiceNavigationItem[] = [
  {
    label: "KI-Beratung für Automotive-Zulieferer",
    href: "/loesungen/ki-beratung-automotive",
  },
  {
    label: "KI-Schulungen für Automotive-Teams",
    href: "/loesungen/ki-schulungen-automotive",
  },
  {
    label: "KI-Governance für Automotive-Zulieferer",
    href: "/ki-governance-automotive",
  },
];

export const productNavigationLinks: readonly ServiceNavigationItem[] = [
  {
    label: "TrustArch · Compliance-Software",
    href: "/produkte/trustarch",
  },
  {
    label: "NodeX · kontrollierte KI-Nutzung",
    href: "/produkte/nodex",
  },
  { label: "Alle Opny-Produkte", href: "/produkte" },
];

export const primaryNavigationLinks: readonly PrimaryNavigationLink[] = [
  { label: "Automotive-Zulieferer", href: "/automotive" },
  {
    label: "Produkte",
    href: "/produkte",
    items: productNavigationLinks,
  },
  {
    label: "Beratung & Schulung",
    href: "/loesungen",
    items: serviceNavigationLinks,
  },
  { label: "Über Opny", href: "/ueber-opny" },
];

export const footerLinks = {
  products: productNavigationLinks,
  solutions: serviceNavigationLinks,
  company: [
    { label: "Startseite", href: "/" },
    { label: "Automotive-Zulieferer", href: "/automotive" },
    {
      label: "Leitfaden: KI im Unternehmen einführen",
      href: "/wissen/ki-im-unternehmen-einfuehren",
    },
    { label: "Über Opny", href: "/ueber-opny" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
} as const;
