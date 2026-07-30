import Region from "@/components/Region";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import SectionIntro from "@/components/marketing/SectionIntro";
import JsonLd from "@/components/marketing/JsonLd";
import NodeXPreview from "@/components/marketing/NodeXPreview";
import ClosingCta from "@/components/marketing/ClosingCta";
import FaqList from "@/components/marketing/FaqList";
import { GovernanceControlLayerDiagram } from "@/components/diagrams/GovernanceControlLayerDiagram";
import { companyCtas } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "NodeX: Plattform für kontrollierte KI-Nutzung",
  description:
    "NodeX ist Opnys Plattform für kontrollierte KI-Nutzung. Sie bündelt freigegebene KI-Modelle, Rechte, Datenregeln sowie Nutzung und Kosten.",
  path: "/produkte/nodex",
  image: {
    url: "/media/opny/automotive-quality-inspection-v2.jpg",
    width: 1672,
    height: 941,
    alt: "Qualitätsprüfung eines bearbeiteten Aluminiumgehäuses bei einem Automotive-Zulieferer",
  },
});

const capabilities = [
  ["Freigegebene KI-Modelle", "Teams erhalten einen zentralen Zugang statt beliebiger privater Konten."],
  ["Passende Rechte und Regeln", "Je nach Team, Aufgabe und Schutzbedarf gelten unterschiedliche Vorgaben."],
  ["Klarer Weg für Daten", "NodeX steuert, welche Anfragen und Dateien an welchen Dienst gesendet werden dürfen."],
  ["Überblick über Nutzung und Kosten", "IT, Management und Fachbereiche sehen dieselben Informationen."],
];

const faqs = [
  {
    question: "Was ist NodeX?",
    answer:
      "NodeX ist Opnys Plattform für kontrollierte KI-Nutzung. Sie bündelt freigegebene KI-Zugänge, Rechte, Datenregeln sowie den Überblick über Nutzung und Kosten an einer zentralen Stelle. Modelle, Datenwege und Betriebsform werden passend zur jeweiligen Kundenumgebung festgelegt.",
  },
  {
    question: "Ersetzt NodeX TrustArch?",
    answer:
      "Nein. TrustArch verbindet Managementsysteme, Anforderungen, Dokumente, Freigaben, Nachweise, Risiken und Maßnahmen. NodeX macht die tatsächliche Nutzung von KI technisch kontrollierbar.",
  },
  {
    question: "Ist NodeX für vertrauliche Automotive-Daten geeignet?",
    answer:
      "Ob NodeX für vertrauliche Automotive-Daten geeignet ist, hängt von Schutzbedarf, Anbieter, Datenweg und technischer Umgebung ab. Das konkrete Setup muss deshalb vor dem Einsatz gesondert geprüft werden.",
  },
  {
    question: "Wie startet ein NodeX-Projekt?",
    answer:
      "Sinnvoll ist ein kleiner Praxistest mit einer klaren Aufgabe, bekannten Daten, verantwortlichen Personen und messbaren Erfolgskriterien.",
  },
];

