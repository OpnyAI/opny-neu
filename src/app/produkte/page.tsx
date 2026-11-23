import Region from "@/components/Region";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import SectionIntro from "@/components/marketing/SectionIntro";
import MediaStage from "@/components/marketing/MediaStage";
import JsonLd from "@/components/marketing/JsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Opny-Produkte für Compliance und kontrollierte KI",
  description:
    "Opny bietet zwei klar getrennte Softwareprodukte: AuthenticTrust für Managementsysteme und Compliance, NodeX für kontrollierte KI-Zugänge und Datenwege.",
  path: "/produkte",
});

const comparison = [
  [
    "Wobei hilft es?",
    "Dokumente, Nachweise und Aufgaben zu Vorgaben organisieren",
    "KI-Nutzung technisch kontrollieren",
  ],
  [
    "Was wird organisiert?",
    "Anforderungen, Dokumente, Freigaben, Nachweise, Risiken, Maßnahmen",
    "Modelle, Rollen, Datenflüsse, Nutzung, Kosten",
  ],
  [
    "Für welche Teams?",
    "Qualität, Informationssicherheit, Compliance, Umwelt, Datenschutz, Management",
    "IT, KI-Verantwortliche, Fachbereiche, Management",
  ],
  [
    "Wann ist es sinnvoll?",
    "Verteilte Ablagen, parallele Managementthemen oder aufwendige Freigaben",
    "KI-Nutzung ohne Freigaben oder klare Regeln",
  ],
];

