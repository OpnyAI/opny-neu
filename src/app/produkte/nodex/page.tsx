import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import Region from "@/components/Region";
import HeroChatMock from "@/components/mocks/HeroChatMock";
import { GovernanceControlLayerDiagram } from "@/components/diagrams/GovernanceControlLayerDiagram";
import NodeXCtaButton from "./NodeXCtaButton";
import NodeXContactForm from "./NodeXContactForm";
import { NodeXTestimonials, NodeXTrustStrip } from "./NodeXTestimonials";

export const metadata: Metadata = {
  title: "AI Gateway für Unternehmen | KI sicher nutzen mit NodeX",
  description:
    "NodeX hilft Unternehmen, KI sicher einzusetzen: als AI Gateway mit KI Governance, Audit Logs, Kostenkontrolle und Schutz vor Schatten-KI. Demo anfragen.",
  alternates: {
    canonical: "https://www.opny.ai/produkte/nodex",
  },
  openGraph: {
    title: "AI Gateway für Unternehmen | KI sicher nutzen mit NodeX",
    description:
      "NodeX hilft Unternehmen, KI sicher einzusetzen: als AI Gateway mit KI Governance, Audit Logs, Kostenkontrolle und Schutz vor Schatten-KI. Demo anfragen.",
    url: "https://www.opny.ai/produkte/nodex",
    siteName: "Opny",
    locale: "de_DE",
    type: "website",
  },
};

const problemCards = [
  {
    title: "Schatten-KI",
    text: "KI wird genutzt, aber niemand sieht genau, wo, wie und mit welchen Daten.",
  },
  {
    title: "Datenrisiken",
    text: "Sensible Informationen können unbeabsichtigt in externe Systeme gelangen.",
  },
  {
    title: "Tool-Wildwuchs",
    text: "Teams nutzen unterschiedliche Tools ohne gemeinsame Standards.",
  },
  {
    title: "Fehlende Nachvollziehbarkeit",
    text: "Prompts, Nutzung und Entscheidungen sind später kaum prüfbar.",
  },
  {
    title: "Unklare Kosten",
    text: "KI-Kosten entstehen verteilt über Tools, Teams und Anbieter.",
  },
  {
    title: "Unsichere Workarounds",
    text: "Mitarbeitende finden eigene Wege, wenn sichere Lösungen fehlen.",
  },
];

const before = [
  "KI-Tools werden einzeln genutzt",
  "keine zentrale Kontrolle",
  "unklare Datenflüsse",
  "kaum Transparenz über Kosten",
  "Nutzung schwer nachvollziehbar",
];

const after = [
  "zentrale Kontrollschicht für KI",
  "klare Regeln je Rolle und Team",
  "gesteuerte Datenflüsse",
  "transparente Nutzung und Kosten",
  "nachvollziehbare Abläufe für Management, IT und Compliance",
];

const useCases = [
  {
    title: "Geschäftsführung & Management",
    pain: "KI wird genutzt, aber Risiken, Kosten und Wirkung bleiben unsichtbar.",
    benefit: "NodeX schafft Transparenz über Nutzung, Kosten und Risikobereiche.",
    example: "Management-Übersicht zu aktiven Teams, Modellen, Kosten und Pilotfortschritt.",
  },
  {
    title: "IT & Plattformverantwortliche",
    pain: "Teams bringen eigene KI-Tools mit und umgehen Standards.",
    benefit: "NodeX bündelt den Zugang zu KI über eine zentrale, steuerbare Ebene.",
    example: "Freigegebene Modelle, klare Regeln und weniger Tool-Wildwuchs.",
  },
  {
    title: "Compliance & Datenschutz",
    pain: "Sensible Daten können unkontrolliert in externe KI-Systeme gelangen.",
    benefit: "NodeX hilft, Datenflüsse zu steuern und Nutzung nachvollziehbar zu machen.",
    example: "Prüfbare Abläufe für Datenschutz, KI Compliance und interne Richtlinien.",
  },
  {
    title: "Fachbereiche & Operations",
    pain: "Teams wollen KI nutzen, greifen aber oft zu unsicheren Einzellösungen.",
    benefit: "NodeX ermöglicht produktive KI-Nutzung innerhalb klarer Leitplanken.",
    example: "Dokumente, Tickets oder Wissen nutzen, ohne neue Grauzonen zu schaffen.",
  },
  {
    title: "Produkt- und Entwicklungsteams",
    pain: "KI-Workflows werden komplex, teuer und schwer steuerbar.",
    benefit: "NodeX macht Nutzung, Qualität und Kosten pro Workflow transparenter.",
    example: "KI-Assistenten und interne Workflows kontrolliert betreiben.",
  },
];

