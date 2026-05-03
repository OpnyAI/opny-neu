"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "@/components/MobileNav";
import SocialLinks from "@/components/SocialLinks";
import { companyCtas, primaryNavigationLinks } from "@/config/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

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

          <nav ref={navRef} className="hidden items-center gap-6 md:flex">
            {primaryNavigationLinks.map((n) => {
              const hasItems = "items" in n;

              if (!hasItems) {
                const isExternal =
                  n.href.startsWith("http") ||
                  n.href.startsWith("mailto:") ||
                  n.href.startsWith("tel:");
                const isActive =
                  n.href === "/"
                    ? pathname === "/"
                    : pathname === n.href || pathname.startsWith(`${n.href}/`);
                const className = `text-sm transition ${
                  isActive
                    ? "text-text-primary-light"
                    : "text-text-muted-light hover:text-text-primary-light"
                }`;

                if (isExternal) {
                  return (
                    <a key={n.label} href={n.href} className={className}>
                      {n.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={n.label}
                    href={n.href}
                    className={className}
                  >
                    {n.label}
                  </Link>
                );
              }

              const isActive =
                pathname === n.href ||
                pathname.startsWith(`${n.href}/`) ||
                n.items.some((item) => pathname === item.href);
              const isOpen = activeDropdown === n.href;

              return (
                <div
                  key={n.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(n.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                    className={`inline-flex items-center gap-2 text-sm transition ${
                      isActive
                        ? "text-text-primary-light"
                        : "text-text-muted-light hover:text-text-primary-light"
                    }`}
                    onClick={() =>
                      setActiveDropdown((current) =>
                        current === n.href ? null : n.href,
                      )
                    }
                    onFocus={() => setActiveDropdown(n.href)}
                  >
                    <span>{n.label}</span>
                    <span
                      className={`text-[10px] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  <div
                    className={`absolute left-0 top-full pt-4 transition ${
                      isOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="min-w-[320px] rounded-3xl border border-border-subtle-light/20 bg-white p-2 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.45)]">
                      {n.items.map((item) => {
                        const itemIsActive = pathname === item.href;

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block rounded-2xl px-4 py-3 text-sm transition ${
                              itemIsActive
                                ? "bg-black/[0.04] text-text-primary-light"
                                : "text-text-muted-light hover:bg-black/[0.03] hover:text-text-primary-light"
                            }`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="relative z-[60] hidden items-center gap-3 md:flex">
            <SocialLinks
              variant="header"
              className="pointer-events-auto pr-1"
            />
            <a
              href="/kontakt"
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
              onClick={() => {
                setActiveDropdown(null);
                setMobileOpen(true);
              }}
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
        secondaryCta={{ label: "Kontakt", href: "/kontakt" }}
      />
    </>
  );
}
