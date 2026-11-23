# Opny: Analytics und Retargeting-Vorbereitung · 23.11.2026

## Product-Owner-Brief und Freigabe

Zielgruppe: Websitebesucher und das Opny-Team. Nutzerproblem: Besuche, Produktinteresse und erfolgreiche Anfragen waren nicht verlässlich messbar. Gewünschte Entscheidung: Interessenten verstehen das Angebot und können eine passende Demo anfragen; Opny kann diesen Ablauf mit Einwilligung nachvollziehen. Opny bleibt Dachmarke, AuthenticTrust und NodeX getrennte Produkte. Keine neuen Kunden-, Zertifizierungs- oder Integrationsbehauptungen und keine Kundenstimmen hinzugefügt.

Vor Umsetzung wurden Fachprüfungen Frontend/Tracking, UI/UX und SEO/AEO/LLMO beauftragt. Prioritäten: einmalige Messung, getrennte Einwilligungen, keine Kontaktwerte in Messereignissen, keine Codavo-Kennungen übernehmen. Nach Source-Gate folgten Build und Browserprüfungen. Abschließende Freigabe für den aktiven GA4-Pfad durch Frontend und SEO; Consent-UX einschließlich320px/200% freigegeben. Der Product Owner gibt den geprüften Website-Stand zur Veröffentlichung frei. Diese erste Freigabe betraf den GA4-Pfad. Die anschließende Meta-Erweiterung und ihre gesonderte Freigabe sind unten dokumentiert.

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

Bei der GA4-Erstveröffentlichung waren Marketing-Tags noch inaktiv. Die anschließende separate Meta-Konfiguration, ihre Prüfung und der Veröffentlichungsstand stehen in der Erweiterung unten. Google Ads, LinkedIn und TikTok bleiben inaktiv.

## Check vor Veröffentlichung

- Produktionsbuild erfolgreich; ESLint und17 isolierte Tests bestanden (5Kontakt-API,12Tracking/Consent).
- Alle15 Seiten auf390/1440px geprüft; zusätzlich320/768/1024px und200%-Schrift. Einheitliches Petrol/warmes Weiß, Metadaten/Canonicals, interne Anfragewege, FAQ-Schema und Bilder geprüft; keine beobachteten JavaScriptfehler.
- Bilddialog erneut auf Mobil/Desktop geprüft: Vergrößern, an Fenster anpassen, Schließen per Button/Escape/Hintergrund, Fokusfalle sowie Wiederherstellung von Fokus und Scrollposition bestanden.
- Consent-Browserprüfung mit abgefangener Bibliothek/API: einmalige eigene Seitenereignisse, feste Formularereignisse, Lead ausschließlich bei Marker, Honeypot ohne Lead, Doppelabsendung verhindert, tabübergreifender Widerruf,320px/200%-Bedienung bestanden. Keine echten E-Mails versandt.
- Originales Google-SDK mit tatsächlich veröffentlichter Kontokonfiguration: vor Zustimmung0Tag-Ladungen/0Hits; Home→AuthenticTrust→NodeX genau ein page_view pro Seite und je ein view_product; ausschließlich G-KVP1KD6SQ5. Nach Widerruf keine weiteren Hits. Canary-Query/Hash nicht in Payloads. Keine Browserfehler.
- Separater Original-SDK-Formulartest nach Container-Version3: Home→AuthenticTrust→Kontakt je ein page_view; cta_contact_click, form_start und generate_lead je einmal; Doppelclick erzeugt nur eine simulierte API-Anfrage. Kein automatisches zusätzliches Formularereignis und keine Kontaktwerte in geprüften Collect-Payloads.

QA-Artefakte lokal unter docs/qa/ (Git-ignoriert), Original-SDK-Protokolle zusätzlich /private/tmp/opny-real-sdk-results.json und /private/tmp/opny-real-form-results.json. Collect wurde dabei vor Zustellung mit204 abgefangen: diese Prüfungen belegen SDK-Requestverhalten, keinen bereits eingetragenen Analytics-Bericht. Auch die Formular-API wurde simuliert; kein Testlead oder E-Mailversand in Produktion.

## Ausgangsstand vor der Meta-Erweiterung

