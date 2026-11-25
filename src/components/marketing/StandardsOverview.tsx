import Link from "next/link";
import Region from "@/components/Region";
import SectionIntro from "./SectionIntro";
import {
  authenticTrustStandards,
  authenticTrustStandardsNote,
} from "@/content/authentictrust";

export default function StandardsOverview({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <Region
      id="standards"
      tone="surface"
      spacing={compact ? "compact" : "standard"}
    >
      <SectionIntro
        eyebrow="Normen und Vorgaben"
        title="Compliance für Ihren konkreten Anwendungsfall."
        text="Anforderungen aus TISAX, ISO/IEC 27001 und ISO 9001 strukturieren. Ausgewählte Anforderungen aus NIS2, SOC 2 und DSGVO einordnen."
      />
      <div className="standards-grid">
        {authenticTrustStandards.map((standard) => (
          <article className="standard-card" key={standard.name}>
            <h3>{standard.name}</h3>
            <p className="standard-type">{standard.type}</p>
            <p className="standard-topic">{standard.topic}</p>
            {!compact ? (
              <p className="standard-scope">{standard.scope}</p>
            ) : null}
            <p className="standard-coverage">{standard.coverage}</p>
            {standard.href ? (
              <Link href={standard.href} className="at-text-link mt-3">
                {standard.linkLabel}
              </Link>
            ) : null}
          </article>
        ))}
      </div>
      <p className="standards-note">{authenticTrustStandardsNote}</p>
    </Region>
  );
}
