import Link from "next/link";
import Region from "@/components/Region";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import SectionIntro from "@/components/marketing/SectionIntro";
import MediaStage from "@/components/marketing/MediaStage";
import ClosingCta from "@/components/marketing/ClosingCta";
import FaqList from "@/components/marketing/FaqList";
import JsonLd from "@/components/marketing/JsonLd";
import RelatedStandards from "@/components/marketing/RelatedStandards";
import { companyCtas } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

const title = "TISAX-Software: Nachweise und Maßnahmen";
const description =
  "AuthenticTrust von Opny unterstützt Ihre TISAX-Vorbereitung: Anforderungen, Dokumente, Nachweise und Maßnahmen organisieren. Persönliche Software-Demo anfragen.";
export const metadata = createMetadata({
  title,
  description,
  path: "/tisax-software",
  image: {
    url: "/media/authentictrust/authentictrust-documents-evidence-1600x1000.jpg",
    width: 1600,
    height: 1000,
    alt: "AuthenticTrust: Dokumente und Nachweise für die TISAX-Vorbereitung",
  },
});
const faqs = [
  {
    question: "Was ist eine Software für die TISAX-Vorbereitung?",
    answer:
      "Eine Software für die TISAX-Vorbereitung verbindet Anforderungen mit Dokumenten, Nachweisen und offenen Maßnahmen. AuthenticTrust von Opny unterstützt diese Arbeitsweise: Ihr Team organisiert Unterlagen, bearbeitet eigene Dokumente mit Freigaben und verfolgt die nächsten Schritte. Die Software führt keine eigenständige TISAX-Prüfung durch.",
  },
  {
    question: "Was bedeutet TISAX?",
    answer:
      "TISAX ist ein Prüf- und Austauschverfahren für Informationssicherheit, insbesondere in der Automobilindustrie. Die Vorbereitung richtet sich nach dem VDA-ISA-Anforderungskatalog und den festgelegten Prüfzielen. Nach der externen Prüfung können Ergebnisse über das ENX-Portal mit ausgewählten Partnern geteilt werden.",
  },
  {
    question:
      "Für welche Unternehmen ist AuthenticTrust im TISAX-Kontext gedacht?",
    answer:
      "Der Anwendungsfall richtet sich an Unternehmen, die eine TISAX-Prüfung vorbereiten und dafür Anforderungen, Unterlagen und Maßnahmen gemeinsam organisieren möchten. Besonders hilfreich ist die Übersicht, wenn Informationssicherheit, Qualität, IT und weitere Fachbereiche beteiligt sind.",
  },
  {
    question: "Wie werden Dokumente und Nachweise organisiert?",
    answer:
      "Intern erstellte Dokumente werden mit Versionen, Zuständigkeiten und fachlichen Freigaben bearbeitet. PDF-Nachweise werden den Anforderungen zugeordnet und mit ihrer Gültigkeit gepflegt. Offene Punkte führen zu Maßnahmen mit verantwortlichen Personen, Fristen und Status. Dokumentfreigaben und PDF-Nachweise haben unterschiedliche Abläufe.",
  },
  {
    question: "Welche VDA-ISA-Version und Prüfziele werden abgebildet?",
    answer:
      "Der benötigte Umfang hängt von Ihrem Prüfungsvorhaben, dem Katalog und den gewählten Prüfzielen ab. Vor einem Einsatz klären wir die aktuell verfügbaren Kataloge, Versionen und Funktionen für Ihren Workspace. Produktbilder zeigen Beispieldaten und sind keine Zusage für jede Normausgabe oder jedes Prüfziel.",
  },
  {
    question: "Garantiert AuthenticTrust ein TISAX-Label?",
    answer:
      "Nein. AuthenticTrust unterstützt die Vorbereitung und Bearbeitung. Ihre Verantwortlichen prüfen die Umsetzung; die externe Bewertung und Entscheidung verbleiben bei der zuständigen Prüfstelle. Die Software ersetzt weder Ihre Fachverantwortung noch die TISAX-Prüfung.",
  },
  {
    question: "Wie kann ich die TISAX-Software kennenlernen?",
    answer:
      "Fragen Sie eine AuthenticTrust-Demo an. Wir besprechen Ihren geplanten Prüfungsumfang und zeigen, wie Anforderungen, Dokumente, Nachweise und Maßnahmen im Produkt zusammenhängen. Anschließend klären wir den passenden Funktionsumfang und die Konditionen.",
  },
];
const steps = [
  [
    "Anforderungen gemeinsam einordnen",
    "Prüfungsumfang und Prüfziele geben die Richtung vor. Ihr Team betrachtet relevante Anforderungen und die dazugehörigen Unterlagen zusammen.",
  ],
  [
    "Unterlagen nachvollziehbar pflegen",
    "Eigene Dokumente mit Versionen und Freigaben bearbeiten; PDF-Nachweise mit Anforderungen und Gültigkeit verbinden.",
  ],
  [
    "Offene Punkte bearbeiten",
    "Fehlende Nachweise und Feststellungen in konkrete Maßnahmen übersetzen. Verantwortliche, Fristen und Bearbeitungsstand bleiben im Blick.",
  ],
];

