"use client";

import { OPEN_COOKIE_SETTINGS_EVENT } from "@/lib/consent";

import { HAS_TRACKING } from "@/lib/tracking-config";

export default function CookieSettingsButton() {
  if (!HAS_TRACKING) return null;

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
