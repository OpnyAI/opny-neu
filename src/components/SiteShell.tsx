import type { ReactNode } from "react";
import Header from "./Header";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen text-text-primary-light">
      <Header />
      <main className="w-full pb-16 pt-6">
        {children}
      </main>
      <footer className="border-t border-border-subtle-light/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-text-secondary-light sm:flex-row sm:px-6 lg:px-10">
          <span>opny.ai</span>
          <span>Kontrollierte KI-Systeme für Unternehmen.</span>
        </div>
      </footer>
    </div>
  );
}