Google Ads einschließlich YouTube und Meta/Facebook/Instagram sind beauftragt vorbereitet, aber noch nicht aktiv. Benötigt werden die tatsächliche Opny-Google-Ads-Kundennummer/Tag-ID und Opny-Meta-Pixel-/Datensatz-ID beziehungsweise Zugriff auf die richtigen Werbekonten. Anschließend Kontoverknüpfungen, Einwilligung, echte Anbieterrequests und Zielgruppenexport prüfen. Keine Kampagnen, Budgets oder Retargeting-Zielgruppen angelegt. Keine Rankings oder KI-Empfehlungen garantiert.

## Veröffentlichung

Freigegebener Quellstand646540ce9f864517f1688df3ca2cf07918da8ae7 als Produktionsdeployment dpl_7h57MnjSdQ9Xv4Lhb59UB78jiAYC veröffentlicht. Status READY, Aliase www.opny.ai und opny.ai, aliasError=null. Build auf Vercel erfolgreich.

Öffentliche Nachprüfung auf https://www.opny.ai: alle15 Seiten in30 Mobil-/Desktopansichten plus320/768/1024px und200%-Schrift bestanden; Canonicals/FAQ/Anfragewege/Bildladung/Petrol konsistent, keine beobachteten JavaScriptfehler. Original-Google-SDK auf echter Domain bestätigt einmalige Seiten-/Produkterfassung, keine Ladung vor Zustimmung und keine Hits nach Widerruf. Separater Original-SDK-Formulartest mit abgefangener API/Collect ebenfalls bestanden; kein Testlead und keine E-Mail versandt. Öffentlicher Bilddialogcheck bestätigt Vergrößern/Anpassen/Schließen/Fokus/Scroll und mobile Bedienung. Vercel-Runtimefehlerprüfung seit10Minuten: keine error/fatal-Einträge für dieses Deployment.

Tatsächlicher Empfang separat geprüft: ein kontrollierter isolierter Seitenaufruf nach Statistik-Zustimmung erhielt HTTP204 vom Google-Analytics-Collect-Endpunkt für G-KVP1KD6SQ5 und https://www.opny.ai/. Die normale Chrome-Kontrollvisite erscheint zusätzlich im richtigen GA4-Echtzeitbericht mit1aktivem Nutzer,1page_view,1session_start und1first_visit; Seitentitel Opny | Compliance-Software. Kein generate_lead dafür erzeugt. Damit ist auch ein realer GA4-Berichtseintrag unabhängig von den abgefangenen Tests bestätigt. Die vorherige Statistik-Ablehnung im Nutzerbrowser wurde nach dem temporären Kontrolltest wiederhergestellt und der gespeicherte ausgeschaltete Schalter sichtbar kontrolliert.

Die Prüfung der Analytics-Datenfilter blieb lesend: nur vorhandener Internal-Traffic-Filter im Teststatus, kein aktiver Ausschluss verändert. Produktionsfreigabe abgeschlossen; Werbekonten/Marketing-IDs und deren spätere Aktivierung bleiben wie oben beschrieben offen.

Primärquellen für Umsetzung: https://developers.google.com/tag-platform/security/guides/consent ; https://developers.google.com/analytics/devguides/collection/ga4/views ; https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead ; https://support.google.com/analytics/answer/6366371 ; https://support.google.com/analytics/answer/9313634 .

## Erweiterung: separate Werbeplattformen

Stand dieser Erweiterung: Google Analytics bleibt aktiv. Der separate Meta-Browser-Pixel ist fachlich und technisch zur Aktivierung freigegeben; die konkrete Veröffentlichung wird am Ende protokolliert. Der Nutzer hat Google Ads ausdrücklich vorerst zurückgestellt und TikTok ausdrücklich übersprungen. Für LinkedIn liegt ein konkreter Kontodialog zur Entscheidung vor; ohne ausdrückliche Zustimmung zum Vertrag wird er nicht gespeichert.

### Meta / Facebook / Instagram