const governanceItems = [
  "Rollen & Rechte",
  "Regeln für KI-Nutzung",
  "Schutz sensibler Daten",
  "Audit Logs",
  "Kostenkontrolle",
  "gesteuerte Modellnutzung",
  "sichere Fallbacks",
  "kontrollierte Datenpfade",
  "interne KI-Workflows",
  "private Workloads je nach Setup",
];

const faqs = [
  {
    question: "Was ist NodeX?",
    answer:
      "NodeX ist eine zentrale Kontrollschicht für KI-Nutzung im Unternehmen. Teams können KI nutzen, während Regeln, Datenflüsse, Kosten und Nutzung steuerbar bleiben.",
  },
  {
    question: "Ersetzt NodeX ChatGPT, Gemini oder andere KI-Tools?",
    answer:
      "Nein. NodeX ersetzt diese Tools nicht zwingend. Es sorgt dafür, dass deren Nutzung kontrolliert, nachvollziehbar und besser steuerbar wird.",
  },
  {
    question: "Können bestehende Modelle weiter genutzt werden?",
    answer:
      "Ja. Je nach Setup können bestehende Modelle und Workflows eingebunden werden. Ziel ist nicht Tool-Wechsel, sondern kontrollierte Nutzung.",
  },
  {
    question: "Wie verhindert NodeX Schatten-KI?",
    answer:
      "NodeX bietet einen freigegebenen Zugang zu KI und macht Nutzung sichtbar. Dadurch sinkt der Bedarf an unsicheren Einzellösungen.",
  },
  {
    question: "Ist NodeX für sensible Daten geeignet?",
    answer:
      "NodeX ist für kontrollierte Datenflüsse, Rollen und Nachvollziehbarkeit ausgelegt. Die konkrete Eignung hängt von Datenklassen, Setup und Betriebsmodell ab.",
  },
  {
    question: "Wie startet ein Pilotprojekt?",
    answer:
      "Typisch ist ein kompakter Governance-Check, danach ein fokussierter Pilot mit klaren Use Cases, Rollen und Erfolgskriterien.",
  },
  {
    question: "Für welche Unternehmensgröße lohnt sich NodeX?",
    answer:
      "NodeX lohnt sich besonders, wenn mehrere Teams KI nutzen und Datenschutz, Kosten oder Compliance zentral steuerbar sein müssen.",
  },
  {
    question: "Wie wird die Nutzung gemessen?",
    answer:
      "NodeX kann Nutzung, Kosten, Modelle und relevante Ereignisse nachvollziehbar machen. So entstehen Entscheidungsgrundlagen für Management, IT und Compliance.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "NodeX",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "AI Gateway für Unternehmen mit KI Governance, Audit Logs, Kostenkontrolle und gesteuerten Datenflüssen.",
      brand: {
        "@type": "Brand",
        name: "Opny",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        description: "Demo und Governance-Check auf Anfrage.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function NodeXPage() {
  return (
    <div className="flex flex-col pb-20 sm:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Region variant="light" tone="base" containerClassName="py-12 md:py-20">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
          <div className="min-w-0 max-w-[640px] space-y-6">
            <div className="space-y-4">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
                NodeX AI Gateway
              </div>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary-light md:text-5xl">
                Schluss mit Schatten-KI. NodeX bringt Ihre KI unter Kontrolle.
              </h1>
              <p className="max-w-[58ch] text-lg leading-relaxed text-text-muted-light md:text-xl">
                NodeX ist die zentrale Kontrollschicht zwischen Ihren Teams und KI-Tools wie ChatGPT oder Gemini. So nutzen Sie KI produktiv – während Daten, Nutzung und Kosten unter Kontrolle bleiben.
              </p>
            </div>

            <ul className="grid gap-3 text-base leading-relaxed text-text-muted-light sm:grid-cols-2">
              {[
                "Sensible Daten vor unkontrollierter Weitergabe schützen",
                "Schatten-KI sichtbar machen und reduzieren",
                "KI-Nutzung zentral steuern",
                "Kosten und Nutzung nachvollziehbar machen",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <NodeXCtaButton interest="NodeX Demo" eventName="nodex_demo_request">
                NodeX Demo anfragen
              </NodeXCtaButton>
              <NodeXCtaButton
                interest="KI-Governance-Check"
                eventName="nodex_governance_check_click"
                variant="secondary"
              >
                KI-Governance-Check sichern
              </NodeXCtaButton>
            </div>
          </div>

          <div className="min-w-0 max-w-full space-y-4 overflow-x-clip">
            <div className="mx-auto w-full min-w-0 max-w-[620px] lg:ml-auto lg:mr-0">
              <HeroChatMock className="max-w-full" />
            </div>
          </div>
        </div>
      </Region>

      <NodeXTrustStrip />

      <Region variant="light" tone="alt">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Das Problem
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Das eigentliche Risiko ist nicht KI. Es ist unkontrollierte KI-Nutzung.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              In vielen Unternehmen nutzen Mitarbeitende längst KI-Tools. Oft ohne klare Regeln, ohne zentrale Sichtbarkeit und ohne Kontrolle darüber, welche Informationen eingegeben werden. Genau hier entstehen Datenschutz-, Compliance- und Kostenrisiken.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {problemCards.map((item) => (
              <Card key={item.title} theme="light" className="min-w-0 p-5">
                <div className="min-w-0 break-words text-lg font-semibold leading-snug text-text-primary-light hyphens-auto">{item.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-text-muted-light">
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="space-y-5">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Die Lösung
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              NodeX legt Kontrolle über Ihre KI-Nutzung.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              NodeX setzt eine kontrollierte Ebene zwischen Mitarbeitenden und KI-Modellen. Anfragen laufen nicht unkontrolliert direkt in externe Tools, sondern über klare Regeln, Rollen und Schutzmechanismen. So bleibt KI nutzbar - aber steuerbar.
            </p>
            <div className="rounded-2xl border border-border-subtle-light/20 bg-white p-4 shadow-sm">
              <GovernanceControlLayerDiagram className="h-auto w-full" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <CompareCard title="Vorher" items={before} />
            <CompareCard title="Mit NodeX" items={after} highlight />
          </div>
        </div>
      </Region>

      <NodeXTestimonials />

      <Region variant="light" tone="base">
        <div className="max-w-3xl space-y-4">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Ablauf
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Wie NodeX im Betrieb arbeitet.
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {[
            "Mitarbeitende stellen ihre KI-Anfrage",
            "NodeX prüft Regeln, Rolle und Datenkontext",
            "Die Anfrage wird sicher verarbeitet oder blockiert",
            "Nutzung, Kosten und Ergebnis bleiben nachvollziehbar",
          ].map((step, index) => (
            <Card key={step} theme="light" className="p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-text-primary-light text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-text-primary-light">{step}</h3>
            </Card>
          ))}
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <div className="space-y-4">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Use Cases
          </div>
          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Für Unternehmen, die ChatGPT im Unternehmen sicher nutzen und KI Compliance praktisch umsetzen wollen.
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((item) => (
            <Card key={item.title} theme="light" className="p-5">
              <h3 className="text-xl font-semibold text-text-primary-light">{item.title}</h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-muted-light">
                <p><strong className="text-text-primary-light">Pain Point:</strong> {item.pain}</p>
                <p><strong className="text-text-primary-light">NodeX:</strong> {item.benefit}</p>
                <p><strong className="text-text-primary-light">Beispiel:</strong> {item.example}</p>
              </div>
            </Card>
          ))}
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Security & Governance
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Für Unternehmen, die KI kontrolliert nutzen wollen.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              NodeX ist darauf ausgelegt, sensible Datenflüsse, Rollen, Regeln und Nutzung nachvollziehbar zu machen. Die konkrete Ausgestaltung hängt von Setup, Datenklassen und Betriebsmodell ab.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {governanceItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-border-subtle-light/20 bg-white px-4 py-3 text-sm font-medium text-text-primary-light shadow-sm">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="base">
        <div className="rounded-card border border-border-subtle-light/20 bg-white p-6 shadow-card-light md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div className="space-y-4">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
                KI-Governance-Check
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
                Kostenlosen KI-Governance-Check sichern
              </h2>
              <p className="text-base leading-relaxed text-text-muted-light">
                Wir prüfen gemeinsam, wo KI in Ihrem Unternehmen bereits genutzt wird, welche Datenrisiken entstehen und wie NodeX eine kontrollierte Nutzung ermöglichen kann.
              </p>
            </div>
            <div className="space-y-5">
              <ul className="space-y-3 text-base text-text-muted-light">
                {[
                  "Überblick über KI-Risiken",
                  "Einschätzung sinnvoller Use Cases",
                  "konkreter Vorschlag für einen Pilot",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <NodeXCtaButton
                interest="KI-Governance-Check"
                eventName="nodex_governance_check_click"
              >
                Governance-Check anfragen
              </NodeXCtaButton>
            </div>
          </div>
        </div>
      </Region>

      <Region id="nodex-contact" variant="light" tone="alt">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Kontakt
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Lassen Sie uns prüfen, wie NodeX bei Ihnen eingesetzt werden kann.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Beschreiben Sie kurz Ihre Ausgangslage. Wir melden uns mit einem konkreten Vorschlag für Demo, Governance-Check oder Pilotprojekt.
            </p>
            <p className="text-sm text-text-secondary-light">
              Alternativ erreichen Sie uns per E-Mail unter{" "}
              <a className="font-semibold text-text-primary-light underline" href="mailto:info@opny.ai">
                info@opny.ai
              </a>.
            </p>
          </div>
          <NodeXContactForm />
        </div>
      </Region>

      <Region variant="light" tone="base">
        <div className="space-y-4">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            FAQ
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Häufige Fragen zu NodeX
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <Card key={faq.question} theme="light" className="p-5">
              <h3 className="text-lg font-semibold text-text-primary-light">{faq.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted-light">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            KI produktiv nutzen - ohne Kontrollverlust.
          </h2>
          <p className="mx-auto mt-4 max-w-[58ch] text-base leading-relaxed text-text-muted-light">
            Lassen Sie uns in einer Demo prüfen, wie NodeX Ihre KI-Nutzung sicherer, transparenter und steuerbarer machen kann.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <NodeXCtaButton interest="NodeX Demo" eventName="nodex_demo_request">
              NodeX Demo anfragen
            </NodeXCtaButton>
            <NodeXCtaButton
              interest="KI-Governance-Check"
              eventName="nodex_governance_check_click"
              variant="secondary"
            >
              KI-Governance-Check sichern
            </NodeXCtaButton>
          </div>
        </div>
      </Region>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border-subtle-light/20 bg-white/95 p-3 shadow-[0_-12px_30px_rgba(15,23,42,0.10)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-6xl gap-2">
          <NodeXCtaButton
            interest="NodeX Demo"
            eventName="nodex_demo_request"
            className="flex-1 px-3"
          >
            NodeX Demo
          </NodeXCtaButton>
          <NodeXCtaButton
            interest="KI-Governance-Check"
            eventName="nodex_governance_check_click"
            variant="secondary"
            className="flex-1 px-3"
          >
            Check sichern
          </NodeXCtaButton>
        </div>
      </div>
    </div>
  );
}

function CompareCard({
  title,
  items,
  highlight,
}: {
  title: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <Card
      theme="light"
      className={highlight ? "border-text-primary-light/20 bg-white p-6" : "p-6"}
    >
      <h3 className="text-xl font-semibold text-text-primary-light">{title}</h3>
      <ul className="mt-4 space-y-3 text-base text-text-muted-light">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
