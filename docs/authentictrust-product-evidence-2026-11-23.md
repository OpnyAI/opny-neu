# AuthenticTrust: geprüfter Produktumfang für die Website

Stand: 23. November 2026.

## Quellen und Methode

- Vorhandene First-Party-Funktionsfreigabe in `docs/claims-evidence-register.md` und Produktbrief vom30.07.2026, Umbenennung am16.11.2026.
- AuthenticTrust-Benutzerhandbuch, Version72 vom03.11.2026, 336 Seiten, lokal im AuthenticTrust-Vertrieb. Dateiablagetermin16.11 ist nicht das Versionsdatum.
- Lokale Demo `TrustArch_Demo_v162.4.html`, gezielt geprüfte Oberflächen/Interaktionen. Sie ist eine gebündelte React-Demo ohne fetch-Aufrufe, kein Nachweis des produktiven Backends.
- Öffentlicher Einstieg https://authentictrust.app/dashboard: leitet zur Anmeldung; Zugang ist einladungsbasiert. Keine Konto- oder Kundendaten wurden verändert. Die bestehende Safari-Sitzung wurde nicht übernommen.

## Für die aktuelle Webseitenfassung freigegebene Kernaussagen

Der Product Owner gibt die folgenden begrenzten Beschreibungen des dokumentierten Arbeitswegs frei. Sie vertiefen die bereits bestätigten Kernfunktionen; sie sind keine technische Abnahme von Backend, Datensicherheit oder Integrationen.

| Aussage | Beleg | Grenze |
| --- | --- | --- |
| AuthenticTrust verbindet Anforderungen, Dokumente, Nachweise, Bewertungen, Risiken und Maßnahmen. | Produktbrief und Handbuch S127ff.,171–179; zugehörige Demooberflächen | Keine vollständige Normabdeckung oder Zertifizierungszusage |
| Intern erstellte Dokumente verwenden Versionen, zuständige Personen und fachliche Freigaben. | Handbuch S98–106; Demo zeigt lokale Freigabeaktion | Kein universeller Freigabeablauf für alle Uploads |
| PDF-Nachweise werden mit Anforderungen/Gültigkeit gepflegt. | Handbuch S98–106 | PDF-Nachweise haben keinen eigenen Dokumentfreigabeworkflow; Ersetzen erhält in dieser Ablage nicht automatisch sämtliche Vorgänger |
| Bewertungen/Erfüllungsgrade sind regelbasiert; Menschen prüfen und entscheiden. | Handbuch S70–72,171–179 | Keine autonome fachliche KI-Bewertung oder Zertifizierung |
| KI kann bei Textformulierungen unterstützen. | Handbuch S70–72 | Keine Behauptung einer Echtzeitanalyse aller Dokumente; damalige Inhaltsvorschläge waren teils stichwortbasiert |
| Risiken und Maßnahmen werden mit Verantwortlichen/Fristen/Status verbunden. | Produktbrief, Handbuch S127ff.; lokale Demoaktion Create action | Kein Nachweis einer produktiven Mehrbenutzer-Synchronisierung aus Demo |

## Bewusst nicht zu öffentlichen Funktionszusagen erweitert

Handbuch S208–209 verschiebt Evidence automation, Privacy, Product security, AI governance und Vendor risk in spätere Releases. Handbuch S304–305 beschreibt gespeicherte Webhook-Abonnements ohne Versand und nicht verfügbare API-Token/API-Dokumentation. Sichtbare Integrationssymbole der Demo belegen daher keine produktiven Anbindungen. Auditportal, Hosting/Sicherheitszusagen, Exporte und Benachrichtigungszustellung wurden nicht technisch abgenommen.

Die Vertriebspräsentation trägt noch die Marke Trustarch und das Datum28.10.2026. Aussagen wie alle Normen, Echtzeitprüfung sämtlicher Unterlagen, Integrationen oder pauschale Zeitersparnis werden nicht als Nachweise übernommen. Konditionen werden ohne veröffentlichte Zahlen im Gespräch geklärt.

Der bisher freigegebene Standardstatus bleibt erhalten: TISAX abgebildet, ISO-Erweiterung schrittweise; verfügbare Kataloge und Versionen vor Einsatz klären. Bilder bleiben dokumentiert freigegebene Beispiele mit fiktiven Daten. Sie belegen keine Kundennutzung und werden als Beispieldaten gekennzeichnet.