export default function TisaxSoftwarePage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.opny.ai/tisax-software#webpage",
              name: title,
              description,
              url: "https://www.opny.ai/tisax-software",
              inLanguage: "de-DE",
              isPartOf: { "@id": "https://www.opny.ai/#website" },
              about: {
                "@id": "https://www.opny.ai/produkte/authentictrust#software",
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://www.opny.ai/tisax-software#faq",
              isPartOf: { "@id": "https://www.opny.ai/tisax-software#webpage" },
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
            { label: "AuthenticTrust", href: "/produkte/authentictrust" },
            { label: "TISAX-Software", href: "/tisax-software" },
          ]}
        />
        <div className="marketing-hero-grid mt-8">
          <div className="marketing-hero-copy">
            <p className="eyebrow">
              AuthenticTrust von Opny · Compliance-Software
            </p>
            <h1 className="marketing-hero-title mt-4">
              Software für Ihre{" "}
              <span className="text-accent">TISAX-Vorbereitung.</span>
            </h1>
            <p className="marketing-hero-lead mt-5">
              Für Teams, die Unterlagen für eine TISAX-Prüfung zusammenführen:
              Anforderungen, Dokumente, Nachweise und Maßnahmen in einem
              gemeinsamen Arbeitsraum.
            </p>
            <div className="mt-6">
              <Button href={companyCtas.authentictrustDemo} theme="light">
                AuthenticTrust-Demo anfragen
              </Button>
            </div>
          </div>
          <MediaStage
            src="/media/authentictrust/authentictrust-documents-evidence-1600x1000.jpg"
            alt="AuthenticTrust zeigt Dokumente und Nachweise mit Anforderungsbezug, Zuständigkeit und Status"
            width={1600}
            height={1000}
            priority
            zoom
            label="AuthenticTrust von Opny"
            status="Beispieldaten"
            caption="Produkteinblick mit fiktiven Daten. Prüfungsumfang, Katalog und verfügbare Versionen werden vor dem Einsatz geklärt."
            sizes="(min-width: 1280px) 660px, 100vw"
          />
        </div>
      </Region>
      <Region tone="surface">
        <SectionIntro
          eyebrow="Ihr Ausgangspunkt"
          title="Die Unterlagen sind vorhanden. Der gemeinsame Überblick fehlt?"
          text="Wenn Dokumente in mehreren Ablagen liegen und verschiedene Fachbereiche mitarbeiten, kostet die Vorbereitung zusätzliche Abstimmung. AuthenticTrust verbindet die Unterlagen mit den Anforderungen und den nächsten Aufgaben."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(([heading, text], index) => (
            <article
              key={heading}
              className="rounded-card border border-border-subtle-light bg-bg-light p-6"
            >
              <p className="text-sm font-semibold text-accent">
                Schritt {index + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold">{heading}</h3>
              <p className="mt-3 leading-relaxed text-text-muted-light">
                {text}
              </p>
            </article>
          ))}
        </div>
      </Region>
      <Region tone="alt">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionIntro
            eyebrow="TISAX verständlich eingeordnet"
            title="Software unterstützt die Vorbereitung. Menschen prüfen und entscheiden."
            text="TISAX ist ein Prüf- und Austauschverfahren für Informationssicherheit. Die Anforderungen und Prüfziele bestimmen, welche Nachweise Ihr Unternehmen benötigt."
          />
          <div>
            <p className="leading-relaxed text-text-muted-light">
              AuthenticTrust hilft, den Bearbeitungsstand und offene Maßnahmen
              nachvollziehbar zu organisieren. Fachliche Bewertungen, Umsetzung
              und externe Prüfentscheidung bleiben bei den zuständigen Personen.
              Ein Produktbeispiel ist kein Nachweis einer bestandenen Prüfung.
            </p>
            <a
              href="https://portal.enx.com/en-US/TISAX/"
              target="_blank"
              rel="noreferrer"
              className="at-text-link mt-5"
            >
              TISAX und Prüfverfahren bei ENX
            </a>
            <p className="mt-6 leading-relaxed text-text-muted-light">
              AuthenticTrust ist auch für weitere Managementthemen angelegt.{" "}
              <Link
                href="/produkte/authentictrust#standards"
                className="font-semibold text-accent underline underline-offset-4"
              >
                Standards, Vorgaben und Produktumfang ansehen
              </Link>
              .
            </p>
          </div>
        </div>
      </Region>
      <RelatedStandards currentId="tisax" />
      <Region tone="surface">
        <div className="mx-auto max-w-4xl">
          <SectionIntro
            eyebrow="Vor der Entscheidung"
            title="Fragen zu TISAX-Software."
          />
          <FaqList items={faqs} />
        </div>
      </Region>
      <Region spacing="compact">
        <ClosingCta
          eyebrow="TISAX-Vorbereitung mit AuthenticTrust"
          title="Wie sieht Ihr nächster Vorbereitungsschritt aus?"
          text="Wir besprechen Ihre Anforderungen und zeigen Ihnen die Software. Gemeinsam klären wir passende Kataloge, Funktionen und Abläufe."
          href={companyCtas.authentictrustDemo}
          label="AuthenticTrust-Demo anfragen"
        />
      </Region>
    </main>
  );
}
