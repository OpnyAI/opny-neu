# Opny: Analytics und Retargeting-Vorbereitung · 23.11.2026

## Product-Owner-Brief vor Umsetzung

Zielgruppe: Websitebesucher und das Opny-Team, das Besuche, Produktinteresse und erfolgreiche Anfragen nachvollziehen möchte. Nutzerziel: GA4 nach dem funktionalen Codavo-Vorbild einrichten und später Google Ads/YouTube sowie Meta/Facebook/Instagram zur Wiederansprache einsetzen. Keine Anzeigenkampagne oder Budgetänderung beauftragt.

Fachprüfungen Frontend/Tracking, UI/UX und SEO/Datenschutz-Semantik wurden vor Umsetzung beauftragt. Priorität: verlässliche einmalige Messung, nachvollziehbare getrennte Einwilligungen, keine Formularwerte/PII in Ereignissen und keine fremden Codavo-Kennungen.

## Verifizierter Ausgangsstand

Opny-Property properties/524086891, Webstream13588166206 für https://www.opny.ai, Mess-ID G-KVP1KD6SQ5. Über vorhandenes OpenSEO-Google-Konto verifiziert und mit Opny-Projekt verknüpft. Produktionsvariable NEXT_PUBLIC_GA_ID stimmt bereits; keine neue Property oder Mess-ID nötig. Zweite gleichnamige Property bleibt unverändert. Keine fremden Tokens/Passwörter benötigt.

Erweiterte Messung ist derzeit inklusive History-Seitenwechseln, Formularaktionen, ausgehenden Links und SiteSearch aktiv. Für die neue zentrale manuelle Messung sind automatische History-/Formularmessungen zu deaktivieren. Der vorhandene Code verwendet Array-Einträge statt der kanonischen gtag-Arguments-Einträge und hat im kontrollierten Live-Test trotz Zustimmung keine collect-Anfrage erzeugt. Der gezielte Kontrolltest mit kanonischer Queue wird getrennt dokumentiert.

Native Browsersteuerung startet nicht; Chrome erlaubt derzeit auch kein JavaScript über Apple Events. Nutzer wurde um Aktivierung des sichtbaren Browserzugriffs gebeten. OpenSEO erlaubt Lesen der Messkonfiguration, nicht deren Bearbeitung. Opny-Google-Ads-/Meta-Zuordnungen wurden angefragt. Bis echte Opny-IDs und Kontoverknüpfungen vorhanden sind, bleiben Werbetags inaktiv.

Codavo-Vorbild aus dessen Tracking-Dokumentation und Quellcode gelesen: Consenttrennung, feste Ereignisse, Lead erst nach bestätigtem Erfolg, keine Duplikate. Codavo-Konto-/Pixel-/GTM-IDs werden nicht übernommen; Codavo selbst wird nicht verändert.

## Umsetzung und Abnahmeplan

Basic Consent Mode: externe Tags erst nach passender Einwilligung. Alte accepted-Zustimmung bedeutet ausschließlich Statistik; niemals Marketing. Versionierte getrennte Einstellungen, dauerhaft erreichbare Auswahl, Default alle vier Google-Signale denied. Zentrale page_view-/Produkt-/CTA-/Formularmessung mit festen Enum-Parametern; URLs ohne Query/Hash, Referrer begrenzt, keine Namen, Unternehmen, E-Mail, Telefonnummer, Nachricht oder daraus erzeugte Hashes. generate_lead ausschließlich nach neuem eindeutigem Servermarker leadAccepted, nicht nach Honeypot-ok.

Codegate vor Build, dann isolierte Consent-/Mess-/API-Tests, Produktionsbuild, visuelle Desktop/Mobil-Abnahme und Live-Nachprüfung. Messung/Retargeting-Kontostatus werden am Ende ausdrücklich getrennt berichtet.

## Codegate und erste isolierte Prüfungen

UI/UX, Frontend und SEO/Tracking haben den aktiven GA4-Pfad für Build und Tests freigegeben. Dies ist ausdrücklich keine Produktivfreigabe bei weiterhin aktivem automatischem Enhanced Measurement.17 isolierte Tests bestanden:5 Kontakt-API-Fälle inklusive Honeypot/Bestätigungsfehler sowie12 Tracking-/Einwilligungsfälle. Meta-init wird zusätzlich bis zur tatsächlichen Scriptbereitschaft und erneut bestätigter Marketingwahl zurückgehalten. Werbe-IDs bleiben derzeit leer und Tags inaktiv.

## Browser- und Netzprüfung

Build erfolgreich, ESLint und17 Tests grün. Browserprüfung mit abgefangener Google-Bibliothek/Kontakt-API bestätigt initialen und SPA-Seitenaufruf genau einmal im eigenen Sender, feste CTA-/Formularereignisse, generate_lead ausschließlich bei leadAccepted, keinen Versand von Formularwerten als Ereignisparameter, tabübergreifenden Widerruf und mobile Bedienung. Zwei simulierte Formanfragen, kein echter E-Mailversand.

Test mit der originalen Google-Bibliothek erzeugt in der neuen Fassung einen page_view für G-KVP1KD6SQ5 mit bereinigter URL; collect wurde vor Zustellung abgefangen. Die bisherige Live-Fassung erzeugte im kontrollierten Test trotz Zustimmung keinen collect. Ursache nicht allein aus dieser Stichprobe ableiten.

