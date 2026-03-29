"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "@/components/MobileNav";
import SocialLinks from "@/components/SocialLinks";
import { companyCtas, primaryNavigationLinks } from "@/config/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
            <Image
              src="/images/brand/opny-logo.png"
              alt="Opny"
              width={120}
              height={32}
              className="block h-5 w-auto md:h-6"
              draggable={false}
            />
            <span className="sr-only">opny.ai</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {primaryNavigationLinks.map((n) => {
              const isActive =
                n.href === "/"
                  ? pathname === "/"
                  : pathname === n.href || pathname.startsWith(`${n.href}/`);

              return (
                <Link
                  key={n.label}
                  href={n.href}
                  className={`text-sm transition ${
                    isActive
                      ? "text-text-primary-light"
                      : "text-text-muted-light hover:text-text-primary-light"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="relative z-[60] hidden items-center gap-3 md:flex">
            <SocialLinks
              variant="header"
              className="pointer-events-auto pr-1"
            />
            <a
              href={companyCtas.contact}
              className="text-sm text-text-muted-light hover:text-text-primary-light"
            >
              Kontakt
            </a>
            <a
              href={companyCtas.generalInquiry}
              className="rounded-full bg-[#0b1220] px-4 py-2.5 text-sm font-semibold text-white"
            >
              Erstgespräch anfragen
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href={companyCtas.generalInquiry}
              className="rounded-full bg-[#0b1220] px-3.5 py-2.5 text-sm font-semibold text-white"
            >
              Erstgespräch
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
        links={[...primaryNavigationLinks]}
        cta={{
          label: "Erstgespräch anfragen",
          href: companyCtas.generalInquiry,
        }}
        secondaryCta={{ label: "Kontakt", href: companyCtas.contact }}
      />
    </>
  );
}
