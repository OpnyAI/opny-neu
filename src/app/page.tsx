import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Region from "@/components/Region";
import ProductivitySection from "@/components/sections/ProductivitySection";
import MidPageCtaSection from "@/components/sections/MidPageCtaSection";
import AiGatewaySection from "@/components/sections/AiGatewaySection";
import UnderHeroSection from "@/components/sections/UnderHeroSection";
import { GovernanceControlLayerDiagram } from "@/components/diagrams/GovernanceControlLayerDiagram";
import HeroChatMock from "@/components/mocks/HeroChatMock";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <Region variant="light" tone="base" id="produkt">
        <div className="grid items-center gap-10 lg:gap-14 md:grid-cols-2">
          <div className="space-y-6 md:col-span-1 max-w-[520px]">
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-text-primary-light md:text-6xl">
                Eine KI-Plattform. Volle Kontrolle. Keine Komplexität.
              </h1>
              <p className="text-lg leading-relaxed text-text-muted-light md:text-xl max-w-[46ch]">
                All-in-One-Plattform für sichere, skalierbare KI-Integration in
                Unternehmen.
              </p>
            </div>
            <ul className="mt-6 space-y-3 text-base leading-relaxed text-text-muted-light md:text-lg">
              {[
                "Produktiv für Teams. Kontrolliert für IT & Compliance.",
                "Eine API für Entwickler – mit Governance, Routing und Transparenz.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:info@opny.ai?subject=Demo%20Anfrage%20opny.ai"
                className="inline-flex items-center justify-center rounded-button px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent bg-white text-[#0B0F1A] border border-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:bg-white/95"
              >
                Demo anfragen
              </a>
              <Button href="/#plattform" variant="secondary" theme="light">
                Plattform ansehen
              </Button>
            </div>
          </div>

          <div className="mt-10 flex justify-center md:col-span-1 md:mt-0 lg:justify-end">
            <div className="self-center">
              <HeroChatMock />
            </div>
          </div>
        </div>
      </Region>

      <UnderHeroSection />

      {/* REALITÄT */}
      <Region variant="light" tone="alt">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
              Realität statt KI-Demo
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
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
                  value: "91,5%",
                  label: "KI wird genutzt – oft ohne zentrale Steuerung.",
                },
                {
                  value: "28,1%",
                  label: "Kosten werden zum Engpass bei Skalierung.",
                },
                {
                  value: "24,7%",
                  label: "Teams haben unklare KI-Richtlinien.",
                },
                {
                  value: "—",
                  label: "Fragmentierte Innovation durch Tool-Wildwuchs.",
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
            <div className="text-sm text-text-secondary-light">
              Beobachtungen aus typischen Enterprise-Rollouts.
            </div>
          </div>
        </div>
      </Region>

      {/* GOVERNANCE & SECURITY */}
      <Region variant="light" tone="surface" id="governance">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Governance & Security
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Zentrale Governance & Security
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Steuerung, Richtlinien und Audits in einem Layer – damit Teams
              schneller liefern, ohne Compliance- oder Sicherheitsrisiken.
            </p>
            <ul className="space-y-3 text-base text-text-muted-light">
              {[
                "Zentrale Policies für Modelle, Daten und Rollen.",
                "Nachvollziehbarkeit von Prompts, Dateien und Kosten.",
                "Sichere Freigaben für Teams, Projekte und Workflows.",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border-subtle-light/20 bg-white p-4 shadow-sm">
            <GovernanceControlLayerDiagram className="h-auto w-full" />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card theme="light" className="p-6">
            <div className="text-lg font-semibold text-text-primary-light">
              KI-Workspace
            </div>
            <ul className="mt-4 space-y-2 text-base text-text-muted-light">
              {[
                "Chat",
                "Modellvergleich",
                "Assistenten",
                "Projekte",
                "Integrationen",
                "Browser Extension",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-text-secondary-light">
              Ziel: Produktivität steigern und Zusammenarbeit ermöglichen.
            </div>
          </Card>

          <Card theme="light" className="p-6">
            <div className="text-lg font-semibold text-text-primary-light">
              KI-Gateway
            </div>
            <ul className="mt-4 space-y-2 text-base text-text-muted-light">
              {[
                "Einheitliche API",
                "Intelligentes Routing",
                "Fallback-Logik",
                "RAG-Architektur",
                "Observability",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-text-secondary-light">
              Ziel: Entwicklung beschleunigen und Stabilität sichern.
            </div>
          </Card>
        </div>
      </Region>

      <ProductivitySection />
      <MidPageCtaSection />

      {/* CONSEQUENCES */}
      <Region variant="light" tone="base">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Die Folge: Schatten-KI, Tool-Wildwuchs und riskante Workarounds.
          </h3>
          <p className="text-base leading-relaxed text-text-muted-light">
            Ohne Governance und Observability entsteht ein Mix aus Tools,
            Modellen und Datenwegen – schwer auditierbar, teuer und unsicher.
          </p>
          <ul className="space-y-2 text-base text-text-muted-light">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              <span>Keine Transparenz über Prompts, Datenabflüsse und Outputs</span>
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
      </Region>

      <AiGatewaySection />

      {/* SECURITY */}
      <Region variant="light" tone="base" id="ki-sicherheit">
        <div className="relative space-y-6">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Security & Governance
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
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
              <h3 className="text-xl font-semibold text-text-primary-light md:text-2xl">
                {card.title}
              </h3>
              <ul className="mt-4 space-y-2 text-base text-text-muted-light">
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
            <h3 className="text-xl font-semibold text-text-primary-light md:text-2xl">
              Governance, die Teams nicht ausbremst.
            </h3>
            <p className="text-base leading-relaxed text-text-muted-light">
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
                  className="rounded-full border border-border-subtle-light/25 px-3 py-1 text-sm text-text-secondary-light"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <Card theme="light" className="p-5">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
              Policy engine
            </div>
            <div className="mt-4 space-y-3 text-base text-text-muted-light">
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
                  <span className="text-sm text-text-secondary-light">
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="mailto:info@opny.ai?subject=Demo%20Anfrage%20opny.ai"
            className="inline-flex items-center justify-center rounded-button px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent bg-white text-[#0B0F1A] border border-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:bg-white/95"
          >
            Demo anfragen
          </a>
          <Button href="/#plattform" variant="secondary" theme="light">
            Plattform ansehen →
          </Button>
        </div>
      </Region>

      {/* USE-CASES */}
      <Region variant="light" tone="alt" id="loesungen">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-4 text-left sm:space-y-5">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Lösungen
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              KI dort einsetzen, wo sie echten Mehrwert bringt.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Opny hilft Teams, KI sicher und messbar in Prozesse zu bringen –
              statt Tool-Wildwuchs und Insellösungen.
            </p>
          </div>

          <div className="mt-6 space-y-8 sm:mt-6 sm:space-y-10">
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "Produkt- & Entwicklungsteams",
                  text: "Schneller entwickeln – mit kontrollierten Copilots und sauberem Zugriff auf Wissen.",
                  bullets: [
                    "Copilots für Code, Doku & Reviews",
                    "RAG mit technischem Know-how",
                  ],
                },
                {
                  title: "Operations & Fachbereiche",
                  text: "Wiederkehrende Aufgaben automatisieren – nachvollziehbar, steuerbar, auditierbar.",
                  bullets: [
                    "Dokumente, E-Mails & Tickets automatisieren",
                    "Entscheidungen mit klaren Policies unterstützen",
                  ],
                },
                {
                  title: "Compliance, Legal & Risiko",
                  text: "KI nutzen, ohne Audit- und Datenschutzrisiken zu erzeugen.",
                  bullets: [
                    "Policy-konforme Nutzung & Freigaben",
                    "Auditierbare Prompt- und Output-Historie",
                  ],
                },
                {
                  title: "Regulierte Branchen",
                  text: "Kontrolle bei sensiblen Daten – auch unter strengen Vorgaben.",
                  bullets: [
                    "Pharma, Banken, Industrie",
                    "Governance, Nachvollziehbarkeit, Sicherheit",
                  ],
                },
              ].map((card) => (
                <div key={card.title} className="space-y-3">
                  <h3 className="text-xl font-semibold text-text-primary-light md:text-2xl">
                    {card.title}
                  </h3>
                  <p className="text-base leading-relaxed text-text-muted-light">
                    {card.text}
                  </p>
                  <ul className="space-y-2 text-base text-text-muted-light">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Region>

      {/* PLATFORM */}
      <section
        id="plattform"
        className="bg-[linear-gradient(to_bottom,rgb(10_12_18),rgb(6_8_12))] py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-left sm:text-center">
            <div className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              Plattform
            </div>
            <p className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Hinter jedem erfolgreichen Anwendungsfall steht eine stabile
              Plattform.
            </p>
            <p className="mt-3 text-base text-slate-300">
              Policies, Routing und Observability bilden das Fundament für
              skalierbare KI-Workflows.
            </p>
            <div className="mt-6 flex flex-wrap justify-start gap-3 sm:justify-center">
              {["Policies", "Routing & Fallback", "Observability"].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full bg-[rgb(18_22_30)] px-4 py-2 text-sm font-semibold text-slate-200"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Multimodale Uploads",
                text: "Dokumente, Tabellen und Medien zentral ingestieren.",
                icon: (
                  <svg
                    className="h-5 w-5 text-slate-300"
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
                ),
              },
              {
                title: "Workspace Control Panel",
                text: "Teams, Rollen und Kosten mit klaren Policies steuern.",
                icon: (
                  <svg
                    className="h-5 w-5 text-slate-300"
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
                ),
              },
              {
                title: "Input/Output Guardrails",
                text: "Safety-Checks und Regeln auf jeder Anfrage.",
                icon: (
                  <svg
                    className="h-5 w-5 text-slate-300"
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
                ),
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgb(18_22_30)] p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.06)] bg-[rgb(18_22_30)]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-white md:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-slate-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <Region variant="light" tone="alt" id="unternehmen">
        <span id="demo" className="sr-only" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Nutzen Sie KI mit Kontrolle, Klarheit und Vertrauen.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-text-muted-light">
            Vereinfachen Sie KI-Operationen, sichern Sie DSGVO-Compliance und
            skalieren Sie sicher.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@opny.ai?subject=Demo%20Anfrage%20opny.ai"
              className="inline-flex items-center justify-center rounded-button px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent bg-white text-[#0B0F1A] border border-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:bg-white/95"
            >
              Demo anfragen
            </a>
            <Button href="/#plattform" variant="secondary" theme="light">
              Plattform ansehen
            </Button>
          </div>
        </div>
      </Region>
    </div>
  );
}
