import Button from "@/components/ui/Button";
import Region from "@/components/Region";
import { companyCtas } from "@/config/site";

type MidPageCtaSectionProps = {
  className?: string;
};

export default function MidPageCtaSection({ className }: MidPageCtaSectionProps) {
  return (
    <Region variant="light" tone="alt" className={className}>
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F1A] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:p-12">
          <div className="pointer-events-none absolute -left-10 top-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-52 w-52 rounded-full bg-slate-300/10 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                NodeX live erleben
              </div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                NodeX in Ihrer Systemrealität statt als isolierte KI-Demo.
              </h2>
              <p className="text-base leading-relaxed text-white/70">
                Sehen Sie, wie NodeX Governance, Routing, Transparenz und
                produktive Teamnutzung in einer Plattform zusammenführt.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={companyCtas.nodexDemo}
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent bg-white text-[#0B0F1A] border border-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:bg-white/90"
                >
                  Demo anfragen
                </a>
                <Button
                  href="/leistungen"
                  variant="secondary"
                  theme="light"
                  className="rounded-full border border-white/20 bg-transparent text-white hover:border-white/35 hover:bg-white/5"
                >
                  Leistungen ansehen
                </Button>
              </div>
            </div>
            <div className="space-y-3 text-sm text-white/75">
              {[
                "Schneller Proof in echten Unternehmens-Use-Cases",
                "Transparenz über Kosten, Nutzung und Qualität",
                "Governance und Produktivität in einem Produktiv-Layer",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white/50" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Region>
  );
}
