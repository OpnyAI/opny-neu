# Normen- und Vorgabenseiten · 23. November 2026

## Product-Owner-Brief und Priorisierung

Nutzerauftrag: Die bisherige TISAX-Unterseite um eigene Einstiege für alle im Produkt belegten Normen und Vorgaben ergänzen, damit passende Suchanfragen eigene hilfreiche Antworten erhalten. Zielgruppe sind Verantwortliche für Informationssicherheit, IT, Qualität, Datenschutz und Organisation. Die gewünschte Entscheidung ist eine AuthenticTrust-Demo zum konkreten Anwendungsfall.

Priorität: korrekter Produktumfang und verständlicher Nutzen, danach eigenständige Inhalte je Suchaufgabe, einheitliches Petrol-/Warmweiß-Design und technische Auffindbarkeit. UI/UX, Frontend/Media und SEO/AEO/LLMO wurden vor der Umsetzung beauftragt und haben den Quellenstand vor Build/Browserprüfung freigegeben. Die abschließende Bild-/Layoutprüfung wird nach dem Build dokumentiert.

## Belege und fachliche Grenzen

Grundlage bleibt `authentictrust-product-evidence-2026-11-23.md` mit Benutzerhandbuch Version 72, S.31–33 und171–175 sowie freigegebenem Dokument-/Nachweis-/Maßnahmenablauf. ISO/IEC 27001 und ISO 9001 sind als Anforderungskataloge beschrieben; NIS2, SOC 2 und DSGVO enthalten ausgewählte Anforderungen ohne vollständige eigenständige Fachmodule. Keine automatische Ausweitung auf neue Normausgaben, vollständige Rechtskonformität, neue Integrationen oder Zertifizierung.

Die fünf Beispiele sind hypothetische Arbeitsabläufe, keine Kundenreferenzen. Bestehende allgemeine Produktansichten enthalten fiktive Beispieldaten; insbesondere die NIS2-/SOC-2-/DSGVO-Seiten stellen diese nicht als vollständige spezifische Fachmodule dar.

Aktuelle Primärquellen zur Begriffseinordnung, geprüft am23.11.2026:

- ISO/IEC 27001: https://www.iso.org/standard/27001
- ISO 9001: https://www.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/08/84/88464.html
- NIS2: https://digital-strategy.ec.europa.eu/en/policies/nis2-directive
- SOC: https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services
- DSGVO: https://commission.europa.eu/law/law-topic/data-protection/legal-framework-eu-data-protection_en

Die ISO-9001-Quelle nennt aktuell Ausgabe2026; das ist kein Beleg, dass der Softwarekatalog diese Ausgabe bereits abbildet. Deshalb keine Jahresversion in der Produktzusage. Die SOC-Seite enthält eine produktbezogene Demo-FAQ statt einer für die Produktentscheidung unnötigen Type-I-/Type-II-Methodikvertiefung.

## Seiten und Suchaufgaben

| Seite | Eigenständiger Schwerpunkt | Umfang |
| --- | --- | --- |
| `/tisax-software` | TISAX-Prüfung vorbereiten | Vorhandene Seite bleibt; verwandte Themen ergänzt |
| `/iso-27001-software` | Sicherheitsanforderungen, Richtlinien, Nachweise und Maßnahmen | Anforderungskatalog; Ausgabe vorab klären |
| `/iso-9001-software` | Gültige Prozessdokumente, Versionen, Freigaben und offene Änderungen | Anforderungskatalog; Ausgabe vorab klären |
| `/nis2-software` | Ausgewählte Cybersicherheitsanforderungen mit Zuständigkeiten | Kein vollständiges NIS2-Fachmodul, Betroffenheitschecker oder Meldeportal |
| `/soc-2-software` | Unterlagen zu ausgewählten Kontrollkriterien | Kein vollständiges Fachmodul, automatisches Kontrolltesting oder erstellter Prüfbericht |
| `/dsgvo-software` | Ausgewählte Datenschutzanforderungen, Unterlagen und Aufgaben | Kein vollständiges Datenschutz-Fachmodul oder VVT-/DSFA-/Betroffenenportal-/CMP-Versprechen |

