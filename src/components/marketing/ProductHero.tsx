import type { ReactNode } from "react";
import Region from "@/components/Region";
import Button from "@/components/ui/Button";
import Breadcrumbs from "./Breadcrumbs";

type ProductHeroProps = {
  name: string;
  path: string;
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  links?: Array<{ href: string; label: string }>;
  note?: string;
  children: ReactNode;
};

export default function ProductHero({
  name,
  path,
  eyebrow,
  title,
  accent,
  text,
  primary,
  secondary,
  links,
  note,
  children,
}: ProductHeroProps) {
  return (
    <Region spacing="hero">
      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/" },
          { label: "Produkte", href: "/produkte" },
          { label: name, href: path },
        ]}
      />
      <div className="marketing-hero-grid mt-8">
        <div className="marketing-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="marketing-hero-title mt-4">
            {title}
            <span className="mt-2 block text-accent">{accent}</span>
          </h1>
          <p className="marketing-hero-lead mt-5">{text}</p>
          <div className="marketing-hero-actions">
            <Button href={primary.href} theme="light">
              {primary.label}
            </Button>
            <Button href={secondary.href} theme="light" variant="secondary">
              {secondary.label}
            </Button>
          </div>
          {note ? (
            <p className="mt-4 text-sm leading-relaxed text-text-muted-light">
              {note}
            </p>
          ) : null}
        </div>
        <div className="marketing-hero-media">{children}</div>
      </div>
      {links?.length ? (
        <nav
          className="product-section-nav"
          aria-label={`${name}: Seitenabschnitte`}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </Region>
  );
}
