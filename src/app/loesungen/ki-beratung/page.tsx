import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CustomerReferencesStrip from "@/components/CustomerReferencesStrip";
import Region from "@/components/Region";
import { companyCtas } from "@/config/site";

export const metadata: Metadata = {
  title: "KI-Beratung für Unternehmen | KI Strategie, Governance & Umsetzung",
  description:
    "Opny begleitet Unternehmen bei KI Strategie, KI Einführung, KI Governance und ChatGPT Beratung – von Use Cases bis skalierbarer Umsetzung.",
  alternates: {
    canonical: "https://www.opny.ai/loesungen/ki-beratung",
  },
  openGraph: {
    title: "KI-Beratung für Unternehmen | KI Strategie, Governance & Umsetzung",
    description:
      "Opny begleitet Unternehmen bei KI Strategie, KI Einführung, KI Governance und ChatGPT Beratung – von Use Cases bis skalierbarer Umsetzung.",
    url: "https://www.opny.ai/loesungen/ki-beratung",
    siteName: "Opny",
    locale: "de_DE",
    type: "website",
  },
};

const problems = [
  "Keine KI-Strategie",
  "Schatten-KI im Unternehmen",
  "Datenschutzrisiken",
  "Unklare Tools und Kosten",
  "Fehlende Akzeptanz im Team",
  "Keine skalierbare Umsetzung",
];

const process = [
  "Ausgangslage verstehen",
  "KI-Potenziale und Risiken identifizieren",
  "Use Cases priorisieren",
  "Pilotprojekt aufsetzen",
  "Governance und Datenschutz sauber definieren",
  "Rollout mit Trainings und Betrieb vorbereiten",
];

const faq = [
  {
    q: "Was macht eine KI-Beratung für Unternehmen?",
    a: "Eine KI-Beratung schafft Klarheit über Strategie, Use Cases, Governance, Datenschutz und Umsetzung. Ziel ist ein kontrollierter Weg von der Idee in den produktiven Betrieb.",
  },
  {
    q: "Wann lohnt sich KI-Beratung?",
    a: "Sie lohnt sich, wenn KI bereits genutzt wird, aber Zielbild, Verantwortlichkeiten, Tool-Auswahl oder Datenschutzfragen noch nicht sauber geklärt sind.",
  },
  {
    q: "Unterstützt Opny auch bei ChatGPT, Claude oder Microsoft Copilot?",
    a: "Ja. Wir betrachten bestehende Tools und prüfen, wie ChatGPT, Claude, Copilot oder andere Modelle sinnvoll und sicher in Arbeitsprozesse eingebunden werden können.",
  },
  {
    q: "Wie berücksichtigt ihr Datenschutz und Compliance?",
    a: "Wir arbeiten DSGVO-orientiert und betrachten Datenklassen, Freigaben, Rollen, Tool-Risiken und kontrollierte Datenflüsse. Konkrete Bewertung hängt vom Setup ab.",
  },
  {
    q: "Können Trainings und Umsetzung kombiniert werden?",
    a: "Ja. Beratung, Pilotprojekt und KI-Trainings lassen sich kombinieren, damit Teams nicht nur ein Konzept erhalten, sondern KI praktisch anwenden können.",
  },
  {
    q: "Welche Rolle spielt NodeX?",
    a: "NodeX kann die technische Kontrollschicht für produktive KI-Nutzung bilden: mit Rollen, Regeln, Audit Logs, Kostenkontrolle und zentraler Nutzung.",
  },
];

export default function KiBeratungPage() {
  return (
    <div className="flex flex-col">
      <Region variant="light" tone="base">
        <div className="max-w-4xl space-y-6">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            KI-Beratung
          </div>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary-light md:text-5xl">
            KI-Beratung für Unternehmen, die nicht nur testen, sondern sauber umsetzen wollen.
          </h1>
          <p className="max-w-[68ch] text-lg leading-relaxed text-text-muted-light md:text-xl">
            Wir helfen Ihnen, KI strategisch, datenschutzorientiert und praxistauglich in Ihr Unternehmen zu integrieren – mit klarer KI Strategie, KI Governance, ChatGPT Beratung, Trainings und optional NodeX als technischer Kontrollschicht.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={companyCtas.consultingInquiry}
              className="inline-flex items-center justify-center rounded-button bg-text-primary-light px-5 py-2.5 text-sm font-semibold text-text-primary-dark shadow-card-light transition hover:opacity-90"
            >
              Erstgespräch anfragen
            </a>
            <a
              href="#vorgehen"
              className="inline-flex items-center justify-center rounded-button border border-border-subtle-light/20 px-5 py-2.5 text-sm font-semibold text-text-primary-light transition hover:border-border-subtle-light/35"
            >
              Vorgehen ansehen
            </a>
          </div>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Viele Unternehmen nutzen KI bereits – aber ohne klare Richtung.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {problems.map((problem) => (
              <Card key={problem} theme="light" className="p-5">
                <h3 className="text-lg font-semibold text-text-primary-light">{problem}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted-light">
                  Ohne gemeinsamen Rahmen entstehen Risiken, Reibung und viele Einzelentscheidungen.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Wir machen aus KI-Experimenten einen kontrollierten Umsetzungsplan.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Opny verbindet KI Beratung für Unternehmen, Use-Case-Priorisierung, KI Governance, Tool- und Modellstrategie, Pilotprojekt, Rollout und Training zu einem pragmatischen Beratungsansatz für die KI Einführung im Unternehmen.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Analyse", "Use-Case-Priorisierung", "Governance", "Tool- und Modellstrategie", "Pilotprojekt", "Rollout und Training"].map((item) => (
              <Card key={item} theme="light" className="p-5">
                <div className="text-base font-semibold text-text-primary-light">{item}</div>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region id="vorgehen" variant="light" tone="base">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Vorgehen in sechs klaren Schritten
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {process.map((step, index) => (
              <Card key={step} theme="light" className="p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-text-primary-light text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-text-primary-light">{step}</h3>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Wenn KI produktiv genutzt wird, braucht sie eine Kontrollschicht.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Für Unternehmen, die KI nicht nur beraten, sondern betreiben wollen, kann NodeX die technische Grundlage schaffen: zentrale KI-Nutzung, kontrollierte Datenflüsse, Rollen, Regeln, Audit Logs und Kostentransparenz.
            </p>
          </div>
          <Button href="/produkte/nodex" variant="primary" theme="light">
            NodeX ansehen
          </Button>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <div className="grid gap-5 md:grid-cols-5">
          {["Geschäftsführung", "IT-Leitung", "Datenschutz & Compliance", "Fachbereiche", "Mittelstand"].map((item) => (
            <Card key={item} theme="light" className="p-5">
              <h2 className="text-lg font-semibold text-text-primary-light">{item}</h2>
            </Card>
          ))}
        </div>
      </Region>

      <CustomerReferencesStrip containerClassName="py-10 md:py-14" />

      <Region variant="light" tone="base">
        <div className="grid gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <Card key={item.q} theme="light" className="p-5">
              <h2 className="text-lg font-semibold text-text-primary-light">{item.q}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted-light">{item.a}</p>
            </Card>
          ))}
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Lassen Sie uns prüfen, wo KI in Ihrem Unternehmen echten Nutzen schafft.
          </h2>
          <a
            href={companyCtas.consultingInquiry}
            className="inline-flex items-center justify-center rounded-button bg-text-primary-light px-5 py-2.5 text-sm font-semibold text-text-primary-dark shadow-card-light transition hover:opacity-90"
          >
            Erstgespräch anfragen
          </a>
        </div>
      </Region>
    </div>
  );
}
