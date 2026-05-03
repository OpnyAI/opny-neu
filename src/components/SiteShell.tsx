import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen max-w-full overflow-x-clip text-text-primary-light">
      <Header />
      <main className="w-full max-w-full overflow-x-clip pb-16 pt-6">{children}</main>
      <Footer />
    </div>
  );
}
