import Link from "next/link";
import Region from "@/components/Region";
import Card from "@/components/ui/Card";
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
  title: "KI für Automotive-Zulieferer kontrolliert einführen",
  description:
    "Opny hilft Automotive-Zulieferern, KI kontrolliert einzuführen: mit KI-Beratung, Governance, sicheren Zugängen und Schulungen für den Arbeitsalltag.",
  path: "/automotive",
  image: {
    url: "/media/opny/automotive-quality-inspection-v2.jpg",
    width: 1672,
    height: 941,
    alt: "Qualitätsprüfung eines bearbeiteten Aluminiumgehäuses bei einem Automotive-Zulieferer",
  },
});

const pressures = [
  "Vertrauliche Kunden-, Entwicklungs- und Produktionsinformationen",
  "Parallele Anforderungen aus Qualität, Informationssicherheit, Datenschutz und KI-Governance",
  "Schatten-KI und private Konten außerhalb freigegebener Prozesse",
  "Verteilte Dokumente, Nachweise, Risiken und Maßnahmen",
  "Begrenzte Kapazität in IT, Qualität und Fachbereichen",
  "Hoher Erwartungsdruck bei gleichzeitig unklarer Verantwortung",
];

const roles = [
  ["Geschäftsführung", "Klare Entscheidungen, Zuständigkeiten und ein verständlicher Überblick über Risiken"],
  ["IT & Informationssicherheit", "Freigegebene Zugänge und klare Regeln dafür, wohin Daten gesendet werden dürfen"],
  ["Qualität & Compliance", "Anforderungen, Nachweise, Abweichungen und Maßnahmen"],
  ["Engineering & Projektmanagement", "Nutzbare KI-Unterstützung mit verständlichen Regeln"],
];

const useCases = [
  ["Wissen & Dokumente", "Technische Spezifikationen, Richtlinien und Projektwissen schneller erschließen, ohne vertrauliche Inhalte unkontrolliert weiterzugeben."],
  ["Qualität & Engineering", "Berichte, Anforderungen, Abweichungen und technische Inhalte vorbereiten und fachlich nachvollziehbar prüfen."],
  ["Kunden- & Lieferantenanforderungen", "Verteilte Vorgaben strukturieren, Verantwortlichkeiten zuordnen und relevante Nachweise auffindbar halten."],
  ["Projekt- & Prozessarbeit", "Recherche, Zusammenfassungen und wiederkehrende Wissensarbeit mit freigegebenen Tools und klaren Prüfschritten unterstützen."],
];

const automotiveFaqs = [
  {
    question: "Wie startet ein Automotive-Zulieferer einen kontrollierten KI-Praxistest?",
    answer:
      "Ein Automotive-Zulieferer sollte mit einer klar begrenzten Aufgabe beginnen und nicht sofort das ganze Unternehmen umstellen. Vor dem Praxistest werden Nutzen, betroffene Daten, verantwortliche Personen, freigegebene Tools und messbare Erfolgskriterien festgelegt.",
  },
  {
    question: "Welche KI-Anwendungen eignen sich für Automobilzulieferer?",
    answer:
      "Für den Einstieg eignen sich Aufgaben mit erkennbarem Zeitaufwand, prüfbaren Ergebnissen und überschaubaren Datenrisiken. Beispiele sind Recherche, Dokumentenzusammenfassung, Anforderungsstrukturierung sowie vorbereitende Arbeiten in Qualität, Engineering, Projektarbeit oder Lieferantenmanagement.",
  },
  {
    question: "Dürfen Kunden-, Entwicklungs- oder Produktionsdaten in einem KI-Praxistest verwendet werden?",
    answer:
      "Solche Daten dürfen erst nach einer gesonderten Prüfung verwendet werden. Geklärt werden müssen Schutzbedarf, Kunden- und Vertragsvorgaben, der freigegebene Dienst und Datenweg, notwendige Datenminimierung sowie die verantwortliche Stelle.",
  },
  {
    question: "Was müssen Automotive-Zulieferer beim Einsatz von KI besonders beachten?",
    answer:
      "Automotive-Zulieferer müssen neben Nutzen und Kosten besonders Kundenanforderungen, Informationsschutz, Qualitätsprozesse und unternehmensübergreifende Datenwege berücksichtigen. Ob zusätzlich Vorgaben wie TISAX, Datenschutzrecht oder der EU AI Act relevant sind, muss für den konkreten Einsatz geprüft werden.",
  },
];

