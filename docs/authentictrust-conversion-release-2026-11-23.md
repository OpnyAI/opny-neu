# AuthenticTrust: klare Produkt- und Demo-Ausrichtung · 23.11.2026

## Product-Owner-Brief und Entscheidung vor Umsetzung

Zielgruppe: Geschäftsführung und Verantwortliche für Informationssicherheit, Qualität und Compliance in Unternehmen mit verteilten Dokumenten, Nachweisen und Freigaben. TISAX ist der konkrete Einstieg; die branchenoffene Produktpositionierung bleibt erhalten.

Nutzerproblem: Dokumente liegen in mehreren Ablagen, aktuelle Fassungen und Freigaben sind schwer zu erkennen, Nachweise und offene Aufgaben müssen vor Prüfungen zusammengetragen werden.

Gewünschte Entscheidung: AuthenticTrust-Demo anfragen und den passenden Umfang für die eigene Ausgangslage klären.

Beauftragte Fachprüfungen: UI/UX, Frontend/Media und SEO/AEO/LLMO, jeweils als eigenständige lesende Prüfung vor Umsetzung. Empfehlungen vom Product Owner priorisiert: ein primärer Demo-CTA, konkrete Nutzensprache, echte dokumentiert freigegebene Demoansichten, erklärtes TISAX, eindeutige Abgrenzung von Opny und NodeX. NodeX-Kundenstimmen erscheinen nicht als AuthenticTrust-Beleg.

Referenz: https://www.andreasbaulig.de/ am 23.11.2026 geprüft. Übernommen wird das Strukturprinzip Zielgruppe → Nutzen → visuelle Erklärung und Vorteile → Problem/Lösung → Ablauf → FAQ → Anfrage. Keine Übernahme von Text, Bildern, Bewertungen oder Erfolgsversprechen.

## Suchintention und inhaltliche Grenzen

Startseite: TISAX-Dokumente und Nachweise zentral verwalten; problemorientierter Einstieg und Demo. Produktseite: Funktionsumfang und Grenzen von AuthenticTrust; keine vollständige Duplizierung der Startseite. Bestehende Lösungs-, NodeX- und Branchenseiten bleiben als ergänzende Einstiege erreichbar.

Beleggrundlage: docs/claims-evidence-register.md und docs/authentictrust-release-2026-11-16.md. Dokumentversionierung, Freigaben, zugeordnete Nachweise und Maßnahmen sind dokumentiert. TISAX ist abgebildet; weitere ISO-Managementsystemstandards werden schrittweise ergänzt. Keine pauschale Einsparung, automatische Konformität, Zertifizierung, unbestätigte Integration oder AuthenticTrust-Kundenstimme. Produktansichten mit fiktiven Beispieldaten bleiben sichtbar gekennzeichnet. Die Demo-Anfrage wird im Rahmen des aktuellen Auftrags zur Veröffentlichung freigegeben; Funktionsaussagen bleiben innerhalb der vorhandenen dokumentierten Freigaben.

SEO/AEO/LLMO: serverseitig lesbare Texte, eindeutige Definition, natürliche Begriffe, interne Links, Canonicals, aktuelle Metadaten und Produktbilder, deckungsgleiches FAQ-Markup, bestehende Software-Entität, Sitemap und synchronisierte llms.txt. Keine Zusage für Rankings, Indexierung oder KI-Zitate. Google-Primärquelle: https://developers.google.com/search/docs/appearance/ai-features .

## Umsetzungs- und Prüfstand

Product-Owner-Umsetzungsgate vor Build: Alle drei Fachprüfungen haben die Umsetzung für Build und anschließende visuelle Prüfung freigegeben. Die zwei UI-Empfehlungen (alltagssprachliches erstes Zielgruppenlabel und 14px Orientierungstext mobil) wurden übernommen. Claims bleiben innerhalb der dokumentierten Belege. Die zusätzliche React-Prüfung bestätigt Server-Rendering der Homepage, keine neuen Client-Abhängigkeiten, keine unnötige Datenabfrage, feste Bildmaße und nur ein priorisiertes Produktbild.

Erster Produktionsbuild und ESLint erfolgreich. Visuelle Fachabnahme der Desktop-, mobilen Hero- und Demoformular-Aufnahmen ohne Blocker. Browserprüfung deckt 320/390/768/1440px, Bildauslieferung, FAQ-Tastatur, Menü-Escape/Fokus und Formular-Vorauswahl ab; abschließende Durchlaufdaten folgen.

Zusätzlich wurde ein bestehender Anfragefehler geschlossen: Zu frühe Übermittlungen unter drei Sekunden meldeten zuvor Erfolg ohne Versand. Sie liefern nun 429 mit einem erkennbaren Wiederholhinweis. Die Formulareingaben bleiben erhalten. Drei fokussierte Route-Tests mit simuliertem E-Mailanbieter prüfen die frühe Ablehnung, den normalen Versandpfad mit Bestätigung und den Providerfehler. Frontend/Media-Fachprüfung hat die Korrektur vor erneutem Build freigegeben.

