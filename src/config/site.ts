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

export const companyCtas = {
  generalInquiry: `mailto:${companyEmail}?subject=Erstgespr%C3%A4ch%20Opny`,
  nodexDemo: `mailto:${companyEmail}?subject=Demo%20Anfrage%20NodeX`,
  consultingInquiry: `mailto:${companyEmail}?subject=Beratungsgespr%C3%A4ch%20KI-Beratung`,
  contact: `mailto:${companyEmail}`,
} as const;

export const serviceNavigationLinks: readonly ServiceNavigationItem[] = [
  { label: "NodeX", href: "/leistungen/nodex" },
  { label: "KI-Beratung für Unternehmen", href: "/leistungen/ki-beratung" },
];

export const primaryNavigationLinks: readonly PrimaryNavigationLink[] = [
  { label: "Startseite", href: "/" },
  {
    label: "Leistungen",
    href: "/leistungen",
    items: serviceNavigationLinks,
  },
];

export const footerLinks = {
  services: serviceNavigationLinks,
  company: [
    { label: "Startseite", href: "/" },
    { label: "Kontakt", href: companyCtas.contact },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
} as const;
