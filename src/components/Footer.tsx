import Link from "next/link";

const productLinks = [
  { label: "AI Workspace", href: "/#produkt" },
  { label: "AI Gateway", href: "/ai-gateway" },
  { label: "KI-Sicherheit", href: "/#ki-sicherheit" },
  { label: "KI Governance", href: "/ki-governance" },
];

const resourceLinks = [
  { label: "Plattform", href: "/#plattform" },
  { label: "Lösungen", href: "/#loesungen" },
  { label: "Demo", href: "mailto:info@opny.ai?subject=Demo%20Anfrage%20opny.ai" },
];

const companyLinks = [
  { label: "Über Opny", href: "/#unternehmen" },
  { label: "Kontakt", href: "mailto:info@opny.ai" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const renderLink = (link: { label: string; href: string }) => {
    const isExternal =
      link.href.startsWith("mailto:") ||
      link.href.startsWith("tel:") ||
      link.href.startsWith("http");
    const isHashLink = link.href.startsWith("/#");

    if (isExternal || isHashLink) {
      return (
        <a className="hover:text-text-primary-light" href={link.href}>
          {link.label}
        </a>
      );
    }

    return (
      <Link className="hover:text-text-primary-light" href={link.href}>
        {link.label}
      </Link>
    );
  };

  return (
    <footer className="border-t border-border-subtle-light/15 bg-white/80">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="text-base font-semibold text-text-primary-light">
              Produkt
            </div>
            <ul className="space-y-2 text-sm text-text-muted-light">
              {productLinks.map((link) => (
                <li key={link.label}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-base font-semibold text-text-primary-light">
              Ressourcen
            </div>
            <ul className="space-y-2 text-sm text-text-muted-light">
              {resourceLinks.map((link) => (
                <li key={link.label}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-base font-semibold text-text-primary-light">
              Unternehmen
            </div>
            <ul className="space-y-2 text-sm text-text-muted-light">
              {companyLinks.map((link) => (
                <li key={link.label}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-base font-semibold text-text-primary-light">
              Rechtliches
            </div>
            <ul className="space-y-2 text-sm text-text-muted-light">
              {legalLinks.map((link) => (
                <li key={link.label}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-2 border-t border-border-subtle-light/15 pt-6 text-sm text-text-secondary-light sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Opny AI</span>
          <span>Kontrollierte KI-Systeme für Unternehmen</span>
        </div>
      </div>
    </footer>
  );
}
