# Opny: gemeinsames Designsystem und Produktaufbau · 23.11.2026

## Product-Owner-Brief vor Umsetzung

Nutzerauftrag: Die gesamte Website soll wie ein zusammenhängendes Softwareangebot auftreten; die Homepage darf weiter die klare Verkaufsdramaturgie von Andreas Baulig verwenden. AuthenticTrust wird anhand der aktuellen Produktquellen neu erklärt. Google-/KI-Sichtbarkeit und Search Console werden überprüft.

Zielgruppe: Verantwortliche für Managementsysteme, Informationssicherheit und Qualität sowie Geschäftsführung in Unternehmen mit verteilten Anforderungen, Dokumenten, Nachweisen und Maßnahmen. Gewünschte Entscheidung: AuthenticTrust verstehen, eigenen Einsatz einschätzen, Demo anfragen. NodeX und Beratungsangebote bleiben ergänzende, klar getrennte Einstiege unter der Dachmarke Opny.

Fachprüfungen vor Umsetzung: UI/UX, Frontend/Media und SEO/AEO/LLMO eigenständig beauftragt. Product-Owner-Priorität: erst gemeinsame Gestaltung und klare Informationsarchitektur, dann belegte Funktionsweise über Home/Produkt/Übersicht/Kontakt/Über uns hinweg. Keine stabilen URLs aus rein optischen Gründen löschen.

## Gestaltungsentscheidung

Das vorhandene Blau #2454c6 wird verbindlicher gemeinsamer Akzent; Navy #15243a für Überschriften, #15377e für Abschlussflächen, Lesetext #43546c/#536178, helle weiße/blaue Flächen und #d9e1ee als Randfarbe. Zentrale CSS-Tokens steuern Home und alle Templates. Gemeinsame Button-, Hero-, Karten-, Medien-, Typografie- und Abstandsregeln; keine zweite Palette nur für die Homepage. Rechtliche Texte bleiben sachliche Dokumente mit demselben Farbsystem.

Navigation: AuthenticTrust, NodeX, Beratung & Schulung, Über Opny und passender Anfrage-CTA. Produktvergleich und Wissen im Footer. Homepage = Nutzen und Entscheidung; AuthenticTrust = konkrete Funktionen und Arbeitsweg; NodeX = eigener Produktkontext; Leistungen = Vorgehen und Eignung.

Strukturelle Referenzen am 23.11.2026 geprüft: https://www.andreasbaulig.de/ (Home-Dramaturgie), https://www.vanta.com/ und https://drata.com/ (Produkt-/Funktions-/Ressourcenarchitektur). Es werden weder fremde Texte/Assets noch fremde Ergebnis-/Kundenbelege übernommen.

## Produktbelege und Suchdaten

Produktbrief/Claims-Register, aktuelles Handbuch Version72 vom03.11.2026 sowie Demo v162.4 werden getrennt eingeordnet. Ein sichtbares Demo-Modul oder eine unverdrahtete Schaltfläche belegt keine produktive Funktion. Öffentlicher AuthenticTrust-Einstieg führt auf Einladung/Login; vorhandene Anmeldesitzung bleibt unverändert.

OpenSEO-Projekt Opny (opny.ai, DE/de) wurde für den expliziten Prüfauftrag angelegt. Keine Zeitpläne, Tracker oder wiederkehrenden kostenpflichtigen Prüfungen. Reale Search-Console-Daten werden erst nach bestätigter Google-Verbindung verwendet. Suchstichproben sind zeit-/marktbezogen, keine dauerhaften Rankingversprechen.

Umsetzungsgate, Browserprüfung, Suchbefunde und Veröffentlichung werden nach Durchführung ergänzt.


## Umsetzungsgate vor Build

Alle drei Fachprüfungen haben die Umsetzung für Build und anschließende visuelle Prüfung freigegeben. Product Owner priorisiert die konsistente Gestaltung, die erhaltenen stabilen URLs und den dokumentierten Kernprozess. Die kleine UI-Empfehlung, Managementsystem bereits im Hero alltagssprachlich zu erklären, wurde aufgenommen. Gemeinsame Komponenten: Button, Region, ProductHero, MediaStage und ClosingCta; Header, Mobilmenü, Formular und Cookie-Buttons sind angeglichen.

AuthenticTrust-Inhalte folgen der neuen begrenzten Belegmatrix. Interne Dokumente und PDF-Nachweise werden nicht mehr pauschal gleichgesetzt. Der Leitfaden ist in Titel/Schema branchenoffen, NodeX verwendet ein eigenes Produktmotiv, Leistungen erhalten passende Service-Semantik, Sitemap/llms und die Informationsarchitektur sind aktualisiert.

Search Console wurde erfolgreich mit der passenden opny.ai-Domainproperty verbunden. Die technische Indexprüfung bestätigt Indexierung und passende Google-Canonicals der drei Hauptseiten auf dem jeweiligen letzten Crawlstand vor diesem Umbau. Private Leistungsdaten bleiben ausschließlich unter `docs/qa/website-unification-20261123/gsc-audit.md` (Git-ignoriert). SERP-Stichproben mit anomalem Markenabruf wurden nicht als belastbare freie Rankings ausgegeben. Keine wiederkehrenden Prüfungen oder Käufe eingerichtet.

Erster Produktionsbuild und Lintprüfung erfolgreich. Im Browser wurde unnötiges dynamisches Vorabladen von Anfrage-URLs festgestellt und gezielt bei queryführenden CTA-Links deaktiviert; tatsächliche Navigation/Interessen bleiben erhalten. Frontend-Fachprüfung hat diesen begrenzten Eingriff vor erneutem Build freigegeben. Lange deutsche Überschriften erhalten belastbaren Umbruch bei Textvergrößerung.

