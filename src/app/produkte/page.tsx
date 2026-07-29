import Region from "@/components/Region";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import SectionIntro from "@/components/marketing/SectionIntro";
import MediaStage from "@/components/marketing/MediaStage";
import NodeXPreview from "@/components/marketing/NodeXPreview";
import JsonLd from "@/components/marketing/JsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Opny-Produkte: TrustArch und NodeX",
  description:
    "TrustArch organisiert Compliance, Risiken und Nachweise. NodeX macht Modelle, Richtlinien, Datenflüsse und Kosten beim KI-Einsatz kontrollierbar.",
  path: "/produkte",
});

const comparison = [
  ["Primäre Aufgabe", "Compliance und Management organisieren", "KI-Nutzung technisch kontrollieren"],
  ["Kontrollobjekt", "Anforderungen, Risiken, Nachweise, Maßnahmen", "Modelle, Rollen, Datenflüsse, Nutzung, Kosten"],
  ["Typische Nutzer", "Qualität, ISMS, Compliance, Datenschutz, Management", "IT, KI-Verantwortliche, Fachbereiche, Management"],
  ["Typischer Einstieg", "Parallele Standards oder aufwendige Auditvorbereitung", "Schatten-KI oder unkontrollierte Modellnutzung"],
  [
    "Aktueller Nachweis",
    "Produktansichten und Produktvideo mit freigegebenen Beispieldaten",
    "Fertiges Produkt; freigegebenes Produktvideo und zwei Kundenstimmen",
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
              name: "Opny-Produkte: TrustArch und NodeX",
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
                  url: "https://www.opny.ai/produkte/trustarch",
                  name: "TrustArch",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  url: "https://www.opny.ai/produkte/nodex",
                  name: "NodeX",
                },
              ],
            },
          ],
        }}
      />
      <Region variant="light" tone="base" spacing="hero">
        <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Produkte", href: "/produkte" }]} />
        <div className="mt-8 max-w-4xl">
          <div className="eyebrow">Opny Produkte</div>
          <h1 className="display-lg mt-5 text-text-primary-light">
            Zwei Produkte für unterschiedliche Aufgaben.
          </h1>
          <p className="lead-copy mt-6 max-w-[68ch]">
            TrustArch und NodeX erfüllen unterschiedliche Aufgaben: Das eine
            strukturiert Compliance- und Managementarbeit, das andere macht
            die tatsächliche KI-Nutzung technisch kontrollierbar.
          </p>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card theme="light" className="flex h-full flex-col overflow-hidden p-5 sm:p-7">
            <MediaStage
              src="/media/trustarch/trustarch-documents-evidence-1600x1000.jpg"
              alt="TrustArch-Ansicht für Dokumente und Nachweise mit Status und zugeordneten Beispielkontrollen"
              width={1600}
              height={1000}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="mb-7 rounded-[1.2rem]"
              imageClassName="aspect-[16/10] object-contain"
            />
            <div className="eyebrow">TrustArch · Produktansicht</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary-light">
              KI-gestütztes Compliance- und Managementsystem
            </h2>
            <p className="mt-4 leading-relaxed text-text-muted-light">
              Für Standards, Reifegrade, Dokumente, Nachweise, Risiken,
              Feststellungen, Maßnahmen und Auditvorbereitung in einem gemeinsamen Arbeitsraum.
            </p>
            <p className="mt-4 rounded-2xl bg-black/[0.04] p-4 text-sm leading-relaxed text-text-secondary-light">
              Die gezeigte Produktansicht verwendet Beispieldaten. Einsatzumfang
              und konkrete Integrationen werden im Gespräch geklärt.
            </p>
            <div className="mt-auto pt-7">
              <Button href="/produkte/trustarch" variant="secondary" theme="light">
                TrustArch ansehen
              </Button>
            </div>
          </Card>

          <Card theme="light" className="flex h-full flex-col overflow-hidden p-5 sm:p-7">
            <div className="mb-7 [&_figure]:rounded-[1.2rem]">
              <NodeXPreview compact />
            </div>
            <div className="eyebrow">NodeX</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary-light">
              Technische Kontrollschicht für den KI-Betrieb
            </h2>
            <p className="mt-4 leading-relaxed text-text-muted-light">
              NodeX bündelt freigegebene Modelle und Workflows, rollenbasierte
              Nutzung, kontrollierte Datenpfade sowie Transparenz über Aktivität
              und Kosten.
            </p>
            <p className="mt-4 rounded-2xl bg-slate-100 p-4 text-sm leading-relaxed text-slate-700">
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
          title="Welches System kontrolliert was?"
          text="Die Trennung verhindert falsche Erwartungen und macht Verantwortlichkeiten verständlich."
        />
        <div className="mt-8 grid gap-4 md:hidden">
          {comparison.map(([dimension, trustarch, nodex]) => (
            <article key={dimension} className="rounded-3xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-text-secondary-light">
                {dimension}
              </h3>
              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="text-sm font-semibold text-text-primary-light">TrustArch</dt>
                  <dd className="mt-1 leading-relaxed text-text-muted-light">{trustarch}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-text-primary-light">NodeX</dt>
                  <dd className="mt-1 leading-relaxed text-text-muted-light">{nodex}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <div
          role="region"
          aria-label="Vergleich von TrustArch und NodeX"
          tabIndex={0}
          className="mt-8 hidden overflow-x-auto rounded-3xl border border-slate-200 bg-white md:block"
        >
          <table className="w-full min-w-[760px] text-left text-sm">
            <caption className="sr-only">Funktionsvergleich der Opny-Produkte TrustArch und NodeX</caption>
            <thead className="bg-[#1d1d1f] text-white">
              <tr>
                <th className="px-5 py-4 font-semibold">Dimension</th>
                <th className="px-5 py-4 font-semibold">TrustArch</th>
                <th className="px-5 py-4 font-semibold">NodeX</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(([dimension, trustarch, nodex]) => (
                <tr key={dimension} className="border-t border-slate-200 align-top">
                  <th className="px-5 py-4 font-semibold text-slate-950">{dimension}</th>
                  <td className="px-5 py-4 leading-relaxed text-slate-600">{trustarch}</td>
                  <td className="px-5 py-4 leading-relaxed text-slate-600">{nodex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Region>
    </main>
  );
}
