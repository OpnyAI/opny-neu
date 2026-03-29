import type { Metadata } from "next";
import Region from "@/components/Region";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "KI Governance für Unternehmen | NodeX Deep Dive",
  description:
    "Deep-Dive-Seite zu KI Governance in NodeX: KI Compliance, LLM Governance, Auditierbarkeit und sichere KI-Nutzung mit klaren Policies für Unternehmen.",
  alternates: {
    canonical: "/ki-governance",
  },
  openGraph: {
    title: "KI Governance für Unternehmen | NodeX Deep Dive",
    description:
      "Deep-Dive-Seite zu KI Governance in NodeX: KI Compliance, LLM Governance, Auditierbarkeit und sichere KI-Nutzung mit klaren Policies für Unternehmen.",
    url: "/ki-governance",
  },
};

export default function KiGovernancePage() {
  return (
    <main className="flex flex-col">
      <Region variant="light" tone="base">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              KI Governance | Teil von NodeX
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-text-primary-light md:text-5xl">
              KI Governance &amp; Sicherheit
            </h1>
            <p className="text-base leading-relaxed text-text-muted-light">
              Kontrollierte KI braucht klare Regeln: KI Governance, KI Compliance
              und LLM Governance sichern eine verlässliche, auditierbare Nutzung.
              So entsteht KI-Sicherheit in Unternehmen, die Vertrauen schafft.
            </p>
            <ul className="space-y-3 text-base text-text-muted-light">
              {[
                "Policies für Datenzugriff, Rollen und Modelle",
                "Audit-Trails für Prompts, Dateien und Outputs",
                "Shadow-AI erkennen und konsolidieren",
                "Sichere KI Nutzung mit nachvollziehbaren Freigaben",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/leistungen/nodex" variant="primary" theme="light">
                Zu NodeX
              </Button>
              <Button href="/ai-gateway" variant="secondary" theme="light">
                AI Gateway entdecken
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <Card theme="light" className="p-6">
              <div className="text-lg font-semibold text-text-primary-light">
                Policies statt PDFs
              </div>
              <p className="mt-2 text-base text-text-muted-light">
                Richtlinien werden technisch durchgesetzt – vor der Anfrage, nach
                der Antwort und bei Datei-Uploads.
              </p>
            </Card>
            <Card theme="light" className="p-6">
              <div className="text-lg font-semibold text-text-primary-light">
                Auditierbarkeit auf Knopfdruck
              </div>
              <p className="mt-2 text-base text-text-muted-light">
                Lückenlose Nachvollziehbarkeit für Management, IT und Compliance.
              </p>
            </Card>
          </div>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Management &amp; Compliance
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              KI Governance, die Kontrolle schafft, ohne Innovation zu bremsen.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Opny unterstützt sichere KI Nutzung mit klaren Verantwortlichkeiten
              und messbarer Wirkung innerhalb von NodeX. Ideal für regulierte
              Branchen und Compliance-Teams.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "KI Compliance by Design",
                text: "DSGVO, interne Policies und Audit-Anforderungen werden durchgesetzt, nicht nur dokumentiert.",
              },
              {
                title: "LLM Governance",
                text: "Modell- und Anbieterwahl bleibt kontrolliert, nachvollziehbar und versioniert.",
              },
              {
                title: "Shadow-AI Prävention",
                text: "Zentraler Zugang reduziert Tool-Wildwuchs und unkontrollierte Workarounds.",
              },
              {
                title: "Risikominimierung",
                text: "Klare Freigaben, Guardrails und Monitoring für sensible Daten und Prozesse.",
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
            <Button href="/leistungen/nodex" variant="primary" theme="light">
              NodeX Produktseite
            </Button>
            <Button href="/ai-gateway" variant="secondary" theme="light">
              AI Gateway für Engineering
            </Button>
          </div>
        </div>
      </Region>
    </main>
  );
}
