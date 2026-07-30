"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "@/components/MobileNav";
import { companyCtas, primaryNavigationLinks } from "@/config/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const activeDropdownTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  useEffect(() => {
    if (!activeDropdown) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const trigger = activeDropdownTriggerRef.current;
        setActiveDropdown(null);
        window.requestAnimationFrame(() => trigger?.focus());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDropdown]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[rgba(250,250,250,0.82)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="flex min-h-11 items-center gap-2 py-1"
            aria-label="Zur Startseite"
            aria-current={pathname === "/" ? "page" : undefined}
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
              width={1043}
              height={459}
              className="block h-5 w-auto md:h-6"
              draggable={false}
            />
            <span className="sr-only">opny.ai</span>
          </Link>

          <nav ref={navRef} className="hidden items-center gap-7 lg:flex">
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
                    aria-current={pathname === n.href ? "page" : undefined}
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
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <button
                    ref={(element) => {
                      if (isOpen) activeDropdownTriggerRef.current = element;
                    }}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    aria-controls={`nav-${n.label.toLowerCase().replaceAll(" ", "-")}`}
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
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 10 6"
                      className={`h-1.5 w-2.5 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </button>

                  <div
                    id={`nav-${n.label.toLowerCase().replaceAll(" ", "-")}`}
                    aria-hidden={!isOpen}
                    inert={!isOpen}
                    className={`absolute left-0 top-full pt-4 transition duration-150 ${
                      isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 pointer-events-none opacity-0"
                    }`}
                  >
                    <div className="min-w-[320px] rounded-3xl border border-black/[0.08] bg-white p-2 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.45)]">
                      {n.items.map((item) => {
                        const itemIsActive = pathname === item.href;

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            tabIndex={isOpen ? undefined : -1}
                            aria-current={itemIsActive ? "page" : undefined}
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

          <div className="relative z-[60] hidden items-center gap-4 lg:flex">
            <Link
              href="/kontakt"
              className="text-sm text-text-muted-light hover:text-text-primary-light"
              aria-current={pathname === "/kontakt" ? "page" : undefined}
            >
              Kontakt
            </Link>
            <Link
              href={companyCtas.generalInquiry}
              className="rounded-full bg-[#1d1d1f] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
            >
              Erstgespräch anfragen
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href={companyCtas.generalInquiry}
              className="inline-flex min-h-11 items-center rounded-full bg-[#0b1220] px-3 py-2.5 text-xs font-semibold text-white"
            >
              Erstgespräch anfragen
            </Link>
            <button
              ref={menuButtonRef}
              onClick={() => {
                setActiveDropdown(null);
                setMobileOpen(true);
              }}
              className="flex min-h-11 items-center gap-2 rounded-full border border-border-subtle-light/20 bg-white px-3.5 py-2.5 text-sm font-semibold text-text-primary-light shadow-card-light"
              aria-label="Menü öffnen"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <span className="text-sm font-semibold">Menü</span>
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
        returnFocusRef={menuButtonRef}
      />
    </>
  );
}
