import SolutionPage from "@/components/marketing/SolutionPage";
import { companyCtas } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "KI-Schulungen für Automotive-Zulieferer",
  description:
    "Praxisnahe KI-Schulungen und KI-Coaching für Automotive-Zulieferer: ChatGPT, Gemini, Copilot, AI Act, Datenschutz und sichere Arbeitsabläufe.",
  path: "/loesungen/ki-schulungen-automotive",
});

export default function KiSchulungenAutomotivePage() {
  return (
    <SolutionPage
      path="/loesungen/ki-schulungen-automotive"
      eyebrow="KI-Schulungen und KI-Coaching"
      title="KI-Schulungen für Automotive-Zulieferer. Praxisnah für den Arbeitsalltag."
      intro="Opny bietet KI-Schulungen, Inhouse-Workshops und KI-Coaching für Automotive-Zulieferer. Jede Rolle übt mit freigegebenen Tools und typischen Aufgaben aus dem eigenen Arbeitsalltag."
      primaryCta={{ label: "Schulung anfragen", href: companyCtas.trainingInquiry }}
      secondaryCta={{ label: "KI-Governance ansehen", href: "/ki-governance-automotive" }}
      evidence={{
        eyebrow: "Aktueller Weiterbildungsbedarf 2026",
        title: "Unternehmen suchen vor allem anwendungsnahe KI-Kompetenz.",
        text: "Die TÜV-Weiterbildungsstudie 2026 zeigt eine deutliche Lücke zwischen zunehmender Nutzung generativer KI und systematischer Qualifizierung.",
        stats: [
          { value: "50 %", label: "sehen einen hohen Bedarf an KI-Weiterbildung" },
          {
            value: "72 %",
            label:
              "der Unternehmen mit erkanntem KI-Weiterbildungsbedarf nennen anwendungsnahe KI-Kompetenz",
          },
          { value: "27 %", label: "haben Beschäftigte bereits zu KI geschult" },
        ],
        sourceLabel: "TÜV Weiterbildungsstudie 2026",
        sourceHref: "https://www.tuev-verband.de/fileadmin/user_upload/Content_local/Studien_local/2026_TUEV-Verband_Weiterbildungsstudie_2026_Studienbericht.pdf",
      }}
      formatsTitle="Vom Management-Briefing bis zur begleiteten Lernreise"
      formatsText="Dauer und Tiefe richten sich nach Rolle, Tool-Setup, Vorkenntnissen und gewünschtem Transfer. Die konkrete Agenda wird vorab abgestimmt."
      formats={[
        {
          meta: "90 Minuten bis halber Tag",
          title: "Management-Briefing",
          text: "Führungskräfte erhalten einen verständlichen Überblick über Chancen, Grenzen, Verantwortung und die nächsten Entscheidungen.",
        },
        {
          meta: "Halber bis ganzer Tag",
          title: "Inhouse-Teamworkshop",
          text: "Praxisübungen mit ChatGPT, Gemini, Copilot oder freigegebenen internen Zugängen – angepasst an Rollen und typische Aufgaben.",
        },
        {
          meta: "Mehrere kurze Module",
          title: "Rollenbezogene Lernreise",
          text: "Mehrere aufeinander aufbauende Termine zu Anwendung, Datenregeln, Ergebnisprüfung und sicherer Nutzung im Arbeitsalltag.",
        },
        {
          meta: "Einzeln oder im kleinen Team",
          title: "KI-Coaching",
          text: "Begleitung bei konkreten Anwendungen, Entscheidungen und Arbeitsweisen für Verantwortliche oder kleine Testgruppen.",
        },
      ]}
      problemTitle="Eine allgemeine Prompt-Schulung reicht für den sicheren Arbeitsalltag nicht aus."
      problemText="Mitarbeitende müssen nicht nur ChatGPT, Gemini oder Copilot bedienen. Sie müssen auch wissen, welche Daten erlaubt sind, wie Ergebnisse geprüft werden und wer im Zweifel entscheidet."
      problems={[
        { title: "Private ChatGPT- und Gemini-Konten", text: "Mitarbeitende wählen bequeme Zugänge, wenn erlaubte Alternativen und klare Datenregeln fehlen." },
        { title: "Unsichere Eingaben", text: "Vertrauliche Kunden- oder Produktinformationen werden ohne klares Verständnis verarbeitet." },
        { title: "Falsches Vertrauen", text: "Ergebnisse werden übernommen, ohne Quellen, Plausibilität und fachliche Verantwortung zu prüfen." },
        { title: "Zuständigkeiten bleiben unklar", text: "Management, IT und Fachbereiche brauchen gemeinsame Regeln, auch wenn sie unterschiedliche Aufgaben haben." },
        { title: "Regeln ohne Übung", text: "Eine Richtlinie wird gelesen, aber nicht auf typische Dokumente, Aufgaben und Grenzfälle übertragen." },
        { title: "Im Alltag ändert sich nichts", text: "Nach einer reinen Demo fehlen feste Arbeitsweisen, Ansprechpartner und ein klarer Weg für Rückfragen." },
      ]}
      processTitle="KI-Schulung, Workshop oder Coaching passend zur Rolle"
      processText="Das Format wird auf ChatGPT, Gemini, Microsoft Copilot oder interne KI-Zugänge, den Schutzbedarf der Daten und reale Aufgaben des Unternehmens abgestimmt."
      steps={[
        { title: "Rollen und Vorkenntnisse klären", text: "Zielgruppen, Aufgaben, vorhandene Tools und Richtlinien bestimmen." },
        { title: "Tools sicher einordnen", text: "ChatGPT, Gemini, Copilot und interne Zugänge anhand von Daten, Funktionen, Freigaben und Grenzen vergleichen." },
        { title: "Arbeitsprozesse üben", text: "Typische Aufgaben aus Engineering, Qualität, Projektarbeit oder Management bearbeiten." },
        { title: "Ergebnisse prüfen", text: "Quellen, Halluzinationen, fachliche Freigabe und Dokumentation systematisch behandeln." },
        { title: "Nutzung im Alltag sichern", text: "Arbeitsregeln, nächste Übungen und Ansprechpartner verständlich festhalten." },
      ]}
      deliverablesTitle="Schulungsergebnisse für den sicheren KI-Einsatz im Arbeitsalltag"
      deliverables={[
        { title: "Rollenbezogene Agenda", text: "Management, IT, Qualität und Fachbereiche erhalten passende Lernziele statt identischer Folien." },
        { title: "ChatGPT-, Gemini- und Copilot-Übungen", text: "Automotive-Fallbeispiele zu Dokumenten, Projekten, Qualität, Entwicklung und vertraulichen Informationen." },
        { title: "Anwendungsleitfaden", text: "Zulässige Nutzung, Prüfschritte, Eskalation und verantwortlicher Umgang in kompakter Form." },
        { title: "Transferplan", text: "Konkrete nächste Anwendungen, Verantwortliche und Hinweise für Wiederholung oder Vertiefung." },
      ]}
      audienceTitle="Für Verantwortliche und Anwender bei Automobilzulieferern und Automotive-Lieferanten"
      audiences={["Geschäftsführung", "IT & Informationssicherheit", "Qualitätsmanagement", "Engineering & Entwicklung", "Projektmanagement", "Einkauf & Lieferantenmanagement", "HR & Personalentwicklung", "KI-Verantwortliche"]}
      sources={[
        {
          label: "TÜV Weiterbildungsstudie 2026",
          href: "https://www.tuev-verband.de/fileadmin/user_upload/Content_local/Studien_local/2026_TUEV-Verband_Weiterbildungsstudie_2026_Studienbericht.pdf",
          note: "Aktuelle Erhebung zu Nutzung generativer KI, Weiterbildungsbedarf und gefragten Kompetenzfeldern in deutschen Unternehmen.",
        },
        {
          label: "Bundesnetzagentur – KI-Kompetenz",
          href: "https://www.bundesnetzagentur.de/DE/Fachthemen/Digitales/KI/7_Kompetenz/start.html",
          note: "Allgemeine Orientierung zu Formaten, Dokumentation und Verantwortlichkeiten. Die Seite gibt noch den früheren Wortlaut von Artikel 4 wieder.",
        },
        {
          label: "Europäische Kommission – Fragen und Antworten zu KI-Kompetenz",
          href: "https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers",
          note: "Aktualisierte Einordnung nach der Änderung von Artikel 4 im Juli 2026. Maßgeblich bleibt die rechtliche Prüfung des konkreten Einsatzes.",
        },
        {
          label: "Verordnung (EU) 2026/1744 – EUR-Lex",
          href: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32026R1744",
          note: "Amtlicher Änderungstext zum EU AI Act und aktueller Rechtsstand von Artikel 4 seit Juli 2026.",
        },
      ]}
      faqs={[
        {
          question: "Was lernen Mitarbeitende in einer KI-Schulung für Unternehmen?",
          answer: "Eine KI-Schulung vermittelt den sicheren und sinnvollen Umgang mit freigegebenen KI-Tools im Arbeitsalltag. Dazu gehören geeignete Aufgaben, verständliche Eingaben, Prüfung der Ergebnisse, Umgang mit Daten, Grenzen der Systeme und klare Wege für Rückfragen.",
        },
        {
          question: "Ist eine KI-Schulung nach Artikel 4 des EU AI Act verpflichtend?",
          answer: "Artikel 4 verlangt Maßnahmen zur Unterstützung der KI-Kompetenz, aber keine bestimmte standardisierte Schulung. Umfang und Inhalt sollten zu Rolle, Vorwissen und Einsatzkontext passen; bei Hochrisiko-KI können weitere Schulungsanforderungen gelten und die verbindliche Einordnung erfordert eine rechtliche Prüfung.",
        },
        {
          question: "Wie kann ein Unternehmen seine Maßnahmen zur KI-Kompetenz dokumentieren?",
          answer: "Ein Unternehmen kann Zielgruppe, Inhalte, Termin, Dauer, Teilnahme und geplante Lern- oder Transferziele dokumentieren. Ein Teilnahmezertifikat allein belegt nicht automatisch, dass alle Anforderungen im konkreten Einsatz erfüllt sind.",
        },
        {
          question: "Welche KI-Tools können in der Schulung behandelt werden?",
          answer: "Die Schulung kann auf freigegebene Systeme wie ChatGPT, Google Gemini, Microsoft Copilot oder interne KI-Zugänge abgestimmt werden. Übungen und Grenzen richten sich nach Produktedition, vorhandenen Konten, Datenregeln und den Aufgaben der teilnehmenden Rollen.",
        },
        {
          question: "Können in der KI-Schulung eigene Dokumente verwendet werden?",
          answer: "Eigene Dokumente können verwendet werden, wenn ihre Nutzung vorher intern freigegeben wurde und zum eingesetzten Tool passt. Wenn das nicht geklärt ist, arbeitet die Schulung mit anonymisierten oder künstlich erstellten Beispielen.",
        },
        {
          question: "Wie lange dauert eine KI-Schulung und welches Format passt?",
          answer: "Dauer und Format richten sich nach Zielgruppe, Vorkenntnissen, Tool-Setup und gewünschter Praxisnähe. Opny bietet je nach Bedarf Management-Briefings, Inhouse-Workshops, Online-Formate, mehrere kurze Module oder KI-Coaching an.",
        },
        {
          question: "Was kostet eine KI-Schulung für Unternehmen?",
          answer: "Der Preis richtet sich nach Zielgruppe, Dauer, Teilnehmerzahl, Tool-Setup, Individualisierung und gewünschter Begleitung. Nach einem kurzen Vorgespräch erstellt Opny ein transparent abgegrenztes Angebot statt eines pauschalen Standardpakets.",
        },
      ]}
    />
  );
}
