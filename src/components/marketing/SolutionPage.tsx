import Region from "@/components/Region";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Breadcrumbs from "./Breadcrumbs";
import SectionIntro from "./SectionIntro";
import JsonLd from "./JsonLd";
import FaqList from "./FaqList";
import ClosingCta from "./ClosingCta";

type Item = {
  title: string;
  text: string;
};

type Faq = {
  question: string;
  answer: string;
};

export default function SolutionPage({
  path,
  eyebrow,
  title,
  intro,
  primaryCta,
  secondaryCta,
  problemTitle,
  problemText,
  problems,
  processTitle,
  processText,
  steps,
  deliverablesTitle,
  deliverables,
  audienceTitle,
  audiences,
  faqs,
  sources,
  evidence,
  formats,
  formatsTitle,
  formatsText,
}: {
  path: string;
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  problemTitle: string;
  problemText: string;
  problems: Item[];
  processTitle: string;
  processText: string;
  steps: Item[];
  deliverablesTitle: string;
  deliverables: Item[];
  audienceTitle: string;
  audiences: string[];
  faqs: Faq[];
  sources?: Array<{ label: string; href: string; note: string }>;
  evidence?: {
    eyebrow: string;
    title: string;
    text: string;
    stats: Array<{ value: string; label: string }>;
    sourceLabel: string;
    sourceHref: string;
  };
  formats?: Array<{ title: string; text: string; meta: string }>;
  formatsTitle?: string;
  formatsText?: string;
}) {
  const pageUrl = `https://www.opny.ai${path}`;
  const webPageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": webPageId,
        url: pageUrl,
        name: title,
        description: intro,
        isPartOf: { "@id": "https://www.opny.ai/#website" },
        mainEntity: { "@id": serviceId },
        inLanguage: "de-DE",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: title,
        description: intro,
        provider: { "@id": "https://www.opny.ai/#organization" },
        mainEntityOfPage: { "@id": webPageId },
        areaServed: ["DE", "AT", "CH"],
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Automotive-Zulieferer Tier-1 bis Tier-3",
        },
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        isPartOf: { "@id": webPageId },
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main>
      <JsonLd data={serviceJsonLd} />
      <Region variant="light" tone="base" spacing="hero">
        <Breadcrumbs
          items={[
            { label: "Startseite", href: "/" },
            { label: "Automotive", href: "/automotive" },
            { label: eyebrow, href: path },
          ]}
        />
        <div className="mt-8 max-w-4xl">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="display-lg mt-5 text-text-primary-light">
            {title}
          </h1>
          <p className="lead-copy mt-6 max-w-[70ch]">
            {intro}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCta.href} variant="primary" theme="light">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="secondary" theme="light">
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </Region>

      {evidence ? (
        <Region variant="light" tone="surface" spacing="compact">
          <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <div>
              <div className="eyebrow">{evidence.eyebrow}</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                {evidence.title}
              </h2>
              <p className="mt-4 leading-relaxed text-text-muted-light">
                {evidence.text}
              </p>
              <a
                href={evidence.sourceHref}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex text-sm font-semibold text-[#0066cc] hover:underline"
              >
                Quelle: {evidence.sourceLabel} ↗
              </a>
            </div>
            <dl className="grid gap-px overflow-hidden rounded-card border border-black/[0.08] bg-black/[0.08] sm:grid-cols-3">
              {evidence.stats.map((stat) => (
                <div key={stat.label} className="bg-white p-6">
                  <dt className="text-sm leading-relaxed text-text-muted-light">{stat.label}</dt>
                  <dd className="mt-3 text-4xl font-semibold tracking-[-0.05em]">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Region>
      ) : null}

      {formats?.length ? (
        <Region variant="light" tone="base">
          <SectionIntro
            eyebrow="Formate"
            title={formatsTitle ?? "Das passende Format für Ziel und Zielgruppe"}
            text={formatsText}
          />
          <div className="mt-10 grid gap-x-8 border-t border-black/[0.10] md:grid-cols-2">
            {formats.map((format) => (
              <article key={format.title} className="border-b border-black/[0.10] py-7">
                <div className="text-xs font-semibold uppercase tracking-[0.1em] text-text-muted-light">
                  {format.meta}
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-text-primary-light">
                  {format.title}
                </h2>
                <p className="mt-3 leading-relaxed text-text-muted-light">{format.text}</p>
              </article>
            ))}
          </div>
        </Region>
      ) : null}

      <Region
        variant="light"
        tone={formats?.length ? "surface" : evidence ? "base" : "surface"}
      >
        <SectionIntro eyebrow="Ausgangslage" title={problemTitle} text={problemText} />
        <div className="editorial-rule mt-12 grid md:grid-cols-2 lg:grid-cols-3">
          {problems.map((item) => (
            <article key={item.title} className="border-b border-black/[0.10] py-7 md:p-7">
              <h2 className="text-xl font-semibold text-text-primary-light">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted-light">{item.text}</p>
            </article>
          ))}
        </div>
      </Region>

      <Region variant="light" tone="base">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro eyebrow="Vorgehen" title={processTitle} text={processText} />
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[44px_1fr] gap-4 border-t border-black/[0.10] py-6">
                <span className="text-sm font-semibold text-text-muted-light">0{index + 1}</span>
                <div>
                  <h3 className="font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <SectionIntro eyebrow="Ergebnisse" title={deliverablesTitle} />
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {deliverables.map((item) => (
            <Card key={item.title} theme="light" className="p-6">
              <h2 className="text-xl font-semibold text-text-primary-light">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-text-muted-light">{item.text}</p>
            </Card>
          ))}
        </div>
      </Region>

      <Region variant="light" tone="base">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionIntro eyebrow="Zielgruppen" title={audienceTitle} />
          <div className="flex flex-wrap gap-3">
            {audiences.map((audience) => (
              <span key={audience} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                {audience}
              </span>
            ))}
          </div>
        </div>
      </Region>

      {sources?.length ? (
        <Region variant="light" tone="alt" spacing="compact">
          <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
            <div>
              <div className="eyebrow">Primärquellen</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                Fachliche Einordnung nachvollziehen.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-muted-light">
                Zuletzt fachlich geprüft am 28. Juli 2026. Die Links führen zu
                den zuständigen Originalquellen.
              </p>
            </div>
            <ul className="editorial-rule">
              {sources.map((source) => (
                <li key={source.href} className="border-b border-black/[0.10] py-5">
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#0066cc] hover:underline"
                  >
                    {source.label} ↗
                  </a>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted-light">
                    {source.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Region>
      ) : null}

      <Region variant="light" tone="surface">
        <SectionIntro eyebrow="FAQ" title={`Häufige Fragen zu ${eyebrow}`} />
        <FaqList items={faqs} />
      </Region>

      <Region variant="light" tone="base" spacing="compact">
        <ClosingCta
          title="Ausgangslage konkret einordnen."
          text="Ein Erstgespräch klärt Ziel, Verantwortlichkeiten, Datenrisiken und den sinnvoll begrenzten nächsten Schritt."
          href={primaryCta.href}
          label={primaryCta.label}
        />
      </Region>
    </main>
  );
}