Wichtiger echter Netzwerkbefund: Beim SPA-Wechsel zu AuthenticTrust erzeugt die unveränderte GA4-Streamkonfiguration neben dem manuellen page_view einen zusätzlichen automatischen page_view. Die Dopplung ist damit tatsächlich nachgewiesen. Vor Veröffentlichung der neuen Messung müssen automatische History-/Formular-/Outbound-/SiteSearch-Messungen in dieser Property deaktiviert und die neue Fassung erneut geprüft werden. Sonst würden auch automatische Ereignisse die eigene Parameterbegrenzung umgehen. Kein produktiver Trackingfreigabebericht und keine Behauptung bereits empfangener GA-Daten.

UI-Prüfung fand bei320px/200% einen inneren Überlauf der Schalterzeile. Kategoriezeilen können nun umbrechen; Labels und Switches bleiben innerhalb ihrer Karte. Erneute visuelle Abnahme folgt.

## Abschluss des unabhängig möglichen Teils

Die endgültige Testfassung besteht Build, ESLint und17 isolierte Tests. Browserfälle für Seitenwechsel, Formular-/Leadlogik, Datenbegrenzung, Zustimmung und tabübergreifenden Widerruf erneut grün; visuelle GA-only-Consent-Abnahme einschließlich320px/200% erteilt. QA-Protokolle/Screenshots liegen Git-ignoriert unter docs/qa/analytics-20261123/.

### Noch benötigter Zugriff / Angaben

1. Chrome: Ansicht → Entwickler → JavaScript von Apple Events erlauben. Der erneut geprüfte Zugriff ist weiterhin deaktiviert; native Browsersteuerung startet nicht. Es wurden keine Browser-Sicherheitsoptionen eigenständig geändert. Ein bestehender alternativer Remote-Debugging-Zugang ist nicht aktiv. OpenSEO-Messkonfiguration ist nur lesbar.
2. GA4-Property524086891 / Webstream13588166206: automatische erweiterte Messung deaktivieren, damit nur der eigene Ereignispfad zuständig ist; generate_lead als Schlüsselereignis einrichten und Datenempfang nach Veröffentlichung kontrollieren. Diese Kontoeinstellungen wurden noch nicht verändert.
3. Echte Opny-Google-Ads-Kundennummer/Google-Tag-ID und Opny-Meta-Pixel-/Datensatz-ID bzw. Zugriff auf die richtigen Werbekonten. Kennungen aus Codavo werden nicht wiederverwendet. In der Vorbereitung sind NEXT_PUBLIC_GOOGLE_ADS_ID und NEXT_PUBLIC_META_PIXEL_ID optional; aktuell fehlen beide und bleiben inaktiv. Vor Aktivierung der jeweiligen Anbieter sind Kontozuordnung, Einwilligung, tatsächliche Netzwerkdaten und Zielgruppenexport separat abzunehmen.

Die neue Messfassung wird vorläufig nur im lokalen Repository gesichert, ausdrücklich noch nicht als Produktion veröffentlicht. Grund ist die reproduzierbare automatische/manuelle Doppelzählung bei noch aktiver Kontoeinstellung. Die bestehende produktive Website bleibt erhalten. Die einzige bereits abgeschlossene externe Änderung ist die bestätigte Opny-GA4-Verknüpfung in OpenSEO. Es wurden keine Kampagnen, Budgets oder Retargeting-Zielgruppen angelegt und keine fremden Konten geändert.

Primärquellen: https://developers.google.com/tag-platform/security/guides/consent ; https://developers.google.com/analytics/devguides/collection/ga4/views ; https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead ; https://support.google.com/analytics/answer/6366371 ; https://support.google.com/analytics/answer/9313634 .

## Erneuter Vorabcheck nach weiterem Nutzerauftrag

Nutzer hat Korrektur aller offenen Punkte und einen Check vor Veröffentlichung ausdrücklich beauftragt. Aktueller Stand c7232c0:17 isolierte Tests und ESLint erneut bestanden. Vollständiger Browsercheck aller15 Website-Seiten ebenfalls erneut erfolgreich:30 Desktop-/Mobilansichten, zusätzliche320/768/1024px und200%-Schrift, Canonicals/FAQ/Anfragewege/Bilder konsistent und keine beobachteten JavaScriptfehler.

Opny-GA4-Konfiguration erneut über die Google-Admin-Leseschnittstelle geprüft: gleicher richtiger Stream, automatische erweiterte Messung einschließlich History/Form/Outbound/Suche weiterhin aktiv; generate_lead noch kein Schlüsselereignis. Keine Kontoeinstellung wurde bisher verändert.

Technischer Browserbefund präzisiert: Die native Browsersteuerung scheitert an einem als symbolischem Link registrierten schreibbaren Workspace. Apple-Events-JavaScript bleibt deaktiviert. Über native macOS-Fensteransicht kann das richtige Analytics-Fenster gelesen werden; macOS-Bedienungshilfen und Eventberechtigung sind vorhanden. Die aktive Oberfläche ist jedoch com.apple.loginwindow, die Chrome-Aktivierung bleibt deshalb gesperrt. Der Nutzer wurde gebeten, den Mac selbst zu entsperren und den Analytics-Tab offen zu lassen. Es werden weder Anmeldedaten angefordert noch Sperrbildschirm/Sicherheitsoptionen umgangen. Sobald die Oberfläche verfügbar ist, kann die vorhandene native Bedienung für die GA4-Korrektur genutzt werden.

Veröffentlichung weiterhin zurückgestellt bis nach Kontokorrektur und erneutem realen Google-SDK-Netzwerktest ohne doppelte Ereignisse. Der eigene lokale Prüfserver auf3099 wurde nach Abschluss der unabhängigen Prüfungen beendet; keine anderen Benutzerprozesse wurden beendet.
