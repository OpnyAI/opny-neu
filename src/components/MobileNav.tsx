"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyCtas, type PrimaryNavigationLink } from "@/config/site";

type MobileNavLink = PrimaryNavigationLink;

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  links: MobileNavLink[];
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function MobileNav({
  open,
  onClose,
  links,
  cta = {
    label: "Erstgespräch anfragen",
    href: companyCtas.generalInquiry,
  },
  secondaryCta = {
    label: "Kontakt",
    href: companyCtas.contact,
  },
}: MobileNavProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const hasSecondaryInLinks = links.some((link) => link.href === secondaryCta.href);
  const secondaryIsExternal =
    secondaryCta.href.startsWith("mailto:") ||
    secondaryCta.href.startsWith("tel:") ||
    secondaryCta.href.startsWith("http");
  const handleClose = useCallback(() => {
    setOpenGroup(null);
    onClose();
  }, [onClose]);

  const renderNavLink = (link: MobileNavLink) => {
    const hasItems = "items" in link;

    if (hasItems) {
      const isActive =
        pathname === link.href ||
        pathname.startsWith(`${link.href}/`) ||
        link.items.some((item) => pathname === item.href);
      const groupIsOpen =
        openGroup === link.href || (openGroup === null && isActive);
      const panelId = `mobile-nav-${link.label.toLowerCase()}`;

      return (
        <div className="border-b border-border-subtle-light/15">
          <button
            type="button"
            aria-expanded={groupIsOpen}
            aria-controls={panelId}
            onClick={() =>
              setOpenGroup((current) =>
                current === link.href ? null : link.href,
              )
            }
            className={`flex min-h-12 w-full items-center justify-between gap-4 px-1 py-4 text-left text-[17px] font-medium transition ${
              isActive ? "text-text-primary-light" : "text-text-muted-light"
            }`}
          >
            <span>{link.label}</span>
            <span
              aria-hidden="true"
              className={`text-lg leading-none text-text-secondary-light transition-transform ${
                groupIsOpen ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>

          <div
            id={panelId}
            className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
              groupIsOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="pb-3 pl-4">
                {link.items.map((item) => {
                  const itemIsActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleClose}
                      className={`block min-h-11 rounded-2xl px-4 py-3 text-[15px] transition ${
                        itemIsActive
                          ? "bg-black/[0.04] text-text-primary-light"
                          : "text-text-muted-light hover:bg-black/[0.03] hover:text-text-primary-light"
                      }`}
                    >
                      <span className="mr-2 text-text-secondary-light">→</span>
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }

    const isExternal =
      link.href.startsWith("http") ||
      link.href.startsWith("mailto:") ||
      link.href.startsWith("tel:");

    const baseClass =
      "block min-h-12 border-b border-border-subtle-light/15 px-1 py-4 text-[17px] font-medium text-text-primary-light transition hover:text-text-secondary-light";

    if (isExternal) {
      return (
        <a href={link.href} onClick={handleClose} className={baseClass}>
          {link.label}
        </a>
      );
    }

    return (
      <Link href={link.href} onClick={handleClose} className={baseClass}>
        {link.label}
      </Link>
    );
  };

  // 1) Body scroll lock
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [open]);

  // 2) ESC + Focus-Trap
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        return;
      }

      if (e.key !== "Tab") return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleClose]);

  // 3) Initial focus + close on lg+
  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    const mq = window.matchMedia("(min-width: 1024px)");
    if (mq.matches) {
      onClose();
      return;
    }

    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) handleClose();
    };

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [open, handleClose, onClose]);

  // 4) Drawer animation
  useEffect(() => {
    if (!open) return;

    const id = requestAnimationFrame(() => setAnimateIn(true));
    return () => {
      cancelAnimationFrame(id);
      setAnimateIn(false);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menü"
      className="fixed inset-x-0 bottom-0 top-14 z-[999] overflow-hidden lg:hidden"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl" />

      <div
        className={`absolute left-0 right-0 top-0 max-h-full w-full transform bg-white shadow-[0_24px_80px_-40px_rgba(15,23,42,0.45)] transition-all duration-300 ease-out ${
          animateIn ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex max-h-[calc(100dvh-3.5rem)] flex-col overflow-y-auto px-5 pb-6 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/brand/opny-logo.png"
                alt="Opny"
                width={140}
                height={40}
                priority
                className="h-6 w-auto"
              />
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleClose}
              aria-label="Menü schließen"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle-light/20 bg-white text-2xl leading-none text-text-secondary-light transition hover:text-text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-subtle-light/35"
            >
              ×
            </button>
          </div>

          <nav className="mt-5 flex-1" aria-label="Mobile Navigation">
            <ul>
              {links.map((l) => (
                <li key={l.href}>{renderNavLink(l)}</li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 space-y-3">
            {cta.href.startsWith("mailto:") ||
            cta.href.startsWith("tel:") ||
            cta.href.startsWith("http") ? (
              <a
                href={cta.href}
                onClick={handleClose}
                className="flex w-full items-center justify-center rounded-full bg-text-primary-light px-5 py-4 text-base font-semibold text-white shadow-card-light"
              >
                {cta.label}
              </a>
            ) : (
              <Link
                href={cta.href}
                onClick={handleClose}
                className="flex w-full items-center justify-center rounded-full bg-text-primary-light px-5 py-4 text-base font-semibold text-white shadow-card-light"
              >
                {cta.label}
              </Link>
            )}

            {!hasSecondaryInLinks ? (
              secondaryIsExternal ? (
                <a
                  href={secondaryCta.href}
                  onClick={handleClose}
                  className="flex w-full items-center justify-center rounded-full border border-border-subtle-light/25 bg-white px-5 py-4 text-base font-semibold text-text-primary-light shadow-card-light"
                >
                  {secondaryCta.label}
                </a>
              ) : (
                <Link
                  href={secondaryCta.href}
                  onClick={handleClose}
                  className="flex w-full items-center justify-center rounded-full border border-border-subtle-light/25 bg-white px-5 py-4 text-base font-semibold text-text-primary-light shadow-card-light"
                >
                  {secondaryCta.label}
                </Link>
              )
            ) : null}
          </div>

          <div className="h-[max(12px,env(safe-area-inset-bottom))]" />
        </div>
      </div>
    </div>
  );
}
