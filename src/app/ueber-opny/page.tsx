import Image from "next/image";
import Region from "@/components/Region";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/marketing/Breadcrumbs";
import SectionIntro from "@/components/marketing/SectionIntro";
import JsonLd from "@/components/marketing/JsonLd";
import { companyCtas } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Über Opny und Gründer Mehmet Catalsakal",
  description:
    "Opny verbindet zehn Jahre Automotive-Erfahrung bei Bosch mit KI-Governance, Compliance, technischer Kontrolle, Beratung und Schulung.",
  path: "/ueber-opny",
});

export default function UeberOpnyPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": "https://www.opny.ai/ueber-opny#webpage",
          url: "https://www.opny.ai/ueber-opny",
          name: "Über Opny und Gründer Mehmet Catalsakal",
          isPartOf: { "@id": "https://www.opny.ai/#website" },
          mainEntity: {
            "@id": "https://www.opny.ai/ueber-opny#mehmet-catalsakal",
          },
          about: { "@id": "https://www.opny.ai/#organization" },
          inLanguage: "de-DE",
        }}
      />
      <Region variant="light" tone="base" spacing="hero">
        <Breadcrumbs
          items={[
            { label: "Startseite", href: "/" },
            { label: "Über Opny", href: "/ueber-opny" },
          ]}
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <div className="eyebrow">Über Opny</div>
            <h1 className="display-lg mt-5 text-text-primary-light">
              KI verständlich, sicher und im Arbeitsalltag umsetzbar machen.
            </h1>
            <p className="lead-copy mt-6 max-w-[64ch]">
              Opny hilft Automotive-Zulieferern, sinnvolle KI-Anwendungen
              auszuwählen, klare Regeln zu schaffen und Mitarbeitende sicher in
              die Nutzung einzuführen.
            </p>
            <div className="mt-7">
              <Button href={companyCtas.consultingInquiry} variant="primary" theme="light">
                Erstgespräch anfragen
              </Button>
            </div>
          </div>
          <aside className="media-stage overflow-hidden bg-white">
            <Image
              src="/media/opny/mehmet-catalsakal-portrait-1200x1500.jpg"
              alt="Mehmet Catalsakal, Gründer von Opny"
              width={1200}
              height={1500}
              priority
              sizes="(min-width: 1024px) 38vw, 92vw"
              className="aspect-[4/5] w-full object-cover object-center"
            />
            <div className="border-t border-black/[0.07] p-6 sm:p-8">
              <div className="border-b border-black/[0.08] pb-6">
                <div className="text-2xl font-semibold tracking-[-0.03em]">
                  Mehmet Catalsakal
                </div>
                <div className="mt-1 text-sm text-text-muted-light">Gründer von Opny</div>
              </div>
              <div className="eyebrow mt-6">Beruflicher Hintergrund</div>
              <div className="mt-6 space-y-5">
                {[
                  ["10 Jahre", "Automotive-Erfahrung bei Bosch"],
                  ["Rollen", "Projektmanager und leitender Angestellter"],
                  ["Fokus", "Prozesse, Qualität und sichere KI-Einführung"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className="border-b border-black/[0.08] pb-5 last:border-0 last:pb-0"
                  >
                    <div className="text-2xl font-semibold tracking-tight text-text-primary-light">
                      {value}
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-text-muted-light">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://www.linkedin.com/in/mehmet-catalsakal-43264a15b/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex text-sm font-semibold text-text-primary-light underline decoration-black/20 underline-offset-4 hover:decoration-black"
              >
                LinkedIn-Profil ansehen ↗
              </a>
            </div>
          </aside>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="eyebrow">Gründerexpertise</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary-light">
              Zehn Jahre Automotive-Erfahrung bei Bosch
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-text-muted-light">
            <p>
              Opny-Gründer Mehmet Catalsakal bringt zehn Jahre
              Automotive-Erfahrung bei Bosch mit. Als Projektmanager und
              leitender Angestellter war er mit komplexen Entwicklungs-,
              Qualitäts- und Unternehmensprozessen befasst.
            </p>
          </div>
        </div>
      </Region>

      <Region variant="light" tone="base">
        <SectionIntro
          eyebrow="Arbeitsprinzipien"
          title="Kontrolle muss im Prozess funktionieren"
          text="Die Website und das Angebot folgen vier einfachen Grundsätzen."
        />
        <div className="editorial-rule mt-12 grid md:grid-cols-2">
          {[
            ["Probleme vor Tools", "Ausgangspunkt sind Prozess, Daten, Verantwortlichkeit und gewünschtes Ergebnis."],
            ["Begrenzte Piloten", "Ein Pilot braucht Umfang, Verantwortliche, Erfolgskriterien und Stop-Kriterien."],
            ["Organisation plus Technik", "Richtlinien und Nachweise müssen mit realen Zugängen und Datenpfaden zusammenpassen."],
            ["Transparente Aussagen", "Demo, Planung und produktiver Funktionsumfang werden klar voneinander getrennt."],
          ].map(([title, text]) => (
            <article key={title} className="border-b border-black/[0.10] py-7 md:p-8">
              <h3 className="text-xl font-semibold text-text-primary-light">{title}</h3>
              <p className="mt-3 leading-relaxed text-text-muted-light">{text}</p>
            </article>
          ))}
        </div>
      </Region>
    </main>
  );
}
