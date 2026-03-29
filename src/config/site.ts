export const companyEmail = "info@opny.ai";

export const companyCtas = {
  generalInquiry: `mailto:${companyEmail}?subject=Erstgespr%C3%A4ch%20Opny`,
  nodexDemo: `mailto:${companyEmail}?subject=Demo%20Anfrage%20NodeX`,
  consultingInquiry: `mailto:${companyEmail}?subject=Beratungsgespr%C3%A4ch%20KI-Beratung`,
  contact: `mailto:${companyEmail}`,
} as const;

export const primaryNavigationLinks = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
] as const;

export const footerLinks = {
  services: [
    { label: "NodeX", href: "/leistungen/nodex" },
    { label: "KI-Beratung für Unternehmen", href: "/leistungen/ki-beratung" },
  ],
  company: [
    { label: "Startseite", href: "/" },
    { label: "Kontakt", href: companyCtas.contact },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
} as const;
