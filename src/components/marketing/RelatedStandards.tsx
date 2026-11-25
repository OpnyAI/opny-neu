import Link from "next/link";
import Region from "@/components/Region";
import SectionIntro from "./SectionIntro";
import { authenticTrustStandards } from "@/content/authentictrust";

export default function RelatedStandards({ currentId }: { currentId: string }) {
  return (
    <Region tone="alt" spacing="compact">
      <SectionIntro
        eyebrow="Weitere Normen und Vorgaben"
        title="Welches Thema beschäftigt Ihr Team noch?"
        text="AuthenticTrust verbindet den gemeinsamen Dokument- und Maßnahmenablauf mit unterschiedlichen Anforderungen. Der verfügbare Umfang unterscheidet sich je Regelwerk."
      />
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {authenticTrustStandards.filter((item) => item.id !== currentId).map((item) => (
          <li key={item.id} className="min-w-0 rounded-card border border-border-subtle-light bg-bg-light p-5">
            <Link href={item.href} className="at-text-link">{item.name}</Link>
            <p className="mt-2 text-sm leading-relaxed text-text-muted-light">{item.topic}</p>
            <p className="mt-2 text-sm font-medium text-accent">{item.coverage}</p>
          </li>
        ))}
      </ul>
      <Link href="/produkte/authentictrust#standards" className="at-text-link mt-6">
        Alle Standards und den Produktumfang vergleichen
      </Link>
    </Region>
  );
}