Jede neue Seite hat einen eigenen Einstieg, Zielgruppe, Problem, hypothetischen Arbeitsfall, drei Arbeitsschritte, Einordnung, Produktgrenzen und sechs spezifische FAQ. Gemeinsame Serverkomponenten sichern Layoutkonsistenz; keine bloßen Normnamenkopien. Alle verweisen auf dieselbe AuthenticTrust-Softwareentität. Die Standardskarten auf Home und Produktseite verlinken direkt, die sechs Unterseiten verweisen aufeinander und auf den Produktumfang. Header-CTA und Login bleiben im AuthenticTrust-Kontext. Sitemap, llms.txt, Canonicals, OpenGraph/Twitter, Breadcrumbs und FAQ-Daten sind synchronisiert.

## Suchdaten als Ausgangspunkt

OpenSEO-Projekt3fc1064a-9004-46c9-ab64-4815a958813f, Deutschland/de, 23.11.2026. Projektkontext und bisher leeres Researchlog vor fokussierter Recherche geprüft. Search Console24.10.–20.11.2026:44 Query-/Seitenkombinationen, darunter keine der neuen Normthemen. Filter Position5–20 mit mindestens50Impressionen ergab0Zeilen. Das ist kein Nachweis fehlender Indexierung oder zukünftiger Rankings.

| Suchbegriff | Geschätztes monatliches Volumen DE | KD | Intention laut Tool |
| --- | ---: | ---: | --- |
| iso 27001 software | 40 | 0 | informational |
| isms software | 210 | 7 | commercial |
| iso 9001 software | 50 | 0 | informational |
| qm software | 260 | 5 | commercial |
| nis2 software | 50 | 0 | transactional |
| soc 2 software | 10 | unknown | commercial |
| dsgvo software | 40 | 0 | navigational |
| datenschutz software | 140 | 12 | commercial |
| tisax software | 10 | unknown | navigational |

Volumen und Keyword Difficulty (KD, modellierter Wettbewerbsindikator) sind Schätzwerte des Tools, keine eigenen Besucherzahlen oder Rankingzusagen. Verwandte Suchbegriffe werden nicht addiert. ISMS/QM gehören als sekundäre Begriffe auf die jeweilige ISO-Seite. Die geprüften Google-Ergebnisse für ISO9001-Software und DSGVO-Software zeigen gemischte Informations-/Produktabsichten; besonders DSGVO wird auf den belegten organisatorischen Ausschnitt begrenzt. Es werden keine breiten Datenschutz- oder zusätzlichen ISMS-/QM-Seiten mit demselben Ziel erstellt. Eine Seite-eins-Platzierung oder Nennung durch KI-Systeme ist nicht zugesagt.

## Technische Prüfungen

Produktionsbuild, TypeScript und ESLint bestanden.30 Tests zu Kontaktannahme, Consent und Tracking bestanden, darunter eine neue gezielte Prüfung aller fünf Routen: jeweils einmaliger bereinigter Seitenaufruf, vorhandene Produktidentität AuthenticTrust, keine Query-/Hash-Kontaktwerte und wirksamer Widerruf. Keine Anbieter oder Consentrevision verändert.

Die bisherigen15 öffentlichen Seiten wurden auf390/1440px und zusätzlichen Breiten/200% Text geprüft: Metadaten/Canonicals, Bilder, Navigation, FAQ-Schema und Produkt-CTAs bestanden. Zwei Browser-Szenarien für die neuen Routen bestanden: getrennte Statistik-/Marketingwahl, keine Ladung vor Zustimmung, genau ein Seiten-/Produktaufruf je neuer Route, origin-only-LinkedInbesuch, unsichere Query-Revoke, sichere Rückkehr und Widerruf. Bibliotheken/Empfängerrequests wurden für die Prüfungen abgefangen; keine echten Kontaktanfragen oder Kampagnen ausgelöst.

