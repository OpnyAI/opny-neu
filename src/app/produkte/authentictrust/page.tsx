import Region from "@/components/Region";
import SectionIntro from "@/components/marketing/SectionIntro";
import JsonLd from "@/components/marketing/JsonLd";
import MediaStage from "@/components/marketing/MediaStage";
import ProductHero from "@/components/marketing/ProductHero";
import ClosingCta from "@/components/marketing/ClosingCta";
import FaqList from "@/components/marketing/FaqList";
import { companyCtas } from "@/config/site";
import {
  authenticTrustDefinition,
  authenticTrustFaqs,
} from "@/content/authentictrust";
import { createMetadata } from "@/lib/metadata";

const title = "AuthenticTrust: Software für Managementsysteme";
export const metadata = createMetadata({
  title,
  description:
    "Anforderungen, Dokumente, Nachweise und Maßnahmen in einem Arbeitsraum: AuthenticTrust von Opny macht Ihr Managementsystem nachvollziehbar. Demo anfragen.",
  path: "/produkte/authentictrust",
  image: {
    url: "/media/authentictrust/authentictrust-dashboard-1600x1000.jpg",
    width: 1600,
    height: 1000,
    alt: "AuthenticTrust von Opny: Übersicht eines beispielhaften Managementsystems",
  },
});

const workflow = [
  [
    "Anforderungen festlegen",
    "Welche Vorgaben gelten für Ihr Unternehmen? Anforderungen werden zum gemeinsamen Bezugspunkt für Dokumente und Nachweise.",
  ],
  [
    "Unterlagen zuordnen",
    "Eigene Dokumente erstellen und freigeben; PDF-Nachweise mit Anforderungen und Gültigkeit verbinden.",
  ],
  [
    "Offene Punkte bewerten",
    "Bearbeitungsstand und fehlende Nachweise einordnen. Verantwortliche prüfen und begründen ihre Bewertung.",
  ],
  [
    "Maßnahmen verfolgen",
    "Aus Feststellungen konkrete Aufgaben machen: mit Verantwortlichen, Fristen und nachvollziehbarem Status.",
  ],
];
const features = [
  {
    id: "dokumente",
    eyebrow: "Dokumente und Nachweise",
    title: "Die gültige Fassung. Mit dem passenden Nachweis.",
    text: "Ein intern erstelltes Dokument braucht einen anderen Ablauf als ein beigefügter PDF-Nachweis. AuthenticTrust führt beides zusammen und hält die Bearbeitungswege unterscheidbar.",
    points: [
      "Eigene Dokumente mit Versionen, zuständigen Personen und Freigaben bearbeiten.",
      "PDF-Nachweise Anforderungen zuordnen und ihre Gültigkeit pflegen.",
      "Erkennen, welche Unterlagen vorliegen und wo noch etwas fehlt.",
    ],
    image: "documents-evidence",
    alt: "AuthenticTrust: Dokumente und Nachweise mit Anforderungsbezug, Zuständigkeit und Status",
    caption:
      "Dokumentenübersicht mit fiktiven Beispieldaten. Dokumentfreigabe und PDF-Nachweise haben unterschiedliche Abläufe.",
  },
  {
    id: "bewertungen",
    eyebrow: "Bewertungen und offene Punkte",
    title: "Verstehen, wo noch Handlungsbedarf besteht.",
    text: "Anforderungen, vorhandene Nachweise und offene Punkte gehören zusammen. Eine strukturierte Bewertung hilft Ihrem Team, den nächsten Bearbeitungsschritt festzulegen.",
    points: [
      "Anforderungen und zugehörige Unterlagen gemeinsam betrachten.",
      "Regelbasierte Einordnung als Ausgangspunkt für die Fachprüfung nutzen.",
      "Bewertungen prüfen, mit einer Begründung einordnen und Maßnahmen ableiten.",
    ],
    image: "review-results",
    alt: "AuthenticTrust: simulierte Anforderungsbewertung mit Dokumentbezug und offenen Punkten",
    caption:
      "Simuliertes Review mit fiktiven Beispieldaten. Die Anzeige ist keine Zertifizierungs- oder Rechtsbewertung.",
  },
  {
    id: "massnahmen",
    eyebrow: "Risiken, Aufgaben und Maßnahmen",
    title: "Vom offenen Punkt zur klaren Zuständigkeit.",
    text: "Eine Feststellung allein bringt die Umsetzung noch nicht voran. AuthenticTrust verbindet Risiken und Maßnahmen mit verantwortlichen Personen und dem Bearbeitungsstand.",
    points: [
      "Risiken nach Eintrittswahrscheinlichkeit und Auswirkung einordnen.",
      "Maßnahmen mit Verantwortlichen, Fristen und Status bearbeiten.",
      "Den Zusammenhang zwischen Anforderung, Feststellung und nächstem Schritt erhalten.",
    ],
    image: "risks-actions",
    alt: "AuthenticTrust: beispielhafte Risikomatrix und verknüpfte Maßnahmen",
    caption:
      "Risiko- und Maßnahmenansicht mit fiktiven Beispieldaten. Konkrete Abläufe werden passend zu Ihrem Unternehmen geklärt.",
  },
];

