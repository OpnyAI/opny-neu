import Button from "@/components/ui/Button";
import Region from "@/components/Region";

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
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Nächster Schritt
              </div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Kontrollierte KI – live in Ihrer Realität.
              </h2>
              <p className="text-base leading-relaxed text-white/70">
                Sehen Sie, wie Opny Governance, Routing und Observability in einem
                Layer verbindet – ohne Teams auszubremsen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  href="/#demo"
                  variant="primary"
                  theme="light"
                  className="rounded-full bg-white text-[#0B0F1A] hover:bg-white/90"
                >
                  Demo anfragen
                </Button>
                <Button
                  href="/#produkt"
                  variant="secondary"
                  theme="light"
                  className="rounded-full border border-white/20 bg-transparent text-white hover:border-white/35 hover:bg-white/5"
                >
                  Plattform ansehen
                </Button>
              </div>
            </div>
            <div className="space-y-3 text-sm text-white/75">
              {[
                "Schneller Proof in echten Use-Cases",
                "Transparenz über Kosten, Nutzung und Qualität",
                "Governance ohne zusätzlichen Prozessballast",
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
