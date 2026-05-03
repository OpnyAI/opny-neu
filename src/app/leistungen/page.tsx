import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Region from "@/components/Region";
import { companyCtas } from "@/config/site";

export const metadata: Metadata = {
  title:
    "KI Lösungen für Unternehmen | Beratung, AI Plattform & Governance | Opny",
  description:
    "Von der KI-Strategie bis zur operativen Plattform: Opny bietet strukturierte KI-Lösungen für Unternehmen – inklusive Governance, Use Cases und skalierbarer Umsetzung.",
  alternates: {
    canonical: "https://www.opny.ai/leistungen",
  },
  openGraph: {
    title:
      "KI Lösungen für Unternehmen | Beratung, AI Plattform & Governance | Opny",
    description:
      "Von der KI-Strategie bis zur operativen Plattform: Opny bietet strukturierte KI-Lösungen für Unternehmen – inklusive Governance, Use Cases und skalierbarer Umsetzung.",
    url: "https://www.opny.ai/leistungen",
    siteName: "Opny",
    locale: "de_DE",
    type: "website",
  },
};

export default function LeistungenPage() {
  return (
    <div className="flex flex-col">
      <Region variant="light" tone="base">
        <div className="mx-auto max-w-4xl space-y-5 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Leistungen
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-text-primary-light md:text-5xl">
            Opny verbindet Produktlogik und Einführungskompetenz.
          </h1>
          <p className="text-base leading-relaxed text-text-muted-light md:text-lg">
            Unsere Leistungen greifen bewusst ineinander: NodeX für den
            kontrollierten Betrieb produktiver KI und KI-Beratung für Strategie,
            Governance und belastbare Einführung im Unternehmen.
          </p>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card theme="light" className="flex h-full flex-col p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
              NodeX
            </div>
            <h2 className="mt-4 text-[1.65rem] font-semibold leading-tight text-text-primary-light md:text-3xl">
              Die zentrale Produktseite für kontrollierte KI-Nutzung
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted-light">
              NodeX bündelt AI Gateway, Governance, Routing, Fallback,
              Sicherheit, Transparenz und Team-Produktivität in einer
              konsistenten Produktlogik.
            </p>
            <ul className="mt-5 space-y-2 text-base text-text-muted-light">
              {[
                "Produktseite für den operativen KI-Layer im Unternehmen",
                "Richtlinien, Routing, Monitoring und sichere Nutzung in einem System",
                "Primärer Einstieg für produktnahe Details und Plattformfähigkeiten",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/produkte/nodex" variant="primary" theme="light">
                NodeX öffnen
              </Button>
            </div>
          </Card>

          <Card theme="light" className="flex h-full flex-col p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
              KI-Beratung für Unternehmen
            </div>
            <h2 className="mt-4 text-[1.65rem] font-semibold leading-tight text-text-primary-light md:text-3xl">
              Von Strategie bis Governance-Setup und operativer Einführung
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted-light">
              Opny begleitet Unternehmen bei Use-Case-Priorisierung,
              Governance-Aufbau, datenschutzkonformer Einführung und
              organisationsfähiger KI-Umsetzung.
            </p>
            <ul className="mt-5 space-y-2 text-base text-text-muted-light">
              {[
                "Use-Case-Workshops und Einführungsfahrplan",
                "Governance, Rollen und Datenschutz in belastbare Prozesse übersetzen",
                "Begleitung bis zur tragfähigen Nutzung in Teams und Fachbereichen",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button
                href="/loesungen/ki-beratung"
                variant="primary"
                theme="light"
              >
                KI-Beratung öffnen
              </Button>
            </div>
          </Card>
        </div>
      </Region>

      <Region variant="light" tone="base">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Sie wissen bereits, wo der Schwerpunkt liegt?
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-text-muted-light">
            Dann steigen Sie direkt in NodeX oder in die Beratungsseite ein. Für
            eine erste Einordnung reicht auch ein gemeinsames Erstgespräch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/produkte/nodex" variant="primary" theme="light">
              Zu NodeX
            </Button>
            <Button
              href="/loesungen/ki-beratung"
              variant="secondary"
              theme="light"
            >
              Zur KI-Beratung
            </Button>
            <a
              href={companyCtas.generalInquiry}
              className="inline-flex items-center justify-center rounded-button px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent bg-white text-[#0B0F1A] border border-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:bg-white/95"
            >
              Erstgespräch anfragen
            </a>
          </div>
        </div>
      </Region>
    </div>
  );
}
