type HeroProductMockProps = {
  className?: string;
};

const kpis = [
  { label: "Anfragen (24h)", value: "20.480" },
  { label: "Durchschnittliche Latenz", value: "715 ms" },
  { label: "Fehlerrate", value: "1,2 %" },
  { label: "Kosten (heute)", value: "€ 935" },
];

const modelLegend = [
  { label: "OpenAI", color: "bg-slate-900" },
  { label: "Gemini", color: "bg-sky-500" },
  { label: "Llama", color: "bg-emerald-500" },
];

export default function HeroProductMock({ className }: HeroProductMockProps) {
  return (
    <div
      className={`relative overflow-hidden md:overflow-visible ${className ?? ""}`}
    >
      <div className="relative rounded-[32px] border border-border-subtle-light/40 bg-white p-4 shadow-[0_25px_80px_-50px_rgba(15,23,42,0.35)] sm:p-5 md:p-6">
        <div className="absolute -right-6 -top-6 hidden items-center gap-2 rounded-full border border-border-subtle-light/30 bg-white/90 px-3 py-2 text-xs font-semibold text-text-secondary-light shadow-sm md:flex">
          Policy: PII redaction ✓
        </div>
        <div className="absolute -left-6 top-16 hidden items-center gap-2 rounded-full border border-border-subtle-light/30 bg-white/90 px-3 py-2 text-xs font-semibold text-text-secondary-light shadow-sm md:flex">
          Avg Latency 715ms
        </div>
        <div className="absolute -right-4 bottom-10 hidden items-center gap-2 rounded-full border border-border-subtle-light/30 bg-white/90 px-3 py-2 text-xs font-semibold text-text-secondary-light shadow-sm md:flex">
          Cost today €935
        </div>

        <div className="relative overflow-hidden rounded-[24px] border border-border-subtle-light/30 bg-slate-50/60 p-4 sm:p-5 md:p-6">
          <div className="absolute inset-0 hidden md:block">
            <div className="h-full w-full transform bg-transparent [transform:perspective(1200px)_rotateY(-8deg)_rotateX(2deg)]" />
          </div>

          <div className="relative grid gap-4 md:grid-cols-[180px_minmax(0,1fr)] md:gap-6">
            <aside className="rounded-2xl border border-border-subtle-light/30 bg-white/80 p-3">
              <div className="space-y-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                Navigation
              </div>
              <div className="mt-3 space-y-2 text-[11px] font-medium text-text-secondary-light">
                {[
                  "Dashboard",
                  "Richtlinien",
                  "Routing",
                  "Observability",
                  "Audit Log",
                  "Einstellungen",
                ].map((item) => (
                  <div
                    key={item}
                    className={`flex items-center justify-between rounded-xl px-3 py-2 ${
                      item === "Observability"
                        ? "border border-border-subtle-light/30 bg-white text-text-primary-light"
                        : "bg-transparent"
                    }`}
                  >
                    <span className="truncate">{item}</span>
                    <span
                      className={`h-2 w-2 rounded-full ${
                        item === "Observability"
                          ? "bg-accent"
                          : "bg-border-subtle-light/70"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </aside>

            <div className="flex min-w-0 flex-col gap-4">
              <div className="flex items-center justify-between rounded-2xl border border-border-subtle-light/30 bg-white px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                  Observability
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Alle Systeme betriebsbereit
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-2xl border border-border-subtle-light/30 bg-white px-4 py-3"
                  >
                    <div className="text-[11px] font-medium text-text-secondary-light">
                      {kpi.label}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-text-primary-light">
                      {kpi.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-border-subtle-light/30 bg-white p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                    Anfragevolumen
                  </div>
                  <svg
                    viewBox="0 0 240 80"
                    className="mt-3 h-20 w-full"
                    fill="none"
                  >
                    <path
                      d="M10 60 C 40 30, 80 50, 120 32 S 190 22, 230 30"
                      stroke="rgb(var(--text-secondary-light))"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M10 60 C 40 30, 80 50, 120 32 S 190 22, 230 30 L 230 72 L 10 72 Z"
                      fill="rgb(var(--text-secondary-light))"
                      opacity="0.08"
                    />
                  </svg>
                </div>

                <div className="rounded-2xl border border-border-subtle-light/30 bg-white p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                    Modellverteilung
                  </div>
                  <div className="mt-4 flex h-20 items-end gap-3">
                    {[
                      "bg-slate-900",
                      "bg-sky-500",
                      "bg-emerald-500",
                    ].map((color, index) => (
                      <div
                        key={color}
                        className={`w-6 rounded-md ${color}`}
                        style={{ height: `${50 + index * 15}%` }}
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-text-secondary-light">
                    {modelLegend.map((item) => (
                      <div key={item.label} className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${item.color}`} />
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border-subtle-light/30 bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                  Aktive Teams
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-sm font-medium text-text-primary-light">
                  {["Product", "Ops", "Compliance", "Finance"].map((team) => (
                    <span
                      key={team}
                      className="rounded-full border border-border-subtle-light/30 bg-elevated-light/60 px-3 py-1"
                    >
                      {team}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
