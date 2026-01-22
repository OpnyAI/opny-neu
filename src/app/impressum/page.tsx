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
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Impressum
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-text-primary-light sm:text-4xl">
            Anbieterkennzeichnung
          </h1>
          <p className="text-base leading-relaxed text-text-muted-light">
            Pflichtangaben nach § 5 TMG und § 55 Abs. 2 RStV.
          </p>
        </div>

        <section className="space-y-3 text-sm text-text-muted-light">
          <h2 className="text-lg font-semibold text-text-primary-light">
            Opny AI
          </h2>
          <p>
            Inhaber: Mehmet Çatalsakal
            <br />
            Naumannstr. 3
            <br />
            73663 Berglen
            <br />
            Deutschland
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

        <section className="space-y-3 text-sm text-text-muted-light">
          <h2 className="text-lg font-semibold text-text-primary-light">
            Verantwortlich für den Inhalt
          </h2>
          <p>
            Verantwortlich nach § 55 Abs. 2 RStV: Mehmet Çatalsakal,
            Naumannstr. 3, 73663 Berglen.
          </p>
        </section>

        <section className="space-y-3 text-sm text-text-muted-light">
          <h2 className="text-lg font-semibold text-text-primary-light">
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
