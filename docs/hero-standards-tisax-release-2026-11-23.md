# Kompakter Einstieg, Standards und TISAX-Suchintention · 23.11.2026

## Product-Owner-Brief vor Umsetzung

Nutzerauftrag: Auf der Startseite sofort verstehen, dass AuthenticTrust Compliance-Software ist. Den als zu hoch/angeschnitten empfundenen Einstieg kompakt und nach der psychologischen Baulig-Reihenfolge aufbauen. Konkrete Standardnamen sichtbar machen und Suchanfragen wie Software für TISAX sinnvoll adressieren.

Zielgruppe: Verantwortliche für Informationssicherheit und Qualität sowie Teams, die Vorgaben, Dokumente, Nachweise und Maßnahmen für Prüfungen organisieren. Entscheidung: Produkt verstehen und persönliche Demo anfragen.

Fachprüfungen UI/UX, Frontend/Media/Produkt und SEO/AEO beauftragt. Priorisierte Entscheidung: ein kompakter zweispaltiger Hero mit eindeutiger Kategorie, kurzer Nutzenheadline, Erklärung, drei Vorteilen und CTA links; vollständige vergrößerbare Produktansicht rechts. Keine feste Bildschirmhöhe oder zugeschnittenen UI-Bilder. Gleiche bestehende Palette/Komponenten. Desktopziel: Produkt und CTA bei1366×768 vollständig sichtbar; mobil zuerst verständliche Softwareaussage und CTA.

## Standardumfang und Freigabeentscheidung

Die ältere pauschale Websiteaussage ISO-Erweiterung schrittweise wird durch die präzisere jüngere First-Party-Quelle ersetzt: AuthenticTrust-Benutzerhandbuch Version72 vom03.11.2026, S31–33 und171–175. Dort sind ISO/IEC27001, ISO9001 und TISAX als Anforderungskataloge beschrieben; NIS2, SOC2 und DSGVO als ausgewählte, verkürzte Anforderungen ohne vollständige eigenständige Fachmodule. Diese begrenzte Benennung wird vom Product Owner für die Website freigegeben. Keine Zusage aller Normausgaben, rechtlicher Vollständigkeit, Integration, automatischer Konformität oder Zertifizierung.

Aktuelle Begriffsprüfung mit Primärquellen am23.11.2026: ISO/IEC27001 = Informationssicherheit; ISO9001 = Qualität; TISAX = Prüf-/Austauschverfahren; NIS2 = EU-Richtlinie; DSGVO = EU-Verordnung; SOC2 = AICPA-Prüf-/Berichtsrahmen. Deshalb gemeinsame Überschrift Standards und Vorgaben, keine sechs Zertifizierungen/Partnerlogos/Verfügbarkeits-Häkchen. Aktuelle Norm-/Katalogausgaben werden vor Einsatz geklärt; keine unbestätigte Jahresversion in der Produktzusage.

## Suchintention und Seitenaufgaben

Home: Compliance-Software und Produktnutzen; sichtbar benannte Standards mit Umfang. Produktseite: gemeinsame Standards-Komponente und präzise FAQ/Schema. Neue `/tisax-software`: konkreter Anwendungsfall TISAX-Vorbereitung mit Zielgruppe, Anforderungen→Unterlagen/Nachweise→offene Punkte/Maßnahmen, Beispielansicht und Demo. Kein Klon der Produktseite und keine Serie dünner Normseiten. Bestehende URLs bleiben erhalten. Interne Links, Sitemap, Metadaten, FAQ-Markup und llms.txt werden synchronisiert.

Google-/KI-Sichtbarkeit ist Ziel, keine garantierte Seite-eins-Platzierung oder Empfehlung. Vorhandene GSC-Auswertung bleibt Ausgangsstand; diese Änderung belegt noch keine neue Rankingwirkung. Keine erneute bezahlte Keywordrecherche, Kontextspeicherung oder geplanten Prüfungen eingerichtet.

Umsetzungsgate, visuelle Abnahme und Veröffentlichung folgen nach Durchführung.


