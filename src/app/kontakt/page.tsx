import { normalizeContactInterest } from "@/lib/contact-interest";
import Region from "@/components/Region";
import Card from "@/components/ui/Card";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import ContactForm from "@/components/marketing/ContactForm";
import JsonLd from "@/components/marketing/JsonLd";
import {
  companyEmail,
  companyPhone,
  companyPhoneHref,
} from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Opny kontaktieren: Demo oder Erstgespräch",
  description:
    "Kontaktieren Sie Opny für eine AuthenticTrust-Demo, einen NodeX-Einsatz oder ein Erstgespräch zu KI-Beratung und KI-Schulungen für Unternehmen.",
  path: "/kontakt",
});

export default async function KontaktPage({
  searchParams,
}: {
  searchParams: Promise<{ interesse?: string | string[] }>;
}) {
  const params = await searchParams;
  const initialInterest =
    typeof params.interesse === "string" ? params.interesse : undefined;

  const isDemo = normalizeContactInterest(initialInterest ?? "") === "AuthenticTrust Demo";

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": "https://www.opny.ai/kontakt#webpage",
          url: "https://www.opny.ai/kontakt",
          name: "Opny kontaktieren: Demo oder Erstgespräch",
          isPartOf: { "@id": "https://www.opny.ai/#website" },
          about: { "@id": "https://www.opny.ai/#organization" },
          inLanguage: "de-DE",
        }}
      />
      <Region variant="light" tone="base" spacing="hero">
        <Breadcrumbs
          items={[
            { label: "Startseite", href: "/" },
            { label: "Kontakt", href: "/kontakt" },
          ]}
        />
        <div className="mt-8 max-w-4xl">
          <div className="eyebrow">{isDemo ? "AuthenticTrust von Opny" : "Kontakt"}</div>
          <h1 className="display-lg mt-5 text-text-primary-light">
            {isDemo ? "AuthenticTrust-Demo anfragen" : "Demo oder Erstgespräch anfragen"}
          </h1>
          <p className="lead-copy mt-6 max-w-[68ch]">
            {isDemo
              ? "Sehen Sie, wie Dokumente, Freigaben und Nachweise in AuthenticTrust zusammenkommen. Gemeinsam klären wir, ob die Software zu Ihren Anforderungen passt."
              : "Beschreiben Sie kurz Ausgangslage und Interesse. Wir ordnen ein, ob AuthenticTrust, NodeX, Beratung oder Schulung der passende nächste Schritt ist."}
          </p>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-5 md:grid-cols-3">
          <Card theme="light" className="p-5">
            <div className="eyebrow">E-Mail</div>
            <a className="mt-3 block text-lg font-semibold text-text-primary-light" href={`mailto:${companyEmail}`}>
              {companyEmail}
            </a>
          </Card>
          <Card theme="light" className="p-5">
            <div className="eyebrow">Telefon</div>
            <a className="mt-3 block text-lg font-semibold text-text-primary-light" href={companyPhoneHref}>
              {companyPhone}
            </a>
          </Card>
          <Card theme="light" className="p-5">
            <div className="eyebrow">Region</div>
            <div className="mt-3 text-lg font-semibold text-text-primary-light">
              Region Stuttgart · DACH
            </div>
          </Card>
        </div>
      </Region>

      <Region id="anfrage" variant="light" tone="base">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow">Anfrage</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              {isDemo ? "Ihr Weg zur persönlichen Demo." : "Worum geht es bei Ihnen?"}
            </h2>
            <p className="mt-4 leading-relaxed text-text-muted-light">
              {isDemo ? "Ein paar Kontaktdaten reichen für die Anfrage. Wenn Sie möchten, beschreiben Sie kurz Ihre aktuelle Ablage oder eine anstehende Prüfung." : "Hilfreich sind Ihre Ausgangslage, betroffene Prozesse und die verantwortlichen Bereiche."}
            </p>
            {isDemo ? (
              <ol className="mt-6 list-decimal space-y-4 pl-5 leading-relaxed text-text-muted-light">
                <li>Demo mit Ihren Kontaktdaten anfragen.</li>
                <li>Dokumente, Freigaben und Nachweise im Produkt kennenlernen.</li>
                <li>Passende Standards, Abläufe und Konditionen besprechen.</li>
              </ol>
            ) : (
              <ul className="mt-6 space-y-3 leading-relaxed text-text-muted-light">
                <li>AuthenticTrust: Dokumente, Freigaben und Nachweise</li>
                <li>NodeX: kontrollierter KI-Zugang</li>
                <li>Beratung und Schulung: KI im Arbeitsalltag einsetzen</li>
              </ul>
            )}
            {isDemo ? <p className="mt-6 text-sm leading-relaxed text-text-muted-light">Mit der Anfrage bestellen Sie keine Software. Den konkreten Einsatz und die Konditionen klären wir gemeinsam.</p> : null}
          </div>
          <ContactForm key={initialInterest ?? "general"} initialInterest={initialInterest} />
        </div>
      </Region>
    </main>
  );
}