export default function AuthenticTrustPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.opny.ai/produkte/authentictrust#webpage",
              url: "https://www.opny.ai/produkte/authentictrust",
              name: title,
              description: authenticTrustDefinition,
              inLanguage: "de-DE",
              isPartOf: { "@id": "https://www.opny.ai/#website" },
              about: {
                "@id": "https://www.opny.ai/produkte/authentictrust#software",
              },
            },
            {
              "@type": "SoftwareApplication",
              "@id": "https://www.opny.ai/produkte/authentictrust#software",
              name: "AuthenticTrust",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: authenticTrustDefinition,
              brand: { "@id": "https://www.opny.ai/#brand" },
              publisher: { "@id": "https://www.opny.ai/#organization" },
              url: "https://www.opny.ai/produkte/authentictrust",
              featureList: [
                "Anforderungen und Nachweise zuordnen",
                "Intern erstellte Dokumente mit Versionen und Freigaben bearbeiten",
                "PDF-Nachweise mit Anforderungsbezug und Gültigkeit pflegen",
                "Bewertungen und offene Punkte nachvollziehen",
                "Risiken und Maßnahmen mit Zuständigkeiten verfolgen",
                "KI-Unterstützung bei Textformulierungen",
              ],
              audience: {
                "@type": "BusinessAudience",
                audienceType:
                  "Teams für Informationssicherheit, Qualität und Unternehmensführung",
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://www.opny.ai/produkte/authentictrust#faq",
              isPartOf: {
                "@id": "https://www.opny.ai/produkte/authentictrust#webpage",
              },
              mainEntity: authenticTrustFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }}
      />
      <ProductHero
        name="AuthenticTrust"
        path="/produkte/authentictrust"
        eyebrow="AuthenticTrust von Opny · Software für Managementsysteme"
        title="Vorgaben im Alltag umsetzen."
        accent="Mit einem gemeinsamen System."
        text="Ein Managementsystem organisiert, wie Ihr Unternehmen Vorgaben umsetzt. AuthenticTrust verbindet dafür Anforderungen, Dokumente, Nachweise, Bewertungen und Maßnahmen."
        primary={{
          href: companyCtas.authentictrustDemo,
          label: "AuthenticTrust-Demo anfragen",
        }}
        secondary={{ href: "#arbeitsweise", label: "Arbeitsweise ansehen" }}
        note="Für Informationssicherheit, Qualität und die Vorbereitung von Prüfungen. Den passenden Umfang und verfügbare Standards klären wir vor dem Einsatz."
        links={[
          { href: "#dokumente", label: "Dokumente & Nachweise" },
          { href: "#bewertungen", label: "Bewertungen" },
          { href: "#massnahmen", label: "Risiken & Maßnahmen" },
          { href: "#fragen", label: "Fragen" },
        ]}
      >
        <MediaStage
          src="/media/authentictrust/authentictrust-dashboard-1600x1000.jpg"
          alt="AuthenticTrust-Dashboard mit beispielhaften Anforderungen, Bearbeitungsständen und offenen Aufgaben"
          width={1600}
          height={1000}
          priority
          zoom
          label="AuthenticTrust von Opny"
          status="Beispieldaten"
          caption="Produkteinblick mit fiktiven Beispieldaten. Gezeigte Standards sind keine Zusage einer vollständigen Normabdeckung."
          sizes="(min-width: 1280px) 1152px, 100vw"
        />
      </ProductHero>
      <Region id="arbeitsweise" tone="surface">
        <SectionIntro
          eyebrow="So arbeitet Ihr Team mit AuthenticTrust"
          title="Von der Anforderung zum nächsten Schritt."
          text="Ein Managementsystem legt fest, wie Ihr Unternehmen Vorgaben im Alltag umsetzt. AuthenticTrust verbindet die dafür nötigen Informationen und Aufgaben."
        />
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workflow.map(([heading, text], index) => (
            <li
              key={heading}
              className="rounded-card border border-border-subtle-light bg-bg-light p-6"
            >
              <span className="text-sm font-semibold text-accent">
                Schritt {index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-snug">
                {heading}
              </h3>
              <p className="mt-3 leading-relaxed text-text-muted-light">
                {text}
              </p>
            </li>
          ))}
        </ol>
      </Region>
      {features.map((feature, index) => (
        <Region
          key={feature.id}
          id={feature.id}
          tone={index % 2 === 0 ? "alt" : "surface"}
        >
          <div className="product-feature">
            <div className="product-feature-copy">
              <SectionIntro eyebrow={feature.eyebrow} title={feature.title} />
              <p>{feature.text}</p>
              <ul className="product-feature-points">
                {feature.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <MediaStage
              src={`/media/authentictrust/authentictrust-${feature.image}-1600x1000.jpg`}
              alt={feature.alt}
              width={1600}
              height={1000}
              zoom
              label="AuthenticTrust von Opny"
              status="Beispieldaten"
              caption={feature.caption}
              sizes="(min-width: 1280px) 660px, (min-width: 1024px) 55vw, 100vw"
            />
          </div>
        </Region>
      ))}
      <Region tone="surface">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionIntro
            eyebrow="Unterstützung mit klaren Rollen"
            title="Regeln ordnen ein. KI hilft bei Texten. Menschen entscheiden."
            text="Die Software unterstützt die Bearbeitung; Ihr Team behält die fachliche Verantwortung. Bewertungen, Textvorschläge und Freigaben sind unterschiedliche Schritte."
          />
          <div className="space-y-6">
            <div className="rounded-card border border-border-subtle-light bg-bg-light p-6">
              <h3 className="text-xl font-semibold">
                Fachliche Freigaben bleiben nachvollziehbar.
              </h3>
              <p className="mt-3 leading-relaxed text-text-muted-light">
                Zuständige Personen prüfen Dokumente und Bewertungen. KI gibt
                keine Dokumente eigenständig frei und trifft keine
                Zertifizierungsentscheidung.
              </p>
            </div>
            <div className="rounded-card border border-border-subtle-light bg-bg-light p-6">
              <h3 className="text-xl font-semibold">
                Standards passend zum Einsatz klären.
              </h3>
              <p className="mt-3 leading-relaxed text-text-muted-light">
                TISAX ist abgebildet. Weitere ISO-Managementsystemstandards
                werden schrittweise ergänzt. Welche Kataloge, Versionen und
                Abläufe Sie benötigen, prüfen wir im Gespräch.
              </p>
            </div>
          </div>
        </div>
      </Region>
      <Region id="einstieg" tone="alt">
        <SectionIntro
          eyebrow="Der Einstieg"
          title="Erst Ihren Ablauf verstehen. Dann den Einsatz festlegen."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "Ausgangslage",
              "Wir besprechen Ihre Vorgaben, Ablagen, Fachrollen und anstehenden Prüfungen.",
            ],
            [
              "Persönliche Demo",
              "Sie sehen den Zusammenhang von Anforderungen, Dokumenten, Nachweisen und Maßnahmen im Produkt.",
            ],
            [
              "Passenden Umfang klären",
              "Gemeinsam klären wir verfügbare Funktionen, Standards, Zuständigkeiten und Konditionen.",
            ],
          ].map(([heading, text]) => (
            <article
              key={heading}
              className="border-t border-border-subtle-light pt-6"
            >
              <h3 className="text-xl font-semibold">{heading}</h3>
              <p className="mt-3 leading-relaxed text-text-muted-light">
                {text}
              </p>
            </article>
          ))}
        </div>
      </Region>
      <Region id="fragen" tone="surface">
        <div className="mx-auto max-w-4xl">
          <SectionIntro
            eyebrow="Vor Ihrer Entscheidung"
            title="Häufige Fragen zu AuthenticTrust."
          />
          <FaqList items={authenticTrustFaqs} />
        </div>
      </Region>
      <Region spacing="compact">
        <ClosingCta
          eyebrow="AuthenticTrust von Opny"
          title="Wie würde Ihr Team damit arbeiten?"
          text="Sehen Sie die Software in einer persönlichen Demo. Wir klären mit Ihnen, ob Funktionen und Abläufe zu Ihrem Unternehmen passen."
          href={companyCtas.authentictrustDemo}
          label="AuthenticTrust-Demo anfragen"
        />
      </Region>
    </main>
  );
}