Die vollständige Seiten-/Layout- und Live-Abnahme folgt unten. Lokale QA-Dateien unter docs/qa/standards-20261123 sind Git-ignoriert.

### Zusätzlicher Header-Befund aus der visuellen Prüfung

Die erste Layoutprüfung vor vollständig geladenen Schriftarten erkannte bei320px/200% nicht zuverlässig, dass das Logo auf0Breite geschrumpft war und der Menübutton über den rechten Rand ragte. Der UI/UX-Sichtcheck hat den Befund aufgedeckt. Die Prüfung wartet jetzt auf document.fonts.ready, geladene Headerbilder und zwei Renderframes und kontrolliert die Logo-Breite sowie die tatsächlichen Begrenzungen.

Der Header verwendet eine textgrößenabhängige Containerabfrage: Bei engem Platz stehen Logo und Menü in der ersten Zeile, der Demo-CTA in voller Breite darunter. Auf breiteren Ansichten mit großer Schrift wechselt die Desktopnavigation rechtzeitig zum vollständigen Menü. Die frühere feste1024px-Schließbedingung des Menüs wurde durch die tatsächliche Sichtbarkeit des Menübuttons ersetzt; ResizeObserver und Resize-Listener werden bereinigt. Nach einem Wechsel zurück zur Desktopnavigation geht der Fokus bei ausgeblendetem Menübutton zum Logo. Bedienelemente und Text werden nicht verkleinert. Quelländerungen wurden vor dem erneuten Build durch Frontend und UI/UX geprüft.

Die stabilisierte Prüfung erkannte außerdem Mindestbreiten bei Demo-Buttons, FAQ-Fragen, Abschlusskarten, langen Quellenlinks sowie zwei Startseitenrastern. Die gemeinsamen Komponenten verwenden jetzt begrenzte Breiten, echte flexible Rasterspalten und Textumbruch. Die FAQ-Frage hat ein eigenes schrumpfbares Textelement; Antworten behalten mobil mehr Textbreite. Auch die Social-Link-Gruppe in der Fußzeile darf umbrechen. Keine Inhalte, Linkziele oder Schriftgrößen wurden entfernt oder verkleinert. Frontend hat diese Ergänzungen vor dem erneuten Build freigegeben; Footer und Menü werden in die abschließende Browserprüfung einbezogen.

## Abschließende lokale Freigabe

Finaler Produktionsbuild und Lint erfolgreich. Die sechs Normen-/Vorgabenseiten bestehen12 Basisansichten auf390/1440px und36 zusätzliche Ansichten auf320/768/1024px bei100/200% Text, zusammen48 Layoutfälle. Die stabilisierte Prüfung kontrolliert Header, Hauptinhalt und Footer nach geladenen Schriften und Logo. Eindeutige H1/Titel/Beschreibungen, eigene Canonicals, OpenGraph/Twitter, sichtbare FAQ gegen JSON-LD, Breadcrumbs, dieselbe AuthenticTrust-Softwareentität, Sitemap und llms.txt sind geprüft. Die Standardskarten auf Home/Produktseite und die gegenseitigen Links sind vorhanden. Alle Bilder laden; Vergrößern/Escape/Fokusrückkehr, FAQ-Tastaturbedienung und Demo-Anfrage mit vorausgewähltem AuthenticTrust funktionieren.

Zusätzlich bestehen die Menüs bei320/1024/1440px und200% Text: öffnen, offen bleiben, vollständige Links/Anmelden, Escape und Wechsel zurück zur Desktopnavigation mit sinnvoller Fokusrückkehr. Die Header-Containerregeln haben ausreichend Vorrang gegenüber den Desktop-Utilities. Logo, Menü und CTA sind nicht mehr abgeschnitten. Auch alle15 bisherigen öffentlichen Seiten bestehen die verschärfte Regression auf390/1440px und zusätzlichen Breiten sowie200% Text mit geladenen Schriften und Footer.

