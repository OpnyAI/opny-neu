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
    "Kontaktieren Sie Opny für eine TrustArch-Demo, einen NodeX-Einsatz oder ein Erstgespräch zu KI-Beratung und KI-Schulungen für Automotive-Zulieferer.",
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
          <div className="eyebrow">Kontakt</div>
          <h1 className="display-lg mt-5 text-text-primary-light">
            Demo oder Erstgespräch anfragen
          </h1>
          <p className="lead-copy mt-6 max-w-[68ch]">
            Beschreiben Sie kurz Ausgangslage und Interesse. Wir ordnen ein, ob
            TrustArch, NodeX, Beratung oder Schulung der passende nächste Schritt ist.
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
              Worum geht es bei Ihnen?
            </h2>
            <p className="mt-4 leading-relaxed text-text-muted-light">
              Hilfreich sind Standards, Auditdruck, betroffene Prozesse,
              vorhandene KI-Tools, Datenklassen und die verantwortlichen Bereiche.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-text-muted-light">
              <li>TrustArch: Demo für Managementsysteme, Dokumente, Freigaben und Compliance-Arbeit</li>
              <li>NodeX: technischer KI-Zugang und kontrollierter Pilot</li>
              <li>Beratung: Use Cases, Governance und Einführungsplan</li>
              <li>Schulung: Rollen, Tools, Daten und Automotive-Fallbeispiele</li>
            </ul>
          </div>
          <ContactForm initialInterest={initialInterest} />
        </div>
      </Region>
    </main>
  );
}
