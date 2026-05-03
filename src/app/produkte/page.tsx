import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CustomerReferencesStrip from "@/components/CustomerReferencesStrip";
import Region from "@/components/Region";

export const metadata: Metadata = {
  title: "KI-Produkte für Unternehmen | Opny NodeX",
  description:
    "Entdecken Sie NodeX von Opny: eine Plattform für kontrollierte KI-Nutzung, Governance, Datenkontrolle, Modellsteuerung und Transparenz im Unternehmen.",
  alternates: {
    canonical: "https://www.opny.ai/produkte",
  },
  openGraph: {
    title: "KI-Produkte für Unternehmen | Opny NodeX",
    description:
      "Entdecken Sie NodeX von Opny: eine Plattform für kontrollierte KI-Nutzung, Governance, Datenkontrolle, Modellsteuerung und Transparenz im Unternehmen.",
    url: "https://www.opny.ai/produkte",
    siteName: "Opny",
    locale: "de_DE",
    type: "website",
  },
};

export default function ProduktePage() {
  return (
    <div className="flex flex-col">
      <Region variant="light" tone="base">
        <div className="max-w-4xl space-y-6">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Produkte
          </div>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary-light md:text-5xl">
            Produkte für kontrollierte KI-Nutzung im Unternehmen.
          </h1>
          <p className="max-w-[62ch] text-lg leading-relaxed text-text-muted-light md:text-xl">
            Unsere Produkte helfen Unternehmen, KI produktiv zu nutzen, ohne Kontrolle über Daten, Kosten und Prozesse zu verlieren.
          </p>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <Card theme="light" className="p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-4">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
                NodeX
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
                Die zentrale Kontrollschicht für KI im Unternehmen.
              </h2>
              <p className="text-base leading-relaxed text-text-muted-light">
                NodeX macht Schatten-KI sichtbar, schützt sensible Daten vor unkontrollierter Weitergabe und schafft Transparenz über Nutzung, Kosten und Regeln.
              </p>
            </div>
            <div className="space-y-5">
              <ul className="space-y-3 text-base text-text-muted-light">
                {[
                  "AI Gateway für kontrollierte KI-Nutzung",
                  "zentrale Kontrollschicht für Teams und Modelle",
                  "Schatten-KI sichtbar machen",
                  "sensible Daten vor unkontrollierter Weitergabe schützen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/produkte/nodex" variant="primary" theme="light">
                NodeX ansehen
              </Button>
            </div>
          </div>
        </Card>
      </Region>

      <CustomerReferencesStrip containerClassName="py-10 md:py-14" />
    </div>
  );
}
