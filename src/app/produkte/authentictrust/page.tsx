import Region from "@/components/Region";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import SectionIntro from "@/components/marketing/SectionIntro";
import JsonLd from "@/components/marketing/JsonLd";
import MediaStage from "@/components/marketing/MediaStage";
import ClosingCta from "@/components/marketing/ClosingCta";
import FaqList from "@/components/marketing/FaqList";
import { companyCtas } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "AuthenticTrust: Compliance-Software für Managementsysteme",
  description:
    "AuthenticTrust ist Opnys KI-gestützte Software für Managementsysteme und Compliance. Sie bündelt Anforderungen, Dokumente, Freigaben, Nachweise und Maßnahmen.",
  path: "/produkte/authentictrust",
  image: {
    url: "/media/authentictrust/authentictrust-dashboard-1600x1000.jpg",
    width: 1600,
    height: 1000,
    alt: "AuthenticTrust-Produktansicht mit Reifegradübersicht und offenen Feststellungen",
  },
});

const visibleAreas = [
  ["Anforderungen und Reifegrad", "Standards auswählen, den Bearbeitungsstand einordnen und offene Anforderungen gezielt priorisieren."],
  ["Dokumentversionen und Freigaben", "Dokumente, Versionen, Verantwortlichkeiten und anpassbare Freigabeabläufe nachvollziehbar zusammenführen."],
  ["Nachweise über Themen hinweg", "Vorhandene Nachweise mit Anforderungen aus mehreren Managementthemen verbinden und Doppelpflege verringern."],
  ["Risiken und Maßnahmen", "Feststellungen, Risiken, Verantwortliche, Aufwand, Fristen und Bearbeitungsstatus miteinander verknüpfen."],
  ["KI-Unterstützung", "Wiederkehrende Einordnung und nächste Arbeitsschritte vorbereiten; Fachpersonen prüfen und geben Ergebnisse frei."],
  ["Auditvorbereitung", "Freigegebene Dokumente, zugeordnete Nachweise und offene Maßnahmen für interne oder externe Prüfungen strukturiert zusammenstellen."],
];

