"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleHashLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("/#")) return;

    event.preventDefault();
    const id = href.slice(2);

    if (pathname === "/") {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    router.push(href);

    let frame = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      frame += 1;
      if (frame < 40) requestAnimationFrame(tryScroll);
    };
    requestAnimationFrame(tryScroll);
  };

  const nav = [
    { label: "Produkt", href: "/#produkt" },
    { label: "Lösungen", href: "/#loesungen" },
    { label: "KI-Sicherheit", href: "/#ki-sicherheit" },
    { label: "Plattform", href: "/#plattform" },
    { label: "AI Gateway", href: "/ai-gateway" },
    { label: "KI Governance", href: "/ki-governance" },
    { label: "Über Opny", href: "/#unternehmen" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border-subtle-light/15 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="flex items-center gap-2 py-1"
            aria-label="Zur Startseite"
            onClick={(event) => {
              if (pathname === "/") {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img
              src="/images/brand/opny-logo.png"
              alt="Opny"
              className="block h-5 w-auto md:h-6"
              draggable={false}
            />
            <span className="sr-only">opny.ai</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                onClick={
                  n.href.startsWith("/#") ? handleHashLinkClick : undefined
                }
                className="text-sm text-text-muted-light hover:text-text-primary-light"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/#demo"
              className="text-sm text-text-muted-light hover:text-text-primary-light"
              onClick={handleHashLinkClick}
            >
              Anmelden
            </Link>
            <a
              href="mailto:info@opny.ai?subject=Demo%20Anfrage%20opny.ai"
              className="rounded-full bg-[#0b1220] px-4 py-2.5 text-sm font-semibold text-white"
            >
              Demo anfragen
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="mailto:info@opny.ai?subject=Demo%20Anfrage%20opny.ai"
              className="rounded-full bg-[#0b1220] px-3.5 py-2.5 text-sm font-semibold text-white"
            >
              Demo anfragen
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex items-center gap-2 rounded-full border border-border-subtle-light/20 bg-white px-3.5 py-2.5 text-sm font-semibold text-text-primary-light shadow-card-light"
              aria-label="Menü öffnen"
            >
              <span className="text-sm font-semibold">Menu</span>
              <span className="flex flex-col gap-1">
                <span className="h-0.5 w-4 rounded-full bg-text-primary-light/80" />
                <span className="h-0.5 w-3 rounded-full bg-text-primary-light/80" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={nav}
        cta={{
          label: "Demo anfragen",
          href: "mailto:info@opny.ai?subject=Demo%20Anfrage%20opny.ai",
        }}
        secondaryCta={{ label: "Anmelden", href: "/#demo" }}
      />
    </>
  );
}
