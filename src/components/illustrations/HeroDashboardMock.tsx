const sidebarItems = [
  "Dashboard",
  "Richtlinien",
  "Routing",
  "Observability",
  "Audit Log",
  "Einstellungen",
];

const kpis = [
  { label: "Anfragen (24h)", value: "20.480" },
  { label: "Durchschnittliche Latenz", value: "715 ms" },
  { label: "Fehlerrate", value: "1,2 %" },
  { label: "Kosten (heute)", value: "€ 9,35" },
];

const requests = [
  {
    time: "09:12:43",
    model: "OpenAI",
    policy: "PII Schutz",
    status: "Erfolg",
    latency: "612 ms",
  },
  {
    time: "09:08:17",
    model: "Gemini",
    policy: "Kostenschutz",
    status: "Warnung",
    latency: "830 ms",
  },
  {
    time: "09:03:02",
    model: "Llama",
    policy: "Prompt-Filter",
    status: "Erfolg",
    latency: "702 ms",
  },
  {
    time: "08:55:29",
    model: "OpenAI",
    policy: "Datenfreigabe",
    status: "Erfolg",
    latency: "688 ms",
  },
];

export default function HeroDashboardMock() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border-subtle-light/40 bg-white shadow-card-light">
      {/* 
        FIX 1: Nicht "flacher" werden auf Desktop (das schneidet mehr ab),
        sondern ein stabiles Verhältnis + echte Mindesthöhe für Desktop geben.
      */}
      <div className="w-full">
        <div className="aspect-[16/10] w-full min-h-[360px] md:min-h-[420px] lg:min-h-[480px]">
          <div className="h-full w-full overflow-hidden p-3 text-[10px] text-text-muted-light sm:p-4 sm:text-[11px] md:text-[12px] lg:text-[11px] xl:text-xs">
            <div className="grid h-full grid-cols-1 gap-3 md:grid-cols-[0.95fr_2.1fr_1.15fr] md:gap-4">
              <main className="order-1 flex h-full min-w-0 flex-col gap-3 md:order-2">
                <div className="flex items-center justify-between rounded-xl bg-elevated-light/30 px-3 py-2 ring-1 ring-black/5 lg:px-2 lg:py-2">
                  <span className="rounded-full border border-border-subtle-light/40 bg-white px-2 py-1 font-semibold text-text-secondary-light">
                    EU
                  </span>
                  <div className="flex min-w-0 items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50/60 px-2 py-1 font-semibold text-emerald-700">
                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span className="max-w-[180px] truncate leading-tight sm:max-w-[220px]">
                      Alle Systeme betriebsbereit
                    </span>
                  </div>
                </div>

                <div className="flex min-w-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-secondary-light sm:gap-3 sm:text-[11px] lg:gap-3">
                  {["Richtlinien", "Routing", "Observability"].map((tab) => (
                    <div key={tab} className="min-w-0">
                      <span
                        className={`truncate leading-tight ${
                          tab === "Observability"
                            ? "text-text-primary-light"
                            : "text-text-secondary-light"
                        }`}
                      >
                        {tab}
                      </span>
                      <div
                        className={`mt-1 h-0.5 w-8 rounded-full ${
                          tab === "Observability"
                            ? "bg-accent"
                            : "bg-transparent"
                        }`}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {kpis.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="rounded-xl bg-elevated-light/40 px-3 py-2 ring-1 ring-black/5 lg:px-2 lg:py-2"
                    >
                      <div className="truncate text-[10px] font-medium leading-tight text-text-secondary-light sm:text-[11px] lg:whitespace-normal">
                        {kpi.label}
                      </div>
                      <div className="mt-1 whitespace-nowrap text-base font-semibold text-text-primary-light md:text-lg">
                        {kpi.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 lg:grid-cols-2">
                  {/* Anfragevolumen */}
                  <div className="rounded-xl bg-white px-3 py-2 ring-1 ring-black/5 lg:px-2 lg:py-2">
                    <div className="truncate text-[10px] font-semibold uppercase tracking-[0.2em] text-text-secondary-light sm:text-[11px]">
                      Anfragevolumen
                    </div>
                    <div className="mt-2 h-24 md:h-28 lg:mt-3 lg:h-32">
                      <svg
                        viewBox="0 0 260 100"
                        className="h-full w-full text-emerald-600"
                        fill="none"
                      >
                        <path
                          d="M10 70 C 45 30, 85 60, 120 40 S 190 28, 250 36"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        />
                        <path
                          d="M10 70 C 45 30, 85 60, 120 40 S 190 28, 250 36 L 250 88 L 10 88 Z"
                          fill="currentColor"
                          opacity="0.12"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Modellverteilung */}
                  <div className="rounded-xl bg-white px-3 py-2 ring-1 ring-black/5 lg:px-2 lg:py-2">
                    <div className="truncate text-[10px] font-semibold uppercase tracking-[0.2em] text-text-secondary-light sm:text-[11px]">
                      Modellverteilung
                    </div>
                    <div className="mt-2 h-24 md:h-28 lg:mt-3 lg:h-32">
                      <svg
                        viewBox="0 0 240 100"
                        className="h-full w-full"
                        fill="none"
                      >
                        {/* OpenAI */}
                        <rect
                          x="26"
                          y="24"
                          width="34"
                          height="54"
                          rx="6"
                          fill="#0F172A"
                          opacity="0.9"
                        />
                        {/* Gemini */}
                        <rect
                          x="96"
                          y="40"
                          width="34"
                          height="38"
                          rx="6"
                          fill="#5B8CFF"
                          opacity="0.9"
                        />
                        {/* Llama */}
                        <rect
                          x="166"
                          y="18"
                          width="34"
                          height="60"
                          rx="6"
                          fill="#34D399"
                          opacity="0.95"
                        />
                      </svg>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2 text-[10px] font-medium text-text-secondary-light sm:text-[11px]">
                      <div className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-[#0F172A]" />
                        OpenAI
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-[#5B8CFF]" />
                        Gemini
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-[#34D399]" />
                        Llama
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:hidden rounded-xl bg-white px-3 py-2 ring-1 ring-black/5">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-secondary-light sm:text-[11px]">
                    Letzte Anfragen
                  </div>
                  <div className="mt-2 space-y-2">
                    {requests.slice(0, 2).map((row) => (
                      <div
                        key={`${row.time}-${row.model}`}
                        className="flex items-center justify-between rounded-lg border border-border-subtle-light/20 bg-elevated-light/40 px-2 py-1"
                      >
                        <div className="min-w-0">
                          <div className="truncate font-medium text-text-primary-light">
                            {row.model}
                          </div>
                          <div className="truncate leading-tight text-text-secondary-light">
                            {row.policy}
                          </div>
                        </div>
                        <div className="text-right text-text-secondary-light">
                          {row.latency}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden min-h-0 flex-col rounded-xl bg-white px-3 py-2 ring-1 ring-black/5 md:flex lg:px-2 lg:py-2">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-secondary-light sm:text-[11px]">
                    Letzte Anfragen
                  </div>
                  <div className="mt-2 grid grid-cols-[0.9fr_0.7fr_1.2fr_0.6fr_0.6fr] gap-2 text-[10px] font-semibold text-text-secondary-light sm:text-[11px]">
                    <span className="truncate">Zeitstempel</span>
                    <span className="truncate">Modell</span>
                    <span className="truncate">Angewendete Richtlinie</span>
                    <span className="truncate">Status</span>
                    <span className="truncate">Latenz</span>
                  </div>
                  <div className="mt-2 space-y-1 text-[10px] text-text-primary-light sm:text-[11px]">
                    {requests.map((row) => (
                      <div
                        key={`${row.time}-${row.model}`}
                        className="grid grid-cols-[0.9fr_0.7fr_1.2fr_0.6fr_0.6fr] items-center gap-2 rounded-lg border border-border-subtle-light/20 bg-elevated-light/40 px-2 py-1"
                      >
                        <span className="truncate leading-tight">
                          {row.time}
                        </span>
                        <span className="truncate leading-tight">
                          {row.model}
                        </span>
                        <span className="truncate leading-tight">
                          {row.policy}
                        </span>
                        <span
                          className={`truncate font-medium leading-tight ${
                            row.status === "Erfolg"
                              ? "text-emerald-600"
                              : "text-amber-600"
                          }`}
                        >
                          {row.status}
                        </span>
                        <span className="truncate leading-tight">
                          {row.latency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </main>

              <aside className="order-2 flex h-full min-w-0 flex-col gap-3 rounded-xl bg-slate-50/60 p-3 ring-1 ring-black/5 md:order-1">
                <div className="space-y-1">
                  {sidebarItems.map((item) => (
                    <div
                      key={item}
                      className={`flex min-w-0 items-center gap-2 rounded-full px-2 py-1 font-medium ${
                        item === "Observability"
                          ? "border border-border-subtle-light/40 bg-white text-text-primary-light"
                          : "text-text-secondary-light"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 flex-shrink-0 rounded-full ${
                          item === "Observability"
                            ? "bg-accent"
                            : "bg-border-subtle-light/60"
                        }`}
                      />
                      <span className="truncate leading-tight lg:max-w-[160px] xl:max-w-none">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="hidden rounded-lg bg-white/80 px-2 py-1 text-[10px] text-text-secondary-light ring-1 ring-black/5 md:block">
                  Status: stabil
                </div>
              </aside>

              <aside className="order-3 flex h-full min-w-0 flex-col gap-3 md:order-3">
                <div className="rounded-xl bg-white px-3 py-2 ring-1 ring-black/5 lg:px-2 lg:py-2">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-secondary-light sm:text-[11px]">
                    Aktive Modelle
                  </div>
                  <div className="mt-2 space-y-2 text-[10px] font-medium text-text-primary-light sm:text-[11px]">
                    {["OpenAI", "Gemini", "Llama"].map((model) => (
                      <div
                        key={model}
                        className="flex items-center justify-between"
                      >
                        <span className="truncate leading-tight lg:max-w-[160px] xl:max-w-none">
                          {model}
                        </span>
                        <div className="relative h-4 w-8 rounded-full bg-emerald-400/80">
                          <span className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white shadow-sm" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-white px-3 py-2 ring-1 ring-black/5 lg:px-2 lg:py-2">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-secondary-light sm:text-[11px]">
                    Aktive Teams
                  </div>
                  <div className="mt-2 space-y-2 text-[10px] font-medium text-text-primary-light sm:text-[11px]">
                    {["Product", "Ops", "Compliance", "Finanzen"].map(
                      (team) => (
                        <div
                          key={team}
                          className="flex items-center gap-2 rounded-lg border border-border-subtle-light/20 bg-elevated-light/40 px-2 py-1"
                        >
                          <span className="h-2 w-2 rounded-full bg-border-subtle-light/80" />
                          <span className="truncate leading-tight lg:max-w-[160px] xl:max-w-none">
                            {team}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </aside>
            </div>
          </div>

          {/* FIX 2: Sauberer Fade unten (statt „hart abgeschnitten“) */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
    </div>
  );
}
