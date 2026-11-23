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
      <div className="mx-auto mt-8 max-w-5xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-lg mt-5">
          {title}
          <span className="mt-2 block text-accent">{accent}</span>
        </h1>
        <p className="lead-copy mx-auto mt-6 max-w-3xl">{text}</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={primary.href} theme="light">
            {primary.label}
          </Button>
          <Button href={secondary.href} theme="light" variant="secondary">
            {secondary.label}
          </Button>
        </div>
        {note ? (
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-text-muted-light">
            {note}
          </p>
        ) : null}
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
      </div>
      <div className="mx-auto mt-10 max-w-6xl">{children}</div>
    </Region>
  );
}
