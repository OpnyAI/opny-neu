import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Region from "@/components/Region";
import { AiGatewayDiagram } from "@/components/diagrams/AiGatewayDiagram";

type AiGatewaySectionProps = {
  className?: string;
};

export default function AiGatewaySection({ className }: AiGatewaySectionProps) {
  return (
    <Region variant="light" tone="surface" id="plattform" className={className}>
      <div className="grid gap-10 md:grid-cols-12">
        <div className="space-y-6 md:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            AI Gateway
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light sm:text-4xl">
            Baue und skaliere zuverlässige KI-Systeme – mit Kontrolle statt
            Chaos.
          </h2>
          <p className="text-base leading-relaxed text-text-muted-light">
            opny.ai bündelt Modelle, Daten und Richtlinien in einem zentralen
            Gateway. Teams integrieren KI über einen Endpoint, behalten Policies
            im Griff und gewinnen Transparenz über Kosten, Nutzung und Outputs.
          </p>
          <ul className="space-y-3 text-sm text-text-muted-light">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>Ein Endpoint für mehrere LLMs (Routing + Fallback)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>Policy-Layer für Teams, Rollen und Datenzugriffe</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>Observability für Prompts, Outputs und Kosten</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <Button href="/#demo" variant="primary" theme="light">
              Demo anfragen
            </Button>
            <Button href="/#sicherheit" variant="secondary" theme="light">
              Security & Governance →
            </Button>
          </div>
        </div>

        <Card theme="light" className="space-y-6 md:col-span-7">
          <div className="rounded-2xl border border-border-subtle-light/20 bg-white p-4 shadow-sm">
            <AiGatewayDiagram className="h-auto w-full" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card theme="light" className="p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-text-primary-light">
                  Model routing
                </div>
                <span className="rounded-full border border-border-subtle-light/25 px-3 py-1 text-xs text-text-secondary-light">
                  Policy
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  { label: "OpenAI", status: "Primary", tag: "Latency 380ms" },
                  {
                    label: "Gemini",
                    status: "Secondary",
                    tag: "Latency 420ms",
                  },
                  {
                    label: "Llama",
                    status: "Fallback",
                    tag: "Latency 510ms",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border border-border-subtle-light/20 bg-elevated-light/80 px-3 py-2"
                  >
                    <div>
                      <div className="text-sm text-text-muted-light">
                        {item.label}
                      </div>
                      <div className="text-xs text-text-secondary-light">
                        {item.status}
                      </div>
                    </div>
                    <span className="rounded-full border border-border-subtle-light/25 px-2 py-1 text-[10px] text-text-secondary-light">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card theme="light" className="p-5">
              <div className="flex items-center justify-between text-xs text-text-secondary-light">
                <span>Fallback & Traffic</span>
                <span>Week 32</span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  { label: "OpenAI", status: "Primary" },
                  { label: "Gemini", status: "Secondary" },
                  { label: "Llama", status: "Fallback" },
                ].map((entry) => (
                  <div
                    key={entry.label}
                    className="flex items-center justify-between rounded-xl border border-border-subtle-light/30 bg-elevated-light/90 px-3 py-2"
                  >
                    <span className="text-sm text-text-muted-light">
                      {entry.label}
                    </span>
                    <span className="text-xs text-text-secondary-light">
                      {entry.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex h-20 items-end gap-2">
                {[60, 40, 80, 30, 70, 55].map((height, index) => (
                  <div
                    key={`${height}-${index}`}
                    className="w-5 rounded-md bg-accent"
                    style={{ height: `${height}%` }}
                  >
                    <span className="sr-only">Bar {index + 1}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card theme="light" className="p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                Usage & Cost
              </div>
              <div className="mt-4 flex h-20 items-end gap-2">
                {[45, 70, 40, 85, 55].map((height, index) => (
                  <div
                    key={`${height}-${index}`}
                    className="w-4 rounded-md bg-accent"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </Card>
            <Card theme="light" className="p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                Policy checks
              </div>
              <div className="mt-4 space-y-3 text-sm text-text-muted-light">
                {[
                  "PII redaction",
                  "File type rules",
                  "Output constraints",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border-subtle-light/25 text-[10px] text-accent">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Card>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {[
          {
            title: "Plug-and-play API Access",
            text: "Integriere KI in Apps und Prozesse über einen zentralen Endpoint – mit Schlüssel- und Rollensteuerung.",
          },
          {
            title: "RAG-ready Architektur",
            text: "Verbinde Modelle mit internem Wissen aus Dokumenten und Systemen – kontrolliert und auditierbar.",
          },
          {
            title: "Private Workloads",
            text: "Isoliere sensible Anwendungsfälle durch private Deployments und restriktive Zugriffskontrollen.",
          },
          {
            title: "Secure File Storage",
            text: "Uploads und Outputs zentral verwalten – mit Retention, Zugriffspfaden und Compliance-Optionen.",
          },
        ].map((card) => (
          <Card key={card.title} theme="light">
            <h3 className="text-lg font-semibold text-text-primary-light">
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-text-muted-light">{card.text}</p>
          </Card>
        ))}
      </div>
    </Region>
  );
}
