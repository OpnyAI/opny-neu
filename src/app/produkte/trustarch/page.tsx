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
  title: "TrustArch: Compliance-Software für Managementsysteme",
  description:
    "TrustArch ist Opnys KI-gestützte Software für Managementsysteme und Compliance. Sie bündelt Anforderungen, Dokumente, Freigaben, Nachweise und Maßnahmen.",
  path: "/produkte/trustarch",
  image: {
    url: "/media/trustarch/trustarch-dashboard-1600x1000.jpg",
    width: 1600,
    height: 1000,
    alt: "TrustArch-Produktansicht mit Reifegradübersicht und offenen Feststellungen",
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
    question: "Was ist TrustArch?",
    answer:
      "TrustArch ist Opnys KI-gestützte Software für Managementsysteme und Compliance. Sie verbindet Anforderungen, Dokumentversionen, Freigaben, Nachweise, Risiken und Maßnahmen in einem gemeinsamen Arbeitsraum.",
  },
  {
    question: "Für wen ist TrustArch geeignet?",
    answer:
      "TrustArch richtet sich an Automotive-Zulieferer, kleinere Unternehmen mit kompakten Fachrollen sowie mittelständische Unternehmen und Hidden Champions. Besonders hilfreich ist es, wenn Standards, Dokumente, Freigaben und Maßnahmen heute über mehrere Ablagen oder Teams verteilt sind.",
  },
  {
    question: "Wie unterstützt die KI in TrustArch konkret?",
    answer:
      "Die KI-Unterstützung ist auf typische Compliance- und Managementsystem-Abläufe ausgerichtet. Sie kann Informationen strukturieren, Einordnungen vorbereiten und nächste Schritte vorschlagen. Fachliche Prüfung, Freigabe und Verantwortung bleiben bei den zuständigen Personen.",
  },
  {
    question: "Wie funktionieren Dokumentversionierung und Freigaben?",
    answer:
      "TrustArch führt Dokumente mit Version, Verantwortlichkeit, Standardbezug und Bearbeitungsstatus zusammen. Ein anpassbarer Freigabeablauf macht sichtbar, welche Fassung geprüft, freigegeben oder noch zu bearbeiten ist.",
  },
  {
    question: "Welche Standards unterstützt TrustArch?",
    answer:
      "TrustArch ist normenübergreifend angelegt. TISAX ist abgebildet; weitere ISO-Managementsystemstandards werden schrittweise ergänzt. Welche Standards, Versionen und Themenbereiche aktuell für einen Einsatz verfügbar sind, wird vorab transparent geklärt.",
  },
  {
    question: "Kann TrustArch mehrere Managementsysteme gemeinsam abbilden?",
    answer:
      "Ja, TrustArch ist für eine gemeinsame Sicht auf Anforderungen, Dokumente, Nachweise, Risiken und Maßnahmen über mehrere Managementthemen hinweg angelegt. Dadurch können vorhandene Inhalte wiederverwendet und parallele Ablagen reduziert werden.",
  },
  {
    question: "Wie viel Aufwand spart TrustArch?",
    answer:
      "Die mögliche Entlastung hängt von Ausgangslage, Standards, Ablagen und Freigabewegen ab. Deshalb wird sie nicht pauschal versprochen, sondern in einem abgegrenzten Einsatz anhand konkreter Prozesse und wiederkehrender Aufgaben gemessen.",
  },
  {
    question: "Garantiert TrustArch Konformität oder ersetzt es verantwortliche Fachrollen?",
    answer:
      "Nein. TrustArch unterstützt Verantwortliche bei Struktur, Abläufen und Nachweisen. Es ersetzt weder Informationssicherheits- oder Qualitätsbeauftragte noch Auditoren, Rechtsberatung oder eine Zertifizierungsstelle. Fachliche und rechtliche Entscheidungen bleiben bei den zuständigen Stellen.",
  },
];

