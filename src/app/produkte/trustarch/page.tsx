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
  title: "TrustArch für Automotive-Zulieferer: Compliance und Nachweise",
  description:
    "TrustArch zeigt Automotive-Zulieferern, wie Standards, Nachweise, Risiken, Abweichungen, Maßnahmen und Auditvorbereitung zusammenlaufen.",
  path: "/produkte/trustarch",
  image: {
    url: "/media/trustarch/trustarch-dashboard-1600x1000.jpg",
    width: 1600,
    height: 1000,
    alt: "TrustArch-Produktansicht mit Reifegradübersicht und offenen Feststellungen",
  },
});

const visibleAreas = [
  ["Reifegrad und Compliance Review", "Standards auswählen, Reifegrade betrachten und Lücken in einem geführten Ablauf einordnen."],
  ["Dokumente und Nachweise", "Dokumente mit Typ, Standardbezug, Verantwortlichkeit und Status strukturiert zusammenführen."],
  ["Assets, Risiken und Maßnahmen", "Schutzbedarfe, Risiken, Feststellungen, Aufwand, Fristen und Behandlung nachvollziehbar verbinden."],
  ["Monitoring und Integrationen", "Automatisierte Kontrollen mit Framework-Bezug und vorgesehene Systemanbindungen sichtbar machen."],
  ["BCM und Incident Management", "Business-Impact, Wiederanlaufziele, Notfallplanung, Fristen und Nachweise gemeinsam bearbeiten."],
  ["AI-Act-Register", "KI-Systeme, Rollen, Risikoklassen, Pflichten, Verantwortliche und Status zentral inventarisieren."],
];

const faqs = [
  {
    question: "Was ist TrustArch?",
    answer:
      "TrustArch ist ein KI-gestütztes Compliance- und Managementsystem. Es bringt Standards, Nachweise, Risiken und Maßnahmen in einem gemeinsamen Arbeitsraum zusammen.",
  },
  {
    question: "Ist TrustArch bereits produktiv verfügbar?",
    answer:
      "Ja. TrustArch ist als Produkt verfügbar. Welche Bereiche, Integrationen und technischen Rahmenbedingungen für ein Unternehmen sinnvoll sind, wird vor dem Einsatz gemeinsam geklärt.",
  },
  {
    question: "Ist TrustArch nur ein AI-Act-Register?",
    answer:
      "Nein. TrustArch umfasst neben dem AI-Act-Register auch Standards, Nachweise, Risiken sowie Audit- und Managementprozesse.",
  },
  {
    question: "Ersetzt TrustArch eine Zertifizierungsstelle oder Rechtsberatung?",
    answer:
      "Nein. TrustArch strukturiert interne Arbeit und hilft bei der Vorbereitung von Nachweisen. Zertifizierungsentscheidungen und rechtliche Bewertungen bleiben bei den zuständigen Fachstellen.",
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
              name: "TrustArch für Automotive-Zulieferer: Compliance und Nachweise",
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
              description: "KI-gestütztes Compliance- und Managementsystem für Standards, Nachweise, Risiken und Maßnahmen.",
              brand: { "@id": "https://www.opny.ai/#brand" },
              url: "https://www.opny.ai/produkte/trustarch",
              additionalProperty: {
                "@type": "PropertyValue",
                name: "Produktstatus",
                value: "Verfügbares Produkt; Einsatzumfang wird individuell geklärt",
              },
            },
            {
              "@type": "VideoObject",
              "@id": "https://www.opny.ai/produkte/trustarch#produkteinblick",
              name: "TrustArch-Produkteinblick: vom Review zur Maßnahme",
              description:
                "Eine ruhige 38-sekündige Produkt-Tour mit Beispieldaten zeigt Dashboard, Standardauswahl, Prüfumfang, simulierte Review-Ergebnisse und Maßnahmen.",
              thumbnailUrl:
                "https://www.opny.ai/media/trustarch/marketing-opny-trustarch-poster.jpg",
              contentUrl:
                "https://www.opny.ai/media/trustarch/marketing-opny-trustarch.mp4",
              uploadDate: "2026-07-29",
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
          <div className="eyebrow">TrustArch · Produktansicht</div>
          <h1 className="display-lg mt-6">
            Compliance-Arbeit bündeln.
            <span className="block text-[#86868b]">Nachweise vorbereiten.</span>
          </h1>
          <p className="lead-copy mx-auto mt-7 max-w-3xl">
            TrustArch zeigt, wie Standards, Dokumente, Risiken,
            Feststellungen und Maßnahmen in einem gemeinsamen Arbeitsraum
            zusammenlaufen können.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={companyCtas.trustarchDemo} variant="primary" theme="light">
              Demo anfragen
            </Button>
            <Button href="#produktumfang" variant="secondary" theme="light">
              Geprüften Umfang ansehen
            </Button>
          </div>
          <p className="mt-5 text-sm text-text-muted-light">
            Die Ansichten zeigen freigegebene Beispieldaten. TrustArch ersetzt
            weder eine Zertifizierungsstelle noch Rechtsberatung.
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
              fiktiven Beispieldaten, wie ein Review angelegt, Ergebnisse
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
          eyebrow="In der Produktansicht sichtbar"
          title="Ein Arbeitsraum für zusammenhängende Compliance-Prozesse."
          text="Die folgenden Ansichten zeigen, wie zusammenhängende Compliance-Arbeit in TrustArch organisiert wird."
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
                TrustArch zeigt Dokumente mit Typ, Standardbezug,
                verantwortlicher Rolle und Bearbeitungsstatus in einer
                gemeinsamen Übersicht.
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

      <Region tone="alt">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
          <SectionIntro
            eyebrow="Arbeitsmodell"
            title="Fünf Schritte vom Standard zur Auditvorbereitung."
          />
          <ol className="editorial-rule">
            {[
              ["Anforderungen einordnen", "Standards und Themenfelder auswählen."],
              ["Nachweise zuordnen", "Dokumente, Assets und Kontrollen verbinden."],
              ["Lücken bewerten", "Feststellungen und Risiken priorisieren."],
              ["Maßnahmen steuern", "Verantwortliche, Aufwand, Fristen und Status zusammenführen."],
              ["Audit vorbereiten", "Berichte und freigegebene Nachweise strukturieren."],
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

      <Region>
        <SectionIntro eyebrow="FAQ" title="Entscheidungsfragen zu TrustArch" />
        <FaqList items={faqs} />
      </Region>

      <Region spacing="compact">
        <ClosingCta
          title="TrustArch im eigenen Compliance-Kontext prüfen."
          text="Nennen Sie uns Standards, Auditdruck und aktuelle Ablagewege. Wir zeigen transparent, was bereits sichtbar ist und was für einen Pilot noch fehlt."
          href={companyCtas.trustarchDemo}
          label="Demo anfragen"
        />
      </Region>
    </main>
  );
}
