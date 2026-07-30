import SolutionPage from "@/components/marketing/SolutionPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "KI-Governance für Automotive-Zulieferer",
  description:
    "KI-Governance für Automotive-Zulieferer: Inventar, Rollen, Datenklassen, Richtlinien, Freigaben, Nachweise und kontrollierter KI-Betrieb.",
  path: "/ki-governance-automotive",
});

export default function KiGovernanceAutomotivePage() {
  return (
    <SolutionPage
      path="/ki-governance-automotive"
      eyebrow="KI-Governance für Automotive-Zulieferer"
      title="KI-Governance für Automotive-Zulieferer. Klare Regeln, Zuständigkeiten und Nachweise."
      intro="KI-Governance bedeutet: Das Unternehmen legt verständlich fest, welche KI wofür genutzt werden darf, wer entscheidet, wie Daten geschützt werden und welche Nachweise benötigt werden."
      primaryCta={{ label: "Governance-Check anfragen", href: "/kontakt?interesse=KI-Governance-Check#anfrage" }}
      secondaryCta={{ label: "Produkte vergleichen", href: "/produkte" }}
      problemTitle="Regeln helfen nicht, wenn die tatsächliche KI-Nutzung anders aussieht."
      problemText="Automotive-Zulieferer brauchen eine Übersicht aller eingesetzten KI-Systeme, klare Zuständigkeiten und freigegebene Zugänge."
      problems={[
        { title: "Unbekannte KI-Systeme", text: "Ohne eine vollständige Übersicht ist unklar, wer ein System verantwortet, wofür es genutzt wird und welche Daten betroffen sind." },
        { title: "KI ohne Freigabe", text: "Private Konten und nicht abgestimmte Tools umgehen Informationsschutz und Einkaufsprozesse." },
        { title: "Unklare Freigaben", text: "Teams wissen nicht, welche Daten und Anwendungsfälle mit welchem Modell zulässig sind." },
        { title: "Parallele Anforderungen", text: "AI Act, DSGVO, TISAX, ISO 27001 und Kundenanforderungen werden getrennt bearbeitet." },
        { title: "Fehlende Nachweise", text: "Entscheidungen, Schulung, Prüfungen und Maßnahmen lassen sich später nicht konsistent belegen." },
        { title: "Regel ohne technische Wirkung", text: "Eine Richtlinie hilft wenig, wenn Zugänge und der tatsächliche Weg der Daten anders funktionieren." },
      ]}
      processTitle="Regeln Schritt für Schritt einführen und regelmäßig prüfen"
      processText="Ein tragfähiger Ansatz verbindet klare Entscheidungen mit technischen Kontrollen und regelmäßiger Verbesserung."
      steps={[
        { title: "Übersicht erstellen", text: "KI-Systeme, Anbieter, Zwecke, Verantwortliche, Nutzer und betroffene Daten erfassen." },
        { title: "Einordnen", text: "Risiken, Rollen, interne Anforderungen und relevante rechtliche Prüfbedarfe zusammenführen." },
        { title: "Entscheiden", text: "Zulässige Anwendungen, Modelle, Freigaben, Kontrollen und Eskalationen definieren." },
        { title: "Umsetzen", text: "Richtlinien und Schulungen mit den passenden Anforderungen, Nachweisen und Maßnahmen in TrustArch verbinden; NodeX-Kontrollen werden je Systemumgebung konfiguriert." },
        { title: "Überwachen", text: "Nutzung, Abweichungen, Maßnahmen und Änderungen regelmäßig prüfen und nachweisen." },
      ]}
      deliverablesTitle="Was Sie am Ende konkret erhalten"
      deliverables={[
        { title: "Übersicht und Verantwortlichkeiten", text: "Systeme, Zwecke, Verantwortliche, Daten und Freigabestatus in einer einheitlichen Struktur." },
        { title: "Verständliche Regeln und Freigaben", text: "Klare Vorgaben für Personen, Daten, Tools, Ausnahmen und Rückfragen." },
        { title: "Kontrollen und passende Nachweise", text: "Welche organisatorische oder technische Prüfung welchen Nachweis liefert." },
        { title: "Plan für Schulung und regelmäßige Prüfung", text: "Passendes Wissen für jede Rolle und feste Termine zur Überprüfung von Systemen, Risiken und Aufgaben." },
      ]}
      audienceTitle="Für alle Rollen, die KI freigeben, betreiben oder nachweisen müssen"
      audiences={["Geschäftsführung", "CIO & IT-Leitung", "Qualitätsmanagement", "Informationssicherheit", "Compliance", "Datenschutz", "Engineering", "HR & Schulungsverantwortliche"]}
      sources={[
        {
          label: "Bundesnetzagentur – KI-Kompetenz",
          href: "https://www.bundesnetzagentur.de/DE/Fachthemen/Digitales/KI/7_Kompetenz/start.html",
          note: "Allgemeine Orientierung zu Formaten, Dokumentation und Verantwortlichkeiten. Die Seite gibt noch den früheren Wortlaut von Artikel 4 wieder.",
        },
        {
          label: "Europäische Kommission – Fragen und Antworten zu KI-Kompetenz",
          href: "https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers",
          note: "Aktualisierte Einordnung nach der Änderung von Artikel 4 im Juli 2026. Die konkrete rechtliche Einordnung bleibt einzelfallbezogen.",
        },
        {
          label: "Verordnung (EU) 2026/1744 – EUR-Lex",
          href: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32026R1744",
          note: "Amtlicher Änderungstext zum EU AI Act und aktueller Rechtsstand von Artikel 4 seit Juli 2026.",
        },
        {
          label: "TISAX – ENX Association",
          href: "https://portal.enx.com/en-US/TISAX/",
          note: "Offizielle Einordnung des Prüf- und Austauschmechanismus für Informationssicherheit in der Automobilindustrie.",
        },
        {
          label: "VDA – Künstliche Intelligenz in der Automobilindustrie",
          href: "https://www.vda.de/de/themen/digitalisierung/kuenstliche_intelligenz_in_der_automobilindustrie",
          note: "Brancheneinordnung zum risikobasierten Ansatz des EU AI Act und zur Abgrenzung von Hochrisiko-KI.",
        },
      ]}
      faqs={[
        {
          question: "Was gehört in eine Übersicht der eingesetzten KI-Systeme?",
          answer: "Eine KI-Übersicht sollte mindestens System, Anbieter, Zweck, Nutzer, verantwortliche Person, betroffene Daten und Freigabestatus enthalten. Je nach Einsatz kommen Risikoeinordnung, technische Umgebung, Prüfungen und zugehörige Nachweise hinzu.",
        },
        {
          question: "Welche Unternehmensdaten dürfen in ChatGPT, Gemini oder Microsoft Copilot eingegeben werden?",
          answer: "Eine pauschale Liste zulässiger Unternehmensdaten gibt es nicht. Vor der Nutzung müssen Datenklasse, Zweck, Vertrag und Produktedition, Einstellungen, Datenweg sowie interne und kundenseitige Vorgaben geprüft und die Nutzung ausdrücklich freigegeben werden.",
        },
        {
          question: "Wie lässt sich Schatten-KI im Unternehmen reduzieren?",
          answer: "Schatten-KI lässt sich durch verständliche Regeln, brauchbare freigegebene Zugänge, Schulung und technische Kontrollen reduzieren. Wichtig ist auch ein klarer Weg für Rückfragen und Ausnahmen, denn ein Verbot ohne praktikable Alternative löst das Problem meist nicht.",
        },
        {
          question: "Welche Anforderungen des EU AI Act sind für Unternehmen relevant?",
          answer: "Die Anforderungen des EU AI Act richten sich nach der Rolle des Unternehmens, dem konkreten Einsatz und der Risikoklasse des KI-Systems. Dazu können unter anderem KI-Kompetenz, Transparenz, menschliche Aufsicht und Dokumentation gehören; die verbindliche Einordnung erfordert eine rechtliche Prüfung.",
        },
        {
          question: "Schreibt Artikel 4 des EU AI Act einen KI-Beauftragten vor?",
          answer: "Nein. Zur Erfüllung von Artikel 4 ist keine bestimmte Organisationsform und kein Titel wie KI-Beauftragter vorgeschrieben. Verantwortlichkeiten sollten dennoch klar zugewiesen werden; andere gesetzliche, vertragliche oder branchenspezifische Anforderungen sind gesondert zu prüfen.",
        },
        {
          question: "Ist jede KI-Anwendung in der Automobilindustrie ein Hochrisiko-KI-System?",
          answer: "Nein. Der Automotive-Kontext allein macht eine KI-Anwendung nicht automatisch zu einem Hochrisiko-KI-System. Entscheidend sind insbesondere Zweck, konkrete Funktion, Einsatzkontext und die Kriterien des EU AI Act; die Einstufung muss für den Einzelfall rechtlich geprüft werden.",
        },
        {
          question: "Wie hängen TISAX und die Nutzung von KI zusammen?",
          answer: "KI kann vertrauliche Informationen, Zugriffe, Dienstleister und Prozesse im Automotive-Umfeld berühren. Welche TISAX-Anforderungen im konkreten Informationsverbund relevant sind und welche Nachweise erforderlich werden, muss im Einzelfall geprüft werden.",
        },
      ]}
    />
  );
}
