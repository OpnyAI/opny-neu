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
    question: "Welche Standards sind verfügbar?",
    answer:
      "AuthenticTrust ist für mehrere Managementthemen angelegt. TISAX ist abgebildet; weitere ISO-Managementsystemstandards werden schrittweise ergänzt. Die aktuell verfügbaren Kataloge, Versionen und benötigten Themenbereiche klären wir vor einem Einsatz. Die Beispiele in den Produktbildern sind keine Zusage vollständiger Normabdeckung.",
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
