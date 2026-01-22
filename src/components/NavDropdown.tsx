"use client";

import { useEffect, useRef, useState } from "react";

export type NavDropdownItem = {
  label: string;
  href: string;
  description?: string;
};

type NavDropdownProps = {
  label: string;
  items: NavDropdownItem[];
};

export default function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 220);
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handlePointerEnter = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget as Node | null;
    if (nextTarget && wrapperRef.current?.contains(nextTarget)) {
      return;
    }
    scheduleClose();
  };

  const handleFocus = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget as Node | null;
    if (nextTarget && wrapperRef.current?.contains(nextTarget)) {
      return;
    }
    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-text-secondary-light transition hover:text-text-primary-light focus:text-text-primary-light"
        aria-haspopup="true"
        aria-expanded={open}
        onKeyDown={handleKeyDown}
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
        <svg
          className="h-4 w-4 text-text-secondary-light/70"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M4 6l4 4 4-4" strokeLinecap="round" />
        </svg>
      </button>
      <div
        className={`absolute left-0 top-full z-50 mt-3 w-64 rounded-card border border-border-subtle-light/20 bg-elevated-light p-3 shadow-card-light transition ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <div className="space-y-2">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block rounded-xl border border-transparent px-3 py-2 text-sm text-text-secondary-light transition hover:border-border-subtle-light/20 hover:bg-bg-light hover:text-text-primary-light"
            >
              <div className="font-medium text-text-primary-light">
                {item.label}
              </div>
              {item.description ? (
                <div className="text-xs text-text-secondary-light">
                  {item.description}
                </div>
              ) : null}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
