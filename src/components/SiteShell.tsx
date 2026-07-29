import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen max-w-full overflow-x-clip text-text-primary-light">
      <a
        href="#site-content"
        className="sr-only fixed left-4 top-4 z-[1000] rounded-lg bg-white px-4 py-2 font-semibold text-slate-950 shadow-lg focus:not-sr-only"
      >
        Zum Inhalt springen
      </a>
      <Header />
      <div
        id="site-content"
        className="w-full max-w-full overflow-x-clip"
        tabIndex={-1}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
