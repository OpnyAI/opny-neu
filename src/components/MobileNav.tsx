"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
  cta = {
    label: "Demo anfragen",
    href: "mailto:info@opny.ai?subject=Demo%20Anfrage%20opny.ai",
  },
  secondaryCta = { label: "Anmelden", href: "/#demo" },
}: MobileNavProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [animateIn, setAnimateIn] = useState(false);

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

  if (!open) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menü"
      className="fixed inset-x-0 bottom-0 top-16 z-[999] lg:hidden"
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
              <Image
                src="/images/brand/opny-logo.png"
                alt="Opny"
                width={140}
                height={40}
                priority
                className="h-6 w-auto"
              />
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-text-secondary-light">
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
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={onClose}
                    className="block rounded-2xl border border-black/5 bg-white px-4 py-4 text-base font-medium text-text-primary-light transition hover:bg-black/5"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 space-y-3">
            <a
              href={cta.href}
              className="flex w-full items-center justify-center rounded-full bg-text-primary-light px-5 py-4 text-base font-semibold text-white shadow-card-light"
            >
              {cta.label}
            </a>
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
