import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import Region from "@/components/Region";
import NodeXContactForm from "@/app/produkte/nodex/NodeXContactForm";
import {
  companyCtas,
  companyEmail,
  companyPhone,
  companyPhoneHref,
} from "@/config/site";

export const metadata: Metadata = {
  title: "Kontakt | Opny – KI Beratung & KI Trainings",
  description:
    "Kontaktieren Sie Opny für KI Beratung, KI Trainings und KI Einführung im Unternehmen. Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.",
  alternates: {
    canonical: "https://www.opny.ai/kontakt",
  },
  openGraph: {
    title: "Kontakt | Opny – KI Beratung & KI Trainings",
    description:
      "Kontaktieren Sie Opny für KI Beratung, KI Trainings und KI Einführung im Unternehmen. Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.",
    url: "https://www.opny.ai/kontakt",
    siteName: "Opny",
    locale: "de_DE",
    type: "website",
  },
};

const reasons = [
  "Praxisnahe KI-Beratung für Unternehmen",
  "Fokus auf Datenschutz und sichere Nutzung",
  "Kombination aus Strategie, Training und Umsetzung",
  "Keine Standardlösungen",
];

export default function KontaktPage() {
  return (
    <div className="flex flex-col">
      <Region variant="light" tone="base">
        <div className="max-w-4xl space-y-6">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Kontakt
          </div>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary-light md:text-5xl">
            Kontakt aufnehmen
          </h1>
          <p className="max-w-[68ch] text-lg leading-relaxed text-text-muted-light md:text-xl">
            Sprechen Sie mit uns über KI-Beratung, KI-Trainings oder den Einsatz von NodeX in Ihrem Unternehmen.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#erstgespraech"
              className="inline-flex items-center justify-center rounded-button bg-text-primary-light px-5 py-2.5 text-sm font-semibold text-text-primary-dark shadow-card-light transition hover:opacity-90"
            >
              Erstgespräch anfragen
            </a>
            <a
              href="#direktkontakt"
              className="inline-flex items-center justify-center rounded-button border border-border-subtle-light/20 px-5 py-2.5 text-sm font-semibold text-text-primary-light transition hover:border-border-subtle-light/35"
            >
              Kontaktoptionen ansehen
            </a>
          </div>
        </div>
      </Region>

      <Region variant="light" tone="surface" containerClassName="py-8 md:py-10">
        <div className="rounded-card border border-border-subtle-light/20 bg-white px-5 py-4 text-base font-medium text-text-primary-light shadow-card-light">
          Antwort innerhalb von 24 Stunden. Unverbindlich und praxisnah.
        </div>
      </Region>

      <Region id="direktkontakt" variant="light" tone="base">
        <div className="grid gap-6 md:grid-cols-3">
          <Card theme="light" className="p-5">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
              E-Mail
            </div>
            <a
              href={companyCtas.contact}
              className="mt-3 block text-lg font-semibold text-text-primary-light"
            >
              {companyEmail}
            </a>
          </Card>
          <Card theme="light" className="p-5">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
              Telefon
            </div>
            <a
              href={companyPhoneHref}
              className="mt-3 block text-lg font-semibold text-text-primary-light"
            >
              {companyPhone}
            </a>
          </Card>
          <Card theme="light" className="p-5">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
              Standort
            </div>
            <div className="mt-3 text-lg font-semibold text-text-primary-light">
              Vaihingen an der Enz / Stuttgart Region
            </div>
          </Card>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Warum Opny?
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Warum Opny?
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Wir sagen Ihnen ehrlich, ob und wo sich KI bei Ihnen lohnt.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <Card key={reason} theme="light" className="p-5">
                <h3 className="text-lg font-semibold text-text-primary-light">
                  {reason}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region id="erstgespraech" variant="light" tone="surface">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Erstgespräch
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Unverbindliches Erstgespräch anfragen
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Beschreiben Sie kurz Ihre Ausgangslage. Wir melden uns mit einer
              konkreten Einschätzung zu KI-Beratung, KI-Trainings oder NodeX.
            </p>
          </div>
          <NodeXContactForm />
        </div>
      </Region>
    </div>
  );
}
