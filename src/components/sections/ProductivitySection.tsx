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
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Team-Produktivität
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Produktivität für Teams, Kontrolle für Plattformverantwortliche
          </h2>
          <p className="text-base leading-relaxed text-text-muted-light">
            NodeX verbindet Workspace und Gateway in einer Plattform, die
            produktive KI-Nutzung ermöglicht und gleichzeitig Routing, Rollen,
            Freigaben und Datenpfade steuerbar hält.
          </p>
          <ul className="space-y-3 text-base text-text-muted-light">
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
            <div className="text-base font-semibold text-text-primary-light">
              Ein Workspace, zwei Einstiegspunkte
            </div>
            <p className="mt-2 text-base text-text-muted-light">
              Teams arbeiten im UI, Entwickler integrieren über die API und IT
              behält Regeln, Transparenz und Skalierbarkeit an einer Stelle.
            </p>
          </Card>
        </div>
      </div>
    </Region>
  );
}
