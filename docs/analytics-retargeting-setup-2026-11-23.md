# Opny: Analytics und Retargeting-Vorbereitung · 23.11.2026

## Product-Owner-Brief und Freigabe

Zielgruppe: Websitebesucher und das Opny-Team. Nutzerproblem: Besuche, Produktinteresse und erfolgreiche Anfragen waren nicht verlässlich messbar. Gewünschte Entscheidung: Interessenten verstehen das Angebot und können eine passende Demo anfragen; Opny kann diesen Ablauf mit Einwilligung nachvollziehen. Opny bleibt Dachmarke, AuthenticTrust und NodeX getrennte Produkte. Keine neuen Kunden-, Zertifizierungs- oder Integrationsbehauptungen und keine Kundenstimmen hinzugefügt.

Vor Umsetzung wurden Fachprüfungen Frontend/Tracking, UI/UX und SEO/AEO/LLMO beauftragt. Prioritäten: einmalige Messung, getrennte Einwilligungen, keine Kontaktwerte in Messereignissen, keine Codavo-Kennungen übernehmen. Nach Source-Gate folgten Build und Browserprüfungen. Abschließende Freigabe für den aktiven GA4-Pfad durch Frontend und SEO; Consent-UX einschließlich320px/200% freigegeben. Der Product Owner gibt den geprüften Website-Stand zur Veröffentlichung frei. Ads/Meta-Aktivierung bleibt davon ausgenommen, bis echte IDs und Kontozuordnung vorliegen.

## Verifiziertes Konto und externe Korrekturen

- Opny-Property properties/524086891, Webstream13588166206, https://www.opny.ai, Mess-ID G-KVP1KD6SQ5. Produktionsvariable stimmt. OpenSEO-Projekt3fc1064a-9004-46c9-ab64-4815a958813f ist mit dieser Property verbunden. Keine neue Property angelegt.
- Automatische erweiterte Messung für diesen Stream deaktiviert; unabhängig über Google-Admin-Leseschnittstelle bestätigt: enhancedMeasurement.streamEnabled=false. Die generischen Hinweise von OpenSEO zu deaktivierter Messung/SiteSearch sind hier beabsichtigt: der eigene Ereignispfad zählt Seiten und Anfragen, eine interne Website-Suche existiert nicht.
- generate_lead als Schlüsselereignis ONCE_PER_EVENT eingerichtet, ohne monetären Standardwert. Bestehende purchase/close_convert_lead/qualify_lead unverändert.
- Echter Google-SDK-Test fand einen zusätzlichen Empfänger G-0L5ZRHZZ86 im bestehenden Opny-Google-Container. Nur dessen Analytics-Tag wurde reversibel pausiert und als Container-Version2 veröffentlicht. Zweite Property, historische Daten und Kontozugriffe nicht gelöscht. Öffentlich ausgelieferte Konfiguration enthält dafür __paused statt aktivem Analytics-Ziel.
- Im bestehenden Container war automatische Erkennung von E-Mail, Telefonnummer, Name/Adresse aktiviert. Hauptschalter für von Nutzern bereitgestellte Daten ausgeschaltet und einzelne Einstellungsänderung als Version3 veröffentlicht. Öffentliches Google-SDK bestätigt __ogt_1p_data_v2 mit vtp_isEnabled=false.
- Zugriff nach Entsperren durch den Nutzer über vorhandene native macOS-Bedienung. Keine Browser-Cookies, Anmeldedaten oder Tokens gelesen; keine Sicherheitsoptionen geändert.

Codavo-Vorbild aus dessen Tracking-Dokumentation und Quellcode: getrennte Zustimmung, feste Ereignisse, Lead erst nach bestätigtem Erfolg, keine Duplikate. Keine GA/GTM/Ads/Pixel-ID von Codavo übernommen und Codavo selbst nicht geändert.

## Implementierte Messung

Basic Consent Mode: externe Tags erst nach passender Zustimmung. Versionierte Einstellungen opny_consent_v3 trennen Statistik und Marketing. Frühere accepted-Zustimmung bedeutet ausschließlich Statistik. Ablehnung, dauerhafte Einstellungen, tabübergreifender Widerruf, Cookiebereinigung und vier Google-Signale standardmäßig denied.

Zentrale kanonische gtag-Arguments-Queue mit send_page_view:false. Feste Ereignisse: page_view, view_product, cta_contact_click, form_start, form_validation_error, form_submit_error, generate_lead. Ereigniskontext enthält bekannte Seitenpfade/Titel, URLs ohne Query/Hash, Referrer nur als Ursprung und feste Produkt-/Platzierungs-/Fehlerkategorien. Keine Namen, Unternehmen, E-Mail, Telefonnummer, Nachricht oder daraus erzeugte Hashes als Ereignisparameter.