export default function NodeXPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.opny.ai/produkte/nodex#webpage",
              url: "https://www.opny.ai/produkte/nodex",
              name: "NodeX: Plattform für kontrollierte KI-Nutzung",
              isPartOf: { "@id": "https://www.opny.ai/#website" },
              about: { "@id": "https://www.opny.ai/produkte/nodex#software" },
              video: { "@id": "https://www.opny.ai/produkte/nodex#produktvideo" },
              inLanguage: "de-DE",
            },
            {
              "@type": "SoftwareApplication",
              "@id": "https://www.opny.ai/produkte/nodex#software",
              name: "NodeX",
              applicationCategory: "BusinessApplication",
              description:
                "Plattform für kontrollierte KI-Nutzung mit freigegebenen Zugängen, Rollen, Richtlinien, Datenpfaden sowie Überblick über Nutzung und Kosten.",
              brand: { "@id": "https://www.opny.ai/#brand" },
              url: "https://www.opny.ai/produkte/nodex",
              isPartOf: { "@id": "https://www.opny.ai/produkte/nodex#webpage" },
              audience: {
                "@type": "BusinessAudience",
                audienceType: "Automotive-Zulieferer Tier-1 bis Tier-3",
              },
              additionalProperty: {
                "@type": "PropertyValue",
                name: "Produktstatus",
                value:
                  "Fertig entwickeltes Opny-Produkt; Produktvideo und Einsatz in abgegrenzten Kundenkontexten dokumentiert; Konfiguration je Kundenumgebung",
              },
            },
            {
              "@type": "VideoObject",
              "@id": "https://www.opny.ai/produkte/nodex#produktvideo",
              name: "NodeX-Produkteinblick: sensible Begriffe vor der KI-Anfrage schützen",
              description:
                "Der 22-sekündige Produkteinblick zeigt einen Beispielablauf, in dem NodeX eine sensible Projektbezeichnung vor der Anfrage an Anthropic durch ein Referenztoken ersetzt und anschließend aus einem lokalen Vault wiederherstellt.",
              thumbnailUrl:
                "https://www.opny.ai/media/nodex/marketing-opny-nodex-poster.jpg",
              contentUrl:
                "https://www.opny.ai/media/nodex/marketing-opny-nodex.MP4",
              uploadDate: "2026-07-29T16:50:10+02:00",
              duration: "PT21.55S",
              isPartOf: { "@id": "https://www.opny.ai/produkte/nodex#webpage" },
            },
            {
              "@type": "FAQPage",
              "@id": "https://www.opny.ai/produkte/nodex#faq",
              isPartOf: {
                "@id": "https://www.opny.ai/produkte/nodex#webpage",
              },
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }}
      />

      <Region spacing="hero">
        <Breadcrumbs
          items={[
            { label: "Startseite", href: "/" },
            { label: "Produkte", href: "/produkte" },
            { label: "NodeX", href: "/produkte/nodex" },
          ]}
        />
        <div className="mx-auto mt-10 max-w-5xl text-center">
          <div className="eyebrow">NodeX · Kontrollierter Zugang zu KI</div>
          <h1 className="display-lg mt-6">
            NodeX.
            <span className="block text-[#86868b]">
              KI-Zugänge, Daten und Kosten kontrollieren.
            </span>
          </h1>
          <p className="lead-copy mx-auto mt-7 max-w-3xl">
            NodeX gibt Mitarbeitenden einen zentralen Zugang zu freigegebenen
            KI-Modellen. Unternehmensregeln, Rechte, Datennutzung und Kosten
            werden dabei an einer Stelle zusammengeführt.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={companyCtas.nodexInquiry} variant="primary" theme="light">
              NodeX-Einsatz besprechen
            </Button>
            <Button href="#kontrollmodell" variant="secondary" theme="light">
              Kontrollmodell ansehen
            </Button>
          </div>
          <p className="mt-5 text-sm text-text-muted-light">
            Zwei freigegebene Kundenstimmen dokumentieren den Einsatz in
            abgegrenzten Kundenkontexten. Das Produktvideo zeigt einen
            freigegebenen Beispielablauf zum Schutz sensibler Begriffe.
          </p>
        </div>
        <div id="produktvideo" className="mx-auto mt-14 max-w-6xl scroll-mt-24">
          <NodeXPreview autoPlay />
        </div>
      </Region>

      <Region id="kontrollmodell" tone="surface">
        <SectionIntro
          eyebrow="So funktioniert NodeX"
          title="Regeln werden direkt beim Zugriff auf KI angewendet."
          text="NodeX ist kein Ablagesystem für Richtlinien. Die Plattform steuert, wer welches KI-Modell mit welchen Daten nutzen darf."
        />
        <div className="editorial-rule mt-12 grid md:grid-cols-2">
          {capabilities.map(([title, text], index) => (
            <article
              key={title}
              className={`border-b border-black/[0.10] py-7 md:p-8 ${
                index % 2 === 0 ? "md:border-r" : ""
              }`}
            >
              <span className="text-sm font-semibold text-text-muted-light">0{index + 1}</span>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{title}</h2>
              <p className="mt-3 leading-relaxed text-text-muted-light">{text}</p>
            </article>
          ))}
        </div>
      </Region>

      <Region>
        <div className="grid gap-12 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
          <figure className="media-stage bg-white p-4 sm:p-8">
            <GovernanceControlLayerDiagram className="h-auto w-full" />
            <figcaption className="border-t border-black/[0.07] px-3 pt-4 text-xs leading-relaxed text-text-muted-light">
              Funktionsmodell der Kontrollschicht. Konkrete Anbindungen richten
              sich nach der jeweiligen Systemumgebung.
            </figcaption>
          </figure>
          <div>
            <div className="eyebrow">Ein zentraler Zugang</div>
            <h2 className="section-title mt-5">Zwischen Mitarbeitenden und KI-Modellen.</h2>
            <ol className="mt-8 space-y-5">
              {[
                "Mitarbeitende erhalten passend zu ihrer Aufgabe einen freigegebenen Arbeitsbereich.",
                "Für die konkrete Aufgabe wird ein erlaubtes KI-Modell ausgewählt.",
                "Der Schutzbedarf der Daten bestimmt, was eingegeben oder hochgeladen werden darf.",
                "Nutzung und Kosten bleiben für die Verantwortlichen nachvollziehbar.",
              ].map((step, index) => (
                <li key={step} className="grid grid-cols-[36px_1fr] gap-4 border-t border-black/[0.10] pt-5">
                  <span className="text-sm font-semibold text-text-muted-light">0{index + 1}</span>
                  <span className="leading-relaxed text-text-secondary-light">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Region>

      <Region tone="alt">
        <SectionIntro
          eyebrow="Im Produkteinblick gezeigt"
          title="Sensible Angaben schützen, bevor eine Anfrage das Unternehmen verlässt."
          text="Das Video zeigt einen konkreten Maskierungsablauf mit Beispieldaten. Welche Modelle, Regeln und Datenwege gelten, wird je Kundenumgebung festgelegt."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["01", "Erkennen", "Eine sensible Projektbezeichnung wird in der Anfrage erkannt."],
            ["02", "Ersetzen", "NodeX ersetzt den Begriff vor der Übergabe an das externe KI-Modell durch ein Referenztoken."],
            ["03", "Wiederherstellen", "Nach der Antwort stellt NodeX den ursprünglichen Kontext aus dem lokalen Vault wieder her."],
          ].map(([number, title, text]) => (
            <article key={number} className="rounded-3xl border border-black/[0.08] bg-white p-6 sm:p-7">
              <span className="text-sm font-semibold text-text-muted-light">{number}</span>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{title}</h2>
              <p className="mt-3 leading-relaxed text-text-muted-light">{text}</p>
            </article>
          ))}
        </div>
      </Region>

      <Region>
        <SectionIntro eyebrow="FAQ" title="Entscheidungsfragen zu NodeX" />
        <FaqList items={faqs} />
      </Region>

      <Region spacing="compact">
        <ClosingCta
          title="NodeX im eigenen Einsatzkontext ansehen."
          text="Startpunkt sind eine konkrete Aufgabe, bekannte Daten und klare Verantwortliche. Darauf werden Modelle, Regeln und Datenwege abgestimmt."
          href={companyCtas.nodexInquiry}
          label="NodeX-Einsatz besprechen"
        />
      </Region>
    </main>
  );
}
