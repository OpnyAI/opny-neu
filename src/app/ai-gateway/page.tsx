import type { Metadata } from "next";
import Region from "@/components/Region";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "AI Gateway für Unternehmen – Routing, Fallback & Kontrolle | opny.ai",
  description:
    "AI Gateway für Unternehmen: AI Routing & Fallback, Multi-LLM-Steuerung, Observability und kontrollierte KI Orchestrierung.",
};

export default function AiGatewayPage() {
  return (
    <main className="flex flex-col">
      <Region variant="light" tone="base">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              AI Gateway
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-text-primary-light md:text-5xl">
              AI Gateway für Unternehmen
            </h1>
            <p className="text-base leading-relaxed text-text-muted-light">
              Ein zentraler Gateway-Layer für Engineering-Teams: AI Routing &amp;
              Fallback, Multi-LLM-Steuerung und Observability in einem Endpoint.
              So entsteht KI Orchestrierung mit stabiler Kontrolle über Kosten,
              Qualität und Datenpfade.
            </p>
            <ul className="space-y-3 text-base text-text-muted-light">
              {[
                "LLM Routing mit dynamischen Regeln je Use-Case",
                "Fallback-Strategien für Ausfälle und Qualitätsdrift",
                "Observability für Prompts, Tokens und Kosten",
                "Policy-Layer für Rollen, Keys und Datenzugriffe",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/ki-governance" variant="secondary" theme="light">
                KI Governance ansehen
              </Button>
              <Button href="/#plattform" variant="primary" theme="light">
                Plattform entdecken
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <Card theme="light" className="p-6">
              <div className="text-lg font-semibold text-text-primary-light">
                Routing-Strategien pro Team
              </div>
              <p className="mt-2 text-base text-text-muted-light">
                Definieren Sie Regeln für LLMs, Kosten-Limits und Modelle je
                Workspace, Projekt oder Anwendung.
              </p>
            </Card>
            <Card theme="light" className="p-6">
              <div className="text-lg font-semibold text-text-primary-light">
                Observability in Echtzeit
              </div>
              <p className="mt-2 text-base text-text-muted-light">
                Einblicke in Latenz, Token-Verbrauch und Fehlerquoten – ohne
                zusätzliche Tool-Ketten.
              </p>
            </Card>
          </div>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Engineering-Fokus
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Technik, die skalierbare KI-Systeme möglich macht.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Das AI Gateway verbindet Modelle, Daten und Policies zu einem
              verlässlichen Produktiv-Layer. Ideal für CTOs, Engineering Leads
              und Plattform-Teams.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Multi-LLM Abstraktion",
                text: "Modelle zentral verwalten, Versionen testen und je Use-Case auswählen.",
              },
              {
                title: "Fallback & Resilienz",
                text: "Redundanzen und Failover-Strategien verhindern Downtime und Qualitätsverluste.",
              },
              {
                title: "Observability & Kostenkontrolle",
                text: "Messbare Qualität, klare Budgetgrenzen und proaktive Alerts.",
              },
              {
                title: "Sichere Deployments",
                text: "Private Workloads, isolierte Keys und kontrollierte Datenflüsse für sensible Anwendungen.",
              },
            ].map((card) => (
              <Card key={card.title} theme="light">
                <h3 className="text-xl font-semibold text-text-primary-light md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-2 text-base text-text-muted-light">
                  {card.text}
                </p>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/#plattform" variant="secondary" theme="light">
              Plattform ansehen
            </Button>
            <Button href="/ki-governance" variant="primary" theme="light">
              KI Governance &amp; Sicherheit
            </Button>
          </div>
        </div>
      </Region>
    </main>
  );
}
