import Card from "@/components/ui/Card";
import Region from "@/components/Region";
import { WorkspaceGatewayDiagram } from "@/components/diagrams/WorkspaceGatewayDiagram";

type ProductivitySectionProps = {
  className?: string;
};

export default function ProductivitySection({ className }: ProductivitySectionProps) {
  return (
    <Region variant="light" tone="base" id="productivity" className={className}>
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Team-Produktivität
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light sm:text-4xl">
            Produktivität für Teams freisetzen
          </h2>
          <p className="text-base leading-relaxed text-text-muted-light">
            Ein Workspace, der alle LLMs bündelt und Zusammenarbeit
            strukturierbar macht – mit klaren Leitplanken und klarer Governance.
          </p>
          <ul className="space-y-3 text-sm text-text-muted-light">
            {[
              "Chat mit allen LLMs an einem Ort",
              "Modelle direkt vergleichen",
              "Wissensbasis anbinden (RAG-ready)",
              "Use-Case-spezifische Assistenten",
              "Zusammenarbeit in Projekten (Prompts, Outputs, Dateien)",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border-subtle-light/20 bg-white p-4 shadow-sm">
            <WorkspaceGatewayDiagram className="h-auto w-full" />
          </div>
          <Card theme="light" className="p-5">
            <div className="text-sm font-semibold text-text-primary-light">
              Ein Workspace, zwei Einstiegspunkte
            </div>
            <p className="mt-2 text-sm text-text-muted-light">
              Teams arbeiten im UI, Entwickler integrieren über die API – beides
              kontrolliert, dokumentiert und skalierbar.
            </p>
          </Card>
        </div>
      </div>
    </Region>
  );
}
