"use client";

import { OPEN_COOKIE_SETTINGS_EVENT } from "@/lib/consent";

const HAS_GA_ID = Boolean(process.env.NEXT_PUBLIC_GA_ID);

export default function CookieSettingsButton() {
  if (!HAS_GA_ID) return null;

  return (
    <button
      type="button"
      className="text-left hover:text-text-primary-light"
      onClick={() =>
        window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))
      }
    >
      Cookie-Einstellungen
    </button>
  );
}