Elf Cookie-Design-/Bedienungsszenarien und zwei neue Routen-Tracking-Szenarien sind bestanden. Die30 vorhandenen/gezielt erweiterten Kontakt- und Trackingtests bleiben grün. Geprüfte Trackingrequests wurden abgefangen; das ist kein neuer Beleg des Plattformempfangs oder einer Werbezielgruppengröße. Keine echte Anfrage versandt und keine Anzeigen aktiviert.

UI/UX hat die finalen Screenshots einschließlich320px/200%-Header sowie der offenen Menüs bei1024/1440px erneut angesehen und visuell freigegeben. Frontend hat die finalen Ergebnisdateien und die zuvor behobenen Blocker unabhängig gegengeprüft und empfiehlt die Veröffentlichung. Der Product Owner übernimmt die fachliche und technische Freigabe für diesen begrenzten Stand. Keine Ranking-, Indexierungs- oder KI-Empfehlungsgarantie.

Interner OpenSEO-Bericht zur Suchbegriffszuordnung: https://app.openseo.so/p/3fc1064a-9004-46c9-ab64-4815a958813f/reports/86527e4a-fc8a-471c-8787-57be5b900f85 (nicht öffentlich geteilt).

## Veröffentlichung und Live-Abnahme

Freigegebener Quellstand42f11ee7b0c2c91dcd6cb452a24eb5ed227cdf8d wurde als Produktionsdeployment dpl_HxcVCF8kXZvji2q5uBmKcHJcVMeX veröffentlicht: https://opny-32d2j0cu5-opny-ais-projects.vercel.app. Vercel READY; Aliase www.opny.ai und opny.ai aktiv, aliasError=null; githubCommitSha entspricht dem freigegebenen Commit.

Auf https://www.opny.ai bestanden erneut alle sechs Normeneinstiege mit48 Layoutfällen, Metadaten-/FAQ-/Breadcrumb-Abgleich, Sitemap/llms, Querverweisen, Bilddialogen, Menüs bei großer Schrift und Demo-Vorauswahl. Auch alle15 bisherigen öffentlichen Seiten bestehen die verschärfte Live-Regression einschließlich Footer und geladener Schriften. Zwei Live-Tracking-Szenarien bestanden mit abgefangenen Empfängerrequests. Keine beobachteten JavaScriptfehler. Live-Screenshots für ISO27001 auf390px sowie den korrigierten Header auf320px/200% zusätzlich visuell geprüft. Vercel-Runtimeabfrage seit zehn Minuten ohne error-/fatal-Einträge.

Separater HTTP-/Crawlercheck: alle fünf neuen URLs antworten mit200; H1 und FAQ-Daten sind direkt im Server-HTML vorhanden. Keine noindex-Anweisung in Header oder Metadaten festgestellt. robots.txt erlaubt öffentliche Seiten und nennt die aktualisierte Sitemap. Dies belegt technische Abrufbarkeit, keine erfolgte Google-Indexierung.

Google-Search-Console-URL-Inspection unmittelbar nach Veröffentlichung: alle fünf neuen URLs mit Status „URL ist Google nicht bekannt“. Die API liest vorhandene Indexdaten und führt keinen Live-Crawl aus. Deshalb wird weder Indexierung noch ein Ranking behauptet. Die Seiten sind in Sitemap und interner Navigation enthalten; es wurde kein manueller Indexierungsantrag über die ausschließlich lesende Schnittstelle gestellt.

OpenSEO-Projektkontext und Recherchelog enthalten die fünf veröffentlichten Seiten und die Produktgrenzen. Der bestehende interne Bericht wurde um Live-Prüfung und Indexstatus aktualisiert, nicht öffentlich geteilt. Keine Keyword-Tags, Anzeigen oder laufenden Automationen angelegt.

Product-Owner-Abschlussfreigabe für die veröffentlichten Normen-/Vorgabenseiten und die geprüften gemeinsamen Layoutkorrekturen erteilt.
