import SolutionPage from "@/components/marketing/SolutionPage";
import { companyCtas } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "KI-Beratung für Automotive-Zulieferer",
  description:
    "KI für Automotive kontrolliert einführen: KI-Strategie, Use Cases, Governance, Datenklassen und Pilotplanung für Zulieferer und Mittelstand.",
  path: "/loesungen/ki-beratung-automotive",
});

export default function KiBeratungAutomotivePage() {
  return (
    <SolutionPage
      path="/loesungen/ki-beratung-automotive"
      eyebrow="KI-Beratung für Automotive-Zulieferer"
      title="KI-Beratung für Automotive-Zulieferer. Vom konkreten Problem zum Praxistest."
      intro="Opny hilft Automobilzulieferern, eine konkrete KI-Anwendung zu bewerten und einen begrenzten Praxistest vorzubereiten: mit klaren Datenregeln, Verantwortlichen und Erfolgskriterien."
      primaryCta={{ label: "Erstgespräch anfragen", href: companyCtas.consultingInquiry }}
      secondaryCta={{ label: "Automotive-Lösung ansehen", href: "/automotive" }}
      evidence={{
        eyebrow: "KI-Nutzung in Deutschland 2026",
        title: "Die Nutzung wächst schneller als die organisatorische Kontrolle.",
        text: "Die aktuelle Bitkom-Erhebung zeigt, warum Unternehmen neben Tools auch klare Freigaben, Datenregeln, Kompetenz und Verantwortlichkeiten benötigen.",
        stats: [
          { value: "48 %", label: "der Berufstätigen nutzen KI zumindest gelegentlich bei der Arbeit" },
          { value: "12 %", label: "der beruflichen KI-Nutzer tun dies ohne Wissen des Arbeitgebers" },
          {
            value: "59 %",
            label:
              "der befragten Erwerbstätigen finden unklar, an wen Daten bei der KI-Nutzung gehen",
          },
        ],
        sourceLabel: "Bitkom KI-Studie 2026",
        sourceHref: "https://www.bitkom.org/sites/main/files/2026-06/bitkom-studienbericht-ki-bevoelkerung.pdf",
      }}
      problemTitle="Viele KI-Initiativen starten als Tooltest – und enden ohne tragfähigen Prozess."
      problemText="Automotive-Zulieferer müssen neben Nutzen und Kosten auch Kundenanforderungen, Informationsschutz, Qualität und bestehende Freigabeprozesse berücksichtigen."
      problems={[
        { title: "Unklare Prioritäten", text: "Anwendungen werden nach Begeisterung ausgewählt, statt Nutzen, Datenrisiko und Aufwand zu vergleichen." },
        { title: "Verteilte Verantwortung", text: "IT, Qualität, Datenschutz und Fachbereich warten gegenseitig auf Entscheidungen, weil Zuständigkeiten fehlen." },
        { title: "Sensible Daten", text: "Für Kunden-, Entwicklungs- und Produktionsinformationen muss klar sein, was an welchen KI-Dienst gesendet werden darf." },
        { title: "Test ohne nächsten Schritt", text: "Ein erster Versuch zeigt Potenzial, aber Verantwortung, Support und Erfolgsmessung bleiben offen." },
        { title: "Richtlinien ohne Anwendung", text: "Vorgaben existieren als PDF, werden aber in Tools, Freigaben und Arbeitsabläufen nicht wirksam." },
        { title: "Begrenzte Kapazität", text: "Interne Teams brauchen einen fokussierten Plan, der vorhandene Systeme und Verantwortliche einbezieht." },
      ]}
      processTitle="Vom Prozessproblem zum begrenzten Umsetzungsplan"
      processText="Die Beratung beginnt mit Geschäfts- und Prozesskontext. Technologie folgt erst, wenn Nutzen, Daten und Verantwortung geklärt sind."
      steps={[
        { title: "Ausgangslage erfassen", text: "Ziele, bestehende Nutzung, Kundenvorgaben und organisatorische Engpässe zusammenführen." },
        { title: "Anwendungen bewerten", text: "Nutzen, Machbarkeit, Schutzbedarf der Daten, Risiken und Aufwand verständlich vergleichen." },
        { title: "Regeln festlegen", text: "Zuständigkeiten, Freigaben, Dokumentation und Prüfpunkte eindeutig festlegen." },
        { title: "Kleinen Praxistest starten", text: "Eine klar begrenzte Aufgabe mit Verantwortlichen, messbaren Kriterien und Abbruchregeln auswählen." },
        { title: "Übergang in den Alltag vorbereiten", text: "Betrieb, Schulung, Support und die Entscheidung über Fortführung oder Abbruch festhalten." },
      ]}
      deliverablesTitle="Konkrete Arbeitsgrundlagen statt allgemeiner KI-Folien"
      deliverables={[
        { title: "Liste der sinnvollsten Anwendungen", text: "Nach Nutzen, Datenrisiko, Aufwand und klarer Verantwortung sortiert." },
        { title: "Klare Zuständigkeiten und Freigaben", text: "Wer zwischen Management, IT, Qualität und Fachbereich was entscheidet." },
        { title: "Plan für den Praxistest", text: "Ziel, Umfang, Daten, Beteiligte, Erfolgskriterien, Abbruchregeln und nächste Entscheidung." },
        { title: "Schritt-für-Schritt-Einführungsplan", text: "Eine realistische Reihenfolge für Regeln, Technik, Schulung, Praxistest und den Übergang in den Alltag." },
      ]}
      audienceTitle="Für die Funktionen, die Nutzen und Kontrolle gemeinsam verantworten"
      audiences={["Geschäftsführung", "COO & Operations", "CIO & IT-Leitung", "Qualitätsmanagement", "Informationssicherheit", "Engineering", "Projektmanagement", "KI-Verantwortliche"]}
      sources={[
        {
          label: "Bitkom KI-Studie 2026",
          href: "https://www.bitkom.org/sites/main/files/2026-06/bitkom-studienbericht-ki-bevoelkerung.pdf",
          note: "Aktuelle Erhebung zur KI-Nutzung im Arbeitsalltag, zu Schattennutzung, Datenfragen und Kompetenzangeboten.",
        },
        {
          label: "TÜV Weiterbildungsstudie 2026",
          href: "https://www.tuev-verband.de/fileadmin/user_upload/Content_local/Studien_local/2026_TUEV-Verband_Weiterbildungsstudie_2026_Studienbericht.pdf",
          note: "Aktuelle Unternehmensbefragung zur Nutzung generativer KI und zum Bedarf an praktischer KI-Kompetenz.",
        },
      ]}
      faqs={[
        {
          question: "Was umfasst KI-Beratung für Automotive-Zulieferer?",
          answer: "KI-Beratung für Automotive-Zulieferer verbindet die Auswahl sinnvoller Anwendungen mit Datenregeln, Verantwortlichkeiten und einem begrenzten Praxistest. Dabei werden Kundenanforderungen, vorhandene Systeme und die verfügbaren internen Kapazitäten berücksichtigt.",
        },
        {
          question: "Wie läuft eine KI-Beratung bei Opny ab?",
          answer: "Die Beratung beginnt mit Zielen, Prozessen, vorhandenen Tools und aktuellen Problemen. Danach werden mögliche Anwendungen bewertet, notwendige Regeln und Zuständigkeiten geklärt und ein nachvollziehbarer Plan für einen begrenzten Praxistest erstellt.",
        },
        {
          question: "Was kostet KI-Beratung für ein Automotive-Unternehmen?",
          answer: "Die Kosten hängen von Ausgangslage, Ziel, Anzahl der beteiligten Bereiche und gewünschter Begleitung ab. Nach einem Erstgespräch grenzt Opny den Leistungsumfang ab und erstellt darauf basierend ein transparentes Angebot; eine pauschale Zahl wäre vorher nicht belastbar.",
        },
        {
          question: "Sollte ein Unternehmen zuerst eine KI-Strategie erstellen oder einen Praxistest starten?",
          answer: "Ein kurzer strategischer Rahmen und ein begrenzter Praxistest sollten zusammengehören. Der Rahmen verhindert einen beliebigen Tooltest, während der Praxistest zeigt, ob Nutzen, Qualität und Aufwand eine spätere Ausweitung rechtfertigen.",
        },
        {
          question: "Wie werden ChatGPT, Gemini und Microsoft Copilot in der KI-Beratung bewertet?",
          answer: "ChatGPT, Google Gemini und Microsoft Copilot werden anhand der konkreten Aufgabe, Produktedition, benötigten Funktionen, Datenwege, Freigaben und Betriebsverantwortung bewertet. Opny ist dabei nicht an einen einzelnen Modellanbieter gebunden.",
        },
        {
          question: "Ersetzt KI-Beratung eine rechtliche oder datenschutzrechtliche Prüfung?",
          answer: "Nein, KI-Beratung ersetzt keine rechtliche oder datenschutzrechtliche Prüfung. Opny strukturiert Fragen, Verantwortlichkeiten und Umsetzung; verbindliche Bewertungen bleiben bei den dafür qualifizierten Stellen.",
        },
      ]}
    />
  );
}