export default function AutomotivePage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.opny.ai/automotive#webpage",
              url: "https://www.opny.ai/automotive",
              name: "KI für Automotive-Zulieferer kontrolliert einführen",
              description:
                "KI-Beratung, KI-Governance und KI-Schulungen für Automobilzulieferer.",
              isPartOf: { "@id": "https://www.opny.ai/#website" },
              mainEntity: { "@id": "https://www.opny.ai/automotive#service" },
              inLanguage: "de-DE",
            },
            {
              "@type": "Service",
              "@id": "https://www.opny.ai/automotive#service",
              name: "Kontrollierte KI-Einführung für Automotive-Zulieferer",
              description:
                "KI-Beratung, KI-Governance und KI-Schulungen für Tier-1- bis Tier-3-Zulieferer im DACH-Raum.",
              provider: { "@id": "https://www.opny.ai/#organization" },
              mainEntityOfPage: {
                "@id": "https://www.opny.ai/automotive#webpage",
              },
              areaServed: ["DE", "AT", "CH"],
              audience: {
                "@type": "BusinessAudience",
                audienceType: "Automotive-Zulieferer Tier-1 bis Tier-3",
              },
              url: "https://www.opny.ai/automotive",
            },
            {
              "@type": "FAQPage",
              "@id": "https://www.opny.ai/automotive#faq",
              isPartOf: { "@id": "https://www.opny.ai/automotive#webpage" },
              mainEntity: automotiveFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }}
      />
      <Region variant="light" tone="base" spacing="hero">
        <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Automotive", href: "/automotive" }]} />
        <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="eyebrow">Automotive-Zulieferer · Tier-1 bis Tier-3</div>
            <h1 className="display-lg mt-5 text-text-primary-light">
              KI für Automotive-Zulieferer.
              <span className="mt-2 block text-[#86868b]">
                Kontrolliert eingeführt.
              </span>
            </h1>
            <p className="lead-copy mt-6 max-w-[64ch]">
              Opny hilft Automobilzulieferern vom Tier-1 bis Tier-3, KI sinnvoll
              und sicher einzuführen. Wir klären Regeln und Zuständigkeiten,
              kontrollieren Zugänge und schulen Management, IT, Qualität,
              Engineering und weitere Fachbereiche.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={companyCtas.generalInquiry} variant="primary" theme="light">
                Erstgespräch anfragen
              </Button>
              <Button href="/ki-governance-automotive" variant="secondary" theme="light">
                Governance-Modell ansehen
              </Button>
            </div>
          </div>
          <MediaStage
            src="/media/opny/automotive-quality-inspection-v2.jpg"
            alt="Qualitätsprüfung eines bearbeiteten Aluminiumgehäuses mit Messschieber und Prüfprotokoll"
            width={1672}
            height={941}
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            caption="Symbolische, KI-generierte redaktionelle Aufnahme; keine reale Kundensituation."
            imageClassName="aspect-[1.45/1] object-cover"
          />
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <div className="eyebrow">Erfahrung aus der Branche</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary-light">
              Automotive-Prozesse sind kein nachträglicher Branchenfilter.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-text-muted-light">
            Opny-Gründer Mehmet Catalsakal bringt zehn Jahre Automotive-Erfahrung
            bei Bosch mit. Als Projektmanager und leitender Angestellter war er
            mit komplexen Entwicklungs-, Qualitäts- und Unternehmensprozessen
            befasst. Diese Erfahrung prägt die Arbeit von Opny mit
            Automotive-Zulieferern.
          </p>
        </div>
      </Region>

      <Region variant="light" tone="base">
        <SectionIntro
          eyebrow="Was Unternehmen heute ausbremst"
          title="KI soll Nutzen bringen, ohne bestehende Pflichten zu umgehen"
          text="Die Herausforderung ist selten nur technisch. Sie liegt an den Schnittstellen zwischen Kundenanforderungen, Daten, Rollen und täglichen Arbeitswegen."
        />
        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pressures.map((pressure) => (
            <div key={pressure} className="rounded-2xl border border-slate-200 bg-white p-5 leading-relaxed text-slate-700">
              {pressure}
            </div>
          ))}
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <SectionIntro
          eyebrow="Praxisnahe KI-Anwendungen"
          title="Automotive-Prozesse verbessern, ohne die Kontrolle über Daten und Ergebnisse zu verlieren"
          text="Nicht jeder Prozess braucht KI. Geeignet sind Aufgaben mit erkennbarem Nutzen, beherrschbaren Daten und einer fachlich verantwortlichen Rolle."
        />
        <div className="mt-9 grid gap-x-10 border-t border-black/[0.10] md:grid-cols-2">
          {useCases.map(([title, text]) => (
            <div key={title} className="border-b border-black/[0.10] py-7">
              <h2 className="text-xl font-semibold tracking-tight text-text-primary-light">{title}</h2>
              <p className="mt-3 leading-relaxed text-text-muted-light">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold">
          <Link href="/loesungen/ki-beratung-automotive" className="text-[#0066cc] hover:underline">
            KI-Beratung für Automotive →
          </Link>
          <Link href="/loesungen/ki-schulungen-automotive" className="text-[#0066cc] hover:underline">
            KI-, ChatGPT- und Gemini-Schulungen →
          </Link>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <SectionIntro
          eyebrow="So kann Opny unterstützen"
          title="Klare Regeln, sichere Zugänge und geschulte Teams"
          text="Jeder Baustein hat eine klare Rolle und einen eigenen Einstieg."
        />
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {[
            {
              title: "TrustArch",
              text: "Managementsysteme, Anforderungen, Dokumentversionen, Freigaben, Nachweise, Risiken und Maßnahmen gemeinsam steuern.",
              href: "/produkte/trustarch",
              cta: "Compliance-System ansehen",
            },
            {
              title: "NodeX",
              text: "Freigegebene KI-Modelle zentral zugänglich machen und Rechte, Daten, Nutzung und Kosten im Blick behalten. Die Konfiguration richtet sich nach der jeweiligen Systemumgebung.",
              href: "/produkte/nodex",
              cta: "Technische Kontrolle ansehen",
            },
            {
              title: "Beratung & Schulung",
              text: "Aus Regeln konkrete Entscheidungen, einen kleinen Praxistest und sichere Arbeitsweisen für jede Rolle machen.",
              href: "/loesungen/ki-beratung-automotive",
              cta: "Umsetzung ansehen",
            },
          ].map((item) => (
            <Card key={item.title} theme="light" className="flex h-full flex-col p-6">
              <h2 className="text-2xl font-semibold text-text-primary-light">{item.title}</h2>
              <p className="mt-4 leading-relaxed text-text-muted-light">{item.text}</p>
              <Link href={item.href} className="mt-auto pt-7 text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4">
                {item.cta}
              </Link>
            </Card>
          ))}
        </div>
      </Region>

      <Region variant="light" tone="base">
        <SectionIntro
          eyebrow="Entscheider und Anwender"
          title="Eine gemeinsame Sicht für unterschiedliche Verantwortlichkeiten"
        />
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {roles.map(([role, outcome]) => (
            <Card key={role} theme="light" className="p-6">
              <h2 className="text-xl font-semibold text-text-primary-light">{role}</h2>
              <p className="mt-3 leading-relaxed text-text-muted-light">{outcome}</p>
            </Card>
          ))}
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Sinnvoller Einstieg"
          title="Begrenzt starten, bevor die Organisation skaliert"
          text="Ein guter Einstieg beginnt mit einer kleinen, überprüfbaren Aufgabe."
          />
          <ol className="space-y-4">
            {[
              "Bestehende KI-Nutzung, Kundenanforderungen und den Schutzbedarf der Daten erfassen.",
              "Das größte Problem bestimmen: fehlende Nachweise, unkontrollierte Nutzung oder fehlendes Wissen.",
              "Eine kleine Aufgabe, eine verantwortliche Person und klare Abbruchkriterien festlegen.",
              "Ergebnis, Risiken und nächste Entscheidung nachvollziehbar dokumentieren.",
            ].map((step, index) => (
              <li key={step} className="grid grid-cols-[42px_1fr] items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span className="leading-relaxed text-slate-700">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Region>

      <Region variant="light" tone="base">
        <SectionIntro
          eyebrow="Kurz beantwortet"
          title="Fragen zur KI-Einführung bei Automotive-Zulieferern"
        />
        <FaqList items={automotiveFaqs} />
      </Region>

      <Region variant="light" tone="base" spacing="compact">
        <ClosingCta
          title="Wo fehlt Ihnen bei KI heute der größte Überblick?"
          text="Wir prüfen, ob TrustArch, NodeX, Beratung oder Schulung der passende erste Schritt ist – und sagen offen, wenn etwas anderes sinnvoller wäre."
          href={companyCtas.consultingInquiry}
          label="Erstgespräch anfragen"
        />
      </Region>
    </main>
  );
}
