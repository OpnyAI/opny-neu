"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MobileNavLink = {
  label: string;
  href: string;
};

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
  cta = { label: "Demo anfragen", href: "#demo" },
  secondaryCta = { label: "Anmelden", href: "/login" },
}: MobileNavProps) {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

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
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
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
  }, [open, onClose]);

  // 3) Initial focus + close on lg+
  useEffect(() => {
    if (!open) return;

    const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    focusables?.[0]?.focus();

    const mq = window.matchMedia("(min-width: 1024px)");
    if (mq.matches) {
      onClose();
      return;
    }

    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) onClose();
    };

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [open, onClose]);

  // 4) Drawer animation
  useEffect(() => {
    if (!open) return;

    const id = requestAnimationFrame(() => setAnimateIn(true));
    return () => {
      cancelAnimationFrame(id);
      setAnimateIn(false);
    };
  }, [open]);

  const toggleItem = (href: string) => {
    setOpenItem((prev) => (prev === href ? null : href));
  };

  if (!open) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menü"
      className="fixed inset-0 z-[999] lg:hidden"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      <div
        className={`absolute right-0 top-0 h-full w-full max-w-[420px] transform bg-white shadow-[0_24px_80px_-40px_rgba(15,23,42,0.45)] transition-transform duration-300 ease-out ${
          animateIn ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-full flex-col px-5 pb-6 pt-[max(16px,env(safe-area-inset-top))]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-text-primary-light">
                opny.ai
              </span>
              <span className="text-xs font-semibold tracking-[0.28em] text-text-secondary-light">
                MENÜ
              </span>
            </div>
            <button
              onClick={onClose}
              className="rounded-full border border-border-subtle-light/25 bg-white px-4 py-2 text-sm font-medium text-text-primary-light shadow-card-light"
            >
              Close
            </button>
          </div>

          <nav className="mt-6 flex-1 overflow-y-auto">
            <ul className="space-y-2">
              {links.map((l) => {
                const active =
                  pathname === l.href ||
                  (l.href !== "/" && pathname?.startsWith(l.href));
                const expanded = openItem === l.href;
                const panelId = `mobile-panel-${l.href.replace(/[^a-z0-9]/gi, "-")}`;

                return (
                  <li key={l.href} className="rounded-2xl border border-border-subtle-light/20 bg-elevated-light/60">
                    <button
                      type="button"
                      onClick={() => toggleItem(l.href)}
                      aria-expanded={expanded}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between px-4 py-4 text-left text-base font-medium text-text-primary-light"
                    >
                      <span>{l.label}</span>
                      <span className="text-text-secondary-light">
                        {expanded ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      id={panelId}
                      className={
                        expanded
                          ? "px-4 pb-4"
                          : "px-4 pb-4 hidden"
                      }
                    >
                      <Link
                        href={l.href}
                        onClick={onClose}
                        className={[
                          "flex items-center justify-between rounded-xl border border-border-subtle-light/20 bg-white/80 px-4 py-3 text-sm",
                          active ? "ring-1 ring-border-subtle-light/40" : "",
                        ].join(" ")}
                      >
                        <span className="font-medium text-text-primary-light">
                          {l.label}
                        </span>
                        <span className="text-text-secondary-light">→</span>
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-6 space-y-3">
            <Link
              href={cta.href}
              onClick={onClose}
              className="flex w-full items-center justify-center rounded-full bg-text-primary-light px-5 py-4 text-base font-semibold text-white shadow-card-light"
            >
              {cta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              onClick={onClose}
              className="flex w-full items-center justify-center rounded-full border border-border-subtle-light/25 bg-white px-5 py-4 text-base font-semibold text-text-primary-light shadow-card-light"
            >
              {secondaryCta.label}
            </Link>
          </div>

          <div className="h-[max(12px,env(safe-area-inset-bottom))]" />
        </div>
      </div>
    </div>
  );
}
