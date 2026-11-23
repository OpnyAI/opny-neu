import Button from "@/components/ui/Button";
import MediaStage from "@/components/marketing/MediaStage";
import Link from "next/link";
import Region from "@/components/Region";
import JsonLd from "@/components/marketing/JsonLd";
import FaqList from "@/components/marketing/FaqList";
import { companyCtas } from "@/config/site";
import { authenticTrustHomeFaqs as faqs } from "@/content/authentictrust";
import { createMetadata } from "@/lib/metadata";

const title = "Dokumente und Nachweise für Managementsysteme | Opny";
const description =
  "AuthenticTrust von Opny verbindet Anforderungen, Dokumente, Nachweise und Maßnahmen. Offene Punkte erkennen, Aufgaben bearbeiten und persönliche Demo anfragen.";
export const metadata = {
  ...createMetadata({
    title: "Dokumente und Nachweise für Managementsysteme",
    description,
    path: "/",
    image: {
      url: "/media/authentictrust/authentictrust-documents-evidence-1600x1000.jpg",
      width: 1600,
      height: 1000,
      alt: "AuthenticTrust von Opny: Dokumentversionen, Freigaben und Nachweise in einer Übersicht",
    },
  }),
  title: { absolute: title },
};

const problems = [
  [
    "Die richtige Datei suchen.",
    "Dokumente liegen in Ordnern, E-Mails und einzelnen Teams. Welche Fassung aktuell ist, muss erst jemand klären.",
  ],
  [
    "Freigaben hinterherlaufen.",
    "Wer prüft noch? Was ist bereits freigegeben? Ohne gemeinsamen Überblick wird jede Rückfrage zur nächsten Aufgabe.",
  ],
  [
    "Nachweise zusammensuchen.",
    "Vor der Prüfung werden Belege und offene Maßnahmen zusammengetragen. Der Bezug zur Anforderung fehlt oft in der Ablage.",
  ],
];
const benefits = [
  [
    "Aktuelle Dokumente finden",
    "Eigene Dokumente mit Versionen, Zuständigkeit und fachlicher Freigabe bearbeiten.",
  ],
  [
    "Nachweise zuordnen",
    "PDF-Nachweise mit passenden Anforderungen und Gültigkeit verbinden.",
  ],
  [
    "Offene Aufgaben verfolgen",
    "Maßnahmen, Verantwortliche und Fristen nachvollziehbar bearbeiten.",
  ],
];
const steps = [
  [
    "Ausgangslage besprechen",
    "Welche Unterlagen sind verteilt? Welche Prüfung steht an? Sie beschreiben kurz, wo es heute hakt.",
  ],
  [
    "AuthenticTrust live ansehen",
    "Wir zeigen Ihnen den Weg von der Anforderung über Dokumente und Freigaben bis zum zugeordneten Nachweis.",
  ],
  [
    "Passenden Einsatz klären",
    "Gemeinsam klären wir Standards, Abläufe und Umfang. Sie entscheiden anhand Ihrer Anforderungen über den nächsten Schritt.",
  ],
];