generate_lead nur nach explizitem API-Marker leadAccepted:true für intern angenommene Anfrage. Honeypot-ok, Validierungsfehler und Versandfehler erzeugen keinen Lead; optionale Bestätigungsfehler machen eine intern angenommene Anfrage nicht rückgängig. Schutz gegen Doppelabsendung und gegen Einfluss von Telemetriefehlern auf den Formularerfolg.

Marketing ist derzeit inaktiv. NEXT_PUBLIC_GOOGLE_ADS_ID und NEXT_PUBLIC_META_PIXEL_ID fehlen. Deshalb werden keine Werbetags geladen und keine aktive Werbemessung behauptet. Vorbereitete Pfade trennen Werbeeinwilligung, Meta-Bereitschaft und zulässige URL-Kontexte. Vor echter Aktivierung müssen jeweilige Anbieterbibliothek, Kontozuordnung und Zielgruppenexport separat geprüft werden.

## Check vor Veröffentlichung

- Produktionsbuild erfolgreich; ESLint und17 isolierte Tests bestanden (5Kontakt-API,12Tracking/Consent).
- Alle15 Seiten auf390/1440px geprüft; zusätzlich320/768/1024px und200%-Schrift. Einheitliches Petrol/warmes Weiß, Metadaten/Canonicals, interne Anfragewege, FAQ-Schema und Bilder geprüft; keine beobachteten JavaScriptfehler.
- Bilddialog erneut auf Mobil/Desktop geprüft: Vergrößern, an Fenster anpassen, Schließen per Button/Escape/Hintergrund, Fokusfalle sowie Wiederherstellung von Fokus und Scrollposition bestanden.
- Consent-Browserprüfung mit abgefangener Bibliothek/API: einmalige eigene Seitenereignisse, feste Formularereignisse, Lead ausschließlich bei Marker, Honeypot ohne Lead, Doppelabsendung verhindert, tabübergreifender Widerruf,320px/200%-Bedienung bestanden. Keine echten E-Mails versandt.
- Originales Google-SDK mit tatsächlich veröffentlichter Kontokonfiguration: vor Zustimmung0Tag-Ladungen/0Hits; Home→AuthenticTrust→NodeX genau ein page_view pro Seite und je ein view_product; ausschließlich G-KVP1KD6SQ5. Nach Widerruf keine weiteren Hits. Canary-Query/Hash nicht in Payloads. Keine Browserfehler.
- Separater Original-SDK-Formulartest nach Container-Version3: Home→AuthenticTrust→Kontakt je ein page_view; cta_contact_click, form_start und generate_lead je einmal; Doppelclick erzeugt nur eine simulierte API-Anfrage. Kein automatisches zusätzliches Formularereignis und keine Kontaktwerte in geprüften Collect-Payloads.

QA-Artefakte lokal unter docs/qa/ (Git-ignoriert), Original-SDK-Protokolle zusätzlich /private/tmp/opny-real-sdk-results.json und /private/tmp/opny-real-form-results.json. Collect wurde dabei vor Zustellung mit204 abgefangen: diese Prüfungen belegen SDK-Requestverhalten, keinen bereits eingetragenen Analytics-Bericht. Auch die Formular-API wurde simuliert; kein Testlead oder E-Mailversand in Produktion.

## Noch offen für echtes Retargeting

Google Ads einschließlich YouTube und Meta/Facebook/Instagram sind beauftragt vorbereitet, aber noch nicht aktiv. Benötigt werden die tatsächliche Opny-Google-Ads-Kundennummer/Tag-ID und Opny-Meta-Pixel-/Datensatz-ID beziehungsweise Zugriff auf die richtigen Werbekonten. Anschließend Kontoverknüpfungen, Einwilligung, echte Anbieterrequests und Zielgruppenexport prüfen. Keine Kampagnen, Budgets oder Retargeting-Zielgruppen angelegt. Keine Rankings oder KI-Empfehlungen garantiert.

## Veröffentlichung

Website-Veröffentlichung folgt nach dem hier dokumentierten erfolgreichen Vorabcheck. Deployment-ID, öffentliche Nachprüfung und tatsächlicher Empfangstest werden anschließend ergänzt.

Primärquellen für Umsetzung: https://developers.google.com/tag-platform/security/guides/consent ; https://developers.google.com/analytics/devguides/collection/ga4/views ; https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead ; https://support.google.com/analytics/answer/6366371 ; https://support.google.com/analytics/answer/9313634 .
