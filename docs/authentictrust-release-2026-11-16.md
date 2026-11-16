# AuthenticTrust: Umbenennung und Öffnung der Zielgruppe

## Product-Owner-Entscheidung

Auftrag: TrustArch heißt AuthenticTrust. Die Website soll Unternehmen über Automotive-Zulieferer hinaus ansprechen und anschließend veröffentlicht werden.

Zielgruppe: Verantwortliche für Informationssicherheit, Qualität und Compliance sowie Teams mit verteilten Anforderungen, Dokumenten, Freigaben und Nachweisen. Beispiele sind Industrie, Technologie und Dienstleistungen; Automotive bleibt ein spezialisierter Einstieg.

Nutzerentscheidung: Passt AuthenticTrust zur eigenen Managementsystem-Arbeit, passt NodeX zur kontrollierten KI-Nutzung oder ist zuerst Beratung/Schulung sinnvoll? Der nächste Schritt bleibt Demo beziehungsweise Erstgespräch.

## Umsetzung

- Produktseite und Canonical unter `/produkte/authentictrust`; `/produkte/trustarch` wird permanent weitergeleitet.
- Startseite, Navigation, Footer, Produktvergleich, Kontakt, Metadaten, JSON-LD, Sitemap, Webmanifest und `llms.txt` verwenden die neue Bezeichnung beziehungsweise branchenoffene Ansprache.
- `/loesungen` bietet einen allgemeinen Einstieg in Beratung, Schulung und Governance. Generische alte Leistungswege führen dorthin; Automotive-Spezialseiten bleiben bestehen.
- Kontaktformular und API verwenden dieselbe Interessenliste. Alte TrustArch-Demo- und Automotive-Anfragelinks werden auf aktuelle Optionen normalisiert.
- Produktbilder werden aus der vorhandenen Demo mit neuer Bezeichnung erzeugt. Der alte, sichtbar als TrustArch gebrandete Videorundgang wird nicht mehr eingebunden. Originalmedien und historische Produktbelege bleiben erhalten.

## Fachprüfung und Grenzen

SEO-/Content-Fachprüfung: Produktabgrenzung, Canonical/Redirect, Kontaktwege und allgemeine Zielgruppenansprache geprüft. Beanstandete globale Automotive-Footerzeile korrigiert; Webmanifest ebenfalls geöffnet.

UI-/Frontend-Fachprüfung: Vier reale Demo-Aufnahmen mit AuthenticTrust erstellt, als Beispieldaten gekennzeichnet und auf 1600 × 1000 geprüft. Produktseite und allgemeine Einstiege bei 1280 px und 390 px im Browser geprüft; keine horizontale Überbreite an den geprüften mobilen Einstiegen.

Keine neuen Garantien zu Zertifizierung, Rechtssicherheit, vollständiger Normabdeckung oder pauschaler Zeitersparnis. Bestehende Grenzen zu TISAX, schrittweiser ISO-Erweiterung und fachlicher Verantwortung bleiben erhalten. Opny bleibt Dachmarke; NodeX wird nicht umbenannt.

## Prüf- und Veröffentlichungsstand

Lint und Produktionsbuild erfolgreich. HTTP-Prüfung der Produkt-, Lösungs- und Kontaktwege, permanenter Alt-URL-Redirect, Canonical und Sitemap erfolgreich. Alte Kontaktinteressen werden korrekt normalisiert. Am 16.11.2026 aus Commit `ffde3648c39f50275095f998222ca7bf82e7167a` über das bestehende Vercel-Projekt veröffentlicht. Deployment `dpl_8sG6gU6VpKzKZyHFqPextYKs7756` ist READY und den Domains `www.opny.ai` und `opny.ai` zugeordnet.

Öffentlich geprüft: Startseite, neue Produktseite, allgemeine Lösungsseite, Kontakt-Vorauswahl auch mit altem TrustArch-Link, Sitemap, llms.txt und alle vier neuen Bilddateien erreichbar. Alter Produktweg antwortet mit HTTP 308 auf den neuen Weg. Live-Produktseite im Browser geprüft; Canonical korrekt, sichtbarer Produktname AuthenticTrust. Keine Kontakt-E-Mail versendet.
