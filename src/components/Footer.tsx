import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import CookieSettingsButton from "@/components/consent/CookieSettingsButton";
import { footerLinks } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const renderLink = (link: { label: string; href: string }) => {
    const isExternal =
      link.href.startsWith("mailto:") ||
      link.href.startsWith("tel:") ||
      link.href.startsWith("http");

    if (isExternal) {
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
    <footer className="border-t border-black/[0.06] bg-[rgb(var(--opny-bg-alt))]">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="text-base font-semibold text-text-primary-light">
              Produkte
            </div>
            <ul className="space-y-2 text-sm text-text-muted-light">
              {footerLinks.products.map((link) => (
                <li key={link.label}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-base font-semibold text-text-primary-light">
              Beratung & Schulung
            </div>
            <ul className="space-y-2 text-sm text-text-muted-light">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-base font-semibold text-text-primary-light">
              Unternehmen
            </div>
            <ul className="space-y-2 text-sm text-text-muted-light">
              {footerLinks.company.map((link) => (
                <li key={link.label}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-base font-semibold text-text-primary-light">
              Rechtliches
            </div>
            <ul className="space-y-2 text-sm text-text-muted-light">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>{renderLink(link)}</li>
              ))}
              <li>
                <CookieSettingsButton />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-2 border-t border-border-subtle-light/15 pt-6 text-sm text-text-secondary-light sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-start gap-3">
            <span>© {year} Opny</span>
            <span>KI-Governance für Automotive-Zulieferer</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-text-muted-light">Opny folgen</span>
            <SocialLinks variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