- Separater Datensatz „Opny AI - Website“, ID2286521285462018, im vorhandenen Business-Portfolio Mehmet Catalsakal1471546707071946 angelegt. Der Codavo-Datensatz1592509072445980 wurde nicht geändert oder übernommen.
- Im Opny-Datensatz ausgeschaltet und in der Oberfläche kontrolliert: automatischer erweiterter Abgleich, automatische Event-Einrichtung, zusätzliche automatische Seiten-/Produktinformationen und Conversions auf Kundengeräten. Keine Kontaktdaten oder Hashes an die Pixelinitialisierung übergeben.
- Kein bestehendes Codavo-/persönliches Werbekonto zugeordnet. Eine spätere Kampagnennutzung benötigt die passende Opny-Werbekontozuordnung. Keine Kampagne, kein Budget, keine Zahlung, keine Zielgruppe angelegt.
- Diese Erweiterung betrifft den Browser-Pixel. Die bei Codavo vorhandene zusätzliche serverseitige Conversions API ist hier nicht eingerichtet; deren Token und Lead-Deduplizierung werden nicht als vorhanden behauptet. Domainverifizierung ist noch nicht bestätigt.
- Der Original-SDK-Test nutzt echte öffentliche Anbieterbibliotheken und fängt Messrequests vor Zustellung ab. Metas BotBlocking unterdrückt HeadlessChrome; die Requestprüfung verwendet deshalb eine gewöhnliche Chrome-UA. Metas Botfilter und SDK werden dabei nicht verändert.
- Der Original-SDK-Test hat vor Veröffentlichung eine automatische SPA-Erfassung gefunden, die nach einem Wechsel auf einen unbekannten Queryparameter dessen Rohwert übertragen könnte. Der Fehler wurde vor Veröffentlichung behoben: disablePushState=true am Stub vor SDK-Ladung unterbindet SDK-SPA-Hooks; PageView und Lead gehen über das dokumentierte trackSingle ausschließlich an die Opny-ID. Der Schalter ist im öffentlich ausgelieferten Original-SDK2.9.441, Modul signalsFBEventsSPANavigationUtil, belegt. Ein eigener Commit-Navigationshinweis aktualisiert den URL-Snapshot, damit eine zuerst unsichere und später sichere URL das SDK nachladen kann. Keine History-Monkeypatches.

### LinkedIn

Kontodialog vorbereitet: „Opny AI Ads“, EUR, Unternehmensseite „Opny AI“. Das vorhandene Codavo-Konto549790685 bleibt unverändert. Neues Konto noch nicht gespeichert, keine Opny-Partner-ID und kein Insight-Tag aktiviert. Die automatische Freigabeprüfung hat das Setzen der Zustimmung zur LinkedIn-Ads-Vereinbarung/Werberichtlinie als rechtlich bindende Verpflichtung abgelehnt. Ausdrückliche Nutzerentscheidung dazu angefragt; keine Umgehung.

### Google Ads / TikTok

Separates Google-Ads-Konto „Opny“586-794-8117 vorbereitet. Kampagnenerstellung übersprungen, kein Zahlungsprofil ausgefüllt, kein Budget oder Werbemittel aktiviert. Tag-Verwaltung durch Onboarding/Zahlungsschritt noch nicht erreichbar; keine AW-ID aus Kundennummer abgeleitet. Eventuelle GA4-Verknüpfung aus Onboarding nicht abschließend verifiziert. Nach Nutzerantwort vorerst zurückgestellt.

TikTok Ads war abgemeldet. Nach Nutzerantwort übersprungen; kein Pixel und kein Konto für Opny erstellt. Keine Kennung von Codavo übernommen.


### Product-Owner-Freigabe und Check der Meta-Erweiterung

Priorität: keine Übertragung unbekannter URL-Parameter und keine automatischen Zusatzereignisse; danach korrekte eigene Seiten-/Anfragemessung und verständliche Einwilligung. UI/UX, Frontend und SEO/AEO haben das Source-Gate freigegeben. Nach dem Build hat Frontend die bestandenen Original-SDK-Ergebnisse unabhängig gegengeprüft und die Meta-Aktivierung freigegeben. Der Product Owner übernimmt diese Freigabe für den geprüften Browser-Pixel; vollständige Kampagnen-/Zielgruppenbereitschaft wird damit nicht behauptet.