const faqs = [
  {
    question: "Was ist AuthenticTrust?",
    answer:
      "AuthenticTrust ist Opnys KI-gestützte Software für Managementsysteme und Compliance. Sie verbindet Anforderungen, Dokumentversionen, Freigaben, Nachweise, Risiken und Maßnahmen in einem gemeinsamen Arbeitsraum.",
  },
  {
    question: "Für wen ist AuthenticTrust geeignet?",
    answer:
      "AuthenticTrust richtet sich an Unternehmen in Industrie, Technologie und Dienstleistungen – von kompakten Teams bis zu mittelständischen Unternehmen und Hidden Champions. Besonders hilfreich ist es, wenn Standards, Dokumente, Freigaben und Maßnahmen heute über mehrere Ablagen oder Teams verteilt sind.",
  },
  {
    question: "Wie unterstützt die KI in AuthenticTrust konkret?",
    answer:
      "Die KI-Unterstützung ist auf typische Compliance- und Managementsystem-Abläufe ausgerichtet. Sie kann Informationen strukturieren, Einordnungen vorbereiten und nächste Schritte vorschlagen. Fachliche Prüfung, Freigabe und Verantwortung bleiben bei den zuständigen Personen.",
  },
  {
    question: "Wie funktionieren Dokumentversionierung und Freigaben?",
    answer:
      "AuthenticTrust führt Dokumente mit Version, Verantwortlichkeit, Standardbezug und Bearbeitungsstatus zusammen. Ein anpassbarer Freigabeablauf macht sichtbar, welche Fassung geprüft, freigegeben oder noch zu bearbeiten ist.",
  },
  {
    question: "Welche Standards unterstützt AuthenticTrust?",
    answer:
      "AuthenticTrust ist normenübergreifend angelegt. TISAX ist abgebildet; weitere ISO-Managementsystemstandards werden schrittweise ergänzt. Welche Standards, Versionen und Themenbereiche aktuell für einen Einsatz verfügbar sind, wird vorab transparent geklärt.",
  },
  {
    question: "Kann AuthenticTrust mehrere Managementsysteme gemeinsam abbilden?",
    answer:
      "Ja, AuthenticTrust ist für eine gemeinsame Sicht auf Anforderungen, Dokumente, Nachweise, Risiken und Maßnahmen über mehrere Managementthemen hinweg angelegt. Dadurch können vorhandene Inhalte wiederverwendet und parallele Ablagen reduziert werden.",
  },
  {
    question: "Wie viel Aufwand spart AuthenticTrust?",
    answer:
      "Die mögliche Entlastung hängt von Ausgangslage, Standards, Ablagen und Freigabewegen ab. Deshalb wird sie nicht pauschal versprochen, sondern in einem abgegrenzten Einsatz anhand konkreter Prozesse und wiederkehrender Aufgaben gemessen.",
  },
  {
    question: "Garantiert AuthenticTrust Konformität oder ersetzt es verantwortliche Fachrollen?",
    answer:
      "Nein. AuthenticTrust unterstützt Verantwortliche bei Struktur, Abläufen und Nachweisen. Es ersetzt weder Informationssicherheits- oder Qualitätsbeauftragte noch Auditoren, Rechtsberatung oder eine Zertifizierungsstelle. Fachliche und rechtliche Entscheidungen bleiben bei den zuständigen Stellen.",
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
              name: "AuthenticTrust: Compliance-Software für Managementsysteme",
              isPartOf: { "@id": "https://www.opny.ai/#website" },
              about: { "@id": "https://www.opny.ai/produkte/authentictrust#software" },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.opny.ai/media/authentictrust/authentictrust-dashboard-1600x1000.jpg",
              },
            },
            {
              "@type": "SoftwareApplication",
              "@id": "https://www.opny.ai/produkte/authentictrust#software",
              name: "AuthenticTrust",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "KI-gestützte Software für Managementsysteme und Compliance, die Anforderungen, Dokumentversionen, Freigaben, Nachweise, Risiken und Maßnahmen verbindet.",
              brand: { "@id": "https://www.opny.ai/#brand" },
              url: "https://www.opny.ai/produkte/authentictrust",
              featureList: [
                "Anforderungen und Reifegrade strukturieren",
                "Dokumentversionen und Freigaben nachvollziehen",
                "Nachweise mit mehreren Managementthemen verbinden",
                "Risiken, Feststellungen und Maßnahmen steuern",
                "KI-gestützte Vorbereitung wiederkehrender Aufgaben",
              ],
              audience: {
                "@type": "BusinessAudience",
                audienceType:
                  "Verantwortliche für Informationssicherheit, Qualität und Compliance in Industrie, Technologie und Dienstleistungen",
              },
              additionalProperty: {
                "@type": "PropertyValue",
                name: "Produktstatus",
                value: "Verfügbares Produkt",
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://www.opny.ai/produkte/authentictrust#faq",
              isPartOf: {
                "@id": "https://www.opny.ai/produkte/authentictrust#webpage",
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
            { label: "AuthenticTrust", href: "/produkte/authentictrust" },
          ]}
        />
        <div className="mx-auto mt-10 max-w-5xl text-center">
          <div className="eyebrow">AuthenticTrust · Compliance-Management-Software</div>
          <h1 className="display-lg mt-6 !text-[clamp(2.15rem,6.5vw,5.5rem)]">
            AuthenticTrust.
            <span className="block text-[#86868b]">
              Managementsysteme und Compliance gemeinsam steuern.
            </span>
          </h1>
          <p className="lead-copy mx-auto mt-7 max-w-3xl">
            AuthenticTrust ist Opnys KI-gestützte Software für Managementsysteme
            und Compliance. Sie verbindet Anforderungen, Dokumentversionen,
            Freigaben, Nachweise, Risiken und Maßnahmen in einem gemeinsamen
            Arbeitsraum.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={companyCtas.authentictrustDemo} variant="primary" theme="light">
              Demo anfragen
            </Button>
            <Button href="#produktumfang" variant="secondary" theme="light">
              Funktionen ansehen
            </Button>
          </div>
          <p className="mt-5 text-sm text-text-muted-light">
            AuthenticTrust ist als Produkt verfügbar. Die Produktansichten verwenden
            Beispieldaten; im Gespräch klären wir den passenden Einsatz für
            Ihre Standards und Prozesse.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-6xl">
          <MediaStage
            src="/media/authentictrust/authentictrust-dashboard-1600x1000.jpg"
            alt="AuthenticTrust-Dashboard mit beispielhaften Anforderungen, Reifegraden und offenen Aufgaben"
            width={1600}
            height={1000}
            priority
            label="AuthenticTrust · Produkteinblick"
            status="Beispieldaten"
            caption="Einblick in die Produktoberfläche mit fiktiven Beispieldaten. Standards, Rollen und Abläufe stimmen wir vor dem Einsatz mit Ihnen ab."
            imageClassName="aspect-[16/10] object-contain"
          />
        </div>
      </Region>

      <Region id="produktumfang" tone="surface">
        <SectionIntro
          eyebrow="Zentrale Funktionen"
          title="Ein Arbeitsraum statt verteilter Ablagen."
          text="AuthenticTrust verbindet wiederkehrende Managementsystem- und Compliance-Arbeit in nachvollziehbaren Abläufen."
        />
        <div className="editorial-rule mt-12 grid md:grid-cols-2">
          {visibleAreas.map(([title, text], index) => (
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

        <div className="mt-20 space-y-20 lg:mt-28 lg:space-y-28">
          <article className="grid gap-9 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
            <div>
              <div className="eyebrow">Dokumente und Nachweise</div>
              <h2 className="section-title mt-5">
                Nachweise nicht nur ablegen, sondern einordnen.
              </h2>
              <p className="lead-copy mt-6">
                AuthenticTrust führt Dokumente mit Typ, Version, Standardbezug,
                verantwortlicher Rolle und Bearbeitungsstatus zusammen.
                Anpassbare Freigabeabläufe machen sichtbar, welche Fassung
                geprüft, freigegeben oder noch zu bearbeiten ist.
              </p>
            </div>
            <MediaStage
              src="/media/authentictrust/authentictrust-documents-evidence-1600x1000.jpg"
              alt="AuthenticTrust-Ansicht für Dokumente und Nachweise mit Status und zugeordneten Beispielkontrollen"
              width={1600}
              height={1000}
              sizes="(min-width: 1024px) 62vw, 100vw"
              label="Dokumente und Nachweise"
              status="Beispieldaten"
              caption="Beispielhafte Dokumenten- und Nachweisübersicht; Rollen, Inhalte und Status sind fiktiv."
              imageClassName="aspect-[16/10] object-contain"
            />
          </article>

          <article className="grid gap-9 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
            <div className="lg:col-start-2">
              <div className="eyebrow">Maßnahmen</div>
              <h2 className="section-title mt-5">
                Aus offenen Punkten wird verantwortete Arbeit.
              </h2>
              <p className="lead-copy mt-6">
                Maßnahmen lassen sich in AuthenticTrust mit einem Befund, einer
                verantwortlichen Rolle, Aufwand, Termin und Status
                zusammenführen.
              </p>
            </div>
            <MediaStage
              src="/media/authentictrust/authentictrust-risks-actions-1600x1000.jpg"
              alt="AuthenticTrust-Maßnahmenübersicht mit verknüpften Beispielbefunden, Rollen, Aufwand und Status"
              width={1600}
              height={1000}
              sizes="(min-width: 1024px) 62vw, 100vw"
              label="Maßnahmenübersicht"
              status="Beispieldaten"
              caption="Fiktiver A.8.24-Beispielfall: Zwei zusätzliche Maßnahmen mit insgesamt zehn Stunden geschätztem Aufwand würden die dargestellte Kryptografie-Lücke schließen. Keine Aussage über reale Systeme."
              className="lg:col-start-1 lg:row-start-1"
              imageClassName="aspect-[16/10] object-contain"
            />
          </article>
        </div>
      </Region>

      <Region tone="base">
        <SectionIntro
          eyebrow="Normenübergreifend angelegt"
          title="Ein Managementsystem statt einzelner Normen-Silos."
          text="Anforderungen überschneiden sich häufig. AuthenticTrust schafft eine gemeinsame Sicht auf Inhalte, Nachweise und offene Arbeit."
        />
        <div className="editorial-rule mt-12 grid gap-0 lg:grid-cols-3">
          {[
            [
              "TISAX und ISO schrittweise",
              "TISAX ist abgebildet. Weitere ISO-Managementsystemstandards werden schrittweise ergänzt; aktuelle Standards und Versionen klären wir vor dem Einsatz.",
            ],
            [
              "Nachweise wiederverwenden",
              "Dokumente und Nachweise lassen sich mehreren passenden Anforderungen zuordnen, statt sie für jedes Managementthema erneut zu pflegen.",
            ],
            [
              "Zusätzliche Anforderungen einordnen",
              "Bestehende Strukturen aus TISAX oder ISO 27001 können mit weiteren Themen wie NIS2 oder KRITIS-Anforderungen verglichen werden. Die verbindliche rechtliche Einordnung bleibt bei den zuständigen Fachstellen.",
            ],
          ].map(([title, text], index) => (
            <article
              key={title}
              className={`border-b border-black/[0.10] py-7 lg:p-8 ${
                index < 2 ? "lg:border-r" : ""
              }`}
            >
              <span className="text-sm font-semibold text-text-muted-light">
                0{index + 1}
              </span>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                {title}
              </h2>
              <p className="mt-3 leading-relaxed text-text-muted-light">
                {text}
              </p>
            </article>
          ))}
        </div>
      </Region>

      <Region tone="alt">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
          <SectionIntro
            eyebrow="Arbeitsmodell"
            title="Fünf Schritte von der Anforderung zur laufenden Verbesserung."
          />
          <ol className="editorial-rule">
            {[
              ["Anforderungen einordnen", "Standards, Themenfelder und Verantwortlichkeiten auswählen."],
              ["Dokumente und Nachweise verbinden", "Freigegebene Inhalte passenden Anforderungen zuordnen."],
              ["Lücken bewerten", "Feststellungen und Risiken fachlich prüfen und priorisieren."],
              ["Maßnahmen steuern", "Verantwortliche, Aufwand, Fristen, Freigaben und Status zusammenführen."],
              ["Wirksamkeit und Auditbereitschaft prüfen", "Fortschritt, Berichte und freigegebene Nachweise für Verbesserungen und Prüfungen strukturieren."],
            ].map(([title, text], index) => (
              <li key={title} className="grid grid-cols-[44px_1fr] gap-5 border-b border-black/[0.10] py-6">
                <span className="text-sm font-semibold text-text-muted-light">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">{title}</h3>
                  <p className="mt-2 leading-relaxed text-text-muted-light">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Region>

      <Region id="zielgruppe" tone="surface">
        <SectionIntro
          eyebrow="Für Industrie, Technologie und Dienstleistungen"
          title="Weniger Routine, mehr Zeit für fachliche Entscheidungen."
          text="AuthenticTrust ersetzt keine verantwortlichen Menschen. Es gibt ihnen einen gemeinsamen Arbeitsraum, klare Abläufe und KI-Unterstützung für wiederkehrende Aufgaben."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            [
              "Kleinere Unternehmen und kompakte Teams",
              "Fachrollen behalten Anforderungen, Dokumente, Termine und Nachweise im Blick, auch wenn Informationssicherheit, Qualität oder Umweltmanagement keine eigene große Abteilung haben.",
            ],
            [
              "Mittelstand und Hidden Champions",
              "Verantwortliche für Informationssicherheit, Qualität, Umwelt und Compliance erhalten eine gemeinsame Sicht über Bereiche und Managementthemen hinweg.",
            ],
            [
              "Unternehmen mit mehreren Anforderungen",
              "Ob Produktion, Technologie, Dienstleistung oder Automotive: Entscheidend sind Ihre Standards, Nachweise und Freigabewege. Den aktuell passenden Produktumfang klären wir vorab.",
            ],
          ].map(([title, text]) => (
            <article
              key={title}
              className="rounded-card border border-black/[0.08] bg-white p-7 shadow-[0_22px_60px_-48px_rgba(0,0,0,0.28)]"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                {title}
              </h2>
              <p className="mt-4 leading-relaxed text-text-muted-light">
                {text}
              </p>
            </article>
          ))}
        </div>
      </Region>

      <Region>
        <SectionIntro
          eyebrow="Kurz beantwortet"
          title="Häufige Fragen zu AuthenticTrust"
        />
        <FaqList items={faqs} />
      </Region>

      <Region spacing="compact">
        <ClosingCta
          title="AuthenticTrust an den eigenen Managementsystemen prüfen."
          text="Nennen Sie uns Ihre Standards, bestehenden Ablagen und Freigabewege. In der Demo zeigen wir, wie AuthenticTrust Ihre Arbeit konkret zusammenführen kann."
          href={companyCtas.authentictrustDemo}
          label="Demo anfragen"
        />
      </Region>
    </main>
  );
}
