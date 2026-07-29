# TrustArch-Demoanalyse

Analysierte Quelle: `TrustArch — AI-assisted compliance certification_v5.html`

Stand: 28. Juli 2026

## Einordnung

Die Datei ist eine rund 399 KB große, vollständig gebündelte React-Frontend-Demo. Sie enthält eine simulierte Anmeldung, 16 navigierbare App-Bereiche, Beispieldaten und lokale Interaktionen. Die Analyse belegt sichtbare Benutzeroberflächen und Demoabläufe, aber keinen produktiven Backend-Betrieb, keine realen Integrationen, keine Zertifizierung und keine Kundennutzung.

## In der Demo sichtbar

1. **Dashboard / Certification maturity**
   - Reifegrade für ISO 27001, TISAX AL2, ISO 9001, SOC 2 Type II, NIS2 und DSGVO
   - offene Feststellungen
   - automatisierte Kontrollen
   - Dokumentstatus
   - geschätzter Folgeaufwand

2. **Documents & evidence**
   - Dokumenttypen, Standardreferenzen, Eigentümer, Status und Aktualisierungsdatum
   - simulierte Freigabe und Upload-/Neuanlage-Schaltflächen

3. **Assets**
   - Asset-Register
   - Vertraulichkeit, Integrität, Verfügbarkeit und abgeleiteter Schutzbedarf
   - Verantwortliche, verknüpfte Risiken und Reviewstatus

4. **Compliance review**
   - Auswahl aus ISO 27001, TISAX AL2, ISO 9001, SOC 2, NIS2 und DSGVO
   - Auswahl von Kontrollbereichen
   - optional bezeichnetes Expertenwissen
   - simulierter KI-Review
   - Ergebnisansicht mit Lücken, Teilabdeckung, Dokumentbezug, Hinweisen und Maßnahmenaktionen

5. **Monitoring**
   - sichtbare Integrationskacheln für AWS, Microsoft Entra ID, GitHub, Google Workspace, Jira, Slack und Datadog
   - Kontrollen mit Framework-Zuordnung, Status und letztem Lauf
   - Filter nach Kontrollkategorie

6. **Risks**
   - Risikomatrix
   - Asset-bezogenes Risikoregister
   - Behandlung, Verantwortliche, Status und Verknüpfung zu Feststellungen

7. **Business continuity**
   - Business-Impact-Analyse
   - RTO, RPO, abhängige Assets und Status des Wiederanlaufplans
   - Krisenteam
   - Schaltfläche zur simulierten Erstellung eines Notfallplans

8. **Incidents**
   - Incident-Register
   - Schweregrad, Status und betroffene Assets
   - Fristen und Pflichten aus NIS2, DSGVO, BCM und ISO 27001
   - simulierte Erstellung von Behördenberichtsentwürfen

9. **Privacy & NIS2**
   - Betroffenenanfragen
   - Verzeichnis von Verarbeitungstätigkeiten
   - NIS2-Bereitschaft
   - technische und organisatorische Maßnahmen

10. **Whistleblowing**
    - Fallübersicht
    - Kanal, Eingangsdatum, Bestätigung, Rückmeldefrist, Bearbeitung und Status

11. **AI Act register**
    - KI-System, Anbieter, Rolle, Risikoklasse, zentrale Pflicht, Verantwortlicher und Status
    - Demo-Hinweis auf eine angebliche NodeX-Schatten-KI-Erkennung

12. **AI assistant**
    - sichtbare Arbeitsmodi Implement, Migrate, Audit und Expert
    - Beispielprompt für Dokumentationsunterstützung

13. **Actions**
    - Maßnahmen, verknüpfte Feststellung, Verantwortlicher, Aufwand, Frist und Status
    - sichtbarer Hinweis auf KI-vorgeschlagene Maßnahmen

14. **Reports**
    - Schaltflächen für Managementstatus, Management-Review und Auditbriefing
    - sichtbare Trust-Center-Demo

15. **Auditor portal**
    - zeitlich begrenzter, lesender Demo-Zugang
    - Nachweisanfragen, Status und bereitgestellte Dokumente
    - simulierte Aktivierung und Deaktivierung

16. **Users & security**
    - Benutzer, Rollen, MFA- und Kontostatus
    - Demoangaben zu Region, Isolation, Verschlüsselung und Monitoring

## Konzeptionell oder noch nicht als produktiv belegt

- produktiver Mehrmandantenbetrieb
- reale Integrationen mit den sichtbaren Drittsystemen
- tatsächliche KI-Analyse von Kundendokumenten
- zuverlässige automatische Kontrollausführung
- Berichtsexporte, PDF-Erstellung und Behördenvorlagen
- produktiver Auditor-Zugang und Trust Center
- NodeX-Integration und Schatten-KI-Erkennung
- Hostingregion, Mandantentrennung, Verschlüsselung und Sicherheitsmonitoring
- vollständige Rollen-, Rechte-, MFA- und SSO-Implementierung
- belastbare Normabdeckung, rechtliche Richtigkeit oder Zertifizierungsfähigkeit

## Vor externer Produktbehauptung zu bestätigen

- aktueller Entwicklungs- und Pilotstatus
- produktiv verfügbare Module
- technisch implementierte Integrationen
- Betriebs-, Hosting- und Sicherheitskonzept
- Rollen- und Berechtigungsmodell
- Datenverarbeitung und eingesetzte KI-Anbieter
- Nachweis der behaupteten Automatisierung
- Export-, Reporting- und Auditor-Funktionen
- unterstützte Standards und Versionen
- Marken-, Namens- und Beispieldatenfreigaben in der Demo

## Abgrenzung zu NodeX

**TrustArch** organisiert Anforderungen, Risiken, Dokumente, Nachweise, Feststellungen, Maßnahmen und Auditvorbereitung.

**NodeX** kontrolliert die tatsächliche KI-Nutzung: freigegebene Modelle und Workflows, Rollen, Richtlinien, Datenpfade, Nutzung und Kosten.

**Beratung und Schulung** verbinden beide Ebenen mit Verantwortung, Prozessen, Einführung und Kompetenz.
