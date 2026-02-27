import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | opny.ai",
  description: "Impressum der Opny AI mit Kontakt- und Pflichtangaben.",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Impressum
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Anbieterkennzeichnung
          </h1>
          <p className="text-base leading-relaxed text-text-muted-light">
            Pflichtangaben nach § 5 DDG und § 18 Abs. 2 MStV.
          </p>
        </div>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Anbieter
          </h2>
          <p>
            Opny AI
            <br />
            Ein Angebot der Novationtec GmbH
            <br />
            <br />
            Novationtec GmbH
            <br />
            An der Schelmenhalde 35
            <br />
            71665 Vaihingen an der Enz
            <br />
            Deutschland
          </p>
          <p>
            Vertreten durch: Gregor Kasmann
            <br />
            <br />
            Registereintrag:
            <br />
            Eintragung im Handelsregister
            <br />
            Registergericht: Stuttgart
            <br />
            Registernummer: HRB798148
          </p>
          <p>
            Telefon:{" "}
            <a className="hover:text-text-primary-light" href="tel:+4915111956479">
              +49 1511 1956479
            </a>
            <br />
            E-Mail:{" "}
            <a className="hover:text-text-primary-light" href="mailto:info@opny.ai">
              info@opny.ai
            </a>
          </p>
          <p>Umsatzsteuer-ID: DE367221694</p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Haftungsausschluss
          </h2>
          <h3 className="text-lg font-semibold text-text-primary-light md:text-xl">
            Haftung für Inhalte
          </h3>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
            gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Verantwortlich für den Inhalt
          </h2>
          <p>
            Verantwortlich im Sinne des § 18 Abs. 2 MStV (zuvor § 55 Abs. 2
            RStV): Gregor Kasmann
          </p>
        </section>

        <section className="space-y-3 text-base text-text-muted-light">
          <h2 className="text-xl font-semibold text-text-primary-light md:text-2xl">
            Online-Streitbeilegung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              className="hover:text-text-primary-light"
              href="https://europa.eu/consumers/odr/"
              target="_blank"
              rel="noreferrer"
            >
              europa.eu/consumers/odr/
            </a>
            .
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </main>
  );
}