function DemoLink({
  children = "AuthenticTrust-Demo anfragen",
  dark = false,
}: {
  children?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Button
      href={companyCtas.authentictrustDemo}
      theme={dark ? "dark" : "light"}
    >
      {children}
    </Button>
  );
}
function Check() {
  return (
    <svg
      className="at-check"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ProductImage({
  kind,
  alt,
  priority = false,
}: {
  kind: "documents-evidence" | "risks-actions";
  alt: string;
  priority?: boolean;
}) {
  return (
    <MediaStage
      src={`/media/authentictrust/authentictrust-${kind}-1600x1000.jpg`}
      alt={alt}
      width={1600}
      height={1000}
      priority={priority}
      zoom
      label="AuthenticTrust von Opny"
      status="Beispieldaten"
      caption="Produktansicht mit fiktiven Beispieldaten."
      sizes="(min-width: 1280px) 720px, (min-width: 1024px) 60vw, 100vw"
    />
  );
}

export default function Home() {
  return (
    <main className="at-home">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.opny.ai/#webpage",
              url: "https://www.opny.ai/",
              name: title,
              description,
              inLanguage: "de-DE",
              isPartOf: { "@id": "https://www.opny.ai/#website" },
              about: {
                "@id": "https://www.opny.ai/produkte/authentictrust#software",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://www.opny.ai/media/authentictrust/authentictrust-documents-evidence-1600x1000.jpg",
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://www.opny.ai/#faq",
              isPartOf: { "@id": "https://www.opny.ai/#webpage" },
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }}
      />

      <section className="at-hero" aria-labelledby="hero-heading">
        <div className="at-container">
          <div className="at-hero-intro">
            <p className="at-eyebrow">
              Für Teams in Informationssicherheit, Qualität und
              Unternehmensführung
            </p>
            <p className="at-product-name">
              AuthenticTrust <span>von Opny</span>
            </p>
            <h1 id="hero-heading">
              Dokumente und Nachweise im Griff.
              <br className="hidden sm:block" />{" "}
              <span>Aufgaben klar verteilt.</span>
            </h1>
            <p className="at-hero-copy">
              AuthenticTrust verbindet Anforderungen, Dokumente, Nachweise und
              Maßnahmen in einer Software. Damit Ihr Team weiß, was erledigt
              ist, was fehlt und wer den nächsten Schritt übernimmt.
            </p>
            <p className="at-definition">
              Ihr Managementsystem: die Abläufe, mit denen Ihr Unternehmen
              Vorgaben im Alltag umsetzt.
            </p>
            <div className="at-actions">
              <DemoLink />
              <a href="#produkteinblick" className="at-text-link">
                Produkt ansehen
              </a>
            </div>
            <p className="at-microcopy">
              Persönlicher Produkteinblick. Passend zu Ihrer Ausgangslage.
            </p>
          </div>
          <div id="produkteinblick" className="at-hero-product">
            <ProductImage
              kind="documents-evidence"
              priority
              alt="AuthenticTrust-Dokumentenübersicht mit Versionen, Freigabestatus und zugeordneten Nachweisen"
            />
            <div className="at-benefits">
              <p className="at-eyebrow">Weniger Suchen. Mehr Überblick.</p>
              <h2>
                Wissen, wo Sie stehen.
                <br />
                Und was noch fehlt.
              </h2>
              <ul>
                {benefits.map(([heading, text]) => (
                  <li key={heading}>
                    <Check />
                    <div>
                      <h3>{heading}</h3>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <DemoLink>Demo für Ihr Unternehmen anfragen</DemoLink>
              <p className="at-microcopy">
                Sie sehen die Software. Danach klären wir, ob sie zu Ihren
                Abläufen passt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="at-orientation">
        <div className="at-container">
          <span>Dokumente & Versionen</span>
          <span>Freigaben & Zuständigkeiten</span>
          <span>Nachweise & Anforderungen</span>
          <span>Risiken & Maßnahmen</span>
        </div>
      </div>

      <Region id="ausgangslage" tone="surface">
        <div className="at-section-intro">
          <p className="at-eyebrow">Kommt Ihnen das bekannt vor?</p>
          <h2>
            Die Prüfung rückt näher.
            <br />
            Die Unterlagen sind noch verteilt.
          </h2>
          <p>
            Das Problem liegt oft im Alltag: Informationen sind vorhanden, aber
            der gemeinsame Überblick fehlt.
          </p>
        </div>
        <div className="at-problem-grid">
          {problems.map(([heading, text]) => (
            <article key={heading}>
              <span className="at-problem-mark" aria-hidden="true">
                ×
              </span>
              <h3>{heading}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="at-takeaway">
          AuthenticTrust bringt zusammen, was für die Vorbereitung
          zusammengehört.
        </p>
      </Region>

      <Region id="so-hilft-authentictrust" tone="alt">
        <div className="at-section-intro">
          <p className="at-eyebrow">
            Von verteilten Dateien zu klaren Abläufen
          </p>
          <h2>
            Ein Arbeitsraum.
            <br />
            Vom Dokument bis zur Maßnahme.
          </h2>
          <p>
            AuthenticTrust ist die Software von Opny für Managementsysteme und
            Compliance – also die Einhaltung von Vorgaben.
          </p>
        </div>
        <div className="at-solution-grid">
          <div className="at-solution-copy">
            <h3>Dokumente mit ihrer Aufgabe verbinden.</h3>
            <p>
              Welche Anforderung gehört zu welchem Dokument? Welche Fassung ist
              freigegeben? Und welcher Nachweis fehlt noch? Diese Zusammenhänge
              werden in einem gemeinsamen Arbeitsraum nachvollziehbar.
            </p>
            <div className="at-small-benefit">
              <Check />
              <p>
                <strong>Freigaben nachvollziehen.</strong> Versionen,
                Zuständigkeiten und Bearbeitungsstand zusammenführen.
              </p>
            </div>
            <div className="at-small-benefit">
              <Check />
              <p>
                <strong>Maßnahmen bearbeiten.</strong> Feststellungen mit
                Verantwortlichen, Fristen und dem nächsten Schritt verbinden.
              </p>
            </div>
            <Link className="at-text-link" href="/produkte/authentictrust">
              Alle Funktionen und Produktdetails ansehen
            </Link>
          </div>
          <ProductImage
            kind="risks-actions"
            alt="AuthenticTrust-Maßnahmenübersicht mit Verantwortlichen, Fristen und Bearbeitungsstatus"
          />
        </div>
        <div className="at-ai-note">
          <div>
            <p className="at-eyebrow">KI unterstützt. Ihr Team entscheidet.</p>
            <p>
              Regeln unterstützen die Einordnung des Bearbeitungsstands. KI kann
              bei Textformulierungen helfen. Ihr Team prüft Bewertungen, trifft
              Entscheidungen und erteilt Freigaben.
            </p>
          </div>
          <p>
            TISAX ist abgebildet. Weitere ISO-Managementsystemstandards werden
            schrittweise ergänzt. Den aktuell passenden Umfang klären wir mit
            Ihnen.
          </p>
        </div>
      </Region>

      <Region id="ablauf" tone="surface">
        <div className="at-section-intro">
          <p className="at-eyebrow">Ihr nächster Schritt</p>
          <h2>
            Erst ansehen.
            <br />
            Dann fundiert entscheiden.
          </h2>
          <p>
            In der Demo geht es um Ihre Dokumente, Ihre Abläufe und die Frage,
            ob AuthenticTrust dazu passt.
          </p>
        </div>
        <ol className="at-step-grid">
          {steps.map(([heading, text], i) => (
            <li key={heading}>
              <span className="at-step-number">{i + 1}</span>
              <h3>{heading}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <div className="at-centered-cta">
          <DemoLink />
          <p className="at-microcopy">
            Die Anfrage ist keine Bestellung und kein Software-Abonnement.
          </p>
        </div>
      </Region>

      <Region id="fuer-wen" tone="alt">
        <div className="at-fit-grid">
          <div>
            <p className="at-eyebrow">Passt AuthenticTrust zu Ihnen?</p>
            <h2>Für Teams, die ihre Nachweise im Griff haben wollen.</h2>
            <p>
              In Industrie, Technologie und Dienstleistungen. Besonders dann,
              wenn mehrere Personen Dokumente pflegen, Freigaben erteilen oder
              Prüfungen vorbereiten.
            </p>
          </div>
          <ul>
            {[
              "Sie möchten ein Managementsystem aufbauen, pflegen oder eine Prüfung wie TISAX vorbereiten.",
              "Sie möchten aktuelle Dokumentversionen und Freigaben nachvollziehen können.",
              "Sie brauchen einen gemeinsamen Überblick über Nachweise und offene Maßnahmen.",
            ].map((item) => (
              <li key={item}>
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="at-boundary">
          AuthenticTrust unterstützt die Bearbeitung und Vorbereitung. TISAX ist
          ein Prüf- und Austauschmechanismus für Informationssicherheit.
          Fachliche Bewertungen und Prüfentscheidungen bleiben bei Ihren
          Verantwortlichen und Prüfstellen.{" "}
          <a
            href="https://portal.enx.com/en-US/TISAX/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Mehr zu TISAX bei ENX
          </a>
          .
        </p>
      </Region>

      <Region id="fragen" tone="surface">
        <div className="max-w-4xl mx-auto">
          <div className="at-section-intro">
            <p className="at-eyebrow">Kurz beantwortet</p>
            <h2>Ihre Fragen vor der Demo.</h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </Region>

      <section className="at-final" aria-labelledby="final-heading">
        <div className="at-container">
          <p className="at-eyebrow">AuthenticTrust von Opny</p>
          <h2 id="final-heading">
            Weniger Dateien suchen.
            <br />
            Die Vorbereitung im Blick behalten.
          </h2>
          <p>
            Sehen Sie, wie Dokumente, Freigaben und Nachweise in AuthenticTrust
            zusammenkommen. Wir klären mit Ihnen, was zu Ihrem Unternehmen
            passt.
          </p>
          <DemoLink dark />
          <p className="at-microcopy">
            Persönliche Demo anfragen und nächsten Schritt klären.
          </p>
        </div>
      </section>

      <Region tone="alt" spacing="compact">
        <div className="at-opny-more">
          <div>
            <p className="at-eyebrow">Die Dachmarke dahinter</p>
            <h2>AuthenticTrust ist ein Produkt von Opny.</h2>
            <p>
              Opny unterstützt Unternehmen außerdem bei der kontrollierten
              KI-Nutzung. NodeX ist dafür ein eigenständiges Produkt; Beratung
              und Schulung ergänzen das Angebot.
            </p>
          </div>
          <div className="at-more-links">
            <Link href="/ueber-opny">Über Opny</Link>
            <Link href="/produkte/nodex">NodeX: KI-Zugänge kontrollieren</Link>
            <Link href="/loesungen">KI-Beratung und Schulungen</Link>
          </div>
        </div>
      </Region>
    </main>
  );
}
