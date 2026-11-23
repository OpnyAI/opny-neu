export const authenticTrustDefinition =
  "AuthenticTrust ist die Software von Opny für Managementsysteme und Compliance – also für die nachvollziehbare Einhaltung von Vorgaben. Sie verbindet Anforderungen, Dokumente, Nachweise, Bewertungen und Maßnahmen in einem gemeinsamen Arbeitsraum.";

export const authenticTrustFaqs = [
  {
    question: "Was ist AuthenticTrust?",
    answer: authenticTrustDefinition,
  },
  {
    question: "Für wen ist AuthenticTrust gedacht?",
    answer:
      "AuthenticTrust richtet sich an Teams für Informationssicherheit, Qualität und Unternehmensführung in Industrie, Technologie und Dienstleistungen. Besonders hilfreich ist die gemeinsame Übersicht, wenn mehrere Personen Anforderungen bearbeiten, Dokumente pflegen, Nachweise zuordnen oder Prüfungen vorbereiten.",
  },
  {
    question: "Wie unterscheiden sich Dokumente und PDF-Nachweise?",
    answer:
      "Intern erstellte Dokumente werden mit Versionen, Zuständigkeiten und fachlicher Freigabe bearbeitet. PDF-Nachweise werden Anforderungen zugeordnet und mit Angaben zur Gültigkeit gepflegt. Diese hochgeladenen Nachweise durchlaufen nicht denselben Freigabeablauf wie intern erstellte Dokumente. Die benötigten Abläufe klären wir für Ihren Einsatz.",
  },
  {
    question: "Wie unterstützt AuthenticTrust bei TISAX?",
    answer:
      "TISAX ist ein Prüf- und Austauschmechanismus für Informationssicherheit, insbesondere in der Automobilindustrie. AuthenticTrust hilft, Anforderungen, Dokumente, Nachweise und offene Maßnahmen für die Vorbereitung zusammenzuführen. TISAX ist abgebildet; welche Kataloge und Versionen für Ihren Einsatz passen, wird vorab geklärt. Die eigentliche Prüfentscheidung trifft die zuständige Prüfstelle.",
  },
  {
    question: "Welche Normen und Vorgaben bildet AuthenticTrust ab?",
    answer:
      "AuthenticTrust strukturiert Anforderungen aus TISAX, ISO/IEC 27001 für Informationssicherheit und ISO 9001 für Qualitätsmanagement. Für NIS2, SOC 2 und DSGVO sind ausgewählte Anforderungen beschrieben; diese sind keine vollständigen eigenständigen Fachmodule. Welche Kataloge, Normausgaben und Funktionen für Ihren Einsatz verfügbar sind, klären wir vorab. Softwarebewertungen und Produktbeispiele sind keine Zertifizierungs- oder Konformitätszusage.",
  },
  {
    question: "Was macht die KI – und wer entscheidet?",
    answer:
      "Regelbasierte Bewertungen, KI-Textunterstützung und fachliche Entscheidungen sind getrennte Schritte. Regeln unterstützen die Einordnung des Bearbeitungsstands; KI kann bei der Formulierung von Texten helfen. Verantwortliche prüfen Ergebnisse, begründen Bewertungen und erteilen Freigaben. Die Software trifft keine eigenständige Zertifizierungsentscheidung und ersetzt keine verantwortlichen Fachpersonen.",
  },
  {
    question: "Garantiert AuthenticTrust ein bestandenes Audit?",
    answer:
      "Nein. AuthenticTrust unterstützt bei Struktur, Bearbeitung und Vorbereitung. Die Qualität Ihrer Umsetzung, fachliche Bewertungen und Prüfentscheidungen bleiben bei Ihrem Unternehmen und den zuständigen Prüfstellen. Auch rechtliche Beratung oder eine Zertifizierungsstelle ersetzt die Software nicht.",
  },
  {
    question: "Wie kann ich AuthenticTrust kennenlernen?",
    answer:
      "Fragen Sie eine persönliche Demo an. Wir zeigen den Zusammenhang von Anforderungen, Dokumenten, Nachweisen, Bewertungen und Maßnahmen und besprechen Ihre Standards und Arbeitsabläufe. Anschließend klären wir den passenden Umfang und die Konditionen. Die Anfrage ist keine Softwarebestellung.",
  },
];

export const authenticTrustHomeFaqs = authenticTrustFaqs.filter((_, index) =>
  [0, 1, 3, 4, 5, 7].includes(index),
);

export const authenticTrustStandards = [
  {
    name: "TISAX",
    type: "Prüf- und Austauschverfahren",
    topic: "Informationssicherheit in der Automobilindustrie",
    scope:
      "Anforderungen und Nachweise für die TISAX-Vorbereitung organisieren. Katalog und Prüfziele bestimmen den benötigten Umfang.",
    coverage: "Anforderungskatalog",
    href: "/tisax-software",
    linkLabel: "TISAX-Software kennenlernen",
  },
  {
    name: "ISO/IEC 27001",
    type: "Norm für Managementsysteme",
    topic: "Informationssicherheit",
    scope:
      "Anforderungen, Dokumente und Maßnahmen für ein Informationssicherheitsmanagementsystem zusammenführen.",
    coverage: "Anforderungskatalog",
  },
  {
    name: "ISO 9001",
    type: "Norm für Managementsysteme",
    topic: "Qualitätsmanagement",
    scope:
      "Vorgaben, Dokumente, Nachweise und Aufgaben für Ihre Qualitätsprozesse nachvollziehbar organisieren.",
    coverage: "Anforderungskatalog",
  },
  {
    name: "NIS2",
    type: "EU-Richtlinie zur Cybersicherheit",
    topic: "Sicherheitsmaßnahmen und Verantwortlichkeiten",
    scope:
      "Ausgewählte Anforderungen einordnen und mit Nachweisen und Maßnahmen verbinden.",
    coverage: "Ausgewählte Anforderungen",
  },
  {
    name: "SOC 2",
    type: "Prüf- und Berichtsrahmen",
    topic: "Kontrollen bei Dienstleistungsunternehmen",
    scope:
      "Ausgewählte Vertrauenskriterien mit zugehörigen Unterlagen und offenen Aufgaben strukturieren.",
    coverage: "Ausgewählte Anforderungen",
  },
  {
    name: "DSGVO",
    type: "EU-Datenschutzverordnung",
    topic: "Umgang mit personenbezogenen Daten",
    scope:
      "Ausgewählte Datenschutzanforderungen dokumentieren und relevante Nachweise zuordnen.",
    coverage: "Ausgewählte Anforderungen",
  },
];

export const authenticTrustStandardsNote =
  "Der Umfang unterscheidet sich je Regelwerk. Verfügbare Kataloge, Normausgaben und Funktionen klären wir für Ihren Einsatz. Eine Softwarebewertung ersetzt keine fachliche oder externe Prüfung.";