Visuelle Prüfung aller14 Seitentypen bestätigt den gemeinsamen Auftritt. Ein Qualitätsbefund zur Produktübersicht wurde aufgenommen: Statt des hohen eingebetteten Videos verwenden beide Produktkarten gleich proportionierte16:10-Produktvorschauen; das NodeX-Video bleibt auf der Produktseite. Gründertext steht im Hero oben statt vertikal in einer hohen Portraitkarte zentriert. Lange Überschriften werden auf kleinen Ansichten unterstützt, ohne unnötige Desktop-Trennungen. Diese gezielten Korrekturen folgen der beauftragten visuellen Fachprüfung.

## Abnahme der Endfassung

- Product-Owner-Gate erfüllt: UI/UX, Frontend/Media und SEO/AEO/LLMO vor Build freigegeben; abschließende visuelle Freigabe ohne offene Blocker.
- Produktionsbuild mit gesetzter fiktiver öffentlicher Analytics-ID erfolgreich, ESLint ohne Fehler/Warnungen; drei bestehende Anfrage-Regressionstests erfolgreich.
- 14 Seitentypen bei390 und1440px geprüft (28 Ansichten): HTTP200, eindeutige H1/Titel, Canonicals, Beschreibungen, geladene Bilder, keine horizontalen Überläufe. Gleicher Akzent und gleiche primäre Buttonradien/Farben in den geprüften Ansichten.
- Acht Hauptseiten zusätzlich bei320/768/1024px und mit200%Schrift einschließlich Header geprüft. FAQ-Markup entspricht den sichtbaren Antworten. Tastaturmenü/Escape/Fokusrückgabe und FAQ-Enter funktionieren.
- AuthenticTrust-/NodeX-Anfragewege und bestehende Vorauswahl erhalten; Kundenlogin führt auf die geprüfte AuthenticTrust-Anmeldung. Kein echter E-Mailversand.
- Cookie-/Hydration-Prüfung mit aktiver Analytics-Codevariante für neue, ablehnende und zustimmende Besucher erfolgreich; nach Ablehnung keine Analytics-Anfragen. Analyticsaufrufe in der Prüfung simuliert.
- Visuell alle14Seitentypen geprüft. Korrigierte Produktübersicht, Über-Seite und NodeX-Medien erneut freigegeben. Letzter Browserdurchlauf ohne JavaScript-Fehler.
- Browserwerkzeug: Chrome/Playwright. Lokale Screenshots und Detailprotokolle liegen Git-ignoriert unter `docs/qa/website-unification-20261123/`.

## Veröffentlichung

Veröffentlichung aus dem bestehenden Repository `OpnyAI/opny-neu` im bestehenden Vercel-Projekt `opny-neu`, Team `team_UtjNWaK9236evD0ZEc8tA64R`, Projekt `prj_qf1EMRUTNJqRZquQnP3yf1c2Edxq`. Öffentliche Nachprüfung und Deployment-ID folgen nach erfolgreicher Veröffentlichung. Die technischen Maßnahmen sind keine Garantie für Ranking, Indexierung der neuen Fassung oder KI-Zitate.

## Verifiziertes Produktionsergebnis

Am23.11.2026 auf **https://www.opny.ai/** veröffentlicht (auch`opny.ai`):

- Status READY, Production, Next.js16.2.12.
- Release-Commit `43b698f66572298380567fd2f1a28e02c75e7402`.
- Deployment `dpl_CduPpJHYE49BmhLdKS4Kirq8agK6`, Domains zugeordnet, kein Aliasfehler. Vercel-Buildphase etwa22Sekunden.
- Öffentliche Browserprüfung aller14Seitentypen bei390/1440px erfolgreich; acht Hauptseiten zusätzlich320/768/1024 und200%Schrift. Keine JavaScript-Fehler; Metadaten, Canonicals, FAQ-Daten, Produktbilder, konsistente Buttonfarben/Radien und kontextbezogene Anfragewege geprüft.
- Öffentliche Cookie-/Hydration-Prüfung mit neuen, ablehnenden und zustimmenden Besuchern erfolgreich. Nach Ablehnung keine Analyticsanfragen, Zustimmungspfad mit simulierten Analyticsanfragen geprüft. Kein echter E-Mailversand.
- Vercel-Abfrage für error/fatal-Protokolle dieses Deployments im abgefragten10-Minutenfenster lieferte keine Einträge; das ist kein Nachweis dauerhafter Fehlerfreiheit.
- Öffentliches Prüfprotokoll und Screenshots: `docs/qa/website-unification-20261123/live/` (Git-ignoriert). Search-Console-Detaildaten bleiben ebenfalls nur im ignorierten QA-Verzeichnis.

Zusätzlicher nativer SSR-SEO-Crawl der Endfassung abgeschlossen:20/20URLs (14Seiten und6Kontaktparameter), alleHTTP200 mit erfolgreichem Abruf, jeweils eineH1 und keine fehlenden Bildalternativtexte. Keine kritischen Fehler oder Warnungen. Sieben reine Informationshinweise: sechs gewollte kanonische Kontaktparameter und eine kurze sachliche Impressumsbeschreibung. Keine Crawlfehler, kein Crawlstopp. Kein Lighthouse-Labortest in diesem Crawl. Native Prüfung verbrauchte keine zusätzlichen Credits; keine wiederkehrende Überwachung oder automatische Kostenplanung eingerichtet. Details liegen ausschließlich im ignorierten `public-seo-audit.md` neben dem privaten GSC-Bericht.
