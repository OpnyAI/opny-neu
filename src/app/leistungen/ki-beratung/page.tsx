import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Region from "@/components/Region";
import { companyCtas } from "@/config/site";

export const metadata: Metadata = {
  title: "KI-Beratung für Unternehmen: Einführung, Governance und Struktur",
  description:
    "KI-Beratung für Unternehmen von Opny: Zielbild, Use-Case-Priorisierung, Governance, Datenschutz und Einführungslogik für eine sichere und produktive KI-Nutzung im Unternehmensalltag.",
  alternates: {
    canonical: "https://www.opny.ai/leistungen/ki-beratung",
  },
  openGraph: {
    title: "KI-Beratung für Unternehmen: Einführung, Governance und Struktur",
    description:
      "KI-Beratung für Unternehmen von Opny: Zielbild, Use-Case-Priorisierung, Governance, Datenschutz und Einführungslogik für eine sichere und produktive KI-Nutzung im Unternehmensalltag.",
    url: "https://www.opny.ai/leistungen/ki-beratung",
  },
};

export default function KiBeratungPage() {
  return (
    <div className="flex flex-col">
      <Region variant="light" tone="base">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-[580px] space-y-6">
            <div className="space-y-4">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
                KI-Beratung für Unternehmen
              </div>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary-light md:text-5xl">
                KI ist relevant. Die eigentliche Frage ist, wie sie im
                Unternehmen belastbar eingeführt werden soll.
              </h1>
              <p className="text-base leading-relaxed text-text-muted-light md:text-lg">
                Genau hier setzt die Beratung an: wenn Use Cases da sind,
                Entscheidungen anstehen und gleichzeitig Zielbild, Governance,
                Datenschutz und Einführungslogik noch nicht tragfähig
                zusammenlaufen.
              </p>
            </div>

            <ul className="space-y-3 text-base text-text-muted-light">
              {[
                "Schafft einen realistischen Weg von der Idee in die Einführung",
                "Ordnet Governance, Zuständigkeiten und Datenschutz sauber ein",
                "Bereitet die Grundlage für tragfähigen späteren Betrieb",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href={companyCtas.consultingInquiry}
                className="inline-flex items-center justify-center rounded-button px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent bg-white text-[#0B0F1A] border border-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:bg-white/95"
              >
                Beratungsgespräch anfragen
              </a>
              <Button href="/leistungen/nodex" variant="secondary" theme="light">
                NodeX ansehen
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <Card theme="light" className="p-6">
              <div className="text-lg font-semibold text-text-primary-light">
                Für Management, IT und Fachbereiche
              </div>
              <p className="mt-3 text-base text-text-muted-light">
                Die Einführung produktiver KI scheitert oft nicht an
                Möglichkeiten, sondern an fehlender gemeinsamer Richtung
                zwischen Entscheidungsebene, Fachbereichen und IT.
              </p>
            </Card>
            <Card theme="light" className="p-6">
              <div className="text-lg font-semibold text-text-primary-light">
                Umsetzung statt PowerPoint
              </div>
              <p className="mt-3 text-base text-text-muted-light">
                Wir arbeiten an konkreten Einführungsfragen, Governance-Logik
                und priorisierten Anwendungsfällen, nicht an abstrakten
                Strategiepapieren.
              </p>
            </Card>
          </div>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Problem
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Genau hier kippen viele KI-Initiativen: Es gibt Interesse und
              Druck, aber keinen belastbaren Einführungsweg.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Use Cases sind schnell benannt. Schwieriger wird es bei
              Priorisierung, Verantwortlichkeiten, Datenschutz, Governance und
              der Frage, wie aus ersten Vorhaben später ein tragfähiger Betrieb
              wird.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Use Cases sind da, aber Zielbild, Priorisierung und Entscheidungslogik fehlen.",
              "IT, Datenschutz und Fachbereiche ziehen nicht in dieselbe Richtung.",
              "Tool-Wildwuchs oder erste Schatten-KI entstehen, bevor Regeln tragfähig aufgebaut sind.",
              "Es fehlt ein belastbarer Weg von der Idee über Governance bis zum operativen Betrieb.",
            ].map((item) => (
              <Card key={item} theme="light" className="p-6">
                <div className="flex items-start gap-3 text-base leading-relaxed text-text-muted-light">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Leistungsumfang
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Beratung, die nach jedem Schritt mehr Klarheit und weniger
              organisatorisches Risiko schafft.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "KI-Strategie",
                text: "Sie gewinnen ein klares Zielbild und wissen, worauf sich Investition und Aufmerksamkeit zuerst konzentrieren sollten.",
              },
              {
                title: "Use-Case-Workshops",
                text: "Sie priorisieren Anwendungsfälle nach Wirkung, Umsetzbarkeit und organisatorischer Tragfähigkeit statt nach Bauchgefühl.",
              },
              {
                title: "Governance-Setup",
                text: "Sie schaffen belastbare Regeln für Rollen, Freigaben und Verantwortlichkeiten, bevor Nutzung unkontrolliert wächst.",
              },
              {
                title: "Datenschutzkonforme Einführung",
                text: "Sie übersetzen Datenschutz, Zugriffe und Datenflüsse in eine Einführungslogik, die in der Praxis funktioniert.",
              },
              {
                title: "Operative Begleitung",
                text: "Sie kommen aus der Konzeptphase in einen belastbaren Rollout, der intern anschlussfähig und entscheidbar bleibt.",
              },
            ].map((card) => (
              <Card key={card.title} theme="light" className="h-full p-6 md:p-7">
                <h3 className="text-xl font-semibold leading-tight text-text-primary-light md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-text-muted-light md:text-base">
                  {card.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="base">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Zusammenarbeit
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Von der ersten Klärung bis zu einem Transformationspfad, der im
              Unternehmen trägt.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Die Beratung schafft nicht nur Analyse, sondern Entscheidung,
              Ausrichtung und Einführungslogik. Das gibt Management, IT und
              Fachbereichen Sicherheit für die nächsten realen Schritte.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "1. Zielbild schärfen",
                text: "Rahmen, Ambition, Risikofelder und Zielgruppen werden so definiert, dass später keine Grundsatzfragen offenbleiben.",
              },
              {
                title: "2. Relevante Use Cases auswählen",
                text: "Anwendungsfälle werden nach Wirkung, Machbarkeit und Steuerbarkeit priorisiert, damit der Einstieg tragfähig bleibt.",
              },
              {
                title: "3. Governance und Rollout aufsetzen",
                text: "Verantwortung, Freigaben, Datenschutz und Einführungsweg werden in eine gemeinsame Logik gebracht.",
              },
              {
                title: "4. Operativ begleiten",
                text: "Entscheidungen werden in Prozesse, Teams und einen realistischen nächsten Betriebszustand übersetzt.",
              },
            ].map((item) => (
              <Card key={item.title} theme="light" className="p-6 md:p-7">
                <h3 className="text-xl font-semibold leading-tight text-text-primary-light md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-muted-light">
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Von Beratung zu Betrieb
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Die Beratung endet nicht beim Konzept. Sie schafft die Struktur,
              auf der später kontrollierter Betrieb möglich wird.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Zielbild, Priorisierung, Governance und Einführungslogik sind die
              Vorarbeit für belastbaren operativen Einsatz. NodeX kann diese
              Struktur später im Betrieb abbilden und kontrolliert
              operationalisieren.
            </p>
          </div>

          <Card theme="light" className="p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
              Brücke zu NodeX
            </div>
            <div className="mt-4 space-y-3 text-base text-text-muted-light">
              {[
                "Die Beratung klärt zuerst, was eingeführt werden soll und unter welchen Regeln.",
                "NodeX bildet diese Governance- und Betriebslogik im Alltag operativ ab.",
                "Beratung und Produkt greifen damit bewusst ineinander statt zufällig nebeneinander zu stehen.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button href="/leistungen/nodex" variant="secondary" theme="light">
                NodeX ansehen
              </Button>
            </div>
          </Card>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Wenn KI-Einführung intern drängt, ist jetzt der Moment für einen
            klaren nächsten Schritt.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-text-muted-light">
            Im Beratungsgespräch klären wir Zielbild, Prioritäten,
            Governance-Fragen und den realistischen Einführungsweg. Wenn die
            operative Plattformlogik bereits mitgedacht werden soll, führt der
            zweite Schritt zu NodeX.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={companyCtas.consultingInquiry}
              className="inline-flex items-center justify-center rounded-button px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent bg-white text-[#0B0F1A] border border-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:bg-white/95"
            >
              Beratungsgespräch anfragen
            </a>
            <Button href="/leistungen/nodex" variant="secondary" theme="light">
              NodeX ansehen
            </Button>
          </div>
        </div>
      </Region>
    </div>
  );
}
