import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Region from "@/components/Region";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <Region variant="light" size="hero">
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle-light/30 bg-elevated-light/90 px-4 py-1 text-xs text-text-secondary-light">
              Neue Plattform für kontrollierte KI-Workflows
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-text-primary-light sm:text-5xl">
                Eine KI-Plattform. Volle Kontrolle. Keine Komplexität.
              </h1>
              <p className="text-base leading-relaxed text-text-muted-light sm:text-lg">
                opny.ai verbindet Modelle, Daten und Richtlinien zu produktiven
                Workflows – sicher, beobachtbar und umsetzbar.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-text-muted-light sm:text-base">
              {[
                "Model Routing & Fallback (Always-on)",
                "Rollen, Policies & Guardrails",
                "RAG-ready: Wissen aus Dokumenten & Systemen",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button href="#" variant="primary" theme="light">
                Demo anfragen
              </Button>
              <Button href="#platform" variant="secondary" theme="light">
                Plattform ansehen
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Card theme="light" className="p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-text-primary-light">
                  Fallback model
                </div>
                <span className="text-xs text-accent">Policy</span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  { label: "OpenAI", status: "Primary" },
                  { label: "Anthropic", status: "Secondary" },
                  { label: "Open Source", status: "Fallback" },
                ].map((entry) => (
                  <div
                    key={entry.label}
                    className="flex items-center justify-between rounded-xl border border-border-subtle-light/30 bg-elevated-light/90 px-3 py-2"
                  >
                    <span className="text-sm text-text-muted-light">
                      {entry.label}
                    </span>
                    <span className="text-xs text-text-secondary-light">
                      {entry.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card theme="light" className="p-5">
              <div className="flex items-center justify-between text-xs text-text-secondary-light">
                <span>Traffic distribution</span>
                <span>Week 32</span>
              </div>
              <div className="mt-4 flex h-24 items-end gap-2">
                {[60, 40, 80, 30, 70, 55].map((height, index) => (
                  <div
                    key={`${height}-${index}`}
                    className="w-6 rounded-md bg-accent"
                    style={{ height: `${height}%` }}
                  >
                    <span className="sr-only">Bar {index + 1}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Divider direkt im Hero: kein extra Region-Block */}
        <div
          className="mt-6 h-px w-full bg-border-subtle-light/10"
          aria-hidden="true"
        />
      </Region>

      {/* REALITÄT */}
      <Region variant="light" size="section">
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
              Realität statt KI-Demo
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light sm:text-4xl">
              Wo KI auf Unternehmensrealität trifft
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              KI bringt Tempo – aber in der Praxis bremsen Policies, Kosten und
              fehlende Transparenz. opny.ai macht KI nutzbar, ohne Kontrolle
              oder Compliance zu verlieren.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid gap-8 sm:grid-cols-2">
              {[
                {
                  value: "90%",
                  label: "KI wird genutzt – oft ohne zentrale Steuerung.",
                },
                {
                  value: "35%",
                  label: "Teams haben keine klaren KI-Richtlinien.",
                },
                {
                  value: "28%",
                  label: "Kosten werden zum Engpass bei Skalierung.",
                },
                {
                  value: "23%",
                  label:
                    "Performance & Verfügbarkeit bremsen Produktivbetrieb.",
                },
              ].map((stat) => (
                <Card key={stat.value} theme="light" className="h-full p-5">
                  <div className="text-4xl font-semibold tracking-tight text-text-primary-light">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-text-muted-light">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-xs text-text-secondary-light">
              Beobachtungen aus typischen Enterprise-Rollouts.
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-primary-light">
              Die Folge: Schatten-KI, Tool-Wildwuchs und riskante Workarounds.
            </h3>
            <p className="text-sm leading-relaxed text-text-muted-light">
              Ohne Governance und Observability entsteht ein Mix aus Tools,
              Modellen und Datenwegen – schwer auditierbar, teuer und unsicher.
            </p>
            <ul className="space-y-2 text-sm text-text-muted-light">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>
                  Keine Transparenz über Prompts, Datenabflüsse und Outputs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>Kein Routing/Fallback, wenn ein Modell ausfällt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>Kein einheitlicher Policy-Layer für Teams</span>
              </li>
            </ul>
          </div>

          <Card
            theme="light"
            className="flex h-full flex-col items-start justify-between p-5"
          >
            <span className="rounded-full border border-border-subtle-light/25 px-3 py-1 text-xs font-semibold text-text-secondary-light">
              Security-first
            </span>
            <Button href="#platform" variant="secondary" theme="light">
              So löst opny.ai das →
            </Button>
          </Card>
        </div>
      </Region>

      {/* FEATURES */}
      <Region variant="light" size="section">
        <div className="grid gap-8 md:grid-cols-3">
          <Card theme="light">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle-light/25 bg-elevated-light/70">
              <svg
                className="h-5 w-5 text-text-muted-light"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M7 7h10v10H7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M3 3h4M17 3h4M3 21h4M17 21h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-primary-light">
              Multimodale Uploads
            </h3>
            <p className="mt-2 text-sm text-text-muted-light">
              Dokumente, Tabellen und Medien zentral ingestieren.
            </p>
          </Card>

          <Card theme="light">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle-light/25 bg-elevated-light/70">
              <svg
                className="h-5 w-5 text-text-muted-light"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-primary-light">
              Workspace Control Panel
            </h3>
            <p className="mt-2 text-sm text-text-muted-light">
              Teams, Rollen und Kosten mit klaren Policies steuern.
            </p>
          </Card>

          <Card theme="light">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle-light/25 bg-elevated-light/70">
              <svg
                className="h-5 w-5 text-text-muted-light"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-primary-light">
              Input/Output Guardrails
            </h3>
            <p className="mt-2 text-sm text-text-muted-light">
              Safety-Checks und Regeln auf jeder Anfrage.
            </p>
          </Card>
        </div>

        {/* sanfter Divider statt extra Spacer-Region */}
        <div
          className="mt-6 h-px w-full bg-border-subtle-light/10"
          aria-hidden="true"
        />
      </Region>

      {/* SECURITY */}
      <Region
        variant="light"
        className="scroll-mt-20"
        id="security"
        size="section"
      >
        <div className="relative space-y-6">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Security & Governance
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light sm:text-4xl">
            KI produktiv nutzen – ohne Risiko, ohne Wildwuchs.
          </h2>
          <p className="text-base leading-relaxed text-text-muted-light">
            opny.ai setzt Richtlinien direkt an der Schnittstelle durch: vor der
            Anfrage, nach der Antwort und bei jedem Datei-Upload. So bleiben
            Daten, Rollen und Outputs kontrollierbar – auch wenn Teams
            unterschiedliche Modelle und Workflows nutzen.
          </p>
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Policies & Guardrails",
              bullets: [
                "Input/Output Regeln (PII, Tonalität, erlaubte Inhalte)",
                "Freigaben je Rolle, Team und Use-Case",
                "Automatische Redaction & Blocking",
              ],
            },
            {
              title: "Daten & Dateien",
              bullets: [
                "Upload-Regeln (Dateityp, Größe, Retention)",
                "RAG-Quellen mit Zugriffspfaden",
                "Sensible Daten: isolierbare Workloads",
              ],
            },
            {
              title: "Audit & Observability",
              bullets: [
                "Prompt/Response Logging (optional, konfigurierbar)",
                "Kosten- & Usage-Tracking pro Team",
                "Policy-Events & Incident-Signale",
              ],
            },
          ].map((card) => (
            <Card key={card.title} theme="light">
              <h3 className="text-lg font-semibold text-text-primary-light">
                {card.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-text-muted-light">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-primary-light">
              Governance, die Teams nicht ausbremst.
            </h3>
            <p className="text-sm leading-relaxed text-text-muted-light">
              Richtlinien werden als Produkt-Default umgesetzt – nicht als PDF.
              Teams arbeiten schneller, weil klare Leitplanken Fehlversuche und
              Workarounds reduzieren.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Role-based access",
                "PII redaction",
                "Retention rules",
                "Model allowlist",
                "Output constraints",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border-subtle-light/25 px-3 py-1 text-xs text-text-secondary-light"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <Card theme="light" className="p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
              Policy engine
            </div>
            <div className="mt-4 space-y-3 text-sm text-text-muted-light">
              {[
                { label: "PII redaction", status: "Enabled" },
                { label: "File type rules", status: "Enforced" },
                { label: "Model allowlist", status: "Active" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-xl border border-border-subtle-light/20 bg-elevated-light/80 px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span>{row.label}</span>
                  </div>
                  <span className="text-xs text-text-secondary-light">
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <Button href="#demo" variant="primary" theme="light">
            Demo anfragen
          </Button>
          <Button href="#platform" variant="secondary" theme="light">
            Plattform ansehen →
          </Button>
        </div>

        <div id="demo" className="scroll-mt-20" />
      </Region>

      {/* USE-CASES */}
      <div id="use-cases" className="scroll-mt-20" />
      <Region variant="light" size="section">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-4 text-left sm:space-y-5">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Lösungen
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light sm:text-4xl">
              KI dort einsetzen, wo sie echten Mehrwert bringt.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              opny.ai wird dort eingesetzt, wo Teams produktiver arbeiten müssen
              – unter klaren Richtlinien und mit messbarem Nutzen. Statt
              isolierter Tools entstehen kontrollierte KI-Workflows, die sich in
              bestehende Prozesse integrieren.
            </p>
          </div>

          <div className="mt-6 space-y-8 sm:mt-6 sm:space-y-10">
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "Produkt- & Entwicklungsteams",
                  text: "Beschleunige Produktentwicklung und interne Tools – ohne Sicherheits- oder Kostenkontrollverlust.",
                  bullets: [
                    "Interne Copilots für Code, Doku & Reviews",
                    "RAG-Workflows mit technischem Wissen",
                    "Automatisierte QA- und Analyse-Pipelines",
                  ],
                  subline: "Typische Nutzer: Produkt, Engineering, Data",
                },
                {
                  title: "Operations & Fachbereiche",
                  text: "Automatisiere wiederkehrende Aufgaben in Fachabteilungen – nachvollziehbar und steuerbar.",
                  bullets: [
                    "Dokumentenverarbeitung & Zusammenfassungen",
                    "E-Mail-, Ticket- und Anfrage-Automatisierung",
                    "KI-gestützte Entscheidungsunterstützung",
                  ],
                  subline: "Typische Nutzer: Operations, Support, Finance",
                },
                {
                  title: "Compliance, Legal & Risiko",
                  text: "Nutze KI unter klaren Leitplanken – ohne Schatten-IT oder Audit-Risiken.",
                  bullets: [
                    "Richtlinien-konforme KI-Nutzung",
                    "Auditierbare Prompt- & Output-Historien",
                    "Kontrollierte Datenflüsse",
                  ],
                  subline: "Typische Nutzer: Legal, Compliance, Risk",
                },
                {
                  title: "Regulierte Branchen",
                  text: "Setze KI auch dort ein, wo Datenschutz und Regulierung höchste Priorität haben.",
                  bullets: [
                    "Pharma & Life Sciences",
                    "Banken & Versicherungen",
                    "Chemie & industrielle Unternehmen",
                  ],
                  subline: "Fokus: Sicherheit, Nachvollziehbarkeit, Governance",
                },
              ].map((card) => (
                <div key={card.title} className="space-y-3">
                  <h3 className="text-lg font-semibold text-text-primary-light">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted-light">
                    {card.text}
                  </p>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                    Typische Anwendungsfälle
                  </div>
                  <ul className="space-y-2 text-sm text-text-muted-light">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-text-muted-light">
                    {card.subline}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border-subtle-light/15 pt-6">
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    title: "Reduzierter Tool-Wildwuchs",
                    text: "Ein Gateway statt paralleler KI-Tools.",
                  },
                  {
                    title: "Kontrollierte Skalierung",
                    text: "Mehr Nutzung – ohne Kosten- oder Compliance-Schock.",
                  },
                  {
                    title: "Schnellere Umsetzung",
                    text: "Produktiver Einsatz statt Proof-of-Concepts.",
                  },
                ].map((outcome) => (
                  <div key={outcome.title} className="space-y-2">
                    <div className="text-lg font-semibold text-text-primary-light">
                      {outcome.title}
                    </div>
                    <div className="text-sm text-text-muted-light">
                      {outcome.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button href="#demo" variant="primary" theme="light">
                Demo anfragen
              </Button>
              <Button href="#platform" variant="secondary" theme="light">
                Plattform ansehen →
              </Button>
            </div>
          </div>
        </div>
      </Region>

      {/* PLATFORM INTRO */}
      <Region
        variant="light"
        size="section"
        containerClassName="max-w-4xl text-center"
      >
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-text-secondary-light">
          Plattform
        </div>
        <p className="mt-4 text-2xl font-semibold tracking-tight text-text-primary-light sm:text-3xl">
          Hinter jedem erfolgreichen Anwendungsfall steht eine stabile
          Plattform.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["Policies", "Routing & Fallback", "Observability"].map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-border-subtle-light/20 bg-elevated-light/90 px-4 py-2 text-xs font-semibold text-text-secondary-light shadow-card-light"
            >
              {pill}
            </span>
          ))}
        </div>
      </Region>

      {/* PLATFORM */}
      <Region variant="light" id="platform" size="section">
        <div className="relative grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              AI Gateway
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light sm:text-4xl">
              Baue und skaliere zuverlässige KI-Systeme – mit Kontrolle statt
              Chaos.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              opny.ai bündelt Modelle, Daten und Richtlinien in einem zentralen
              Gateway. Teams integrieren KI über einen Endpoint, behalten
              Policies im Griff und gewinnen Transparenz über Kosten, Nutzung
              und Outputs. So entsteht produktiver Betrieb – ohne Tool-Wildwuchs
              oder Vendor-Lock-in.
            </p>
            <ul className="space-y-3 text-sm text-text-muted-light">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>Ein Endpoint für mehrere LLMs (Routing + Fallback)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>Policy-Layer für Teams, Rollen und Datenzugriffe</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>Observability für Prompts, Outputs und Kosten</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button href="#demo" variant="primary" theme="light">
                Demo anfragen
              </Button>
              <Button href="#security" variant="secondary" theme="light">
                Security & Governance →
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card theme="light">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-text-primary-light">
                  Model routing
                </h3>
                <span className="rounded-full border border-border-subtle-light/25 px-3 py-1 text-xs text-text-secondary-light">
                  Policy
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  { label: "OpenAI", status: "Primary", tag: "Latency 380ms" },
                  {
                    label: "Anthropic",
                    status: "Secondary",
                    tag: "Latency 420ms",
                  },
                  {
                    label: "Open Source",
                    status: "Fallback",
                    tag: "Latency 510ms",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border border-border-subtle-light/20 bg-elevated-light/80 px-3 py-2"
                  >
                    <div>
                      <div className="text-sm text-text-muted-light">
                        {item.label}
                      </div>
                      <div className="text-xs text-text-secondary-light">
                        {item.status}
                      </div>
                    </div>
                    <span className="rounded-full border border-border-subtle-light/25 px-2 py-1 text-[10px] text-text-secondary-light">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid gap-8 sm:grid-cols-2">
              <Card theme="light" className="p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                  Usage & cost
                </div>
                <div className="mt-4 flex h-20 items-end gap-2">
                  {[45, 70, 40, 85, 55].map((height, index) => (
                    <div
                      key={`${height}-${index}`}
                      className="w-4 rounded-md bg-accent"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </Card>
              <Card theme="light" className="p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                  Policy checks
                </div>
                <div className="mt-4 space-y-3 text-sm text-text-muted-light">
                  {[
                    "PII redaction",
                    "File type rules",
                    "Output constraints",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border-subtle-light/25 text-[10px] text-accent">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Plug-and-play API Access",
              text: "Integriere KI in Apps und Prozesse über einen zentralen Endpoint – mit Schlüssel- und Rollensteuerung.",
            },
            {
              title: "RAG-ready Architektur",
              text: "Verbinde Modelle mit internem Wissen aus Dokumenten und Systemen – kontrolliert und auditierbar.",
            },
            {
              title: "Private Workloads",
              text: "Isoliere sensible Anwendungsfälle durch private Deployments und restriktive Zugriffskontrollen.",
            },
            {
              title: "Secure File Storage",
              text: "Uploads und Outputs zentral verwalten – mit Retention, Zugriffspfaden und Compliance-Optionen.",
            },
          ].map((card) => (
            <Card key={card.title} theme="light">
              <h3 className="text-lg font-semibold text-text-primary-light">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted-light">{card.text}</p>
            </Card>
          ))}
        </div>
      </Region>
    </div>
  );
}