Der Kontakt-Header führt auf die aktuelle Anfrage, damit eine bestehende Produktvorauswahl erhalten bleibt. Kein echter E-Mailversand durch die Prüfung. Produktivvariablen für Versand sind laut Vercel-Metadaten vorhanden; tatsächliche Zustellung ist damit nicht belegt.

Die visuelle UI/UX-Fachprüfung hat zusätzlich einen bestehenden CSS-Fehler in der Formularfeld-Umrandung gefunden. Der ungültige rgba-Ausdruck wurde im Formular durch einen kontrastreichen sichtbaren Rahmen ersetzt; Hintergrund und Hover-Zustand sind ebenfalls klar erkennbar. Der Product Owner übernimmt diese gezielte Korrektur als Voraussetzung zur abschließenden visuellen Freigabe.

## Abschließende Abnahme vor Veröffentlichung

- Product Owner: Gate erfüllt, alle Fachprüfungen abgeschlossen; Veröffentlichung im bestehenden Vercel-Projekt autorisiert durch den Website-Verantwortlichen.
- UI/UX-Endabnahme: Startseite und korrigiertes Demoformular visuell freigegeben, keine offenen Blocker.
- Produktionsbuild und ESLint erfolgreich; drei Anfrage-Regressionstests erfolgreich (`node --test tests/contact-route.test.mjs`).
- Browser: 320, 390, 768, 1024 und 1440px ohne horizontalen Überlauf im Hauptinhalt; alle Bilder geladen. 200% Schriftgröße bei 390px einschließlich Header ohne Überlauf.
- Tastatur: FAQ öffnet per Enter; mobiles Menü schließt per Escape und gibt Fokus zurück. 13 interne Linkziele erfolgreich erreichbar.
- FAQ-JSON-LD stimmt mit den sichtbaren Antworten überein; Canonical korrekt. Demo-CTA, aktuelle und historische Interessen-Vorauswahl sowie allgemeiner NodeX-Kontakt erhalten.
- Simulierte Clientantworten für Erfolg und zu frühes Absenden funktionieren; Fehlerzustand bewahrt Eingaben. Kein echter E-Mailversand. Produktivvariablen sind vorhanden, tatsächlicher Postfacheingang bleibt ungetestet.
- Lokale QA-Artefakte: `docs/qa/authentictrust-20261123/` (bestehender Git-Ausschluss für Screenshots), Browserergebnis `browser-results.json`.

## Veröffentlichung

Der freigegebene Stand wird aus dem bestehenden Repository `OpnyAI/opny-neu` im Projekt `opny-neu` (`prj_qf1EMRUTNJqRZquQnP3yf1c2Edxq`, Team `team_UtjNWaK9236evD0ZEc8tA64R`) nach Production veröffentlicht. Deployment-ID und öffentliche Prüfung werden nach erfolgreichem Abschluss ergänzt.


### Öffentliche Nachprüfung und Cookie-Korrektur

Erstes Production-Deployment `dpl_2VuLfDLbLGkrAopVnEurKEaDHyWK` aus Commit `84d13e28832fbe1f41b4de095e2c9f93e6916ba9` ist READY und den Opny-Domains zugeordnet. Öffentliche Prüfung bestätigte Inhalte, Demo-Vorauswahl, Produktbilder, Sitemap, llms und den 308-Altweg. Sie fand zusätzlich einen bestehenden Hydration-Fehler bei gespeicherter Cookie-Auswahl und aktiviertem Analytics.

Ursache: Der Server begann mit `null`, der erste Browser-Render las dagegen direkt localStorage. Die Korrektur verwendet `useSyncExternalStore` mit identischem Server-/Hydration-Snapshot und beobachtet anschließende Consent-Änderungen. Tracking bleibt an Zustimmung gebunden. Vor erneutem Deployment wird lokal mit gesetzter, fiktiver öffentlicher Analytics-ID und simulierten Analytics-Anfragen geprüft.

Frontend/Media-Gate für die Cookie-Korrektur erteilt. Erneuter Produktionsbuild mit `NEXT_PUBLIC_GA_ID=G-OPNYQA` und ESLint erfolgreich. Browser prüfte neue Besucher, gespeicherte Ablehnung und gespeicherte Zustimmung einschließlich erneuter Ablehnung und Reload: keine Hydration-Fehler; nach Ablehnung keine Analytics-Anfragen. Analytics-Anfragen waren vollständig simuliert. Vollständige lokale Seitenprüfung mit aktivierter Analytics-Codevariante erneut erfolgreich (fünf Breiten, 200% Schrift, Bilder, 13 Linkziele, FAQ-Daten, Demo-Vorauswahl und simulierte Formularzustände).
