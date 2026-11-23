import { authenticTrustStandards } from "./authentictrust";

export type StandardPageId = "iso27001" | "iso9001" | "nis2" | "soc2" | "dsgvo";
type TopicBlock = { title: string; text: string };
type StandardPageContent = {
  title: string;
  description: string;
  heading: string;
  emphasis: string;
  lead: string;
  problem: TopicBlock;
  example: TopicBlock & { roles: string };
  steps: TopicBlock[];
  definition: string;
  scope: string;
  source: { label: string; href: string };
  media: { file: string; alt: string; caption: string };
  faqs: { question: string; answer: string }[];
  closing: TopicBlock;
};

export const standardPages: Record<StandardPageId, StandardPageContent> = {
  iso27001: {
    title: "ISO 27001-Software für Anforderungen und Nachweise",
    description: "ISO 27001 mit AuthenticTrust vorbereiten: Sicherheitsanforderungen, Richtlinien, Nachweise und Maßnahmen gemeinsam bearbeiten. Software-Demo anfragen.",
    heading: "ISO 27001-Anforderungen",
    emphasis: "gemeinsam bearbeiten.",
    lead: "Für Teams in Informationssicherheit und IT: Verbinden Sie Sicherheitsanforderungen mit Richtlinien, Nachweisen und offenen Maßnahmen in AuthenticTrust von Opny.",
    problem: {
      title: "Welche Sicherheitsvorgabe ist umgesetzt – und wo fehlt noch ein Beleg?",
      text: "Eine Richtlinie liegt bei der IT, der Prüfbericht in einem anderen Ordner und die nächste Aufgabe in einer E-Mail. Für die ISO 27001-Vorbereitung braucht Ihr Team einen gemeinsamen Blick auf Anforderungen, Unterlagen und offene Punkte. AuthenticTrust führt diese Arbeitsschritte zusammen.",
    },
    example: {
      title: "Beispiel: Einen Zugangsprozess nachvollziehbar dokumentieren",
      text: "Ihr Team überarbeitet eine interne Richtlinie für Zugangsrechte. Die zuständige Person pflegt das Dokument mit Version und Freigabe. Einen vorhandenen PDF-Nachweis ordnen Sie der passenden Anforderung zu. Fehlt noch eine Überprüfung, halten Sie sie als Maßnahme mit Frist fest. Die fachliche Beurteilung bleibt bei Ihren Verantwortlichen.",
      roles: "Informationssicherheit ordnet Anforderungen ein, IT pflegt die Umsetzung und die zuständige Führungskraft prüft offene Entscheidungen.",
    },
    steps: [
      { title: "Anforderungen und Risiken einordnen", text: "Legen Sie gemeinsam fest, welche Anforderungen Sie im vereinbarten Einsatzumfang bearbeiten. Betrachten Sie relevante Risiken und vorhandene Unterlagen, bevor Sie den Bearbeitungsstand bewerten." },
      { title: "Richtlinien und Nachweise zuordnen", text: "Pflegen Sie eigene Dokumente mit Versionen und fachlichen Freigaben. Verbinden Sie hochgeladene PDF-Nachweise mit Anforderungen und Angaben zur Gültigkeit." },
      { title: "Offene Sicherheitsmaßnahmen verfolgen", text: "Halten Sie fest, was noch fehlt, wer den nächsten Schritt übernimmt und bis wann. So können IT und Informationssicherheit den Fortschritt gemeinsam besprechen." },
    ],
    definition: "ISO/IEC 27001 ist eine Norm für ein Informationssicherheitsmanagementsystem, kurz ISMS. Gemeint sind die Abläufe, mit denen ein Unternehmen Risiken für seine Informationen steuert und Sicherheitsmaßnahmen organisiert. Die Norm gibt Anforderungen an dieses Managementsystem vor.",
    scope: "ISO/IEC 27001 ist als Anforderungskatalog beschrieben. Welche Normausgabe und Funktionen für Ihren Einsatz verfügbar sind, klären wir vorab. AuthenticTrust unterstützt Dokumentation und Vorbereitung; fachliche Bewertungen, Umsetzung und eine externe Zertifizierungsentscheidung bleiben bei den zuständigen Personen.",
    source: { label: "ISO/IEC 27001 bei ISO erklärt", href: "https://www.iso.org/standard/27001" },
    media: {
      file: "authentictrust-risks-actions-1600x1000.jpg",
      alt: "AuthenticTrust zeigt Risiken und Maßnahmen mit Zuständigkeiten und Bearbeitungsstand",
      caption: "Allgemeiner Produkteinblick mit fiktiven Beispieldaten. Die Ansicht zeigt den Arbeitsweg, keine Zusage einer bestimmten ISO-27001-Ausgabe.",
    },
    faqs: [
      { question: "Was unterstützt eine ISO 27001-Software?", answer: "Eine Software unterstützt die gemeinsame Bearbeitung von Anforderungen, Richtlinien, Nachweisen und Maßnahmen. AuthenticTrust verbindet diese Informationen und macht Zuständigkeiten sowie offene Aufgaben nachvollziehbar. Die Einführung und fachliche Bewertung Ihres Informationssicherheitsmanagementsystems bleiben Aufgaben Ihres Unternehmens." },
      { question: "Was bedeutet ISMS?", answer: "ISMS steht für Informationssicherheitsmanagementsystem. Es beschreibt die organisatorischen Abläufe, mit denen ein Unternehmen seine Informationen schützt, Risiken bewertet und Sicherheitsmaßnahmen weiterentwickelt. Eine ISMS-Software unterstützt die Dokumentation und Bearbeitung; sie ist selbst noch kein umgesetztes Managementsystem." },
      { question: "Welche ISO 27001-Ausgabe ist in AuthenticTrust verfügbar?", answer: "Der Produktumfang beschreibt einen ISO/IEC-27001-Anforderungskatalog. Vor dem Einsatz klären wir die verfügbare Ausgabe, den benötigten Umfang und die passenden Funktionen. Die Angabe einer Norm und ein Produktbild sind keine Zusage, dass jede Ausgabe und jede Anforderung vollständig abgedeckt ist." },
      { question: "Wie unterscheiden sich Richtlinien und PDF-Nachweise?", answer: "Eine intern erstellte Richtlinie wird mit Versionen, zuständiger Person und fachlicher Freigabe bearbeitet. Ein hochgeladener PDF-Nachweis wird einer Anforderung zugeordnet und mit seiner Gültigkeit gepflegt. Beide Abläufe sind getrennt; PDF-Nachweise erhalten nicht automatisch den Freigabeablauf interner Dokumente." },
      { question: "Ist AuthenticTrust auf IT-Unternehmen beschränkt?", answer: "Der Anwendungsfall richtet sich an Teams, die Informationssicherheitsanforderungen gemeinsam bearbeiten, auch in Industrie und Dienstleistungen. Entscheidend sind Ihre Zuständigkeiten, Unterlagen und der vereinbarte Einsatzumfang. Welche Arbeitsabläufe passen, besprechen wir in der Demo." },
      { question: "Stellt AuthenticTrust ein ISO 27001-Zertifikat aus?", answer: "Nein. Die Software unterstützt Organisation und Vorbereitung. Ihr Unternehmen setzt die Anforderungen um; eine zuständige unabhängige Zertifizierungsstelle prüft und entscheidet über eine Zertifizierung. AuthenticTrust ist keine Zertifizierungsstelle und garantiert kein bestandenes Audit." },
    ],
    closing: { title: "Wie organisieren Sie Ihre ISO 27001-Vorbereitung?", text: "Bringen Sie Ihre Anforderungen und Dokumentabläufe mit in die Demo. Wir zeigen den Arbeitsweg und klären Katalog, Ausgabe und Funktionsumfang für Ihr Team." },
  },
  iso9001: {
    title: "ISO 9001-Software für Dokumente und Qualitätsprozesse",
    description: "Qualitätsprozesse mit AuthenticTrust organisieren: ISO 9001-Anforderungen, Dokumentversionen, Freigaben und Maßnahmen verbinden. Persönliche Demo anfragen.",
    heading: "ISO 9001:",
    emphasis: "Qualitätsprozesse im Blick.",
    lead: "Für Qualitäts- und Prozessverantwortliche: Pflegen Sie gültige Dokumente, ordnen Sie Nachweise zu und verfolgen Sie Aufgaben zu Ihren Qualitätsprozessen gemeinsam.",
    problem: {
      title: "Welche Arbeitsanweisung gilt – und wer kümmert sich um die Änderung?",
      text: "Wenn mehrere Fassungen einer Prozessbeschreibung im Umlauf sind, fehlt eine verlässliche Grundlage für die Zusammenarbeit. AuthenticTrust verbindet eigene Dokumente, fachliche Freigaben und Maßnahmen mit den Anforderungen. So kann Ihr Qualitätsteam den aktuellen Stand gemeinsam bearbeiten.",
    },
    example: {
      title: "Beispiel: Eine geänderte Arbeitsanweisung bearbeiten",
      text: "Nach einer internen Prüfung soll eine Arbeitsanweisung überarbeitet werden. Die Prozessverantwortliche bearbeitet die neue Dokumentversion; die zuständige Person prüft die Freigabe. Eine dazugehörige Aufzeichnung wird als PDF-Nachweis zugeordnet. Noch offene Anpassungen bleiben als Maßnahmen mit Verantwortlichen und Fristen sichtbar.",
      roles: "Qualitätsmanagement ordnet Vorgaben ein, Prozessverantwortliche pflegen die Dokumente und die fachlich zuständige Person entscheidet über die Freigabe.",
    },
    steps: [
      { title: "Qualitätsanforderungen zuordnen", text: "Betrachten Sie die relevanten Vorgaben gemeinsam mit den Abläufen Ihres Unternehmens. Klären Sie, welche Prozessdokumente und vorhandenen Nachweise dazu gehören." },
      { title: "Dokumente mit Version und Freigabe pflegen", text: "Bearbeiten Sie intern erstellte Prozessbeschreibungen und Arbeitsanweisungen nachvollziehbar. Zuständigkeit und fachliche Freigabe gehören zum beschriebenen Dokumentablauf." },
      { title: "Feststellungen in Aufgaben übersetzen", text: "Halten Sie notwendige Änderungen als Maßnahmen mit verantwortlichen Personen, Fristen und Status fest. Die fachliche Beurteilung der Umsetzung bleibt bei Ihrem Qualitätsteam." },
    ],
    definition: "ISO 9001 ist eine Norm für Qualitätsmanagementsysteme. Ein solches System beschreibt, wie ein Unternehmen seine Prozesse organisiert, Anforderungen an Qualität berücksichtigt und Verbesserungen bearbeitet. Die Software hilft dabei, die zugehörigen Unterlagen und Aufgaben nachvollziehbar zu pflegen.",
    scope: "ISO 9001 ist als Anforderungskatalog beschrieben. Die im Produkt verfügbare Normausgabe und der konkrete Einsatzumfang werden vorab geklärt. Die Website sagt keine automatische Umsetzung einer neuen Normausgabe zu. Ob Ihre Prozesse die Anforderungen erfüllen, beurteilen Fachpersonen und gegebenenfalls eine externe Prüfstelle.",
    source: { label: "ISO 9001 und Qualitätsmanagement bei ISO", href: "https://www.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/08/84/88464.html" },
    media: {
      file: "authentictrust-documents-evidence-1600x1000.jpg",
      alt: "AuthenticTrust zeigt Dokumente und Nachweise mit Verantwortung und Freigabestatus",
      caption: "Allgemeine Dokumentenansicht mit fiktiven Beispieldaten. Die sichtbaren Beispielreferenzen sind keine vollständige ISO-9001-Prozessabbildung.",
    },
    faqs: [
      { question: "Wobei hilft eine ISO 9001-Software im Qualitätsmanagement?", answer: "Sie unterstützt Teams dabei, Qualitätsanforderungen mit Prozessdokumenten, Nachweisen und Maßnahmen zu verbinden. AuthenticTrust bietet dafür einen gemeinsamen Arbeitsraum. Der Schwerpunkt liegt auf nachvollziehbarer Bearbeitung und Zuständigkeit; die Software übernimmt keine fachliche Qualitätsentscheidung." },
      { question: "Was bedeutet QMS-Software?", answer: "QMS steht für Qualitätsmanagementsystem. Eine QMS-Software unterstützt die Arbeit an den Prozessen, Unterlagen und Aufgaben dieses Systems. AuthenticTrust ist für den hier beschriebenen Ausschnitt aus Anforderungen, Dokumenten, Nachweisen und Maßnahmen gedacht. Den für Ihre Organisation passenden Funktionsumfang klären wir in der Demo." },
      { question: "Kann ich Arbeitsanweisungen mit Freigaben bearbeiten?", answer: "Für intern erstellte Dokumente sind Versionen, Zuständigkeiten und fachliche Freigaben beschrieben. Damit lassen sich beispielsweise Änderungen an einer Arbeitsanweisung nachvollziehbar bearbeiten. Hochgeladene PDF-Nachweise haben einen getrennten Ablauf mit Anforderungsbezug und Gültigkeit." },
      { question: "Wie werden offene Punkte aus einer internen Prüfung bearbeitet?", answer: "Ihr Team hält eine Feststellung fest und übersetzt die notwendige Änderung in eine Maßnahme. Verantwortliche, Frist und Status zeigen den nächsten Schritt. Die Bewertung der Ursache, der Umsetzung und ihrer Wirksamkeit bleibt bei den zuständigen Fachpersonen." },
      { question: "Unterstützt AuthenticTrust jede ISO 9001-Ausgabe?", answer: "Eine vollständige Unterstützung jeder Ausgabe wird nicht pauschal zugesagt. Vor einem Einsatz prüfen wir gemeinsam die verfügbare Katalogfassung und den benötigten Umfang. Eine Änderung der Norm bedeutet nicht automatisch, dass der Softwarekatalog bereits auf diese Ausgabe umgestellt ist." },
      { question: "Ersetzt die Software eine ISO 9001-Zertifizierung?", answer: "Nein. AuthenticTrust unterstützt die Organisation der Unterlagen und Aufgaben. Die Umsetzung des Qualitätsmanagementsystems bleibt bei Ihrem Unternehmen. Eine externe Zertifizierungsstelle bewertet die Erfüllung der Anforderungen und entscheidet über die Zertifizierung." },
    ],
    closing: { title: "Wie pflegt Ihr Qualitätsteam gültige Unterlagen?", text: "Wir zeigen Ihnen Dokumentversionen, Freigaben und Maßnahmen im Zusammenhang. Gemeinsam klären wir, wie der beschriebene Arbeitsweg zu Ihren Qualitätsprozessen passt." },
  },
  nis2: {
    title: "NIS2-Software für ausgewählte Anforderungen",
    description: "Ausgewählte NIS2-Anforderungen mit AuthenticTrust strukturieren: Unterlagen, Nachweise und Maßnahmen mit Zuständigkeiten verbinden. Einsatzumfang in der Demo klären.",
    heading: "Ausgewählte NIS2-Anforderungen",
    emphasis: "organisiert bearbeiten.",
    lead: "Für IT, Sicherheitsverantwortliche und Unternehmensleitung: Ordnen Sie Unterlagen und Maßnahmen ausgewählten Cybersicherheitsanforderungen zu und halten Sie die nächsten Schritte fest.",
    problem: {
      title: "Viele Sicherheitsaufgaben – aber kein gemeinsamer Bearbeitungsstand?",
      text: "Eine Anforderung betrifft die IT, eine andere die Organisation oder die Leitung. Wenn Unterlagen und Zuständigkeiten getrennt gepflegt werden, ist unklar, was bereits bearbeitet wurde. AuthenticTrust unterstützt die strukturierte Zusammenarbeit an ausgewählten Anforderungen aus dem NIS2-Kontext.",
    },
    example: {
      title: "Beispiel: Eine Sicherheitsvorgabe im Team nachhalten",
      text: "Ihr Team möchte zu einer ausgewählten Anforderung dokumentieren, wie ein Sicherheitsablauf geregelt ist. Es ordnet die vorhandene interne Richtlinie und einen passenden PDF-Nachweis zu. Eine noch fehlende Überarbeitung wird als Maßnahme mit Zuständigkeit und Frist festgehalten. Fachpersonen prüfen, ob die Unterlagen inhaltlich ausreichen.",
      roles: "Die IT beschreibt die Umsetzung, Sicherheitsverantwortliche ordnen Belege ein und die Leitung klärt die organisatorischen Entscheidungen.",
    },
    steps: [
      { title: "Relevanz und Einsatzumfang fachlich klären", text: "Lassen Sie einordnen, welche Vorgaben für Ihr Unternehmen gelten. Anschließend klären wir, welche der ausgewählten Anforderungen im verfügbaren AuthenticTrust-Umfang für Ihre Dokumentation nutzbar sind." },
      { title: "Unterlagen mit Anforderungen verbinden", text: "Führen Sie eigene Dokumente und vorhandene PDF-Nachweise mit den ausgewählten Anforderungen zusammen. Zuständigkeit und Gültigkeit helfen Ihrem Team, Unterlagen fachlich zu prüfen." },
      { title: "Nächste Maßnahmen gemeinsam bearbeiten", text: "Übersetzen Sie offene Punkte in Aufgaben mit Verantwortlichen, Fristen und Status. Die Software organisiert die Bearbeitung; sie meldet keine Vorfälle an Behörden und beurteilt keine rechtliche Konformität." },
    ],
    definition: "NIS2 ist eine EU-Richtlinie zur Cybersicherheit. Sie betrifft unter anderem den Umgang mit Sicherheitsrisiken und die Verantwortung von Organisationen. Welche konkreten Pflichten für Ihr Unternehmen gelten, hängt von der rechtlichen Einordnung und der nationalen Umsetzung ab.",
    scope: "AuthenticTrust enthält ausgewählte Anforderungen aus dem NIS2-Kontext. Das ist kein vollständiges eigenständiges NIS2-Fachmodul. Die Software ist weder Betroffenheitsprüfung noch behördliches Meldeportal. Rechtliche Einordnung und fachliche Umsetzung klären Sie mit den zuständigen Fachpersonen; den verfügbaren Softwareumfang besprechen wir vor dem Einsatz.",
    source: { label: "NIS2 bei der Europäischen Kommission", href: "https://digital-strategy.ec.europa.eu/en/policies/nis2-directive" },
    media: {
      file: "authentictrust-risks-actions-1600x1000.jpg",
      alt: "Allgemeine AuthenticTrust-Ansicht für Risiken, Maßnahmen und Zuständigkeiten",
      caption: "Allgemeiner Arbeitsweg mit fiktiven Beispieldaten. Gezeigt wird kein vollständiges NIS2-Modul und keine behördliche Meldung.",
    },
    faqs: [
      { question: "Was kann AuthenticTrust als Software im NIS2-Kontext unterstützen?", answer: "AuthenticTrust hilft, ausgewählte Anforderungen mit Dokumenten, PDF-Nachweisen und offenen Maßnahmen zu verbinden. Ihr Team kann Zuständigkeiten und den Bearbeitungsstand nachvollziehen. Das Produkt bietet für NIS2 ausgewählte Anforderungen, kein vollständiges eigenständiges Fachmodul." },
      { question: "Prüft die Software, ob mein Unternehmen unter NIS2 fällt?", answer: "Nein. Eine rechtliche Betroffenheitsprüfung gehört nicht zum hier beschriebenen Produktumfang. Lassen Sie die Anwendbarkeit und die nationalen Vorgaben fachlich einordnen. In der Produktdemo klären wir anschließend, welcher verfügbare Softwareumfang Ihre dokumentierten Arbeitsabläufe unterstützt." },
      { question: "Wie unterscheiden sich ISO 27001 und NIS2?", answer: "ISO/IEC 27001 ist eine Norm für ein Informationssicherheitsmanagementsystem. NIS2 ist eine EU-Richtlinie mit rechtlichen Anforderungen an Cybersicherheit, die national umgesetzt wird. Arbeitsunterlagen können verwandte Themen behandeln; eine ISO-Zertifizierung belegt deshalb nicht automatisch die vollständige Erfüllung aller anwendbaren NIS2-Pflichten." },
      { question: "Kann ich Sicherheitsmaßnahmen mit Verantwortlichen und Fristen pflegen?", answer: "Ja, Risiken und Maßnahmen mit Verantwortlichen, Fristen und Status gehören zum beschriebenen AuthenticTrust-Arbeitsweg. Welche ausgewählten NIS2-Anforderungen und Funktionen für Ihren Einsatz verfügbar sind, klären wir vorab. Die fachliche Beurteilung der Maßnahme bleibt bei Ihrem Team." },
      { question: "Übermittelt AuthenticTrust Vorfallmeldungen an Behörden?", answer: "Ein behördliches Meldeportal oder eine automatische Übermittlung von NIS2-Vorfallmeldungen ist für diesen Website-Umfang nicht zugesagt. Die Produktseite beschreibt die interne Organisation ausgewählter Anforderungen und Maßnahmen. Meldepflichten und geeignete Meldewege müssen gesondert fachlich geklärt werden." },
      { question: "Macht die Nutzung der Software mein Unternehmen NIS2-konform?", answer: "Nein. Software allein setzt keine Sicherheitsmaßnahmen um und trifft keine verbindliche rechtliche Bewertung. AuthenticTrust unterstützt einen begrenzten organisatorischen Arbeitsweg. Ihr Unternehmen und seine zuständigen Fachpersonen prüfen Pflichten, tatsächliche Umsetzung und die erforderlichen Nachweise." },
    ],
    closing: { title: "Welche Sicherheitsaufgaben möchten Sie gemeinsam organisieren?", text: "Wir zeigen Ihnen den Arbeitsweg an ausgewählten Anforderungen und klären die verfügbaren Funktionen. Bringen Sie Ihre bereits fachlich eingeordneten Anforderungen mit in die Demo." },
  },
  soc2: {
    title: "SOC 2-Software: ausgewählte Kriterien vorbereiten",
    description: "Unterlagen für ausgewählte SOC-2-Kriterien mit AuthenticTrust strukturieren: Kontrollen, Nachweise und offene Aufgaben verbinden. Softwareumfang in der Demo klären.",
    heading: "Ausgewählte SOC-2-Kriterien.",
    emphasis: "Nachweise im Blick.",
    lead: "Für Technologie- und Dienstleistungsteams: Verbinden Sie Unterlagen zu ausgewählten Kontrollen mit Nachweisen, verantwortlichen Personen und den nächsten Aufgaben.",
    problem: {
      title: "Eine Kontrolle ist beschrieben. Liegen die passenden Belege bereit?",
      text: "Bei der Vorbereitung einer SOC-2-Prüfung müssen Fachverantwortliche Unterlagen und Belege zusammenführen. Eine Beschreibung allein beantwortet noch nicht, welcher Nachweis vorhanden oder welcher Punkt offen ist. AuthenticTrust hilft, diese Zusammenarbeit für ausgewählte Kriterien nachvollziehbar zu organisieren.",
    },
    example: {
      title: "Beispiel: Unterlagen zu einer Zugriffskontrolle zusammentragen",
      text: "Ihr Team ordnet einer ausgewählten Kontrolle eine interne Verfahrensbeschreibung zu. Einen vorhandenen Prüfbeleg pflegt es als PDF-Nachweis mit Gültigkeit. Ist eine ergänzende Prüfung nötig, bleibt sie als Maßnahme offen. Ob die Unterlagen für den geplanten Prüfungsumfang geeignet sind, beurteilen Ihre Fachpersonen gemeinsam mit der prüfenden Stelle.",
      roles: "Die Kontrollverantwortlichen pflegen Unterlagen, das koordinierende Team hält offene Punkte nach und die externe Prüfstelle bewertet den vereinbarten Prüfungsumfang.",
    },
    steps: [
      { title: "Kriterien und Prüfungsumfang abstimmen", text: "Klären Sie mit Ihren Fachpersonen und der prüfenden Stelle, welche Kriterien und welcher Umfang relevant sind. Im Produkt besprechen wir den verfügbaren Ausschnitt ausgewählter Anforderungen." },
      { title: "Kontrollen mit Belegen verbinden", text: "Ordnen Sie eigene Dokumente und vorhandene PDF-Nachweise den ausgewählten Anforderungen zu. Behalten Sie Zuständigkeit und Gültigkeit der zugeordneten Unterlagen im Blick." },
      { title: "Fehlende Unterlagen als Aufgaben nachhalten", text: "Benennen Sie die noch offenen Schritte mit Verantwortlichen und Fristen. Die Software dokumentiert den Bearbeitungsstand; sie testet Kontrollen nicht automatisch und erstellt keinen SOC-2-Prüfbericht." },
    ],
    definition: "SOC 2 ist ein Prüf- und Berichtsrahmen für Kontrollen bei Dienstleistungsunternehmen. Unabhängige qualifizierte Prüfer beurteilen einen vereinbarten Umfang anhand von Kriterien. Das Ergebnis ist ein Prüfbericht; eine Software stellt diesen Bericht nicht selbst aus.",
    scope: "Für SOC 2 sind in AuthenticTrust ausgewählte Anforderungen beschrieben, kein vollständiges eigenständiges SOC-2-Fachmodul. Automatisierte Kontrolltests, automatische Belegsammlung aus Drittsystemen oder ein erstellter Prüfbericht werden nicht zugesagt. Verfügbare Kriterien und Funktionen werden vor einem Einsatz geklärt.",
    source: { label: "SOC-Prüfungen und Berichte bei AICPA & CIMA", href: "https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services" },
    media: {
      file: "authentictrust-documents-evidence-1600x1000.jpg",
      alt: "Allgemeine AuthenticTrust-Dokumentenansicht mit Nachweisen und Zuständigkeiten",
      caption: "Allgemeine Produktansicht mit fiktiven Beispieldaten. Sie zeigt weder einen SOC-2-Prüfbericht noch ein vollständiges SOC-2-Fachmodul.",
    },
    faqs: [
      { question: "Wie unterstützt AuthenticTrust die SOC-2-Vorbereitung?", answer: "Ihr Team kann Unterlagen zu ausgewählten Anforderungen mit Dokumenten, PDF-Nachweisen und offenen Maßnahmen verbinden. AuthenticTrust hilft dabei, Zuständigkeiten und Bearbeitungsstand zu organisieren. Für SOC 2 sind ausgewählte Anforderungen beschrieben, kein vollständiges eigenständiges Fachmodul." },
      { question: "Ist SOC 2 eine ISO-Norm oder ein Zertifikat?", answer: "SOC 2 ist ein Prüf- und Berichtsrahmen aus dem AICPA-Umfeld für Kontrollen bei Dienstleistungsunternehmen. Das Ergebnis einer entsprechenden unabhängigen Prüfung ist ein Bericht. AuthenticTrust stellt weder einen solchen Bericht noch ein SOC-2-Zertifikat aus." },
      { question: "Was sollte ich für eine SOC-2-Software-Demo vorbereiten?", answer: "Nennen Sie Ihren geplanten Prüfungsumfang, vorhandene Kontrollbeschreibungen, Unterlagen und beteiligte Rollen. Wir zeigen den Dokument-, Nachweis- und Maßnahmenablauf und klären, welche ausgewählten Anforderungen und Funktionen für Ihren Einsatz verfügbar sind. Die Eignung der Nachweise für die externe Prüfung beurteilen Ihre Fachpersonen gemeinsam mit der prüfenden Stelle." },
      { question: "Sammelt AuthenticTrust SOC-2-Nachweise automatisch aus anderen Systemen?", answer: "Eine automatische Belegsammlung aus Drittsystemen ist für diesen Produktumfang nicht zugesagt. Beschrieben ist die Zuordnung vorhandener PDF-Nachweise und eigener Dokumente zu Anforderungen. Sichtbare Integrationssymbole in einer Demo sind kein Beleg für produktive Anbindungen." },
      { question: "Welche SOC-2-Kriterien sind verfügbar?", answer: "Der dokumentierte Produktumfang enthält ausgewählte umschriebene Anforderungen. Die aktuell verfügbaren Kriterien und Funktionen werden vor dem Einsatz geklärt. Die Website verspricht keine vollständige Kriterienabdeckung und keine automatische Übernahme jeder Änderung des Prüfrahmens." },
      { question: "Wer beurteilt die Eignung der Nachweise?", answer: "Ihre Kontrollverantwortlichen prüfen die Inhalte und Vollständigkeit ihrer Unterlagen. Die unabhängige Prüfstelle bewertet die Nachweise im vereinbarten Prüfungsumfang. Ein gespeicherter Beleg oder ein Bearbeitungsstatus in der Software ersetzt diese fachliche Prüfung nicht." },
    ],
    closing: { title: "Wie organisieren Sie die Unterlagen Ihrer Kontrollen?", text: "Wir zeigen Ihnen, wie Dokumente, Nachweise und offene Aufgaben zusammenhängen. Gemeinsam grenzen wir die verfügbaren ausgewählten Anforderungen für Ihren Einsatz ab." },
  },
  dsgvo: {
    title: "DSGVO-Software: ausgewählte Anforderungen organisieren",
    description: "Ausgewählte DSGVO-Anforderungen mit AuthenticTrust bearbeiten: Dokumente, Nachweise und Aufgaben nachvollziehbar zuordnen. Den passenden Umfang in der Demo klären.",
    heading: "Ausgewählte DSGVO-Anforderungen",
    emphasis: "nachvollziehbar bearbeiten.",
    lead: "Für Datenschutz- und Organisationsverantwortliche: Führen Sie Unterlagen und offene Aufgaben zu ausgewählten Datenschutzanforderungen zusammen – mit klaren Zuständigkeiten.",
    problem: {
      title: "Zu einer Datenschutzaufgabe fehlt der aktuelle Stand?",
      text: "Eine Richtlinie ist überarbeitet, eine ergänzende Unterlage fehlt und die zuständige Person muss erst gesucht werden. AuthenticTrust unterstützt die gemeinsame Dokumentation ausgewählter Datenschutzanforderungen. So stehen die zugehörigen Dokumente, Nachweise und Aufgaben in einem Zusammenhang.",
    },
    example: {
      title: "Beispiel: Eine interne Datenschutzrichtlinie aktualisieren",
      text: "Ihr Team überarbeitet eine interne Richtlinie und weist die fachliche Freigabe einer zuständigen Person zu. Ergänzende PDF-Unterlagen werden den ausgewählten Anforderungen zugeordnet. Noch offene Anpassungen bleiben als Maßnahmen mit Verantwortung und Frist sichtbar. Datenschutzfachpersonen beurteilen Inhalt und rechtliche Eignung.",
      roles: "Prozessverantwortliche liefern Unterlagen, Datenschutzfachpersonen prüfen die Inhalte und die zuständigen Personen entscheiden über die erforderlichen Änderungen.",
    },
    steps: [
      { title: "Ausgewählte Anforderungen fachlich einordnen", text: "Klären Sie mit Ihren Datenschutzverantwortlichen, welche Vorgaben und Unterlagen für den betrachteten Arbeitsablauf relevant sind. Wir gleichen dies mit dem verfügbaren Ausschnitt im Produkt ab." },
      { title: "Dokumente und Nachweise zusammenführen", text: "Pflegen Sie eigene Dokumente mit Version und fachlicher Freigabe. Ordnen Sie ergänzende PDF-Nachweise mit Gültigkeit zu, ohne daraus eine vollständige rechtliche Erfüllung abzuleiten." },
      { title: "Änderungen und offene Aufgaben verfolgen", text: "Halten Sie benötigte Anpassungen mit zuständiger Person, Frist und Bearbeitungsstand fest. Die fachliche Bewertung und die praktische Umsetzung bleiben bei Ihrer Organisation." },
    ],
    definition: "Die Datenschutz-Grundverordnung, kurz DSGVO, ist eine EU-Verordnung zum Schutz personenbezogener Daten. Personenbezogen sind Informationen, die sich auf bestimmte oder bestimmbare Menschen beziehen. Dokumentation kann die Arbeit unterstützen; entscheidend ist auch, wie Daten im Unternehmen tatsächlich verarbeitet werden.",
    scope: "AuthenticTrust beschreibt ausgewählte DSGVO-Anforderungen, kein vollständiges eigenständiges Datenschutz-Fachmodul. Ein Verzeichnis von Verarbeitungstätigkeiten, eine Datenschutz-Folgenabschätzung oder ein Portal für Betroffenenanfragen sind damit nicht zugesagt. Auch Cookie-Einwilligungen verwaltet dieser Produktumfang nicht. Den passenden Einsatz klären wir vorab mit Ihnen.",
    source: { label: "DSGVO und EU-Datenschutzrecht bei der EU-Kommission", href: "https://commission.europa.eu/law/law-topic/data-protection/legal-framework-eu-data-protection_en" },
    media: {
      file: "authentictrust-documents-evidence-1600x1000.jpg",
      alt: "Allgemeine AuthenticTrust-Dokumentenansicht für Unterlagen, Freigaben und Nachweise",
      caption: "Allgemeiner Produkteinblick mit fiktiven Beispieldaten. Die Ansicht ist kein vollständiges Datenschutzmanagement und enthält keine echten personenbezogenen Kundendaten.",
    },
    faqs: [
      { question: "Was unterstützt AuthenticTrust bei DSGVO-Anforderungen?", answer: "AuthenticTrust verbindet ausgewählte Datenschutzanforderungen mit Dokumenten, PDF-Nachweisen und Maßnahmen. Ihr Team kann Zuständigkeiten und offene Schritte nachvollziehen. Das ist ein begrenzter organisatorischer Arbeitsweg, kein vollständiges eigenständiges Datenschutz-Fachmodul." },
      { question: "Ist AuthenticTrust eine vollständige Datenschutzmanagement-Software?", answer: "Für den hier beschriebenen Umfang wird kein vollständiges Datenschutzmanagement zugesagt. Der verfügbare Ausschnitt umfasst ausgewählte Anforderungen und den allgemeinen Dokument-, Nachweis- und Maßnahmenablauf. Welche Funktionen zu Ihrem konkreten Einsatz passen, klären wir vorab." },
      { question: "Sind VVT, DSFA und Betroffenenanfragen enthalten?", answer: "Ein VVT ist ein Verzeichnis von Verarbeitungstätigkeiten; eine DSFA ist eine Datenschutz-Folgenabschätzung. Eigenständige Module dafür sowie ein Portal für Anfragen betroffener Personen sind durch die beschriebenen ausgewählten Anforderungen nicht zugesagt. Planen Sie diese Aufgaben gesondert mit Ihren Datenschutzfachpersonen." },
      { question: "Kann ich eine interne Datenschutzrichtlinie mit Freigabe bearbeiten?", answer: "Intern erstellte Dokumente können mit Versionen, zuständiger Person und fachlicher Freigabe bearbeitet werden. Eine interne Richtlinie ist ein Beispiel für diesen allgemeinen Dokumentablauf. Die rechtliche Prüfung des Inhalts bleibt bei den zuständigen Fachpersonen; PDF-Nachweise durchlaufen einen getrennten Ablauf." },
      { question: "Ersetzt AuthenticTrust einen Cookie-Banner oder eine Einwilligungsplattform?", answer: "Nein. Die Produktseite beschreibt die interne Bearbeitung ausgewählter Anforderungen, Dokumente und Maßnahmen. Sie sagt keine Erfassung oder Verwaltung der Einwilligungen Ihrer Websitebesucher zu. Eine hierfür benötigte Einwilligungslösung ist gesondert zu betrachten." },
      { question: "Garantiert die Software DSGVO-Konformität?", answer: "Nein. Eine Software allein kann die tatsächlichen Datenverarbeitungen Ihres Unternehmens nicht rechtsverbindlich beurteilen. Die Organisation, Umsetzung und Prüfung der Datenschutzpflichten bleiben bei Ihrem Unternehmen und den zuständigen Fachpersonen. AuthenticTrust ersetzt keine Rechtsberatung oder Datenschutzbeauftragten." },
    ],
    closing: { title: "Welche Datenschutzunterlagen möchten Sie besser organisieren?", text: "Wir zeigen den beschriebenen Dokument- und Maßnahmenablauf. Gemeinsam klären wir, ob die verfügbaren ausgewählten Anforderungen zu Ihrer Arbeitsweise passen." },
  },
};

export function getStandardPage(id: StandardPageId) {
  const standard = authenticTrustStandards.find((item) => item.id === id);
  if (!standard) throw new Error(`Missing standard configuration: ${id}`);
  return { ...standardPages[id], standard };
}
