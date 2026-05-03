import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CustomerReferencesStrip from "@/components/CustomerReferencesStrip";
import Region from "@/components/Region";
import { companyCtas } from "@/config/site";

export const metadata: Metadata = {
  title: "KI-Trainings für Unternehmen | ChatGPT, Claude & GenAI Schulungen",
  description:
    "Praxisnahe KI-Trainings für Unternehmen: ChatGPT, Claude, Prompt Engineering, GenAI-Workflows und AI Leadership – verständlich, sicher und direkt im Arbeitsalltag nutzbar.",
  alternates: {
    canonical: "https://www.opny.ai/loesungen/ki-trainings",
  },
  openGraph: {
    title: "KI-Trainings für Unternehmen | ChatGPT, Claude & GenAI Schulungen",
    description:
      "Praxisnahe KI-Trainings für Unternehmen: ChatGPT, Claude, Prompt Engineering, GenAI-Workflows und AI Leadership – verständlich, sicher und direkt im Arbeitsalltag nutzbar.",
    url: "https://www.opny.ai/loesungen/ki-trainings",
    siteName: "Opny",
    locale: "de_DE",
    type: "website",
  },
};

const formats = [
  {
    title: "ChatGPT Training für Unternehmen",
    text: "Für Teams, die ChatGPT professionell für Texte, Recherche, Analyse, Kommunikation und interne Workflows nutzen wollen.",
    bullets: ["Recherche und Analyse", "Texte und Kommunikation", "wiederverwendbare Workflows"],
  },
  {
    title: "Claude Training für Unternehmen",
    text: "Für Teams, die Claude für lange Dokumente, strukturierte Analysen, Zusammenfassungen und anspruchsvolle Wissensarbeit einsetzen möchten.",
    bullets: ["lange Dokumente auswerten", "Zusammenfassungen verbessern", "Wissensarbeit strukturieren"],
  },
  {
    title: "Prompt Engineering Training",
    text: "Für Mitarbeitende, die lernen wollen, bessere Prompts zu schreiben und wiederverwendbare KI-Workflows aufzubauen.",
    bullets: ["bessere Prompts", "Prompt-Templates", "Qualität systematisch verbessern"],
  },
  {
    title: "GenAI Training für Marketing & Vertrieb",
    text: "Für Teams, die Kampagnen, Sales-Texte, Kundenkommunikation und Content-Prozesse mit KI beschleunigen wollen.",
    bullets: ["Kampagnenideen", "Sales-Kommunikation", "Content-Prozesse"],
  },
  {
    title: "AI Leadership Executive Briefing",
    text: "Für Geschäftsführung und Führungskräfte, die strategisch verstehen wollen, welche Rolle KI für Prozesse, Wettbewerb und Organisation spielt.",
    bullets: ["strategische Einordnung", "Risiken und Chancen", "Entscheidungsgrundlagen"],
  },
  {
    title: "Microsoft Copilot Training",
    text: "Für Unternehmen, die Microsoft Copilot sicher, strukturiert und mit klaren Regeln in den Arbeitsalltag integrieren wollen.",
    bullets: ["Copilot im Alltag", "Regeln und Grenzen", "Office-Workflows"],
  },
];

