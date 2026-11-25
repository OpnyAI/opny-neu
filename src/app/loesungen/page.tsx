import Link from "next/link";
import Region from "@/components/Region";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import SectionIntro from "@/components/marketing/SectionIntro";
import ClosingCta from "@/components/marketing/ClosingCta";
import JsonLd from "@/components/marketing/JsonLd";
import { companyCtas } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "KI-Beratung, Schulung und Governance für Unternehmen",
  description:
    "Opny begleitet Unternehmen aus Industrie, Technologie und Dienstleistungen: KI-Anwendungen auswählen, klare Regeln schaffen und Teams für den Alltag befähigen.",
  path: "/loesungen",
});

const services = [
  {
    id: "beratung",
    eyebrow: "KI-Beratung",
    title: "Mit dem passenden Anwendungsfall beginnen.",
    text: "Wir betrachten Ihre Abläufe, Daten und Zuständigkeiten. Gemeinsam grenzen wir sinnvolle KI-Anwendungen ein und planen einen überschaubaren Praxistest mit klaren Prüfkriterien.",
    points: [
      "Ausgangslage und wiederkehrende Aufgaben aufnehmen",
      "Nutzen, Datenbedarf und Grenzen einordnen",
      "Pilot, Verantwortliche und nächste Schritte festlegen",
    ],
    cta: "Beratung anfragen",
    href: companyCtas.consultingInquiry,
  },
  {
    id: "schulungen",
    eyebrow: "KI-Schulungen und Coaching",
    title: "KI im eigenen Arbeitsalltag anwenden.",
    text: "Teams üben mit freigegebenen Werkzeugen und Aufgaben aus ihrem Unternehmen. Inhalt und Tiefe richten sich nach Rolle, Vorkenntnissen und dem vorhandenen Tool-Setup.",
    points: [
      "Inhouse-Workshops, Online-Schulungen und Coaching",
      "ChatGPT, Gemini, Copilot oder interne KI-Zugänge",
      "Datenregeln, Prüfung von Ergebnissen und praktische Übungen",
    ],
    cta: "Schulung anfragen",
    href: companyCtas.trainingInquiry,
  },
  {
    id: "governance",
    eyebrow: "KI-Governance",
    title: "Festlegen, wer welche KI wofür nutzen darf.",
    text: "Aus einzelnen Regeln wird ein nachvollziehbarer Ablauf: Welche Anwendungen sind freigegeben, welche Daten dürfen verwendet werden und wer prüft Änderungen? Rechtliche Fragen werden mit den zuständigen Fachstellen geklärt.",
    points: [
      "KI-Systeme, Zwecke und verantwortliche Rollen erfassen",
      "Freigaben, Datenregeln und Ausnahmen beschreiben",
      "Schulung, Nachweise und regelmäßige Prüfung verbinden",
    ],
    cta: "Governance-Check anfragen",
    href: "/kontakt?interesse=KI-Governance-Check#anfrage",
  },
];

