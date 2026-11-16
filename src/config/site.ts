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
  authentictrustDemo: "/kontakt?interesse=AuthenticTrust%20Demo#anfrage",
  nodexInquiry: "/kontakt?interesse=NodeX%20Einsatz#anfrage",
  consultingInquiry: "/kontakt?interesse=KI-Beratung#anfrage",
  trainingInquiry: "/kontakt?interesse=KI-Schulung#anfrage",
  contact: `mailto:${companyEmail}`,
} as const;

export const serviceNavigationLinks: readonly ServiceNavigationItem[] = [
  {
    label: "KI-Beratung für Unternehmen",
    href: "/loesungen#beratung",
  },
  {
    label: "KI-Schulungen für Teams",
    href: "/loesungen#schulungen",
  },
  {
    label: "KI-Governance für Unternehmen",
    href: "/loesungen#governance",
  },
];

export const productNavigationLinks: readonly ServiceNavigationItem[] = [
  {
    label: "AuthenticTrust · Compliance-Software",
    href: "/produkte/authentictrust",
  },
  {
    label: "NodeX · kontrollierte KI-Nutzung",
    href: "/produkte/nodex",
  },
  { label: "Alle Opny-Produkte", href: "/produkte" },
];

export const primaryNavigationLinks: readonly PrimaryNavigationLink[] = [
  { label: "Für Unternehmen", href: "/loesungen#zielgruppen" },
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
    { label: "Für Unternehmen", href: "/loesungen#zielgruppen" },
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
