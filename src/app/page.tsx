import Link from "next/link";
import Region from "@/components/Region";
import Button from "@/components/ui/Button";
import SectionIntro from "@/components/marketing/SectionIntro";
import JsonLd from "@/components/marketing/JsonLd";
import MediaStage from "@/components/marketing/MediaStage";
import NodeXPreview from "@/components/marketing/NodeXPreview";
import OpnyProductStage from "@/components/marketing/OpnyProductStage";
import ClosingCta from "@/components/marketing/ClosingCta";
import FaqList from "@/components/marketing/FaqList";
import CustomerVoice from "@/components/marketing/CustomerVoice";
import { companyCtas } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

const homeMetadata = createMetadata({
  title: "Opny: kontrollierte KI für Automotive-Zulieferer",
  description:
    "Opny hilft Automotive-Zulieferern, KI kontrolliert einzuführen: mit Governance, technischer Kontrolle, KI-Beratung und KI-Schulungen.",
  path: "/",
  image: {
    url: "/opny-brand-icon-1024.png",
    width: 1024,
    height: 1024,
    alt: "Opny Logo",
  },
});

export const metadata = {
  ...homeMetadata,
  title: {
    absolute: "Opny: kontrollierte KI für Automotive-Zulieferer",
  },
  twitter: {
    ...homeMetadata.twitter,
    card: "summary" as const,
  },
};

const decisionQuestions = [
  {
    number: "01",
    question: "Liegen Audit-Nachweise verstreut in Ordnern und Tabellen?",
    answer:
      "TrustArch bringt Anforderungen, Dokumente, Risiken und offene Aufgaben an einem Ort zusammen.",
    href: "/produkte/trustarch",
  },
  {
    number: "02",
    question: "Nutzen Mitarbeitende ChatGPT & Co. ohne klare Regeln?",
    answer:
      "NodeX schafft einen zentralen Zugang: mit freigegebenen KI-Modellen, passenden Rechten und einem Überblick über Nutzung und Kosten.",
    href: "/produkte/nodex",
  },
  {
    number: "03",
    question: "Gibt es Regeln, die im Arbeitsalltag niemand sicher anwenden kann?",
    answer:
      "Beratung und Schulung machen aus Vorgaben verständliche Entscheidungen, Übungen und feste Arbeitsabläufe.",
    href: "/automotive",
  },
];

const homepageFaqs = [
  {
    question: "Was ist Opny?",
    answer:
      "Opny unterstützt Automotive-Zulieferer dabei, KI kontrolliert einzuführen. Beratung und Schulungen begleiten Strategie und Umsetzung; TrustArch strukturiert Compliance-Arbeit, NodeX kontrolliert KI-Zugänge technisch und wird passend zur jeweiligen Systemumgebung konfiguriert.",
  },
  {
    question: "Welcher Opny-Baustein passt zu welcher Ausgangslage?",
    answer:
      "Der passende Opny-Baustein richtet sich nach dem konkreten Problem. TrustArch ordnet Compliance-Arbeit, NodeX kontrolliert KI-Zugänge, Beratung bereitet Entscheidungen und Pilotierung vor, und Schulungen übersetzen Regeln und Tools in den Arbeitsalltag.",
  },
  {
    question: "Welche Unterstützung bietet Opny bei KI-Beratung und KI-Schulungen?",
    answer:
      "Opny unterstützt bei der Auswahl sinnvoller Anwendungen, Datenregeln, Zuständigkeiten und einem begrenzten Praxistest. Schulungen und Coaching können auf ChatGPT, Google Gemini, Microsoft Copilot oder interne KI-Zugänge abgestimmt werden.",
  },
  {
    question: "Braucht jedes Unternehmen TrustArch und NodeX?",
    answer:
      "Nein. TrustArch ordnet Anforderungen und Nachweise. NodeX macht die tatsächliche KI-Nutzung technisch kontrollierbar. Welcher Baustein passt, hängt von der konkreten Ausgangslage ab.",
  },
  {
    question: "Ersetzt Opny Rechtsberatung oder eine Zertifizierungsstelle?",
    answer:
      "Nein. Opny hilft bei Regeln, Zuständigkeiten, technischer Kontrolle und Umsetzung. Rechtliche Bewertungen und Zertifizierungsentscheidungen bleiben bei den zuständigen Fachstellen.",
  },
];

