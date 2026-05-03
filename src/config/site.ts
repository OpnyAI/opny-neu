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
  generalInquiry: `mailto:${companyEmail}?subject=Erstgespr%C3%A4ch%20Opny`,
  nodexDemo: `mailto:${companyEmail}?subject=Demo%20Anfrage%20NodeX`,
  consultingInquiry: `mailto:${companyEmail}?subject=Beratungsgespr%C3%A4ch%20KI-Beratung`,
  contact: `mailto:${companyEmail}`,
} as const;

export const serviceNavigationLinks: readonly ServiceNavigationItem[] = [
  { label: "KI-Beratung", href: "/loesungen/ki-beratung" },
  { label: "KI-Trainings", href: "/loesungen/ki-trainings" },
];

export const productNavigationLinks: readonly ServiceNavigationItem[] = [
  { label: "NodeX", href: "/produkte/nodex" },
];

export const primaryNavigationLinks: readonly PrimaryNavigationLink[] = [
  { label: "Startseite", href: "/" },
  {
    label: "Lösungen",
    href: "/loesungen",
    items: serviceNavigationLinks,
  },
  {
    label: "Produkte",
    href: "/produkte",
    items: productNavigationLinks,
  },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerLinks = {
  services: [
    { label: "Lösungen", href: "/loesungen" },
    ...serviceNavigationLinks,
    { label: "Produkte", href: "/produkte" },
    ...productNavigationLinks,
  ],
  company: [
    { label: "Startseite", href: "/" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
} as const;
