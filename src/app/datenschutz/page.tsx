import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | opny.ai",
  description:
    "Datenschutzhinweise zur Verarbeitung personenbezogener Daten auf opny.ai.",
};

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
            Allgemeine Hinweise
          </h2>
          <p>
            Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit
            dies für den Betrieb der Website, die Bereitstellung von Funktionen
            und die Beantwortung von Anfragen erforderlich ist.
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Hosting bei Vercel
          </h2>
          <p>
            Unsere Website wird bei Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, USA gehostet. Beim Aufruf der Website werden
            Logdaten (z. B. IP-Adresse, Browserinformationen und Zugriffszeiten)
            verarbeitet, um den Betrieb zu ermöglichen und abzusichern.
          </p>
          <p>
            Wir haben mit Vercel einen Vertrag zur Auftragsverarbeitung (DPA)
            gemäß Art. 28 DSGVO abgeschlossen. Die Speicherung erfolgt nach
            Möglichkeit auf Servern innerhalb der EU. Es kann jedoch nicht
            ausgeschlossen werden, dass Daten in die USA übertragen werden.
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
            Kontaktaufnahme
          </h2>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, speichern wir Ihre Angaben zur
            Bearbeitung der Anfrage. Die Kommunikation per E-Mail erfolgt
            unverschlüsselt.
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Einsatz von OpenAI
          </h2>
          <p>
            Wenn Sie KI-Funktionen auf dieser Website nutzen, werden Ihre
            Eingaben an die OpenAI-API (OpenAI, L.L.C., USA) übermittelt und
            dort verarbeitet. Weitere Informationen finden Sie in der Privacy
            Policy von OpenAI:{" "}
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
            Ihre Rechte
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Auskunft über die zu Ihrer Person gespeicherten Daten</li>
            <li>Berichtigung unrichtiger oder unvollständiger Daten</li>
            <li>Löschung Ihrer Daten, soweit keine Aufbewahrungspflichten bestehen</li>
            <li>Einschränkung der Verarbeitung in bestimmten Fällen</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen die Verarbeitung Ihrer Daten</li>
          </ul>
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

        <div className="text-sm text-text-secondary-light">Stand: Januar 2026</div>
      </div>
    </main>
  );
}
