"use client";

export default function DatenschutzPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Datenschutz
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Hinweise zum Datenschutz
          </h1>
          <p className="text-base leading-relaxed text-text-muted-light">
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend
            informieren wir Sie klar und verständlich über die Verarbeitung auf
            dieser Website.
          </p>
        </div>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO)
          </h2>
          <p>
            Novationtec GmbH
            <br />
            An der Schelmenhalde 35
            <br />
            71665 Vaihingen an der Enz
            <br />
            Deutschland
          </p>
          <p>
            Kontakt:{" "}
            <a className="hover:text-text-primary-light" href="mailto:info@opny.ai">
              info@opny.ai
            </a>
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Umfang und Begriffe
          </h2>
          <p>
            Personenbezogene Daten sind alle Informationen, die sich auf eine
            identifizierte oder identifizierbare natürliche Person beziehen.
            Verarbeitung meint jeden Umgang mit solchen Daten, etwa Erheben,
            Speichern, Übermitteln oder Löschen. Endgerät- und
            Cookie-Technologien sind Speicher- oder Zugriffsvorgänge auf Ihrem
            Endgerät, z. B. über Cookies, Local Storage oder ähnliche
            Technologien.
          </p>
          <p>
            Diese Datenschutzhinweise gelten für die Nutzung dieser Website und
            die damit verbundenen Verarbeitungen.
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Rechtsgrundlagen
          </h2>
          <p>
            Wir verarbeiten personenbezogene Daten auf Grundlage von Art. 6 Abs.
            1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO
            (Vertragserfüllung oder Vertragsanbahnung, insbesondere bei
            Kontaktanfragen) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse, z. B. sicherer und stabiler Betrieb der Website).
          </p>
          <p>
            Soweit für Analyse- oder Marketingzwecke ein Zugriff auf Informationen
            in Ihrem Endgerät erfolgt oder solche Informationen gespeichert
            werden, erfolgt dies auf Grundlage der Einwilligung nach den
            Vorgaben des TDDDG.
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Hosting bei Vercel
          </h2>
          <p>
            Unsere Website wird bei Vercel gehostet. Die Verarbeitung erfolgt
            zum Zweck der Auslieferung der Website sowie zur Gewährleistung von
            Stabilität und Sicherheit.
          </p>
          <p>
            Dabei können insbesondere IP-Adresse, Request-Informationen,
            Geräte- und Browserinformationen sowie Zeitstempel verarbeitet
            werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>
          <p>
            Vercel wird als Auftragsverarbeiter auf Grundlage eines Vertrags
            gemäß Art. 28 DSGVO eingesetzt. Eine Verarbeitung in Drittländern,
            insbesondere in den USA, kann nicht ausgeschlossen werden. In diesen
            Fällen erfolgen Übermittlungen auf Basis geeigneter Garantien,
            beispielsweise Standardvertragsklauseln (SCC).
          </p>
          <p>
            Protokolldaten werden regelmäßig gelöscht oder rotiert; die konkrete
            Dauer liegt je nach Hosting-Konfiguration typischerweise im Bereich
            von wenigen Tagen bis wenigen Wochen.
          </p>
          <p>
            Weitere Informationen finden Sie in der Datenschutzerklärung von
            Vercel:{" "}
            <a
              className="hover:text-text-primary-light"
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Einwilligungen und Cookie-Einstellungen
          </h2>
          <p>
            Analyse- und Marketingtechnologien werden erst nach Ihrer
            Einwilligung aktiviert. Sie können eine erteilte Einwilligung
            jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
          <p>
            Ihre Auswahl können Sie über{" "}
            <a
              href="#"
              className="hover:text-text-primary-light"
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new Event("open-cookie-settings"));
                }
              }}
            >
              Cookie-Einstellungen
            </a>{" "}
            anpassen.
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Google Analytics 4 (GA4)
          </h2>
          <p>
            Soweit eingesetzt, dient Google Analytics 4 der Reichweitenmessung
            und Analyse der Nutzung unserer Website. Die Aktivierung erfolgt nur
            nach Ihrer Einwilligung.
          </p>
          <p>
            Verarbeitet werden insbesondere Online-Kennungen (z. B.
            Cookie-/Client-ID), technisch übermittelte IP-Informationen,
            Geräte- und Browserdaten, Nutzungsdaten, regionsbezogene
            Standortdaten sowie Ereignisdaten.
          </p>
          <p>
            Empfänger können Google Ireland Limited sowie im Rahmen von
            Konzernzugriffen Google LLC in den USA sein. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit den Vorgaben des
            TDDDG. Drittlandübermittlungen erfolgen auf Basis geeigneter
            Garantien, beispielsweise Standardvertragsklauseln (SCC).
          </p>
          <p>
            Die Speicherdauer richtet sich nach den in Google Analytics
            konfigurierten Aufbewahrungsfristen. Ein Widerruf bzw. Opt-out ist
            jederzeit über die Cookie-Einstellungen möglich.
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Google Tag Manager (GTM)
          </h2>
          <p>
            Soweit eingesetzt, verwenden wir den Google Tag Manager zur
            Verwaltung und Ausspielung von Tags. Analyse- und Marketing-Tags
            werden erst nach erteilter Einwilligung ausgelöst.
          </p>
          <p>
            Im Rahmen des Einsatzes kann es zu technischer Verarbeitung kommen,
            z. B. von IP-Adresse und Request-Informationen. Für Analyse- und
            Marketing-Tags ist die Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO
            in Verbindung mit den Vorgaben des TDDDG.
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Google Consent Mode
          </h2>
          <p>
            Soweit genutzt, übermittelt der Google Consent Mode den
            Einwilligungsstatus an Google-Dienste. Ohne Einwilligung können
            lediglich eingeschränkte oder aggregierte Signale verarbeitet
            werden.
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Kontaktaufnahme
          </h2>
          <p>
            Bei einer Kontaktaufnahme verarbeiten wir die von Ihnen
            bereitgestellten Daten, insbesondere Name, E-Mail-Adresse,
            Nachrichtentext sowie technische Metadaten der Kommunikation.
          </p>
          <p>
            Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und für
            Rückfragen auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
            (Vertragsanbahnung) und/oder Art. 6 Abs. 1 lit. f DSGVO.
          </p>
          <p>
            Die Daten werden grundsätzlich bis zum Abschluss der Bearbeitung
            gespeichert; darüber hinaus nur, soweit gesetzliche
            Aufbewahrungspflichten bestehen.
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Einsatz von OpenAI
          </h2>
          <p>
            Bei Nutzung von KI-Funktionen können Inhalte und Eingaben sowie
            technische Metadaten an OpenAI zur Verarbeitung übermittelt werden,
            soweit dies zur Bereitstellung der angeforderten Funktion
            erforderlich ist.
          </p>
          <p>
            Die Verarbeitung erfolgt je nach Ausgestaltung auf Grundlage von Art.
            6 Abs. 1 lit. b DSGVO (angeforderte Leistung) oder Art. 6 Abs. 1
            lit. f DSGVO. Eine Verarbeitung in Drittländern, insbesondere in den
            USA, ist möglich. Übermittlungen erfolgen in diesen Fällen auf Basis
            geeigneter Garantien, beispielsweise Standardvertragsklauseln (SCC).
          </p>
          <p>
            Weitere Informationen finden Sie in der Datenschutzerklärung von
            OpenAI:{" "}
            <a
              className="hover:text-text-primary-light"
              href="https://openai.com/policies/privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              openai.com/policies/privacy-policy
            </a>
            .
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Empfänger und Auftragsverarbeiter
          </h2>
          <p>
            Wir setzen externe Dienstleister ein, insbesondere in den Bereichen
            Hosting, technische Bereitstellung, Analyse sowie KI-Funktionen.
          </p>
          <p>
            Soweit diese Dienstleister in unserem Auftrag tätig sind, erfolgt die
            Verarbeitung auf Grundlage von Verträgen zur Auftragsverarbeitung
            gemäß Art. 28 DSGVO.
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Ihre Rechte
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Auskunft über die zu Ihrer Person gespeicherten Daten</li>
            <li>Berichtigung unrichtiger oder unvollständiger Daten</li>
            <li>Löschung Ihrer Daten, soweit keine Aufbewahrungspflichten bestehen</li>
            <li>Einschränkung der Verarbeitung in bestimmten Fällen</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen Verarbeitungen auf Basis von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)</li>
            <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
            <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
          </ul>
          <p>
            Zuständige Aufsichtsbehörde ist der Landesbeauftragte für den
            Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW):{" "}
            <a
              className="hover:text-text-primary-light"
              href="https://www.baden-wuerttemberg.datenschutz.de/"
              target="_blank"
              rel="noreferrer"
            >
              baden-wuerttemberg.datenschutz.de
            </a>
            .
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Datensicherheit
          </h2>
          <p>
            Wir treffen technische und organisatorische Maßnahmen zum Schutz
            Ihrer Daten, insbesondere verschlüsselte Übertragung per TLS/HTTPS,
            Zugriffsbeschränkungen und weitere angemessene Maßnahmen zur
            Sicherung von Vertraulichkeit, Integrität und Verfügbarkeit.
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Kontakt für Datenschutzanfragen
          </h2>
          <p>
            Für Datenschutzanfragen erreichen Sie uns unter:{" "}
            <a className="hover:text-text-primary-light" href="mailto:info@opny.ai">
              info@opny.ai
            </a>
            .
          </p>
        </section>

        <div className="text-sm text-text-secondary-light">Stand: Februar 2026</div>
      </div>
    </main>
  );
}
