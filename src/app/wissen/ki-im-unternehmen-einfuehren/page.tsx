import Link from "next/link";
import Region from "@/components/Region";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import ClosingCta from "@/components/marketing/ClosingCta";
import FaqList from "@/components/marketing/FaqList";
import JsonLd from "@/components/marketing/JsonLd";
import MediaStage from "@/components/marketing/MediaStage";
import SectionIntro from "@/components/marketing/SectionIntro";
import { companyCtas } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "KI im Unternehmen einführen: 7 Schritte für Automotive",
  description:
    "Praxisleitfaden zur KI-Implementierung für Automotive-Zulieferer und Mittelstand: Use Cases, ChatGPT, Gemini, Copilot, Governance und Pilot.",
  path: "/wissen/ki-im-unternehmen-einfuehren",
  image: {
    url: "/media/opny/mehmet-catalsakal-founder-about-web.jpg",
    width: 2000,
    height: 1334,
    alt: "Opny-Gründer Mehmet Catalsakal im Gespräch",
  },
});

const steps = [
  {
    title: "Geschäftsproblem statt Tool festlegen",
    text: "Startpunkt ist ein konkreter Engpass mit verantwortlicher Rolle: zum Beispiel lange Recherche, verteilte Anforderungen oder wiederkehrende Dokumentenarbeit. Erst danach wird geprüft, ob generative KI überhaupt der passende Hebel ist.",
    output: "Prozess, Ausgangswert, Ziel und verantwortlicher Fachbereich",
  },
  {
    title: "Bestehende Nutzung und Schatten-KI erfassen",
    text: "Private Konten, bereits lizenzierte Assistenten, interne Experimente und sensible Datenpfade gehören in eine gemeinsame Bestandsaufnahme. Ein Verbot ohne nutzbare Alternative verschiebt die Nutzung meist nur aus dem sichtbaren Prozess.",
    output: "KI-Inventar mit Tools, Zwecken, Nutzern, Daten und Eigentümern",
  },
  {
    title: "Use Cases vergleichbar priorisieren",
    text: "Bewertet werden nicht nur erwartete Zeitgewinne, sondern auch Datenrisiko, Fehlerfolgen, Prüfbarkeit, Integrationsaufwand und verfügbare Fachverantwortung. Ein kleiner, überprüfbarer Prozess ist ein besserer Pilot als eine unternehmensweite Chat-Lizenz.",
    output: "Priorisierte Use-Case-Landkarte mit Stop-Kriterien",
  },
  {
    title: "Datenklasse und technischen Weg bestimmen",
    text: "Für jeden Anwendungsfall muss klar sein, welche Informationen eingegeben werden dürfen, welcher Vertrag und Mandant gilt, ob Daten für Training verwendet werden und welche Protokollierung möglich ist.",
    output: "Zulässiger Daten- und Modellpfad je Use Case",
  },
  {
    title: "Rollen, Freigaben und Nachweise definieren",
    text: "Management, IT, Informationssicherheit, Datenschutz, Qualität und Fachbereich benötigen klare Entscheidungsrechte. Richtlinie, Ausnahmeprozess, Ergebnisprüfung und dokumentierte Freigabe müssen zusammenpassen.",
    output: "Governance- und Freigabemodell mit Verantwortlichkeiten",
  },
  {
    title: "Begrenzten Pilot im echten Prozess durchführen",
    text: "Der Pilot arbeitet mit definierten Daten, einer kleinen Nutzergruppe und einem messbaren Vergleich zum Ausgangszustand. Qualität, Zeit, Fehler, Akzeptanz und Kontrollaufwand werden gemeinsam betrachtet.",
    output: "Pilotbericht mit Ergebnis, Risiken und Skalierungsentscheidung",
  },
  {
    title: "Kompetenz, Betrieb und Verbesserung sichern",
    text: "Rollenbezogene Schulung verbindet Toolpraxis mit Datenregeln, Quellenprüfung und Eskalation. Danach werden Nutzung, Kosten, Abweichungen und Modelländerungen regelmäßig überprüft.",
    output: "Schulungsnachweis, Betriebsmodell und Review-Zyklus",
  },
];