export default function LoesungenPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.opny.ai/loesungen#webpage",
              url: "https://www.opny.ai/loesungen",
              name: "KI-Beratung, Schulung und Governance für Unternehmen",
              inLanguage: "de-DE",
              isPartOf: { "@id": "https://www.opny.ai/#website" },
            },
            ...services.map((service) => ({
              "@type": "Service",
              "@id": `https://www.opny.ai/loesungen#${service.id}`,
              url: `https://www.opny.ai/loesungen#${service.id}`,
              name: service.eyebrow,
              description: service.text,
              provider: { "@id": "https://www.opny.ai/#organization" },
              areaServed: ["DE", "AT", "CH"],
            })),
          ],
        }}
      />
      <Region spacing="hero">
        <Breadcrumbs
          items={[
            { label: "Startseite", href: "/" },
            { label: "Beratung & Schulung", href: "/loesungen" },
          ]}
        />
        <div className="mt-10 max-w-4xl">
          <div className="eyebrow">Für Unternehmen im DACH-Raum</div>
          <h1 className="display-lg mt-6">
            KI sinnvoll einsetzen. Regeln und Menschen mitnehmen.
          </h1>
          <p className="lead-copy mt-7 max-w-3xl">
            Opny begleitet Unternehmen aus Industrie, Technologie und
            Dienstleistungen. Entscheidend sind Ihre Aufgaben, Daten und
            Anforderungen – vom ersten Anwendungsfall bis zur gemeinsamen
            Arbeitsweise im Team.
          </p>
          <div className="mt-8">
            <Button href={companyCtas.generalInquiry} theme="light">
              Erstgespräch anfragen
            </Button>
          </div>
        </div>
      </Region>
      <Region id="zielgruppen" tone="surface">
        <SectionIntro
          eyebrow="Ihre Anforderungen bestimmen den Einstieg"
          title="Für unterschiedliche Branchen und Unternehmensgrößen."
          text="Ob kompaktes Team, mittelständischer Betrieb oder Unternehmen mit mehreren Fachbereichen: Wir klären zuerst die konkrete Ausgangslage und den passenden Umfang."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            [
              "Industrie und Produktion",
              "Vertrauliche technische Informationen, Qualitätsprozesse und Anforderungen von Kunden oder Geschäftspartnern.",
            ],
            [
              "Technologie und Dienstleistungen",
              "Wissensarbeit, geschützte Projektdaten und klare Freigaben für den Einsatz von KI.",
            ],
            [
              "Unternehmen mit mehreren Managementthemen",
              "Dokumente, Nachweise und Zuständigkeiten über Teams hinweg nachvollziehbar zusammenführen.",
            ],
          ].map(([title, text]) => (
            <article
              key={title}
              className="rounded-card border border-black/[0.08] bg-white p-7"
            >
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 leading-relaxed text-text-muted-light">
                {text}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-text-muted-light">
          Automotive bleibt ein Erfahrungsschwerpunkt von Opny.{" "}
          <Link
            href="/automotive"
            className="font-semibold text-accent hover:underline"
          >
            Zum branchenspezifischen Angebot
          </Link>
        </p>
      </Region>
      {services.map((service) => (
        <Region key={service.id} id={service.id} tone="base">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <SectionIntro
              eyebrow={service.eyebrow}
              title={service.title}
              text={service.text}
            />
            <div className="editorial-rule">
              <ul className="divide-y divide-black/10">
                {service.points.map((point) => (
                  <li key={point} className="py-5 text-lg">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={service.href} theme="light">
                  {service.cta}
                </Button>
              </div>
            </div>
          </div>
        </Region>
      ))}
      <Region tone="surface">
        <SectionIntro
          eyebrow="Passende Software"
          title="AuthenticTrust und NodeX haben unterschiedliche Aufgaben."
          text="AuthenticTrust verbindet Anforderungen, Dokumente, Nachweise, Bewertungen und Maßnahmen. NodeX schafft kontrollierte KI-Zugänge. Welcher Baustein sinnvoll ist, hängt von Ihrer Ausgangslage ab."
        />
        <div className="mt-7 flex flex-wrap gap-3">
          <Button href="/produkte/authentictrust" theme="light">
            AuthenticTrust ansehen
          </Button>
          <Button href="/produkte/nodex" variant="secondary" theme="light">
            NodeX ansehen
          </Button>
        </div>
      </Region>
      <Region spacing="compact">
        <ClosingCta
          eyebrow="Gemeinsam einordnen"
          title="Was soll in Ihrem Unternehmen einfacher werden?"
          text="Nennen Sie uns Ihren Prozess, Ihre offenen Fragen und Ihre Anforderungen. Wir klären den passenden nächsten Schritt."
          href={companyCtas.generalInquiry}
          label="Erstgespräch anfragen"
        />
      </Region>
    </main>
  );
}
