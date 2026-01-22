"use client";

import { useEffect, useRef } from "react";
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

  // 1) Body scroll lock (entscheidend, damit nichts "mitläuft")
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    // optional: Scrollbar-Jump verhindern (Desktop)
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

  // Wenn nicht offen: nicht rendern (verhindert Layout/Click-Hölle)
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
      <div className="absolute inset-0 bg-white/95 backdrop-blur-[6px]" />

      <div
        className="relative z-[1000] h-[100dvh] min-h-screen w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto flex h-full max-w-[520px] flex-col px-5 pb-[max(16px,env(safe-area-inset-bottom))] pt-[max(16px,env(safe-area-inset-top))]">
          {/* Header */}
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
              className="rounded-full border border-border-subtle-light/25 bg-elevated-light/80 px-4 py-2 text-sm font-medium text-text-primary-light shadow-card-light"
            >
              Close
            </button>
          </div>

          {/* Links */}
          <nav className="mt-6 flex-1 overflow-y-auto">
            <ul className="divide-y divide-border-subtle-light/20 rounded-2xl border border-border-subtle-light/20 bg-elevated-light/60">
              {links.map((l) => {
                const active =
                  pathname === l.href ||
                  (l.href !== "/" && pathname?.startsWith(l.href));

                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={onClose}
                      className={[
                        "flex min-h-[48px] items-center justify-between px-5 py-4 text-base",
                        "text-text-primary-light",
                        active ? "bg-white/70" : "",
                      ].join(" ")}
                    >
                      <span className="font-medium">{l.label}</span>
                      <span className="text-text-secondary-light">+</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 rounded-2xl border border-border-subtle-light/20 bg-elevated-light/60 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-text-secondary-light">
                Navigation
              </div>
              <p className="mt-2 text-sm leading-relaxed text-text-muted-light">
                Wähle einen Bereich oder starte direkt mit einer Demo.
              </p>
            </div>
          </nav>

          {/* Bottom CTAs */}
          <div className="sticky bottom-0 mt-6 space-y-3 border-t border-border-subtle-light/20 bg-white/90 pt-4">
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
              className="flex w-full items-center justify-center rounded-full border border-border-subtle-light/25 bg-white/70 px-5 py-4 text-base font-semibold text-text-primary-light shadow-card-light"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
