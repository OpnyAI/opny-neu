# Bedienung und einheitliches Petrol-Design · 23.11.2026

## Product-Owner-Brief vor Umsetzung

Zielgruppe: Teams für Informationssicherheit, Qualität und Unternehmensführung sowie Interessenten für kontrollierte KI-Nutzung. Nutzerproblem: Bilder öffnen ohne Rückkehrmöglichkeit als Rohdatei im neuen Tab, Abschlussbereiche und Produkteinstiege wirken unterschiedlich. Gewünschte Entscheidung: Produkt verständlich und bequem prüfen, dann passende Demo/Anfrage wählen.

UI/UX, Frontend/Media und SEO/AEO wurden beauftragt und haben die Ursachen eingegrenzt. Priorität1: gemeinsame schließbare Bildansicht und einheitliche Abschlusskomponente. Priorität2: aktives mobiles Beratungsmenü tatsächlich zuklappbar machen und gültige aria-controls-IDs, robuste Vollbildgeometrie, verständliche Formularvalidierung. Gleiche Container, Hero-Typografie und Abstände für die Produktseiten; Home bleibt kompakt. Fachliche Produkt-/Normaussagen und Freigabegrenzen werden beibehalten.

Nutzer hat die bisherige blaue Markenfarbe verworfen und ausdrücklich dunkles Petrol mit warmem Weiß gewählt. Globale Tokens für Hintergrund, Text, Links, Buttons, Focus, Diagramme und Abschlussbereiche werden durchgängig ersetzt. Bestehende Produkt-Screenshots und das Produktvideo zeigen die tatsächlichen Anwendungen und werden nicht künstlich umgefärbt.

Vor Build folgt die erneute Fachprüfung der konkreten Umsetzung; anschließend Build, Browser-/visuelle Prüfung und Veröffentlichung.

## Umsetzungsgate vor Build

Alle drei Fachprüfungen haben den konkreten Quellcode freigegeben: UI/UX, Frontend/Media/Barrierefreiheit und SEO/Links/Semantik. Product Owner bestätigt die Priorisierung. Das normale Vorschaubild bleibt serverseitig mit Alttext erhalten; der Dialog lädt sein Vollbild erst beim Öffnen. Native Escape-Schließung, sichtbare Controls und Scroll-/Fokusrückgabe werden nun im Browser geprüft. Keine neuen Kunden-, Integrations- oder Zertifizierungsaussagen. Kontrast der gewählten Tokens: Weiß/Petrol7,29:1, gedämpfter Text/warmesWeiß5,89:1, gedämpfterText/Alt5,55:1, hellerAbschlusstext/dunklesPetrol10,05:1.

## Befunde aus der ersten Browserrunde

Die erweiterte echte320px-Prüfung fand einen min-content-Überlauf im vollständigen Normkatalog (langes Informationssicherheitsmanagementsystem). Grid minmax(0,1fr), minimale Kartenbreite0 und sprachgerechter Umbruch beheben die Ursache. Der bisherige Zusatzbreitentest enthielt versehentlich einen zweiten390px-Aufruf; diese Prüflücke wurde korrigiert. NativeDialog ließ beim ersten Tab-Umlauf den Browserfokus kurz aus dem Dialog wechseln; explizite Tab-/ShiftTab-Führung ergänzt. Das Hochformatvideo wird im Split-Hero mit natürlichem Seitenverhältnis auf420px Höhe begrenzt. Gezielte erneute Frontend-Freigabe dieser Korrekturen liegt vor. Die sichtbare Vergrößern-Zeile ersetzt den redundanten Bedienhinweis in der Bildunterschrift.

## Abnahme vor Veröffentlichung

Production-Build und ESLint erfolgreich. Endfassung in Chrome/Playwright geprüft:

-15 Seiten bei390/1440px:30 Ansichten, erfolgreiche Abrufe, eindeutige H1/Titel, richtige Canonicals, Beschreibungen, FAQ/JSON-LD-Gleichheit, geladene Bilder, Kontext-CTAs und gemeinsame Petrol-Buttonfarbe/8px-Radien. Acht Hauptseiten zusätzlich mit tatsächlichen320/768/1024px sowie200% Schrift geprüft. Keine beobachteten horizontalen Elementüberläufe oder JavaScript-Fehler.
-Alle7 vergrößerbaren Bilder auf Home, AuthenticTrust und TISAX jeweils390/1366px geprüft:14 Fälle, keine neuen Tabs, Vergrößern/Einpassen, Bildscrollen, sichtbare Schließen-Buttons, Escape, Hintergrundklick, wiederholtes Öffnen, sechs Tab- und sechs ShiftTab-Schritte pro Fall, Rückkehr zu Auslöser und ursprünglicher Fensterposition/Overflowzustand.320px/200%-Dialog mit geladenem Bild und vollständig erreichbaren Controls geprüft.
-Home bei1280×650: Demo-CTA endet bei y564, vollständige Produktfigur bei y630.390×844: CTA bei y490. Gemeinsame Abschlusskarten auf Home, AuthenticTrust, NodeX, TISAX und Leistungen bei390/1440 gemessen: gleiche350/1200px-Breite,12px-Radius,40px24px bzw48px40px-Polsterung, Hintergrund#123B38, weiße Überschrift.
-NodeX-Video nach geladenen Metadaten440×744 bei249×420 dargestellt; natürliches Seitenverhältnis erhalten. Native Videosteuerung bleibt vorhanden.
-Mobile aktive Beratungsgruppe mehrfach zu/auf geprüft, gültige IDREF, Escape mit Fokusrückkehr. Formular blockiert bereinigte ungültige Namen/Unternehmen vor HTTP-Anfrage, erklärt/fokussiert betroffenes Feld und sendet bereinigte Werte im simulierten Erfolgspfad. Eine Browser-Anfrage wurde vollständig abgefangen, kein echter Versand.
-Drei isolierte Kontakt-API-Regressionstests bestanden. Cookie-/Hydrationtests für frische, ablehnende und zustimmende Besucher bestanden; Analytics-Aufrufe simuliert, nach Ablehnung keine Analytics-Anfragen.
-Finale visuelle UI/UX-Freigabe nach Prüfung von Heros, Home1280×650, Dialog390/1366 sowie320/200%, mobilen Menüs und Abschlusskarten erteilt. Product Owner gibt Veröffentlichung frei. QA-Artefakte nur im ignorierten docs/qa/interaction-petrol-20261123/.
