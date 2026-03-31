import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Region from "@/components/Region";
import ProductivitySection from "@/components/sections/ProductivitySection";
import MidPageCtaSection from "@/components/sections/MidPageCtaSection";
import AiGatewaySection from "@/components/sections/AiGatewaySection";
import UnderHeroSection from "@/components/sections/UnderHeroSection";
import { GovernanceControlLayerDiagram } from "@/components/diagrams/GovernanceControlLayerDiagram";
import HeroChatMock from "@/components/mocks/HeroChatMock";
import { companyCtas } from "@/config/site";

export const metadata: Metadata = {
  title: "NodeX: Kontrollierte KI-Nutzung für Unternehmen",
  description:
    "NodeX ist die zentrale Plattform für kontrollierte KI-Nutzung mit AI Gateway, KI Governance, Routing, Fallback, Transparenz und operativer Plattformlogik im Unternehmen.",
  alternates: {
    canonical: "https://www.opny.ai/leistungen/nodex",
  },
  openGraph: {
    title: "NodeX: Kontrollierte KI-Nutzung für Unternehmen",
    description:
      "NodeX ist die zentrale Plattform für kontrollierte KI-Nutzung mit AI Gateway, KI Governance, Routing, Fallback, Transparenz und operativer Plattformlogik im Unternehmen.",
    url: "https://www.opny.ai/leistungen/nodex",
  },
};