export default function TrustArchPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.opny.ai/produkte/trustarch#webpage",
              url: "https://www.opny.ai/produkte/trustarch",
              name: "TrustArch: Compliance-Software für Managementsysteme",
              isPartOf: { "@id": "https://www.opny.ai/#website" },
              about: { "@id": "https://www.opny.ai/produkte/trustarch#software" },
              video: { "@id": "https://www.opny.ai/produkte/trustarch#produkteinblick" },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.opny.ai/media/trustarch/trustarch-dashboard-1600x1000.jpg",
              },
            },
            {
              "@type": "SoftwareApplication",
              "@id": "https://www.opny.ai/produkte/trustarch#software",
              name: "TrustArch",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "KI-gestützte Software für Managementsysteme und Compliance, die Anforderungen, Dokumentversionen, Freigaben, Nachweise, Risiken und Maßnahmen verbindet.",
              brand: { "@id": "https://www.opny.ai/#brand" },
              url: "https://www.opny.ai/produkte/trustarch",
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
                  "Automotive-Zulieferer, kleinere Unternehmen und Mittelstand",
              },
              additionalProperty: {
                "@type": "PropertyValue",
                name: "Produktstatus",
                value: "Verfügbares Produkt",
              },
            },
            {
              "@type": "VideoObject",
              "@id": "https://www.opny.ai/produkte/trustarch#produkteinblick",
              name: "TrustArch-Produkteinblick: vom Review zur Maßnahme",
              description:
                "Eine 38-sekündige Produkt-Tour mit Beispieldaten zeigt Dashboard, Standardauswahl, Review-Ergebnisse und Maßnahmen.",
              thumbnailUrl:
                "https://www.opny.ai/media/trustarch/marketing-opny-trustarch-poster.jpg",
              contentUrl:
                "https://www.opny.ai/media/trustarch/marketing-opny-trustarch.mp4",
              uploadDate: "2026-07-29T16:50:10+02:00",
              duration: "PT38.3S",
              inLanguage: "de-DE",
              isPartOf: {
                "@id": "https://www.opny.ai/produkte/trustarch#webpage",
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://www.opny.ai/produkte/trustarch#faq",
              isPartOf: {
                "@id": "https://www.opny.ai/produkte/trustarch#webpage",
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
            { label: "TrustArch", href: "/produkte/trustarch" },
          ]}
        />
        <div className="mx-auto mt-10 max-w-5xl text-center">
          <div className="eyebrow">TrustArch · Compliance-Management-Software</div>
          <h1 className="display-lg mt-6">
            TrustArch.
            <span className="block text-[#86868b]">
              Managementsysteme und Compliance gemeinsam steuern.
            </span>
          </h1>
          <p className="lead-copy mx-auto mt-7 max-w-3xl">
            TrustArch ist Opnys KI-gestützte Software für Managementsysteme
            und Compliance. Sie verbindet Anforderungen, Dokumentversionen,
            Freigaben, Nachweise, Risiken und Maßnahmen in einem gemeinsamen
            Arbeitsraum.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={companyCtas.trustarchDemo} variant="primary" theme="light">
              Demo anfragen
            </Button>
            <Button href="#produktumfang" variant="secondary" theme="light">
              Funktionen ansehen
            </Button>
          </div>
          <p className="mt-5 text-sm text-text-muted-light">
            TrustArch ist als Produkt verfügbar. Die Produktansichten verwenden
            Beispieldaten; im Gespräch klären wir den passenden Einsatz für
            Ihre Standards und Prozesse.
          </p>
        </div>
        <figure className="media-stage mx-auto mt-14 max-w-6xl overflow-hidden bg-[#07111f]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 text-xs font-semibold text-white/65 sm:px-7">
            <span>TrustArch · Produkt-Tour mit Beispieldaten</span>
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-white/75">
              38 Sekunden
            </span>
          </div>
          <video
            controls
            playsInline
            preload="metadata"
            poster="/media/trustarch/marketing-opny-trustarch-poster.jpg"
            aria-label="Ruhige Produkt-Tour durch TrustArch mit Beispieldaten"
            aria-describedby="trustarch-product-video-description"
            className="block aspect-video w-full bg-[#07111f] object-contain"
          >
            <source
              src="/media/trustarch/marketing-opny-trustarch.mp4"
              type="video/mp4"
            />
            <a href="/media/trustarch/marketing-opny-trustarch.mp4">
              TrustArch-Produktvideo öffnen
            </a>
          </video>
          <figcaption
            id="trustarch-product-video-description"
            className="border-t border-white/10 bg-[#07111f] p-5 text-sm leading-relaxed text-white/70 sm:p-6"
          >
            <p>
              Die Produkt-Tour zeigt in sechs ruhigen Originalansichten mit
              Beispieldaten, wie ein Review angelegt, Ergebnisse
              eingeordnet und daraus konkrete Maßnahmen erstellt werden.
              TrustArch ersetzt keine Zertifizierungsstelle oder Rechtsberatung.
            </p>
            <p className="mt-3 sm:hidden">
              Für gut lesbare Details kann das Video im Vollbild geöffnet werden.
            </p>
            <details className="mt-4 border-t border-white/10 pt-4">
              <summary className="cursor-pointer font-semibold text-white">
                Ablauf als Text lesen
              </summary>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>Reifegrad und offene Punkte im Dashboard überblicken.</li>
                <li>TISAX als Beispielstandard und den Prüfumfang auswählen.</li>
                <li>Simulierte Ergebnisse als Lücke, teilweise erfüllt oder erfüllt einordnen.</li>
                <li>
                  Im simulierten A.8.24-Beispielfall zwei zusätzliche
                  Maßnahmen mit insgesamt zehn Stunden geschätztem Aufwand
                  vorschlagen, um die dargestellte Kryptografie-Lücke zu
                  schließen. Das ist eine fiktive Beispielberechnung, keine
                  Aussage über reale Systeme.
                </li>
                <li>Verantwortung, Aufwand, Frist und Status zusammenführen.</li>
              </ol>
              <a
                href="/media/trustarch/marketing-opny-trustarch.mp4"
                className="mt-4 inline-flex font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                Video direkt öffnen
              </a>
            </details>
          </figcaption>
        </figure>
      </Region>

      <Region id="produktumfang" tone="surface">
        <SectionIntro
          eyebrow="Zentrale Funktionen"
          title="Ein Arbeitsraum statt verteilter Ablagen."
          text="TrustArch verbindet wiederkehrende Managementsystem- und Compliance-Arbeit in nachvollziehbaren Abläufen."
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
                TrustArch führt Dokumente mit Typ, Version, Standardbezug,
                verantwortlicher Rolle und Bearbeitungsstatus zusammen.
                Anpassbare Freigabeabläufe machen sichtbar, welche Fassung
                geprüft, freigegeben oder noch zu bearbeiten ist.
              </p>
            </div>
            <MediaStage
              src="/media/trustarch/trustarch-documents-evidence-1600x1000.jpg"
              alt="TrustArch-Ansicht für Dokumente und Nachweise mit Status und zugeordneten Beispielkontrollen"
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
                Maßnahmen lassen sich in TrustArch mit einem Befund, einer
                verantwortlichen Rolle, Aufwand, Termin und Status
                zusammenführen.
              </p>
            </div>
            <MediaStage
              src="/media/trustarch/trustarch-risks-actions-1600x1000.jpg"
              alt="TrustArch-Maßnahmenübersicht mit verknüpften Beispielbefunden, Rollen, Aufwand und Status"
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
          text="Anforderungen überschneiden sich häufig. TrustArch schafft eine gemeinsame Sicht auf Inhalte, Nachweise und offene Arbeit."
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

      <Region tone="surface">
        <SectionIntro
          eyebrow="Für unterschiedliche Organisationsgrößen"
          title="Weniger Routine, mehr Zeit für fachliche Entscheidungen."
          text="TrustArch ersetzt keine verantwortlichen Menschen. Es gibt ihnen einen gemeinsamen Arbeitsraum, klare Abläufe und KI-Unterstützung für wiederkehrende Aufgaben."
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
              "Automotive-Zulieferer",
              "TISAX, ISO-bezogene Managementarbeit und zusätzliche Kunden- oder Governance-Anforderungen lassen sich in einer gemeinsamen Arbeitsstruktur bearbeiten.",
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
          title="Häufige Fragen zu TrustArch"
        />
        <FaqList items={faqs} />
      </Region>

      <Region spacing="compact">
        <ClosingCta
          title="TrustArch an den eigenen Managementsystemen prüfen."
          text="Nennen Sie uns Ihre Standards, bestehenden Ablagen und Freigabewege. In der Demo zeigen wir, wie TrustArch Ihre Arbeit konkret zusammenführen kann."
          href={companyCtas.trustarchDemo}
          label="Demo anfragen"
        />
      </Region>
    </main>
  );
}
