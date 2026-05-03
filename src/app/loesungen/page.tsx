import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CustomerReferencesStrip from "@/components/CustomerReferencesStrip";
import Region from "@/components/Region";
import { companyCtas } from "@/config/site";

export const metadata: Metadata = {
  title:
    "KI-Lösungen für Unternehmen | Beratung, Trainings & sichere KI-Nutzung",
  description:
    "Opny unterstützt Unternehmen bei der kontrollierten Einführung von KI – mit KI-Beratung, praxisnahen KI-Trainings und NodeX für sichere, steuerbare KI-Nutzung.",
  alternates: {
    canonical: "https://www.opny.ai/loesungen",
  },
  openGraph: {
    title:
      "KI-Lösungen für Unternehmen | Beratung, Trainings & sichere KI-Nutzung",
    description:
      "Opny unterstützt Unternehmen bei der kontrollierten Einführung von KI – mit KI-Beratung, praxisnahen KI-Trainings und NodeX für sichere, steuerbare KI-Nutzung.",
    url: "https://www.opny.ai/loesungen",
    siteName: "Opny",
    locale: "de_DE",
    type: "website",
  },
};

const solutions = [
  {
    title: "KI-Beratung",
    text: "Strategie, Use Cases, Governance und Pilotpfad für Unternehmen, die KI kontrolliert einführen wollen.",
    benefit: "Von Einzelinitiativen zu einem entscheidbaren Umsetzungsplan.",
    href: "/loesungen/ki-beratung",
    cta: "KI-Beratung ansehen",
  },
  {
    title: "KI-Trainings",
    text: "Praxisnahe Schulungen für ChatGPT, Claude, Copilot, Prompt Engineering und GenAI-Workflows.",
    benefit: "Teams lernen, KI sicher und produktiv im Arbeitsalltag zu nutzen.",
    href: "/loesungen/ki-trainings",
    cta: "KI-Trainings ansehen",
  },
  {
    title: "NodeX",
    text: "Die zentrale Kontrollschicht für KI-Nutzung, Datenflüsse, Rollen, Audit Logs und Kostenkontrolle.",
    benefit: "Produktive KI nutzen, ohne Kontrolle über Daten und Nutzung zu verlieren.",
    href: "/produkte/nodex",
    cta: "NodeX ansehen",
  },
];

export default function LoesungenPage() {
  return (
    <div className="flex flex-col">
      <Region variant="light" tone="base">
        <div className="max-w-4xl space-y-6">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Lösungen
          </div>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary-light md:text-5xl">
            KI im Unternehmen einführen – kontrolliert, sicher und mit messbarem Nutzen.
          </h1>
          <p className="max-w-[62ch] text-lg leading-relaxed text-text-muted-light md:text-xl">
            Opny unterstützt Unternehmen dabei, KI nicht nur zu testen, sondern produktiv, datenschutzorientiert und steuerbar im Arbeitsalltag zu nutzen.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/loesungen/ki-beratung" variant="primary" theme="light">
              KI-Beratung anfragen
            </Button>
            <Button href="/loesungen/ki-trainings" variant="secondary" theme="light">
              KI-Trainings ansehen
            </Button>
          </div>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((solution) => (
            <Card key={solution.title} theme="light" className="flex h-full flex-col p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-text-primary-light">
                {solution.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-text-muted-light">
                {solution.text}
              </p>
              <p className="mt-4 text-sm font-medium text-text-primary-light">
                {solution.benefit}
              </p>
              <div className="mt-6">
                <Button href={solution.href} variant="secondary" theme="light">
                  {solution.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Region>

      <CustomerReferencesStrip containerClassName="py-10 md:py-14" />

      <Region variant="light" tone="alt">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Lassen Sie uns prüfen, welcher KI-Pfad zu Ihrem Unternehmen passt.
          </h2>
          <p className="text-base leading-relaxed text-text-muted-light">
            Ob Beratung, Training oder NodeX: Der richtige Einstieg hängt von Ihrer Ausgangslage, Ihren Datenflüssen und Ihren Teams ab.
          </p>
          <a
            href={companyCtas.generalInquiry}
            className="inline-flex items-center justify-center rounded-button bg-text-primary-light px-5 py-2.5 text-sm font-semibold text-text-primary-dark shadow-card-light transition hover:opacity-90"
          >
            Erstgespräch anfragen
          </a>
        </div>
      </Region>
    </div>
  );
}