export default function NodeXPage() {
  return (
    <div className="flex flex-col">
      <Region variant="light" tone="base">
        <div className="grid items-center gap-10 lg:gap-14 md:grid-cols-2">
          <div className="max-w-[560px] space-y-6">
            <div className="space-y-4">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
                NodeX
              </div>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary-light md:text-5xl">
                Ohne NodeX entsteht KI-Wildwuchs. Mit NodeX entsteht
                kontrollierter produktiver Betrieb.
              </h1>
              <p className="max-w-[48ch] text-lg leading-relaxed text-text-muted-light md:text-xl">
                NodeX gibt Unternehmen einen operativen Layer für produktive
                KI-Nutzung: mit klaren Regeln, kontrollierten Datenpfaden,
                nachvollziehbaren Entscheidungen und einer Plattformlogik, die
                Teams und IT zusammenführt.
              </p>
            </div>
            <ul className="space-y-3 text-base leading-relaxed text-text-muted-light md:text-lg">
              {[
                "Verhindert Schatten-KI, Tool-Wildwuchs und unsichere Workarounds.",
                "Schafft Kontrolle über Nutzung, Rollen, Kosten und Datenzugriffe.",
                "Macht produktive KI im Unternehmen steuerbar statt zufällig.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={companyCtas.nodexDemo}
                className="inline-flex items-center justify-center rounded-button px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent bg-white text-[#0B0F1A] border border-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:bg-white/95"
              >
                Demo anfragen
              </a>
              <Button
                href={companyCtas.generalInquiry}
                variant="secondary"
                theme="light"
              >
                Erstgespräch anfragen
              </Button>
            </div>
          </div>

          <div className="mt-10 flex justify-center md:mt-0 lg:justify-end">
            <div className="self-center">
              <HeroChatMock />
            </div>
          </div>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
              Problem zuerst
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Wo produktive KI ohne zentrale Logik eingeführt wird, entstehen
              Risiken statt Skalierung.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              KI bringt Tempo, aber in der Praxis bremsen Kosten, fehlende
              Transparenz, unklare Regeln und fragmentierte Tools. Ohne
              gemeinsame Betriebslogik wird aus produktiver Nutzung schnell ein
              unsicherer Flickenteppich.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid gap-8 sm:grid-cols-2">
              {[
                {
                  value: "91,5%",
                  label:
                    "KI wird genutzt, oft ohne zentrale Steuerung und ohne gemeinsame Regeln.",
                },
                {
                  value: "28,1%",
                  label:
                    "Kosten werden zum Engpass, wenn Modelle und Nutzung unkoordiniert wachsen.",
                },
                {
                  value: "24,7%",
                  label:
                    "Teams arbeiten mit unklaren Richtlinien, Freigaben und Verantwortlichkeiten.",
                },
                {
                  value: "78%",
                  label:
                    "der KI-Nutzer bringen eigene KI-Tools mit zur Arbeit (BYOAI) – oft außerhalb zentraler Governance.",
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
              Genau diese Lücke schließt NodeX im operativen Unternehmensalltag.
            </div>
          </div>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Die Lösung
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              NodeX schafft eine zentrale Logik für Governance, Sicherheit und
              Nachvollziehbarkeit.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              NodeX legt Steuerung, Audits, Rollen und Zugriffslogik in einen
              zentralen Produktiv-Layer. So können Teams schneller arbeiten,
              ohne dass Sicherheits-, Datenschutz- oder Freigabefragen nebenher
              aus dem Ruder laufen.
            </p>
            <ul className="space-y-3 text-base text-text-muted-light">
              {[
                "Zentrale Regeln für Modelle, Daten und Rollen statt lokaler Einzelentscheidungen.",
                "Nachvollziehbarkeit über Prompts, Dateien und Kosten statt Blackbox-Nutzung.",
                "Sichere Freigaben für Teams, Projekte und Workflows statt Grauzonen im Betrieb.",
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

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card theme="light" className="p-6">
            <div className="text-lg font-semibold text-text-primary-light">
              Workspace Layer
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
              Outcome: Teams arbeiten schneller, ohne dass Nutzung und
              Verantwortung auseinanderlaufen.
            </div>
          </Card>

          <Card theme="light" className="p-6">
            <div className="text-lg font-semibold text-text-primary-light">
              Gateway Layer
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
              Outcome: Entwicklung und Betrieb werden belastbar, statt bei
              jedem Modellwechsel neu instabil zu werden.
            </div>
          </Card>
        </div>
      </Region>

      <UnderHeroSection />
      <ProductivitySection />

      <Region variant="light" tone="base">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Die Folge ohne NodeX: Schatten-KI, Tool-Wildwuchs und riskante
            Workarounds.
          </h3>
          <p className="text-base leading-relaxed text-text-muted-light">
            Ohne zentrale Governance und Transparenz entsteht ein Mix aus Tools,
            Modellen und Datenwegen, der schwer auditierbar, teuer und unsicher
            wird.
          </p>
          <ul className="space-y-2 text-base text-text-muted-light">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              <span>
                Keine Transparenz über Prompts, Datenabflüsse, Entscheidungen
                und Outputs
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              <span>
                Kein belastbarer Umgang mit Ausfällen, Modellwechseln oder
                Qualitätsdrift
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              <span>
                Kein einheitlicher Regelrahmen für Teams, Anwendungen und
                sensible Daten
              </span>
            </li>
          </ul>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Vor dem Produkt
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Viele NodeX-Projekte beginnen nicht mit Technik, sondern mit
              Einführungs- und Governance-Fragen.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Wer produktive KI sauber betreiben will, muss oft zuerst
              priorisieren, Zuständigkeiten klären und einen belastbaren
              Einführungsweg definieren. Genau dafür gibt es die KI-Beratung von
              Opny. NodeX operationalisiert diese Struktur anschließend im
              Betrieb.
            </p>
          </div>

          <Card theme="light" className="p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
              Brücke zur Beratung
            </div>
            <div className="mt-4 space-y-3 text-base text-text-muted-light">
              {[
                "Die Beratung schafft Zielbild, Priorisierung und Governance.",
                "NodeX übersetzt diese Logik in kontrollierte operative Nutzung.",
                "So entsteht kein loses Produktprojekt, sondern ein belastbarer Transformationspfad.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button
                href="/leistungen/ki-beratung"
                variant="secondary"
                theme="light"
              >
                KI-Beratung ansehen
              </Button>
            </div>
          </Card>
        </div>
      </Region>

      <AiGatewaySection />

      <Region variant="light" tone="base">
        <div className="relative space-y-6">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Technisches Fundament
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Technik ist in NodeX kein Selbstzweck, sondern Voraussetzung für
            kontrollierten Unternehmensbetrieb.
          </h2>
          <p className="text-base leading-relaxed text-text-muted-light">
            Routing, Fallback, Regeln und Observability sind nur dann wertvoll,
            wenn sie im Alltag zu mehr Stabilität, klareren Entscheidungen und
            weniger unsicheren Ausnahmen führen.
          </p>
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Policies & Guardrails",
              bullets: [
                "Regeln für Input, Output und sensible Inhalte",
                "Freigaben je Rolle, Team und Use Case",
                "Weniger Fehlversuche und weniger riskante Ausnahmen",
              ],
            },
            {
              title: "Routing & Fallback",
              bullets: [
                "Modellwahl nach Regeln und Kontext",
                "Stabilere Nutzung trotz Ausfällen oder Qualitätsdrift",
                "Weniger Unterbrechungen im operativen Alltag",
              ],
            },
            {
              title: "Audit & Transparenz",
              bullets: [
                "Nachvollziehbarkeit über Nutzung, Kosten und Ereignisse",
                "Gemeinsame Sicht für IT, Fachbereiche und Management",
                "Mehr Entscheidbarkeit statt Blackbox-Betrieb",
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
      </Region>

      <Region variant="light" tone="surface">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-4 text-left sm:space-y-5">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Outcomes & Teams
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              NodeX schafft dort Wirkung, wo KI produktiv werden soll, ohne die
              Kontrolle zu verlieren.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Von Engineering bis Compliance hilft NodeX dabei, Nutzung,
              Governance und Plattformlogik in eine gemeinsame Betriebslogik zu
              bringen.
            </p>
          </div>

          <div className="mt-6 space-y-8 sm:space-y-10">
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "Produkt- & Entwicklungsteams",
                  text: "Schneller entwickeln, ohne dass Modellwahl, Wissen und Freigaben in neue Einzelwege zerfallen.",
                  bullets: [
                    "Kontrollierte Copilots für Code, Doku und Reviews",
                    "Wissen und RAG in nachvollziehbarer Nutzung statt Tool-Mix",
                  ],
                },
                {
                  title: "Operations & Fachbereiche",
                  text: "Wiederkehrende Aufgaben produktiv automatisieren, ohne die Kontrolle über Daten und Entscheidungen zu verlieren.",
                  bullets: [
                    "Dokumente, E-Mails und Tickets mit klaren Regeln unterstützen",
                    "Produktivität steigern, ohne neue Grauzonen zu erzeugen",
                  ],
                },
                {
                  title: "Compliance, Legal & Risiko",
                  text: "KI nutzen, ohne Audit-, Datenschutz- oder Freigaberisiken in die Fachbereiche zu verschieben.",
                  bullets: [
                    "Mehr Nachvollziehbarkeit bei Nutzung und Outputs",
                    "Weniger Schatten-KI und weniger unsichere Ausnahmen",
                  ],
                },
                {
                  title: "Regulierte Branchen",
                  text: "Kontrolle bei sensiblen Daten auch dort, wo Vorgaben, Revisionsdruck und Freigaben besonders hoch sind.",
                  bullets: [
                    "Belastbare Governance unter strengen Anforderungen",
                    "Produktive Nutzung statt Verzicht aus Unsicherheit",
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

      <MidPageCtaSection />
    </div>
  );
}
