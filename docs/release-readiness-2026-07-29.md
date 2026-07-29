# Release-Bereitschaft

Stand: 29. Juli 2026

## Freigabeumfang

- Release-Branch: `codex/opny-release-2026-07-29`
- Opny bleibt die Dachmarke; TrustArch und NodeX werden als getrennte Produkte
  dargestellt.
- Veröffentlicht werden nur die freigegebenen Kundenstimmen von Marek Wowra und
  Dr. Daniel Georges.
- Technologie- und Standardlogos werden nicht als Kundenreferenzen
  veröffentlicht.
- Der TrustArch-Ergebnistext zur simulierten A.8.24-Lücke ist ausschließlich
  für den freigegebenen Beispieldatensatz dokumentiert.
- Rohdemo, QA-Aufnahmen, lokale Screenshots und ungenutzte Quellmedien sind vom
  Release ausgeschlossen.

## Technischer Stand

- `next` und `eslint-config-next` sind exakt auf `16.2.12` festgelegt.
- React und React DOM bleiben auf `19.2.3`.
- Der Produktionsbuild verwendet weiterhin Webpack.
- Lint und Produktionsbuild müssen unmittelbar vor dem Commit erneut
  erfolgreich durchlaufen.

## Dokumentiertes Upstream-Risiko

`npm audit --omit=dev` meldet in der aktuellen stabilen Next.js-Version noch
drei hohe Befunde in transitiven Abhängigkeiten von Next.js: PostCSS und Sharp.
Es werden bewusst weder `npm audit fix --force`, eine Vorschauversion von
Next.js noch Paket-Overrides eingesetzt, da dies einen Downgrade oder ein nicht
abgesichertes Verhalten der Bildoptimierung verursachen könnte.

Die Website verarbeitet keine hochgeladenen oder externen Bilder. Sharp erhält
nur kontrollierte lokale Website-Medien. Der Befund wird beim nächsten stabilen
Next.js-Update erneut geprüft.

## Vercel und Kontaktformular

- Bestehendes Zielprojekt: Team `opny-ais-projects`, Projekt `opny-neu`.
- Produktionsdomains: `www.opny.ai` und `opny.ai`.
- Das Kontaktformular nutzt Resend ausschließlich serverseitig.
- Erforderliche Variablennamen: `RESEND_API_KEY`, `CONTACT_TO_EMAIL` und
  `CONTACT_FROM_EMAIL`.
- Werte und API-Schlüssel werden weder im Repository noch in diesem Dokument
  gespeichert.
- Vor dem Produktionsrelease werden die Variablennamen in Vercel geprüft und
  das Formular in einer Vorschau ausschließlich mit einer eigenen Testadresse
  getestet.

## Release-Gate

Der Produktionsrelease ist erst freigegeben, wenn:

1. die lokale Verknüpfung auf das bestehende Vercel-Projekt zeigt,
2. die drei Resend-Variablen für die richtige Umgebung vorhanden sind,
3. eine Vorschau erfolgreich gebaut wurde,
4. ein kontrollierter Formularversand an eine eigene Adresse funktioniert und
5. Desktop- und Mobilansichten ohne blockierende Fehler geprüft wurden.