- Produktionsbuild und ESLint bestanden;23 isolierte Tests (5Kontakt-API,18Tracking/Consent) bestanden. IDs ausschließlich G-KVP1KD6SQ5 und2286521285462018; keine aktive AW-/LinkedIn-/TikTok-Konfiguration.
- Original-Meta-SDK ohne Testwrapper/SDK-Manipulation: keine Ladung vor Zustimmung oder bei Nur Statistik; Marketing separat möglich; sichere Seiten jeweils einmal, unsichere Query-/Hash-Wechsel ohne Hit, Rückkehr wieder korrekt. Initial unsichere URL→sichere Client-Navigation lädt korrekt nach. Erfolgreich angenommene Anfrage genau1Lead, Honeypot-ok/fehlender Marker kein Lead. Keine Canary-Kontaktwerte in den geprüften Payloads.
- Original-SDK-Randfälle: Widerruf während verzögerter Bibliotheksladung erzeugt keinen nachträglichen Hit; tabübergreifender Widerruf, anschließender Reload und Cookiebereinigung bestanden; unsicherer Dokument-Referrer verhindert SDK-Ladung.
- Consent-UI und simuliertes Formular erneut geprüft: getrennte Schalter, Nur Statistik, alleAnbieter, Erreichbarkeit bei320px/200%-Schrift, Fokus/Scroll und zwei Tabs. Mobile feste12px-Innenabstände verhindern unnötige Wortumbrüche. Banner nennt konkrete Anbieter; Meta-Empfänger, mögliche USA-Verarbeitung, _fbp und Widerruf in Datenschutzhinweisen ergänzt. Keine rechtliche Vollständigkeitsgarantie behauptet.
- Original-SDK-Messrequests und Kontakt-API für die Prüfungen abgefangen. Kein Testlead versandt. Die Ergebnisse belegen Requestverhalten; tatsächlicher Meta-Berichtseingang und Zielgruppenbildung sind davon getrennt.

Ergebnisdateien: /private/tmp/opny-meta-real-results.json, /private/tmp/opny-meta-edge-results.json, docs/qa/analytics-20261123/browser-results.json (lokal, Git-ignoriert). Primärquellen: https://developers.facebook.com/documentation/meta-pixel/advanced#tracking-events-for-individual-pixels ; https://developers.facebook.com/documentation/meta-pixel/implementation/gdpr ; öffentliches SDK https://connect.facebook.net/en_US/fbevents.js und eigene Pixelkonfiguration. Kein SDK-Quellcode ins Repository kopiert.

### Veröffentlichung und Live-Nachprüfung der Meta-Erweiterung

Quellstand5209369bca2619633eabe15cf5577bc341249c5d veröffentlicht als dpl_3DjtB1PX6hskeH4vL2BTGLxE3SFQ, https://opny-2f5vsep3a-opny-ais-projects.vercel.app. Vercel-Status READY; Aliase www.opny.ai/opny.ai, aliasError=null. Öffentliche Variable NEXT_PUBLIC_META_PIXEL_ID=2286521285462018 für production/preview/development eingerichtet (env-IDrlsKZf7jKcUBY4Sp). Keine andere Plattformkennung hinzugefügt.

Auf https://www.opny.ai erneut bestanden: vollständige Original-Meta-SDK-Suite, verzögerte Bibliotheksladung/Widerruf, tabübergreifender Widerruf/Reload, unsicherer Referrer, Original-Google-SDK-Seitenmessung, mobiler Consent-Dialog und simulierte Formularprüfung. Keine beobachteten JavaScriptfehler. Screenshots in docs/qa/analytics-20261123/live visuell kontrolliert; alle Banneraktionen auch bei320px/200%-Schrift erreichbar. Formular-API und die Payloadprüfungen weiterhin vor Zustellung abgefangen.

Tatsächlicher Meta-Empfang getrennt geprüft: genau1kontrollierter PageView nach alleiniger Marketing-Zustimmung an https://www.opny.ai/ für ID2286521285462018 erhielt HTTP200 vom echten Meta-/tr-Endpunkt. Kein Lead erzeugt. Der isolierte Testbrowser erhielt _fbp mit90Tagen Laufzeit. Ergebnis /private/tmp/opny-meta-receiver-results.json. Das bestätigt den Empfängerrequest; eine bereits aufgebaute Werbezielgruppe oder einen vollständigen Meta-Berichtseintrag behaupten wir damit nicht. Die Meta-Übersicht im Nutzerbrowser lud noch; kein Berichtsbeleg daraus abgeleitet. Nutzerbrowser-Einwilligung wurde durch den isolierten Kontrollbesuch nicht verändert.

