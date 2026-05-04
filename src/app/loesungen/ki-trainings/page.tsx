import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CustomerReferencesStrip from "@/components/CustomerReferencesStrip";
import Region from "@/components/Region";
import { companyCtas } from "@/config/site";

export const metadata: Metadata = {
  title:
    "KI Trainings für Unternehmen | ChatGPT, Claude & Copilot | Opny",
  description:
    "Praxisnahe KI Trainings für Unternehmen: ChatGPT Training, Claude, Gemini und Microsoft Copilot Trainings sowie Prompt Engineering für Teams.",
  alternates: {
    canonical: "https://www.opny.ai/loesungen/ki-trainings",
  },
  openGraph: {
    title:
      "KI Trainings für Unternehmen | ChatGPT, Claude & Copilot | Opny",
    description:
      "Praxisnahe KI Trainings für Unternehmen: ChatGPT Training, Claude, Gemini und Microsoft Copilot Trainings sowie Prompt Engineering für Teams.",
    url: "https://www.opny.ai/loesungen/ki-trainings",
    siteName: "Opny",
    locale: "de_DE",
    type: "website",
  },
};

const problems = [
  "Unklare Nutzung von ChatGPT & Co.",
  "Unsicherheit bei sensiblen Daten",
  "Keine einheitlichen Workflows",
  "Unterschiedliche Wissensstände im Team",
];

const useCases = [
  "Bessere Prompts",
  "Schnellere Recherche",
  "Bessere Dokumentenzusammenfassungen",
  "Effizientere E-Mails und Konzepte",
  "Sicherer Umgang mit sensiblen Daten",
  "Gemeinsame Prompt- und Workflow-Bibliotheken",
];

const tools = [
  {
    title: "ChatGPT Training",
    text: "Für Recherche, Texte, Analyse, Konzepte und wiederholbare Team-Workflows.",
  },
  {
    title: "Claude Training",
    text: "Für lange Dokumente, anspruchsvolle Zusammenfassungen und strukturierte Wissensarbeit.",
  },
  {
    title: "Google Gemini Training",
    text: "Für produktive Nutzung im Google-Umfeld und sichere Anwendung in Fachbereichen.",
  },
  {
    title: "Microsoft Copilot Training",
    text: "Für Teams, die Copilot sicher in Office-, Wissens- und Kommunikationsprozesse integrieren.",
  },
  {
    title: "Prompt Engineering Training",
    text: "Für bessere Prompts, klare Vorlagen und belastbare Prompt-Bibliotheken.",
  },
];

const audiences = [
  "Fachbereiche",
  "Marketing & Vertrieb",
  "Office & Verwaltung",
  "Projektmanagement",
  "IT & Digitalisierung",
  "Führungskräfte",
];

const faq = [
  [
    "Was ist ein KI Training für Unternehmen?",
    "Ein KI Training für Unternehmen befähigt Mitarbeitende, generative KI sicher, produktiv und mit klaren Workflows im Arbeitsalltag einzusetzen.",
  ],
  [
    "Bietet Opny eine KI Schulung für Unternehmen an?",
    "Ja. Unsere KI Schulung für Unternehmen wird an Rollen, Tools, Datenregeln und konkrete Arbeitsprozesse angepasst.",
  ],
  [
    "Geht es auch um Datenschutz?",
    "Ja. Sensible Daten, personenbezogene Informationen, interne Regeln und Grenzen öffentlicher KI-Tools sind fester Bestandteil.",
  ],
  [
    "Können KI-Trainings mit KI-Beratung kombiniert werden?",
    "Ja. Beratung, Use-Case-Priorisierung, KI Governance und Trainings lassen sich zu einem strukturierten Einführungsprogramm verbinden.",
  ],
];

export default function KiTrainingsPage() {
  return (
    <div className="flex flex-col">
      <Region variant="light" tone="base">
        <div className="max-w-4xl space-y-6">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            KI-Trainings
          </div>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary-light md:text-5xl">
            KI-Trainings für Unternehmen – ChatGPT, Copilot & GenAI produktiv einsetzen
          </h1>
          <p className="max-w-[68ch] text-lg leading-relaxed text-text-muted-light md:text-xl">
            Wir machen Ihre Teams fit für den sicheren und produktiven Einsatz von KI – von ChatGPT über Claude bis Microsoft Copilot.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={companyCtas.generalInquiry}
              className="inline-flex items-center justify-center rounded-button bg-text-primary-light px-5 py-2.5 text-sm font-semibold text-text-primary-dark shadow-card-light transition hover:opacity-90"
            >
              Training anfragen
            </a>
            <Button href="/loesungen/ki-beratung" variant="secondary" theme="light">
              KI-Beratung ansehen
            </Button>
          </div>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Ausgangslage
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Viele Unternehmen nutzen KI – aber ohne Struktur
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem) => (
              <Card key={problem} theme="light" className="p-5">
                <h3 className="text-lg font-semibold text-text-primary-light">
                  {problem}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="base">
        <div className="max-w-4xl space-y-4">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Trainingsansatz
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Unsere KI-Trainings bringen Struktur, Sicherheit und echte Produktivität
          </h2>
          <p className="text-base leading-relaxed text-text-muted-light">
            Jedes KI Training Unternehmen braucht einen klaren Bezug zum Alltag:
            welche Aufgaben sinnvoll sind, welche Daten nicht in öffentliche
            Tools gehören und welche Ergebnisse als gut gelten. Unsere KI
            Schulung Unternehmen verbindet ChatGPT Training, Copilot Training
            und GenAI-Workflows mit konkreten Rollen, Beispielen und Regeln.
          </p>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Von einzelnen KI-Experimenten zu nutzbaren Workflows
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {useCases.map((item) => (
              <Card key={item} theme="light" className="p-5">
                <h3 className="text-lg font-semibold text-text-primary-light">
                  {item}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region id="formate" variant="light" tone="base">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Tools
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Trainings für die wichtigsten KI-Tools im Unternehmen
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {tools.map((tool) => (
              <Card key={tool.title} theme="light" className="flex h-full flex-col p-5">
                <h3 className="text-xl font-semibold text-text-primary-light">
                  {tool.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted-light">
                  {tool.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Zielgruppen
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Für Teams, Fachbereiche und Führungskräfte
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Unsere KI-Trainings sind speziell auf Unternehmen ausgerichtet – praxisnah, sicher und direkt in bestehende Arbeitsprozesse integrierbar.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((audience) => (
              <Card key={audience} theme="light" className="p-5">
                <h3 className="text-lg font-semibold text-text-primary-light">
                  {audience}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <CustomerReferencesStrip containerClassName="py-10 md:py-14" />

      <Region variant="light" tone="base">
        <div className="grid gap-4 md:grid-cols-2">
          {faq.map(([question, answer]) => (
            <Card key={question} theme="light" className="p-5">
              <h2 className="text-lg font-semibold text-text-primary-light">
                {question}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted-light">
                {answer}
              </p>
            </Card>
          ))}
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Starten Sie strukturiert mit KI in Ihrem Unternehmen
          </h2>
          <p className="text-base leading-relaxed text-text-muted-light">
            Wir entwickeln ein Trainingsformat, das zu Ihren Tools, Teams und Datenschutzanforderungen passt.
          </p>
          <a
            href={companyCtas.generalInquiry}
            className="inline-flex items-center justify-center rounded-button bg-text-primary-light px-5 py-2.5 text-sm font-semibold text-text-primary-dark shadow-card-light transition hover:opacity-90"
          >
            Training anfragen
          </a>
        </div>
      </Region>
    </div>
  );
}
