import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Region from "@/components/Region";
import HeroDashboardMock from "@/components/illustrations/HeroDashboardMock";
import { companyCtas } from "@/config/site";

type AiGatewaySectionProps = {
  className?: string;
};

export default function AiGatewaySection({ className }: AiGatewaySectionProps) {
  return (
    <Region variant="light" tone="surface" className={className}>
      {/* FULL-WIDTH Textblock */}
      <div className="w-full min-w-0">
        <div className="space-y-6">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            AI Gateway
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Baue und skaliere zuverlässige KI-Systeme mit NodeX statt
            Chaos.
          </h2>

          <p className="text-base leading-relaxed text-text-muted-light">
            NodeX bündelt Modelle, Daten und Richtlinien in einem zentralen
            Gateway. Teams integrieren KI über einen Endpoint, behalten Policies
            im Griff und gewinnen Transparenz über Kosten, Nutzung und Outputs.
          </p>

          <ul className="space-y-3 text-base text-text-muted-light">
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
            <a
              href={companyCtas.nodexDemo}
              className="inline-flex items-center justify-center rounded-button px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent bg-white text-[#0B0F1A] border border-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:bg-white/95"
            >
              Demo anfragen
            </a>

            <Button href="/ki-governance" variant="secondary" theme="light">
              KI Governance im Detail →
            </Button>
          </div>
        </div>

        {/* Dashboard Mock – MOBILE SAFE */}
        <div className="mt-10 w-full min-w-0 overflow-hidden sm:mt-12">
          <div className="mx-auto w-full max-w-[1100px] px-2 sm:px-0">
            {/* leichte Skalierung auf sehr kleinen Screens, um Overflow zu vermeiden */}
            <div className="origin-top scale-[0.92] sm:scale-100">
              <HeroDashboardMock />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-2">
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
              <h3 className="text-xl font-semibold text-text-primary-light md:text-2xl">
                {card.title}
              </h3>
              <p className="mt-2 text-base text-text-muted-light">
                {card.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Region>
  );
}