export default function Home() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.opny.ai/#webpage",
              url: "https://www.opny.ai/",
              name: "KI kontrolliert einführen für Automotive-Zulieferer",
              isPartOf: { "@id": "https://www.opny.ai/#website" },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.opny.ai/media/opny/automotive-quality-inspection-v2.jpg",
              },
              inLanguage: "de-DE",
            },
            {
              "@type": "FAQPage",
              "@id": "https://www.opny.ai/#faq",
              isPartOf: { "@id": "https://www.opny.ai/#webpage" },
              mainEntity: homepageFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }}
      />

      <Region
        tone="base"
        spacing="hero"
        containerClassName="2xl:!max-w-[1500px]"
      >
        <div className="mx-auto max-w-6xl text-center">
          <div className="eyebrow">KI für Automotive-Zulieferer · Tier-1 bis Tier-3 · DACH</div>
          <h1 className="display-xl mt-7 text-text-primary-light">
            KI kontrolliert einführen.
            <span className="block text-[#86868b]">
              Für Automotive-Zulieferer.
            </span>
          </h1>
          <p className="lead-copy mx-auto mt-8 max-w-3xl">
            Opny hilft Automotive-Zulieferern, KI sinnvoll und sicher zu
            nutzen: mit klaren Regeln, kontrollierten Zugängen, persönlicher
            KI-Beratung und Schulungen für den Arbeitsalltag.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={companyCtas.generalInquiry} variant="primary" theme="light">
              Erstgespräch anfragen
            </Button>
            <Button href="/wissen/ki-im-unternehmen-einfuehren" variant="secondary" theme="light">
              Leitfaden ansehen
            </Button>
          </div>
          <p className="mt-5 text-sm text-text-muted-light">
            Sie müssen nicht sofort ein Produkt kaufen. Wir klären zuerst, was Sie wirklich brauchen.
          </p>
        </div>
        <OpnyProductStage />
      </Region>

      <Region tone="surface" spacing="compact">
        <div className="grid gap-5 md:grid-cols-[0.35fr_1fr] md:items-center">
          <div className="eyebrow">Warum Opny</div>
          <p className="max-w-4xl text-xl font-medium leading-relaxed tracking-[-0.02em] text-text-primary-light md:text-2xl">
            Regeln helfen nur, wenn sie verständlich sind, technisch
            eingehalten werden können und im Arbeitsalltag funktionieren.
          </p>
        </div>
      </Region>

      <Region tone="base" spacing="compact">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <div className="eyebrow">Aktuelle Unternehmensrealität</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-text-primary-light md:text-4xl">
              KI wird oft schneller genutzt, als Unternehmen Regeln und Wissen aufbauen.
            </h2>
            <p className="mt-4 leading-relaxed text-text-muted-light">
              Opny schließt diese Lücke: von der ersten sinnvollen Anwendung
              über klare Datenregeln bis zur sicheren Nutzung im Team.
            </p>
            <Link
              href="/wissen/ki-im-unternehmen-einfuehren"
              className="mt-6 inline-flex text-sm font-semibold text-[#0066cc] hover:underline"
            >
              Leitfaden zur KI-Einführung →
            </Link>
          </div>
          <div>
            <dl className="grid gap-px overflow-hidden rounded-card border border-black/[0.08] bg-black/[0.08] sm:grid-cols-3">
              {[
                ["48 %", "der Berufstätigen nutzen KI zumindest gelegentlich bei der Arbeit", "Bitkom 2026"],
                ["12 %", "der beruflichen KI-Nutzer tun dies ohne Wissen des Arbeitgebers", "Bitkom 2026"],
                ["50 %", "der Unternehmen sehen hohen KI-Weiterbildungsbedarf", "TÜV 2026"],
              ].map(([value, label, source]) => (
                <div key={value} className="bg-white p-6">
                  <dt className="text-sm leading-relaxed text-text-muted-light">{label}</dt>
                  <dd className="mt-4 text-4xl font-semibold tracking-[-0.055em]">{value}</dd>
                  <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary-light">
                    {source}
                  </div>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs leading-relaxed text-text-secondary-light">
              Quellen:{" "}
              <a
                href="https://www.bitkom.org/sites/main/files/2026-06/bitkom-studienbericht-ki-bevoelkerung.pdf"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                Bitkom KI-Studie 2026
              </a>
              {" · "}
              <a
                href="https://www.tuev-verband.de/fileadmin/user_upload/Content_local/Studien_local/2026_TUEV-Verband_Weiterbildungsstudie_2026_Studienbericht.pdf"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                TÜV Weiterbildungsstudie 2026
              </a>
            </p>
          </div>
        </div>
      </Region>

      <Region tone="base">
        <SectionIntro
          eyebrow="Nachweise und Aufgaben ordnen"
          title="TrustArch bringt Audit-Arbeit an einen Ort."
          text="TrustArch zeigt, wie Anforderungen, Dokumente, Risiken, Abweichungen und offene Aufgaben zusammen bearbeitet werden können."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
          <div>
            <p className="leading-relaxed text-text-muted-light">
              Statt Nachweise in Tabellen, Ordnern und einzelnen Tools zu
              suchen, führt TrustArch Schritt für Schritt von der Anforderung
              bis zur Vorbereitung auf ein Audit.
            </p>
            <Link
              href="/produkte/trustarch"
              className="mt-6 inline-flex text-sm font-semibold text-[#0066cc] hover:underline"
            >
              TrustArch entdecken →
            </Link>
          </div>
          <MediaStage
            src="/media/trustarch/trustarch-review-results-1600x1000.jpg"
            alt="TrustArch-Review mit bewerteten Beispielanforderungen und der Möglichkeit, Maßnahmen anzulegen"
            width={1600}
            height={1000}
            sizes="(min-width: 1024px) 62vw, 100vw"
            label="Simulierter Compliance Review"
            status="Beispieldaten"
            caption="Simuliertes Review mit fiktiven Beispieldaten; keine Zertifizierungs- oder Rechtsbewertung."
            imageClassName="aspect-[16/10] bg-[#f5f5f7] object-contain"
          />
        </div>
      </Region>

      <Region tone="alt">
        <div className="grid gap-12 lg:grid-cols-[0.43fr_0.57fr] lg:items-center">
          <div>
            <div className="eyebrow">KI-Zugänge kontrollieren</div>
            <h2 className="section-title mt-5">NodeX wendet Regeln direkt beim KI-Zugriff an.</h2>
            <p className="lead-copy mt-6">
              Mitarbeitende greifen über einen zentralen Zugang auf
              freigegebene KI-Modelle zu. Rechte, der Umgang mit Daten, Nutzung und Kosten
              bleiben dabei nachvollziehbar.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted-light">
              Zwei freigegebene Kundenstimmen dokumentieren abgegrenzte
              Einsatzkontexte. Modelle, Datenwege und Betriebsform werden
              passend zur jeweiligen Kundenumgebung festgelegt.
            </p>
            <Link
              href="/produkte/nodex"
              className="mt-7 inline-flex text-sm font-semibold text-[#0066cc] hover:underline"
            >
              NodeX entdecken →
            </Link>
          </div>
          <NodeXPreview compact autoPlay />
        </div>
      </Region>

      <CustomerVoice />

      <Region tone="base">
        <div className="grid gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
          <MediaStage
            src="/media/opny/mehmet-catalsakal-founder-home-web.jpg"
            alt="Mehmet Catalsakal, Gründer von Opny"
            width={4000}
            height={2667}
            sizes="(min-width: 1024px) 58vw, 100vw"
            caption="Mehmet Catalsakal, Gründer von Opny"
            imageClassName="aspect-[4/3] object-cover object-[50%_35%] sm:aspect-[3/2]"
          />
          <div>
            <div className="eyebrow">Gründergeführt</div>
            <h2 className="section-title mt-5">
              Mit zehn Jahren Erfahrung in Automotive-Projekten.
            </h2>
            <p className="lead-copy mt-6">
              Die Erfahrung von Mehmet Catalsakal aus komplexen
              Automotive-Projekten prägt Opnys Anspruch: KI verständlich,
              sicher und im Arbeitsalltag umsetzbar machen.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
              <Link href="/loesungen/ki-beratung-automotive" className="text-[#0066cc] hover:underline">
                KI-Beratung ansehen →
              </Link>
              <Link href="/ueber-opny" className="text-[#0066cc] hover:underline">
                Mehr über Opny →
              </Link>
            </div>
          </div>
        </div>
      </Region>

      <Region tone="surface">
        <SectionIntro
          eyebrow="Entscheidungshilfe"
          title="Wo sollte Ihr Unternehmen beginnen?"
          text="Nicht beim nächsten Tool, sondern bei dem Problem, das heute am meisten Zeit, Sicherheit oder Überblick kostet."
        />
        <div className="editorial-rule mt-12">
          {decisionQuestions.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group grid gap-4 border-b border-black/[0.10] py-7 md:grid-cols-[70px_0.7fr_1fr_auto] md:items-start"
            >
              <span className="text-sm font-semibold text-text-muted-light">{item.number}</span>
              <h3 className="text-xl font-semibold tracking-[-0.025em] md:text-2xl">
                {item.question}
              </h3>
              <p className="leading-relaxed text-text-muted-light">{item.answer}</p>
              <span aria-hidden="true" className="text-xl transition group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </Region>

      <Region tone="base">
        <SectionIntro
          eyebrow="Kurz beantwortet"
          title="Was Entscheider über Opny wissen sollten"
        />
        <FaqList items={homepageFaqs} />
      </Region>

      <Region tone="base" spacing="compact">
        <ClosingCta
          eyebrow="Passender Einstieg"
          title="Was ist bei Ihrer KI-Nutzung heute noch unklar?"
          text="Wir betrachten Ihre Ausgangslage, Daten und Zuständigkeiten und sagen offen, welcher nächste Schritt sinnvoll ist."
          href={companyCtas.generalInquiry}
          label="Erstgespräch anfragen"
        />
      </Region>
    </main>
  );
}
