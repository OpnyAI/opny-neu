# Cookie-Auswahl: Texte und Gestaltung · 23. November 2026

## Product-Owner-Brief

Zielgruppe sind Besucher der öffentlichen Opny-Website. Sie sollen schnell verstehen, welche optionalen Dienste Daten erhalten und wofür. Die gewünschte Entscheidung ist eine bewusste, freiwillige Auswahl: zustimmen, ablehnen oder Statistik und Marketing getrennt auswählen. Ziel der Überarbeitung ist eine verständliche und vertrauenswürdige Darstellung; eine höhere Zustimmungsrate ist nicht gemessen oder garantiert.

Google Ads/YouTube bleiben auf erneuten Nutzerwunsch zurückgestellt. TikTok bleibt übersprungen. Es werden keine Kampagnen, Budgets oder Zahlungsdaten eingerichtet.

## Umsetzung und Fachprüfung

UI/UX, Frontend und die Inhaltsprüfung haben die Quellen vor Build/Browserprüfung geprüft. Der Product Owner priorisiert verständliche Zwecke, gleichwertige Entscheidungen, erhaltene frühere Auswahlen und zugängliche Bedienung. Die Empfehlungen wurden übernommen:

- Schwebende, nichtmodale Karte in Petrol und warmem Weiß statt durchgehender unterer Leiste; 960px Maximalbreite, mobile feste Abstände und intern scrollbar.
- Drei direkte Aktionen: Einstellungen, Ablehnen und Alle akzeptieren. Ablehnen und Akzeptieren haben gleiche Farben, Schrift, Breite und Höhe. Keine optionale Vorauswahl für neue Besucher.
- Statistik bleibt im Dialog unabhängig von Marketing wählbar. Neue Zweckbeschreibungen nennen Google Analytics, Meta und LinkedIn nur bei entsprechender Konfiguration. LinkedIn wird ausdrücklich als reine Besuchsmessung beschrieben.
- Kurzer Datenschutzüberblick mit direktem Einstellungsbutton. Details zu Empfängern, möglicher Verarbeitung in den USA, Widerruf und Betroffenenrechten bleiben erhalten.
- Fokusfalle, Escape/Abbrechen ohne Speichern, Fokusrückkehr auch nach Entfernen des Erstbanners, zugängliche Schalterbeschreibungen und reduzierte Animation berücksichtigt.
- Bei 320px/200% Schrift gefundener Überschriftenüberlauf und Headerüberlagerung behoben. Der Dialog heißt kurz „Cookie-Auswahl“. Banner z60, unter Menü und Einstellungen.

Die Einwilligung bleibt Version4 mit unveränderter Anbieterrevision. Eine reine Text-/Designänderung setzt bestehende Entscheidungen nicht zurück. Eine notwendige neue Marketingentscheidung bewahrt eine bereits erteilte oder verweigerte Statistikentscheidung. Tracking-IDs, Bibliotheksladung, Ereignisse und Empfänger wurden nicht verändert. Produktinhalte, Metadaten, strukturierte Daten und interne Ziele bleiben bestehen; hinzugekommen ist ein direkter Einstellungszugang.

## Prüfbasis

Die Gestaltung orientiert sich an den Behördenhinweisen zu freiwilliger Auswahl und gleich einfacher Ablehnung. Es wird keine juristische Vollständigkeitsgarantie behauptet.

- [EDPB Cookie Banner Taskforce](https://www.edpb.europa.eu/system/files/documents/2023-01/edpb_20230118_report_cookie_banner_taskforce_en.pdf)
- [LfDI Baden-Württemberg: Cookies und Tracking](https://www.baden-wuerttemberg.datenschutz.de/faq-zu-cookies-und-tracking-2/)

## Prüfprotokoll

Produktionsbuild, TypeScript und ESLint erfolgreich. Die 29 vorhandenen Tests zu Kontaktannahme und Tracking/Consent sind bestanden. Die Prüfung aller 15 öffentlichen Routen auf 390/1440px sowie zusätzlicher Breiten und 200% Text ist bestanden: keine Inhaltsüberläufe, Metadaten/Canonicals vorhanden, FAQ-Daten passen zum sichtbaren Inhalt, Medien/Navigation intakt.

Die elf gezielten Browser-Szenarien des finalen Builds sind bestanden: alle vier Kombinationen von Statistik/Marketing, direkte Ablehnung/Zustimmung, Reopen/Reload, gespeicherte Auswahlen, Fokus nach Speichern/Escape, Tab-/Shift-Tab-Falle und Abbrechen ohne Speicherung. Die Oberfläche ist bei 1440, 390 und 320px sowie 320×740 und 667×375 mit 200% Text geprüft. Beide Entscheidungsbuttons sind gleich groß und gleich stark gestaltet; alle Aktionen bleiben durch internes Scrollen erreichbar. Ein zusätzlicher Ebenentest prüft, dass der Header die Karte nicht verdeckt.

Neun weitere Consent-/Tracking-Browser-Szenarien sind bestanden: ohne Zustimmung/bei Statistik-only kein Marketing, eigene LinkedIn-ID mit origin-only-Referer, keine Zusatz-SDKs, v3-Migration mit beiden früheren Statistikentscheidungen und erneuter Marketingwahl, erhaltene Ablehnung, zwei Tabs, Widerruf und Reload. Die Trackinglogik selbst ist unverändert.

Die UI/UX-Fachprüfung hat die finalen Screenshots nach dem letzten Build erneut angesehen und zur Veröffentlichung freigegeben. Der Product Owner übernimmt die Freigabe für diese Text-/Designänderung nach bestandenen Prüfungen. Eine höhere Zustimmungsquote oder eine vollständige Werbezielgruppe wird nicht behauptet. Screenshots und Browser-Ergebnisdateien werden lokal unter docs/qa/consent-design-20261123 und docs/qa/consent-redesign-20261123 gespeichert (Git-ignoriert). Prüfungen fangen Marketing-Requests ab; sie erzeugen keine echten Anfragen oder Werbekampagnen.

## Veröffentlichung und Live-Nachprüfung

Freigegebener Quellstand c0f9cfbac6712b8c49f7bb1de03004fff28810ee wurde als Produktionsdeployment dpl_2aCSw6sxmNUEQHeBzRARXLTaNVFL veröffentlicht: https://opny-d4aivfbnn-opny-ais-projects.vercel.app. Vercel READY; Aliase www.opny.ai und opny.ai aktiv, aliasError=null; githubCommitSha entspricht dem freigegebenen Commit.

Auf https://www.opny.ai sind alle elf Design-/Bedienungsszenarien und neun Consent-/Tracking-Szenarien erneut bestanden. Auch die vollständige Prüfung aller 15 öffentlichen Seiten einschließlich Metadaten, sichtbarer FAQ/strukturierter Daten, Medien und zusätzlicher Bildschirmbreiten ist live bestanden. Keine beobachteten JavaScriptfehler. Live-Screenshots für normale Mobilansicht und 320px/200%-Dialog zusätzlich visuell kontrolliert. Vercel-Runtimeabfrage für dieses Deployment seit zehn Minuten ohne error-/fatal-Einträge.

Bestehende Besucher werden wegen der Gestaltung nicht erneut gefragt; der dauerhafte Link „Cookie-Einstellungen“ öffnet die neue Auswahl. Es wurden keine Tracking-Kennungen oder Anbieter aktiviert und keine Anzeige, Zahlung oder echte Testanfrage ausgelöst. Product-Owner-Abschlussfreigabe für die veröffentlichte Cookie-/Datenschutzüberarbeitung erteilt.