Vercel-Runtimeprüfung für dieses Deployment seit10Minuten: keine error/fatal-Einträge gefunden. Product-Owner-Abschlussfreigabe für GA4 und den consent-gesteuerten Meta-Browser-Pixel. Für spätere bezahlte Meta-Kampagnen bleiben Opny-Werbekontozuordnung und Zielgruppenaufbau offen; Conversions API/Domainverifizierung sind nicht als erledigt bestätigt. LinkedIn bleibt ohne Vertragsfreigabe inaktiv. Google Ads/TikTok bleiben wie vom Nutzer entschieden zurückgestellt/übersprungen.

Beabsichtigte URL-Grenze: Der Meta-Pixel wird bei unbekannten Query-/Hashwerten oder unbekannten Referrer-Details ausgesetzt. Das schließt derzeit auch utm_*/fbclid und andere Kampagnenparameter ein. Erfassung erfolgt wieder auf sicheren bekannten Seiten; uneingeschränkte Messung späterer Kampagnenlandings wird nicht behauptet. Vor dem Kampagnenstart muss eine gezielte, datensparsame Parameterstrategie geprüft werden.

## LinkedIn: ausschließlich zukünftige Websitebesucher · Folgeauftrag

Der Nutzer hat nach dem Stopp ausdrücklich die Sammlung zukünftiger Opny-Websitebesucher freigegeben: keine neuen Posts, keine bezahlten Posts, keine Anzeigen/Kampagnen/Budgets. Browserarbeit auf Wunsch ausschließlich in Safari fortgesetzt. Das eigene Konto „Opny AI Ads“561218851 ist angelegt; die LinkedIn-Ads-Vereinbarung wurde nach ausdrücklichem Nutzer-Ja akzeptiert. Kein Zahlungsmittel hinterlegt. Der angezeigte Werbestatus „Gesperrt – Zahlungsmethode erforderlich“ betrifft die Anzeigenauslieferung; keine Werbeausgabe ausgelöst.

Product-Owner-Brief: Websitebesucher sollen Statistik und Marketing verständlich wählen. Opny möchte erlaubte künftige Websitebesuche als Grundlage für spätere LinkedIn-Werbung sammeln. Bestehende persönliche Profilbesucher/organische Likes sind nicht Bestandteil. Fachprüfungen Frontend und UI/UX wurden beauftragt. Priorität: explizite neue Anbieterzustimmung, Statistik erhalten, nur Domainbesuch ohne Formular-/URL-Freitext, keine verbleibenden SDK-Listener nach Widerruf. Produktcopy, Kundenreferenzen, SEO-Metadaten und Designsystem bleiben unverändert.

Das echte eigene Insight-Tag/PID10141010 wurde in Safari erzeugt und im Originalcode kontrolliert. Standard-JavaScript-SDK1.0.50 wurde mit dieser ID isoliert getestet (alle Messrequests abgefangen). Es sendet zusätzlich Website-Actions einschließlich CLICK/PAGE_VISIT/DWELL und übernimmt unbekannte Hashwerte in komprimierten Requests. Keine dokumentierte Widerruf-API und kein Abschaltschalter in der geprüften Kontomaske. Deshalb nutzt dieser engere Auftrag die von LinkedIn im eigenen Tag mitgelieferte Image-Pixel-Variante, endpoint https://px.ads.linkedin.com/collect/?pid=10141010&fmt=gif. Kein fremder SDK-Code verändert.

Bewusste Begrenzung: ein Domainbesuch pro Dokument nach aktueller Marketingzustimmung, Referer-Policy origin. Keine separaten Produktseiten-/Anfrage-/Conversion-Ereignisse, keine automatische Klick-/Dwell-/Formularerfassung und keine Kontaktwerte. Keine Enhanced-Matching-E-Mailübergabe. Browser-Tracking-Schutz und blockierte Third-Party-Cookies können das Matching einschränken; die Pixel-Variante setzt keine eigenen First-Party-Tracking-Cookies. Eine vollständige Browserabdeckung oder Matchquote wird nicht behauptet. Offizielle LinkedIn-Unterlage bestätigt, dass Website-Retargeting mit Imagepixel funktionieren kann, empfiehlt allgemein JavaScript: https://business.linkedin.com/content/dam/lem/business/en/advertise/ads/targeting/linkedIn-matched-audiences-final.pdf .