const faq = [
  ["Was ist ein KI-Training für Unternehmen?", "Ein KI-Training zeigt Mitarbeitenden, wie sie Tools wie ChatGPT, Claude, Copilot und GenAI-Workflows sicher und produktiv einsetzen."],
  ["Bietet ihr ChatGPT Trainings an?", "Ja. Unsere ChatGPT Trainings sind praxisnah und orientieren sich an echten Aufgaben aus Teams, Kommunikation, Analyse und Wissensarbeit."],
  ["Bietet ihr Claude Trainings an?", "Ja. Claude Trainings eignen sich besonders für lange Dokumente, strukturierte Analysen und anspruchsvolle Zusammenfassungen."],
  ["Ist das Training für Anfänger geeignet?", "Ja. Wir passen das Niveau an Zielgruppe, Tools und Vorerfahrung an."],
  ["Geht es auch um Datenschutz?", "Ja. Wir behandeln sensible Daten, personenbezogene Informationen, interne Regeln und Grenzen öffentlicher KI-Tools."],
  ["Können Trainings branchenspezifisch angepasst werden?", "Ja. Inhalte, Beispiele und Übungen können auf Branche, Prozesse und Rollen zugeschnitten werden."],
  ["Können Trainings mit KI-Beratung kombiniert werden?", "Ja. Trainings lassen sich mit KI-Beratung, Use-Case-Priorisierung und Governance-Aufbau kombinieren."],
  ["Gibt es Trainings für Führungskräfte?", "Ja. Executive Briefings helfen Führungskräften, KI strategisch einzuordnen und sinnvolle nächste Schritte zu entscheiden."],
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
            Ihr Team nutzt KI – aber noch ohne System, Strategie und messbaren Output?
          </h1>
          <p className="max-w-[68ch] text-lg leading-relaxed text-text-muted-light md:text-xl">
            In unseren KI-Trainings lernen Teams, ChatGPT, Claude, Microsoft Copilot und GenAI-Workflows produktiv, sicher und sinnvoll im Arbeitsalltag einzusetzen.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={companyCtas.generalInquiry}
              className="inline-flex items-center justify-center rounded-button bg-text-primary-light px-5 py-2.5 text-sm font-semibold text-text-primary-dark shadow-card-light transition hover:opacity-90"
            >
              Training anfragen
            </a>
            <a
              href="#formate"
              className="inline-flex items-center justify-center rounded-button border border-border-subtle-light/20 px-5 py-2.5 text-sm font-semibold text-text-primary-light transition hover:border-border-subtle-light/35"
            >
              Trainingsformate ansehen
            </a>
          </div>
          <p className="text-sm font-medium text-text-secondary-light">
            Praxisnah. Unternehmensspezifisch. Auf echte Arbeitsprozesse ausgerichtet.
          </p>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Von einzelnen KI-Experimenten zu nutzbaren Workflows.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {["bessere Prompts", "schnellere Recherche", "bessere Dokumentenzusammenfassungen", "effizientere E-Mails und Konzepte", "sicherer Umgang mit sensiblen Daten", "gemeinsame Prompt- und Workflow-Bibliotheken"].map((item) => (
              <Card key={item} theme="light" className="p-5">
                <h3 className="text-lg font-semibold text-text-primary-light">{item}</h3>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region id="formate" variant="light" tone="base">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Trainingsformate für Teams, Führungskräfte und Fachbereiche
          </h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {formats.map((format) => (
              <Card key={format.title} theme="light" className="flex h-full flex-col p-5">
                <h3 className="text-xl font-semibold text-text-primary-light">{format.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted-light">{format.text}</p>
                <ul className="mt-4 space-y-2 text-sm text-text-muted-light">
                  {format.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <a href={companyCtas.generalInquiry} className="mt-5 text-sm font-semibold text-text-primary-light underline">
                  Training anfragen
                </a>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Für wen unsere KI-Trainings geeignet sind
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {["Geschäftsführung & Führungskräfte", "Marketing & Vertrieb", "Office & Verwaltung", "Projektmanagement", "IT & Digitalisierung", "KMU-Teams"].map((item) => (
              <Card key={item} theme="light" className="p-5">
                <h3 className="text-lg font-semibold text-text-primary-light">{item}</h3>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Keine Theorie-Schulung. Ein Arbeitsformat für echte Anwendung.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Wir arbeiten mit echten Aufgaben, Prompts und Workflows aus Ihrem Arbeitsalltag.
            </p>
          </div>
          <div className="grid gap-4">
            {["Ausgangslage und Tools verstehen", "Use Cases aus dem Alltag auswählen", "Prompts und Workflows gemeinsam bauen", "Datenschutz und Grenzen verständlich machen", "Team-Templates und nächste Schritte definieren"].map((step, index) => (
              <Card key={step} theme="light" className="p-5">
                <div className="text-sm font-semibold text-text-secondary-light">Schritt {index + 1}</div>
                <h3 className="mt-2 text-lg font-semibold text-text-primary-light">{step}</h3>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="base">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            KI nutzen, ohne Datenschutz und Kontrolle aus den Augen zu verlieren.
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-text-muted-light">
            Wir zeigen nicht nur, was mit KI möglich ist, sondern auch, wo Risiken entstehen: sensible Daten, personenbezogene Informationen, Tool-Wildwuchs, unklare Freigaben und Schatten-KI.
          </p>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {["keine sensiblen Daten unkontrolliert eingeben", "interne Regeln", "sichere Use Cases", "Grenzen von ChatGPT, Claude und Copilot", "optionaler Übergang zu NodeX"].map((item) => (
              <Card key={item} theme="light" className="p-5">
                <h3 className="text-base font-semibold text-text-primary-light">{item}</h3>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            ["Was ist ein KI-Training?", "Ein KI-Training vermittelt praktische Fähigkeiten, um generative KI im Arbeitsalltag sicher, zielgerichtet und wiederholbar einzusetzen."],
            ["Warum brauchen Unternehmen ChatGPT Trainings?", "Weil produktive Ergebnisse nicht durch Tool-Zugriff allein entstehen, sondern durch gute Prompts, klare Regeln und passende Use Cases."],
            ["Warum Claude Training sinnvoll ist", "Claude eignet sich besonders für lange Dokumente, strukturierte Analysen und anspruchsvolle Textarbeit."],
            ["Unterschied zwischen KI-Beratung und KI-Training", "Beratung klärt Strategie, Governance und Umsetzungspfad. Training befähigt Teams zur praktischen Anwendung."],
            ["Wie Unternehmen KI-Workflows nachhaltig etablieren", "Durch wiederverwendbare Vorlagen, klare Regeln, gemeinsame Bibliotheken und regelmäßige Weiterentwicklung."],
          ].map(([title, text]) => (
            <Card key={title} theme="light" className="p-5">
              <h2 className="text-lg font-semibold text-text-primary-light">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted-light">{text}</p>
            </Card>
          ))}
        </div>
      </Region>

      <CustomerReferencesStrip containerClassName="py-10 md:py-14" />

      <Region variant="light" tone="base">
        <div className="grid gap-4 md:grid-cols-2">
          {faq.map(([q, a]) => (
            <Card key={q} theme="light" className="p-5">
              <h2 className="text-lg font-semibold text-text-primary-light">{q}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted-light">{a}</p>
            </Card>
          ))}
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Bereit, KI aus dem Experimentiermodus zu holen?
          </h2>
          <p className="text-base leading-relaxed text-text-muted-light">
            Lassen Sie uns ein Trainingsformat entwickeln, das zu Ihrem Team, Ihren Tools und Ihren Prozessen passt.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
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
    </div>
  );
}