## Umsetzungsgate vor Build

UI/UX, Frontend/Media/Produkt und SEO/AEO haben die Umsetzung nach Quellcodeprüfung freigegeben. Die Product-Owner-Entscheidung zur jüngeren Katalogquelle wurde übernommen, alle aktiven Statusformulierungen synchronisiert. Eine ungenutzte alte Hero-Vorteilskonstante wurde bereinigt. Build, visuelle Above-Fold-Prüfung und Veröffentlichung folgen jetzt.

## Prüfungen und finale Freigabe

Production-Build (21 statische Routen) und ESLint erfolgreich. Playwright prüfte Home bei 1280×650, 1366×768, 1440×900, 1920×1080, 390×844, 320×740 und 768×1024. Kein horizontaler Überlauf, ein H1, unverzerrte/unbeschnittene Produktabbildung mit natürlichem 1,6-Seitenverhältnis. Auf kleinem Desktop1280×650 liegt das Ende des Demo-CTA bei y543, das Ende der vollständigen Produktfigur inklusive Caption bei y587. Mobil390×844 endet der CTA bei y490. Bei200% Schriftgröße bleibt die Seite ohne horizontalen Überlauf bedienbar.

Home zeigt alle sechs Namen; Produkt- und TISAX-Seite bei390/1440 auf Canonical, H1, sichtbare FAQ gegen JSON-LD, Bilder und Layout geprüft. Demo-Link wählt AuthenticTrust-Demo im Kontaktformular vor. Sitemap und llms.txt enthalten die neue URL. Keine beobachteten Browserfehler.

Finale visuelle UI/UX-Abnahme nach Screenshotprüfung erteilt: Home1280×650/1366×768/390×844 und komplette Home1440, TISAX390/1440. Kategorie, Nutzen, drei Vorteile, Demo-CTA und vollständiges Produktbild sind auf Desktop gemeinsam sichtbar; mobil folgt das Bild auf die klare Aussage und Demo. Normkarten sind lesbar und sachlich eingeordnet. Product Owner gibt diese Umsetzung nach den drei Fachprüfungen für die Veröffentlichung frei. Testartefakte liegen ausschließlich im ignorierten docs/qa/hero-standards-20261123/.

## Veröffentlichung und Live-Nachprüfung

Commit180ffe86f9213a144f3cb4a17b1c16e5cb2352c8 auf bestehendem Release-Branch gepusht und als Vercel-Production-Deployment dpl_83EPcnxpbJ671pGLnodYYG8ZvVpZ veröffentlicht. StatusREADY, Domains www.opny.ai und opny.ai zugeordnet.

Die identischen Browserprüfungen bestanden anschließend gegen https://www.opny.ai: sieben Bildschirmgrößen, Normnamen, FAQ-/Schema-Abgleich, neue TISAX-URL, Canonicals, Sitemap/llms.txt, Demo-Vorauswahl und200%-Schrift. Keine beobachteten Browserfehler. Frische/bestehende/erteilte Cookie-Einwilligung ebenfalls live geprüft; keine Hydrationfehler, nach Ablehnung keine Analytics-Aufrufe. Analytics-Aufrufe wurden im Test abgefangen. Keine echte Kontaktmail gesendet. Vercel meldete im geprüften10-Minutenfenster für dieses Deployment keine Fehler-/Fatal-Logs. Der eigene lokale Prüfserver wurde beendet.

OpenSEO-Nachprüfung db968786-a336-4a95-9bdd-c1988074216c vollständig:21URLs gecrawlt, keine kritischen Probleme und keine Warnungen. Sieben rein informative Hinweise: sechs beabsichtigte Canonicals der vorausgefüllten Kontakt-URLs auf /kontakt sowie die kurze Impressumsbeschreibung. Keine Änderung dieser korrekten Kontakt-Canonicals. Der Crawl bestätigt technische Abrufbarkeit, nicht die Google-Indexierung oder ein Ranking der neuen URL.
