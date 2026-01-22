"use client";

import { useState } from "react";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = [
    { label: "Produkt", href: "#product" },
    { label: "Lösungen", href: "#use-cases" },
    { label: "KI-Sicherheit", href: "#security" },
    { label: "Ressourcen", href: "#resources" },
    { label: "Unternehmen", href: "#company" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border-subtle-light/15 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="text-sm font-semibold text-text-primary-light">
            opny.ai
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-sm text-text-muted-light hover:text-text-primary-light"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/login"
              className="text-sm text-text-muted-light hover:text-text-primary-light"
            >
              Anmelden
            </a>
            <a
              href="#demo"
              className="rounded-full bg-[#0b1220] px-4 py-2 text-sm font-semibold text-white"
            >
              Demo anfragen
            </a>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="flex items-center gap-2 rounded-full border border-border-subtle-light/20 bg-white px-3 py-2 text-xs font-semibold text-text-primary-light shadow-card-light"
              aria-label="Menü öffnen"
            >
              <span className="text-xs font-semibold">Menu</span>
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
        cta={{ label: "Demo anfragen", href: "#demo" }}
        secondaryCta={{ label: "Anmelden", href: "/login" }}
      />
    </>
  );
}
