import Region from "@/components/Region";
import Button from "@/components/ui/Button";
import Breadcrumbs from "./Breadcrumbs";
import SectionIntro from "./SectionIntro";
import MediaStage from "./MediaStage";
import ClosingCta from "./ClosingCta";
import FaqList from "./FaqList";
import JsonLd from "./JsonLd";
import RelatedStandards from "./RelatedStandards";
import { companyCtas } from "@/config/site";
import { getStandardPage, type StandardPageId } from "@/content/standard-pages";
import { siteUrl } from "@/lib/metadata";

export default function StandardLandingPage({ standardId }: { standardId: StandardPageId }) {
  const page = getStandardPage(standardId);
  const url = `${siteUrl}${page.standard.href}`;
  const partial = page.standard.coverage === "Ausgewählte Anforderungen";

  return (
    <main>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            name: page.title,
            description: page.description,
            url,
            inLanguage: "de-DE",
            isPartOf: { "@id": `${siteUrl}/#website` },
            about: { "@id": `${siteUrl}/produkte/authentictrust#software` },
          },
          {
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            isPartOf: { "@id": `${url}#webpage` },
            mainEntity: page.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ],
      }} />
      <Region spacing="hero">
        <Breadcrumbs items={[
          { label: "Startseite", href: "/" },
          { label: "AuthenticTrust", href: "/produkte/authentictrust" },
          { label: `${page.standard.name}-Software`, href: page.standard.href },
        ]} />
        <div className="marketing-hero-grid mt-8">
          <div className="marketing-hero-copy">
            <p className="eyebrow">AuthenticTrust von Opny · Compliance-Software</p>
            <h1 className="marketing-hero-title mt-4">
              {page.heading}{" "}<span className="text-accent">{page.emphasis}</span>
            </h1>
            <p className="marketing-hero-lead mt-5">{page.lead}</p>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary-light">
              <strong className="text-accent">{page.standard.coverage}</strong>
              {partial
                ? " · Kein vollständiges eigenständiges Fachmodul."
                : " · Verfügbare Normausgabe und Einsatzumfang klären wir vorab."}
            </p>
            <div className="mt-6">
              <Button href={companyCtas.authentictrustDemo} theme="light">AuthenticTrust-Demo anfragen</Button>
            </div>
          </div>
          <MediaStage
            src={`/media/authentictrust/${page.media.file}`}
            alt={page.media.alt}
            width={1600}
            height={1000}
            priority
            zoom
            label="AuthenticTrust von Opny"
            status="Beispieldaten"
            caption={page.media.caption}
            sizes="(min-width: 1280px) 660px, 100vw"
          />
        </div>
      </Region>
      <Region tone="surface">
        <SectionIntro eyebrow="Ihr Ausgangspunkt" title={page.problem.title} text={page.problem.text} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {page.steps.map((step, index) => (
            <article key={step.title} className="min-w-0 rounded-card border border-border-subtle-light bg-bg-light p-6">
              <p className="text-sm font-semibold text-accent">Schritt {index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-text-muted-light">{step.text}</p>
            </article>
          ))}
        </div>
      </Region>
      <Region>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="min-w-0">
            <SectionIntro eyebrow="So kann die Zusammenarbeit aussehen" title={page.example.title} text={page.example.text} />
            <p className="mt-5 leading-relaxed text-text-muted-light">{page.example.roles}</p>
          </div>
          <div className="min-w-0 rounded-card border border-border-subtle-light bg-[rgb(var(--opny-bg-alt))] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Was bedeutet {page.standard.name}?</h2>
            <p className="mt-4 leading-relaxed text-text-muted-light">{page.definition}</p>
            <a href={page.source.href} target="_blank" rel="noopener noreferrer" className="at-text-link mt-5">{page.source.label}</a>
          </div>
        </div>
      </Region>
      <Region tone="surface" id="umfang" spacing="compact">
        <SectionIntro eyebrow="Produktumfang" title={`Was AuthenticTrust für ${page.standard.name} abbildet.`} text={page.scope} />
      </Region>
      <RelatedStandards currentId={standardId} />
      <Region tone="surface">
        <div className="mx-auto max-w-4xl">
          <SectionIntro eyebrow="Vor der Entscheidung" title={`Fragen zur Software für ${page.standard.name}.`} />
          <FaqList items={page.faqs} />
        </div>
      </Region>
      <Region spacing="compact">
        <ClosingCta eyebrow={`${page.standard.name} mit AuthenticTrust`} title={page.closing.title} text={page.closing.text} href={companyCtas.authentictrustDemo} label="AuthenticTrust-Demo anfragen" />
      </Region>
    </main>
  );
}
