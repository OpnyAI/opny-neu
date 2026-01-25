import Card from "@/components/ui/Card";
import Region from "@/components/Region";

export default function UnderHeroSection() {
  return (
    <Region variant="light" tone="base">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            So funktioniert opny im Alltag
          </h2>
          <p className="text-base leading-relaxed text-text-muted-light">
            Ein Chat-Interface für Teams – mit Policies und Multi-Model-Routing
            im Hintergrund.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Chat Workspace",
              text: "Teams arbeiten im gemeinsamen Chat und behalten Kontext, Dateien und Antworten an einem Ort.",
              bullets: [
                "Zentrale Chat-Ansicht",
                "Antworten mit Quellen",
                "Teamübergreifende Zusammenarbeit",
              ],
              chips: ["Shared", "Context", "Secure"],
            },
            {
              title: "Model Switch & Auto-Routing",
              text: "Wechsle Modelle flexibel oder lasse opny automatisch das beste Routing wählen.",
              bullets: [
                "Auto-Auswahl pro Request",
                "Fallback bei Ausfällen",
                "Optimiert nach Use-Case",
              ],
              chips: ["Auto", "Fallback", "Smart"],
            },
            {
              title: "Policies im Hintergrund",
              text: "Richtlinien greifen automatisch, ohne den Chat-Flow zu unterbrechen.",
              bullets: [
                "PII-Schutz aktiviert",
                "Compliance-ready",
                "Auditierbar ohne Reibung",
              ],
              chips: ["Policy", "Guardrail", "Audit"],
            },
          ].map((item) => (
            <Card key={item.title} theme="light" className="space-y-4 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                {item.title}
              </div>
              <p className="text-base text-text-muted-light">{item.text}</p>
              <ul className="space-y-2 text-sm text-text-muted-light">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-border-subtle-light/25 bg-elevated-light/70 px-3 py-1 text-xs font-semibold text-text-secondary-light"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Region>
  );
}