const toolOptions = [
  {
    name: "ChatGPT",
    fit: "Breite Wissens- und Textarbeit, Recherche, Analyse und individuell konfigurierte Assistenten.",
    check: "Unternehmensvertrag, Konten, Datenverwendung, Freigaben, Speicher- und Integrationsmodell.",
  },
  {
    name: "Google Gemini",
    fit: "Arbeitsabläufe in Google Workspace sowie allgemeine generative KI-Anwendungen.",
    check: "Workspace-Edition, Administrator-Einstellungen, Datenzugriffe und konkrete Funktionsgrenzen.",
  },
  {
    name: "Microsoft 365 Copilot",
    fit: "Wissensarbeit in Word, Outlook, Teams, PowerPoint und weiteren Microsoft-365-Diensten.",
    check: "Berechtigungsstruktur, Datenhygiene, Lizenzumfang, Grounding und vorhandene Informationsschutzregeln.",
  },
  {
    name: "Interner KI-Zugang",
    fit: "Mehrere Modelle, zentrale Richtlinien oder spezifische Unternehmensdaten und Anwendungen.",
    check: "Architektur, Identitäten, Datenpfade, Protokollierung, Kosten, Support und Modellwechsel.",
  },
];

const faqs = [
  {
    question: "Wie führt man KI im Unternehmen Schritt für Schritt ein?",
    answer:
      "Eine kontrollierte KI-Einführung beginnt mit einer konkreten Aufgabe und einem klaren Ziel. Danach werden Nutzen und Risiken bewertet, Daten und Tools geprüft, Verantwortlichkeiten festgelegt und ein begrenzter Praxistest mit messbaren Kriterien durchgeführt.",
  },
  {
    question: "Was ist ein guter erster KI-Use-Case im Unternehmen?",
    answer:
      "Ein guter erster KI-Use-Case hat einen erkennbaren Zeitaufwand, prüfbare Ergebnisse und beherrschbare Daten. Geeignet sind zum Beispiel Recherche, Zusammenfassung oder die strukturierte Vorbereitung von Dokumenten; sicherheitskritische Entscheidungen eignen sich nicht als erster Test.",
  },
  {
    question: "ChatGPT, Gemini oder Microsoft Copilot: Womit sollte ein Unternehmen beginnen?",
    answer:
      "Ein Unternehmen sollte nicht mit dem Markennamen, sondern mit einer konkreten Aufgabe beginnen. Erst danach lässt sich prüfen, ob ChatGPT, Gemini, Microsoft Copilot oder ein anderes freigegebenes System zu Funktionen, Daten, Konten und vorhandener Technik passt.",
  },
  {
    question: "Wie lange dauert eine kontrollierte KI-Einführung?",
    answer:
      "Die Dauer hängt von Prozess, Daten, Toolprüfung, beteiligten Personen und notwendigen Freigaben ab. Ein begrenzter Praxistest lässt sich schneller vorbereiten als ein unternehmensweiter Betrieb; ein belastbarer Zeitplan entsteht erst nach Prüfung der Ausgangslage.",
  },
  {
    question: "Wie misst man den Erfolg eines KI-Praxistests?",
    answer:
      "Der Erfolg eines KI-Praxistests wird anhand vorher festgelegter Kriterien gemessen. Dazu können Zeitaufwand, Ergebnisqualität, Fehler, notwendige Nacharbeit, Rückmeldungen der Nutzer und klar definierte Abbruchregeln gehören.",
  },
];

export default function KiImUnternehmenEinfuehrenPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.opny.ai/wissen/ki-im-unternehmen-einfuehren#webpage",
              url:
                "https://www.opny.ai/wissen/ki-im-unternehmen-einfuehren",
              name: "KI im Unternehmen einführen: 7 Schritte für Automotive",
              isPartOf: { "@id": "https://www.opny.ai/#website" },
              mainEntity: {
                "@id":
                  "https://www.opny.ai/wissen/ki-im-unternehmen-einfuehren#article",
              },
              inLanguage: "de-DE",
            },
            {
              "@type": "Article",
              "@id":
                "https://www.opny.ai/wissen/ki-im-unternehmen-einfuehren#article",
              url:
                "https://www.opny.ai/wissen/ki-im-unternehmen-einfuehren",
              headline: "KI im Unternehmen einführen: 7 Schritte für Automotive",
              description:
                "Praxisleitfaden zur kontrollierten Einführung generativer KI in Automotive-Unternehmen und im Mittelstand.",
              datePublished: "2026-07-28",
              dateModified: "2026-07-28",
              inLanguage: "de-DE",
              mainEntityOfPage: {
                "@id":
                  "https://www.opny.ai/wissen/ki-im-unternehmen-einfuehren#webpage",
              },
              image:
                "https://www.opny.ai/media/opny/mehmet-catalsakal-founder-about-web.jpg",
              author: {
                "@id": "https://www.opny.ai/ueber-opny#mehmet-catalsakal",
              },
              publisher: {
                "@id": "https://www.opny.ai/#organization",
              },
            },
            {
              "@type": "FAQPage",
              "@id":
                "https://www.opny.ai/wissen/ki-im-unternehmen-einfuehren#faq",
              isPartOf: {
                "@id":
                  "https://www.opny.ai/wissen/ki-im-unternehmen-einfuehren#webpage",
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

      <Region tone="base" spacing="hero">
        <Breadcrumbs
          items={[
            { label: "Startseite", href: "/" },
            { label: "KI im Unternehmen einführen", href: "/wissen/ki-im-unternehmen-einfuehren" },
          ]}
        />
        <div className="mt-9 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="eyebrow">Praxisleitfaden · Stand 28. Juli 2026</div>
            <h1 className="display-lg mt-5 text-text-primary-light">
              KI im Unternehmen einführen.
              <span className="mt-2 block text-[#86868b]">
                Vom Tooltest zum kontrollierten Betrieb.
              </span>
            </h1>
            <p className="lead-copy mt-6 max-w-[64ch]">
              Ein belastbarer Einstieg verbindet Geschäftsnutzen, Daten,
              Verantwortung, Technik und Kompetenz. Dieser Leitfaden zeigt den
              Weg für eine kontrollierte KI-Implementierung bei
              Automotive-Zulieferern und im industriellen Mittelstand.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={companyCtas.consultingInquiry} variant="primary" theme="light">
                Einführung besprechen
              </Button>
              <Button href="#sieben-schritte" variant="secondary" theme="light">
                Sieben Schritte lesen
              </Button>
            </div>
          </div>
          <MediaStage
            src="/media/opny/mehmet-catalsakal-founder-about-web.jpg"
            alt="Opny-Gründer Mehmet Catalsakal im Gespräch"
            width={2000}
            height={1334}
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            caption="Mehmet Catalsakal, Gründer von Opny."
            imageClassName="aspect-[1.45/1] object-cover"
          />
        </div>
      </Region>

      <Region tone="surface" spacing="compact">
        <div className="grid gap-8 md:grid-cols-[0.42fr_0.58fr] md:items-start">
          <div>
            <div className="eyebrow">Die Kernfrage</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-text-primary-light">
              Nicht: Welches Tool kaufen wir?
            </h2>
          </div>
          <div>
            <p className="text-xl font-medium leading-relaxed tracking-[-0.02em] text-text-primary-light">
              Sondern: Welchen Prozess wollen wir verbessern, welche Daten
              berührt er und wer verantwortet Ergebnis und Betrieb?
            </p>
            <p className="mt-4 leading-relaxed text-text-muted-light">
              Erst wenn diese Fragen beantwortet sind, lassen sich ChatGPT,
              Gemini, Copilot oder ein interner KI-Zugang sinnvoll vergleichen.
            </p>
          </div>
        </div>
      </Region>

      <Region tone="base">
        <div id="sieben-schritte" className="scroll-mt-28">
          <SectionIntro
            eyebrow="Der kontrollierte Einführungsweg"
            title="Sieben Schritte von der Idee bis zum Betrieb"
            text="Jeder Schritt erzeugt eine überprüfbare Arbeitsgrundlage. So bleibt die nächste Entscheidung klein, nachvollziehbar und korrigierbar."
          />
        </div>
        <ol className="mt-12 border-t border-black/[0.10]">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="grid gap-5 border-b border-black/[0.10] py-8 md:grid-cols-[64px_0.7fr_1fr]"
            >
              <span className="text-sm font-semibold text-text-muted-light">
                0{index + 1}
              </span>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-text-primary-light">
                {step.title}
              </h2>
              <div>
                <p className="leading-relaxed text-text-muted-light">{step.text}</p>
                <p className="mt-4 text-sm font-semibold text-text-primary-light">
                  Ergebnis: {step.output}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Region>

      <Region tone="alt">
        <SectionIntro
          eyebrow="Toolauswahl"
          title="ChatGPT, Gemini oder Copilot – was passt zum Unternehmen?"
          text="Kein Tool ist pauschal die beste Wahl. Die vorhandene Systemlandschaft und der konkrete Datenweg sind entscheidend."
        />
        <div className="mt-10 grid gap-x-8 border-t border-black/[0.10] md:grid-cols-2">
          {toolOptions.map((tool) => (
            <article key={tool.name} className="border-b border-black/[0.10] py-7">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-text-primary-light">
                {tool.name}
              </h2>
              <p className="mt-4 leading-relaxed text-text-muted-light">{tool.fit}</p>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary-light">
                <strong className="text-text-primary-light">Vor Freigabe prüfen:</strong>{" "}
                {tool.check}
              </p>
            </article>
          ))}
        </div>
        <Link
          href="/loesungen/ki-schulungen-automotive"
          className="mt-8 inline-flex text-sm font-semibold text-[#0066cc] hover:underline"
        >
          KI-, ChatGPT-, Gemini- und Copilot-Schulungen ansehen →
        </Link>
      </Region>

      <Region tone="base">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <SectionIntro
            eyebrow="Automotive-Fokus"
            title="Warum Zulieferer zusätzliche Leitplanken benötigen"
            text="Automotive-Prozesse verbinden häufig vertrauliche Kundeninformationen, technische Spezifikationen, Qualitätsnachweise und mehrere Unternehmensgrenzen."
          />
          <div className="space-y-5">
            {[
              ["Kunden- und Entwicklungsdaten", "Eingaben, Dateien und Modellzugriffe müssen zu Datenklasse, Vertrag und Kundenanforderung passen."],
              ["Fachliche Ergebnisverantwortung", "KI kann vorbereiten und strukturieren. Freigabe und Entscheidung bleiben bei der zuständigen Fachrolle."],
              ["Lieferanten- und Systemgrenzen", "Cloud-Dienste, Integrationen und externe Anbieter müssen im Informationsverbund betrachtet werden."],
              ["Nachweise und Veränderungen", "Freigaben, Schulung, Prüfungen und Modelländerungen sollten später nachvollziehbar sein."],
            ].map(([title, text]) => (
              <div key={title} className="border-t border-black/[0.10] pt-5">
                <h2 className="text-xl font-semibold text-text-primary-light">{title}</h2>
                <p className="mt-2 leading-relaxed text-text-muted-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Region>

      <Region tone="surface">
        <SectionIntro
          eyebrow="FAQ"
          title="Häufige Fragen zur KI-Einführung im Unternehmen"
        />
        <FaqList items={faqs} />
      </Region>

      <Region tone="base" spacing="compact">
        <div className="mb-12 grid gap-8 border-y border-black/[0.10] py-8 md:grid-cols-[0.35fr_0.65fr]">
          <div>
            <div className="eyebrow">Autor und Quellen</div>
            <p className="mt-4 font-semibold text-text-primary-light">
              <Link href="/ueber-opny" className="hover:underline">
                Mehmet Catalsakal
              </Link>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-text-muted-light">
              Gründer von Opny mit zehn Jahren Automotive-Erfahrung bei Bosch.
            </p>
          </div>
          <div className="grid gap-3 text-sm leading-relaxed">
            <a className="text-[#0066cc] hover:underline" href="https://www.bitkom.org/sites/main/files/2026-06/bitkom-studienbericht-ki-bevoelkerung.pdf" target="_blank" rel="noreferrer">
              Bitkom: KI in Deutschland 2026 ↗
            </a>
            <a className="text-[#0066cc] hover:underline" href="https://www.tuev-verband.de/fileadmin/user_upload/Content_local/Studien_local/2026_TUEV-Verband_Weiterbildungsstudie_2026_Studienbericht.pdf" target="_blank" rel="noreferrer">
              TÜV-Verband: Weiterbildungsstudie 2026 ↗
            </a>
            <a className="text-[#0066cc] hover:underline" href="https://www.mittelstand-digital.de/MD/Redaktion/DE/Themenhub/2026-01/Artikel/KI-Use-Cases/KI-Use-Cases.html" target="_blank" rel="noreferrer">
              Mittelstand-Digital: KI-Anwendungen in den Unternehmensalltag integrieren ↗
            </a>
            <a className="text-[#0066cc] hover:underline" href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1689" target="_blank" rel="noreferrer">
              EUR-Lex: Verordnung (EU) 2024/1689 ↗
            </a>
            <p className="mt-2 text-xs text-text-secondary-light">
              Fachlich geprüft am 28. Juli 2026. Keine Rechtsberatung.
            </p>
          </div>
        </div>
        <ClosingCta
          eyebrow="Nächster Schritt"
          title="Einen geeigneten Pilotprozess auswählen."
          text="Wir ordnen Nutzen, Daten, Verantwortlichkeiten und vorhandene Tools ein und definieren einen begrenzten, überprüfbaren Einstieg."
          href={companyCtas.consultingInquiry}
          label="KI-Einführung besprechen"
        />
      </Region>
    </main>
  );
}