export default function ProduktePage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://www.opny.ai/produkte#webpage",
              url: "https://www.opny.ai/produkte",
              name: "Opny-Produkte für Compliance und kontrollierte KI",
              isPartOf: { "@id": "https://www.opny.ai/#website" },
              mainEntity: { "@id": "https://www.opny.ai/produkte#products" },
              inLanguage: "de-DE",
            },
            {
              "@type": "ItemList",
              "@id": "https://www.opny.ai/produkte#products",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  url: "https://www.opny.ai/produkte/authentictrust",
                  name: "AuthenticTrust: Compliance-Software für Managementsysteme",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  url: "https://www.opny.ai/produkte/nodex",
                  name: "NodeX: Plattform für kontrollierte KI-Nutzung",
                },
              ],
            },
          ],
        }}
      />
      <Region variant="light" tone="base" spacing="hero">
        <Breadcrumbs
          items={[
            { label: "Startseite", href: "/" },
            { label: "Produkte", href: "/produkte" },
          ]}
        />
        <div className="mt-8 max-w-4xl">
          <div className="eyebrow">Opny Produkte</div>
          <h1 className="display-lg mt-5 text-text-primary-light">
            Vorgaben organisieren. KI kontrolliert nutzen.
          </h1>
          <p className="lead-copy mt-6 max-w-[68ch]">
            AuthenticTrust verbindet die Arbeit an Vorgaben, Dokumenten und
            Nachweisen. NodeX steuert, wer KI mit welchen Daten nutzen darf.
          </p>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card
            theme="light"
            className="flex h-full flex-col overflow-hidden p-5 sm:p-7"
          >
            <MediaStage
              src="/media/authentictrust/authentictrust-documents-evidence-1600x1000.jpg"
              alt="AuthenticTrust-Ansicht für Dokumente und Nachweise mit Status und zugeordneten Beispielkontrollen"
              width={1600}
              height={1000}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="mb-7 rounded-card"
              label="AuthenticTrust von Opny"
              status="Beispieldaten"
              imageClassName="aspect-[16/10] object-contain"
            />
            <div className="eyebrow">AuthenticTrust · Produktansicht</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary-light">
              Dokumente, Nachweise und Maßnahmen verbinden
            </h2>
            <p className="mt-4 leading-relaxed text-text-muted-light">
              Für Anforderungen, eigene Dokumente mit Freigaben, PDF-Nachweise,
              Bewertungen, Risiken und Maßnahmen in einem gemeinsamen
              Arbeitsraum.
            </p>
            <p className="mt-4 rounded-card bg-black/[0.04] p-4 text-sm leading-relaxed text-text-secondary-light">
              AuthenticTrust ist als Produkt verfügbar. Die Produktansicht
              verwendet Beispieldaten; aktuelle Standards und der passende
              Einsatzumfang werden vorab transparent geklärt.
            </p>
            <div className="mt-auto pt-7">
              <Button
                href="/produkte/authentictrust"
                variant="secondary"
                theme="light"
              >
                AuthenticTrust ansehen
              </Button>
            </div>
          </Card>

          <Card
            theme="light"
            className="flex h-full flex-col overflow-hidden p-5 sm:p-7"
          >
            <MediaStage
              src="/media/nodex/marketing-opny-nodex-poster.jpg"
              alt="NodeX: Produkteinblick zum Schutz sensibler Begriffe vor einer KI-Anfrage"
              width={440}
              height={744}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="mb-7 rounded-card"
              label="NodeX von Opny"
              status="Beispielablauf"
              imageClassName="aspect-[16/10] object-contain bg-[rgb(var(--accent-deep))]"
            />
            <div className="eyebrow">NodeX</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary-light">
              Technische Kontrollschicht für den KI-Betrieb
            </h2>
            <p className="mt-4 leading-relaxed text-text-muted-light">
              NodeX bündelt freigegebene Modelle und Workflows, rollenbasierte
              Nutzung, kontrollierte Datenpfade sowie Transparenz über Aktivität
              und Kosten.
            </p>
            <p className="mt-4 rounded-card bg-bg-light p-4 text-sm leading-relaxed text-text-secondary-light">
              Zwei freigegebene Kundenstimmen dokumentieren abgegrenzte
              Einsatzkontexte. Funktionsumfang, Modelle, Datenpfade und
              Betriebsmodell werden für jedes Setup gesondert geprüft.
            </p>
            <div className="mt-auto pt-7">
              <Button href="/produkte/nodex" variant="secondary" theme="light">
                NodeX ansehen
              </Button>
            </div>
          </Card>
        </div>
      </Region>

      <Region variant="light" tone="base">
        <SectionIntro
          eyebrow="Klare Abgrenzung"
          title="Welches Produkt passt zu Ihrer Aufgabe?"
          text="AuthenticTrust organisiert die Arbeit an Vorgaben und Nachweisen. NodeX steuert den tatsächlichen KI-Zugang."
        />
        <div className="mt-8 grid gap-4 md:hidden">
          {comparison.map(([dimension, authentictrust, nodex]) => (
            <article
              key={dimension}
              className="rounded-card border border-border-subtle-light bg-white p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-text-secondary-light">
                {dimension}
              </h3>
              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="text-sm font-semibold text-text-primary-light">
                    AuthenticTrust
                  </dt>
                  <dd className="mt-1 leading-relaxed text-text-muted-light">
                    {authentictrust}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-text-primary-light">
                    NodeX
                  </dt>
                  <dd className="mt-1 leading-relaxed text-text-muted-light">
                    {nodex}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <div
          role="region"
          aria-label="Vergleich von AuthenticTrust und NodeX"
          tabIndex={0}
          className="mt-8 hidden overflow-x-auto rounded-card border border-border-subtle-light bg-white md:block"
        >
          <table className="w-full min-w-[760px] text-left text-sm">
            <caption className="sr-only">
              Funktionsvergleich der Opny-Produkte AuthenticTrust und NodeX
            </caption>
            <thead className="bg-text-primary-light text-white">
              <tr>
                <th className="px-5 py-4 font-semibold">Dimension</th>
                <th className="px-5 py-4 font-semibold">AuthenticTrust</th>
                <th className="px-5 py-4 font-semibold">NodeX</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(([dimension, authentictrust, nodex]) => (
                <tr
                  key={dimension}
                  className="border-t border-border-subtle-light align-top"
                >
                  <th className="px-5 py-4 font-semibold text-text-primary-light">
                    {dimension}
                  </th>
                  <td className="px-5 py-4 leading-relaxed text-text-muted-light">
                    {authentictrust}
                  </td>
                  <td className="px-5 py-4 leading-relaxed text-text-muted-light">
                    {nodex}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Region>
    </main>
  );
}