Consent v4 speichert eine deterministische Marketing-Anbieterrevision. Vorherige v3-Statistik bleibt erhalten, vorherige positive Meta-Marketingwahl erlaubt LinkedIn nicht. Bis zur erneuten Marketingentscheidung wird die gemeinsame Marketingkategorie ausgesetzt. Frühere Ablehnung/statistics-only bleibt erhalten und wird nicht erneut aufgedrängt. Bei bisher positivem Marketing erscheint ein Hinweis; „Ohne Marketing fortfahren“ und „Marketing erlauben“ bewahren die Statistik-Auswahl. Einstellungen erlauben bewusst getrennte Anpassung. Keine Freigabe durch Abbrechen/Schließen.

PO-Entscheidung vor Build: Die enge Imagepixel-Implementierung ist für den ausdrücklich begrenzten Domainbesuchsauftrag gegenüber zusätzlichen SDK-Website-Actions priorisiert. Sie ist zur gezielten Build-/Browserprüfung freigegeben; Veröffentlichung erst nach erfolgreichen Consent-/Payload-/Regressionsprüfungen.

LinkedIn-Zielgruppe in Safari tatsächlich angelegt: „Opny - Websitebesucher - 90 Tage“, Quelle Website, URL beginnt mit https://www.opny.ai/,90Tage. Erstellung erfolgreich bestätigt; anschließend in der Zielgruppenliste sichtbar, Größe <300 Mitglieder, Status „Noch kein Signal“. Das ist der erwartete Ausgangsstand vor Aktivierung. Keine Kontaktliste hochgeladen und keine Zielgruppe aus persönlichen Profilaktivitäten behauptet. Keine Anzeigengruppe und kein Budget angelegt.

Gezielte Freigabeprüfung: Produktionsbuild und ESLint erfolgreich,29 isolierte Tests (5Kontakt-API,24Tracking/Consent). Neun Browser-Szenarien bestanden: ohne Wahl/Statistik-only kein LinkedIn, aktuelle Marketingwahl genau ein eigener Domainpixel pro Dokument, exakte eigene PID, Referer ausschließlich https://www.opny.ai/, keine zusätzlichen SDK-/Klick-/Dwell-/Formularrequests. Query/Hash und Suchmaschinen-Referrer bleiben aus der Übertragung ausgeschlossen, ohne Domainbesuche unnötig zu blockieren. Zwei Tabs und Reload respektieren Widerruf. Migration positiver v3-Marketingzustimmung für beide früheren Statistikwahlen und beide neuen Entscheidungen bewahrt Statistik exakt; frühere Ablehnung bleibt erhalten. Mobile320px/200%-Schrift sowie390/1440px und Abbrechen/Escape geprüft, Screenshots visuell kontrolliert. Datenschutz beschreibt LinkedIn getrennt. SEO-Metadaten, strukturierte Daten und Produktinhalte unverändert.

Original-Google-/Meta-SDK-Regressionsläufe und simulierte Kontaktmessung nach v4 bestanden: eigene Empfänger, keine Doppelzählung, Lead nur nach API-Annahme und Widerruf wirksam. Kein Testlead/E-Mailversand. Im ersten Meta-Regressionsanlauf wurde die neue LinkedIn-Abfangregel nachgezogen; dabei können kontrollierte Domainaufrufe am eigenen LinkedIn-Testempfänger angekommen sein. Keine Kontaktwerte oder Leadereignisse an LinkedIn übertragen. Alle anschließenden Pixel-Payloadtests wurden abgefangen. Ergebnisdateien docs/qa/linkedin-20261123/local/results.json und /private/tmp/opny-linkedin-sdk-preflight-results.json (komprimierte Standard-SDK-Bodies für die Analyse zusätzlich dekodiert).

Der Product Owner gibt den geprüften Stand zur Veröffentlichung frei. Nach Aktivierung sind der öffentliche Pixelrequest und die Live-Consent-Migration nochmals zu prüfen. Eine bereits aktive/ausreichend große Werbezielgruppe oder vollständige Matchquote ist damit nicht behauptet.
