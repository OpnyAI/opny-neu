import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Region from "@/components/Region";
import HeroChatMock from "@/components/mocks/HeroChatMock";
import { companyCtas } from "@/config/site";
import HomeSocialProof from "./HomeSocialProof";

export const metadata: Metadata = {
  title: "KI Beratung & KI Trainings für Unternehmen | Opny",
  description:
    "Opny unterstützt Unternehmen bei KI Beratung, strukturierter KI Einführung und praxisnahen KI Trainings für ChatGPT, Claude, Gemini und Microsoft Copilot.",
  alternates: {
    canonical: "https://www.opny.ai/",
  },
  openGraph: {
    title: "KI Beratung & KI Trainings für Unternehmen | Opny",
    description:
      "Opny unterstützt Unternehmen bei KI Beratung, strukturierter KI Einführung und praxisnahen KI Trainings für ChatGPT, Claude, Gemini und Microsoft Copilot.",
    url: "https://www.opny.ai/",
    siteName: "Opny",
    locale: "de_DE",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Region variant="light" tone="base">
        <div className="grid min-w-0 items-center gap-10 lg:gap-14 md:grid-cols-2">
          <div className="min-w-0 max-w-[580px] space-y-6">
            <div className="space-y-4">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
                Opny
              </div>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary-light md:text-5xl">
                KI im Unternehmen strukturiert einführen, ohne Datenschutzchaos und
                Schatten-KI.
              </h1>
              <p className="max-w-[50ch] text-lg leading-relaxed text-text-muted-light md:text-xl">
                Opny begleitet Unternehmen von der ersten Strukturentscheidung
                bis zum kontrollierten Betrieb produktiver KI: mit Beratung für
                Zielbild und Governance, KI-Trainings für Teams und NodeX für
                die operative Plattformlogik.
              </p>
            </div>

            <ul className="space-y-3 text-base leading-relaxed text-text-muted-light md:text-lg">
              {[
                "Beratung für Einführungslogik, Governance und priorisierte Use Cases.",
                "KI-Trainings für ChatGPT, Copilot, Claude und produktive Workflows.",
                "NodeX für kontrollierte Nutzung, Transparenz und skalierbaren Betrieb.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href={companyCtas.generalInquiry}
                className="inline-flex items-center justify-center rounded-button px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent bg-white text-[#0B0F1A] border border-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:bg-white/95"
              >
                Erstgespräch anfragen
              </a>
              <Button href="/loesungen" variant="secondary" theme="light">
                Lösungen ansehen
              </Button>
            </div>
          </div>

          <div className="mt-10 flex min-w-0 w-full max-w-full justify-center overflow-x-clip md:mt-0 lg:justify-end">
            <div className="w-full min-w-0 max-w-[620px] self-center">
              <HeroChatMock className="max-w-full" />
            </div>
          </div>
        </div>
      </Region>

      <HomeSocialProof />

      <Region variant="light" tone="surface">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Einstieg
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Wie möchten Sie KI in Ihrem Unternehmen nutzen?
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Der richtige Einstieg hängt davon ab, ob Sie die KI-Einführung im
              Unternehmen planen, Teams befähigen oder bestehende KI-Nutzung
              kontrollieren möchten.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                eyebrow: "KI-Beratung",
                title: "Strategie und Roadmap",
                text: "Strategie, Use Cases und klare Roadmap für den sicheren KI-Einsatz.",
                href: "/loesungen/ki-beratung",
                cta: "KI-Beratung ansehen",
              },
              {
                eyebrow: "KI-Trainings",
                title: "Teams produktiv machen",
                text: "Teams produktiv mit ChatGPT, Copilot und modernen KI-Workflows machen.",
                href: "/loesungen/ki-trainings",
                cta: "KI-Trainings ansehen",
              },
              {
                eyebrow: "NodeX",
                title: "KI kontrolliert betreiben",
                text: "KI-Nutzung kontrollieren, Daten schützen und skalierbar betreiben.",
                href: "/produkte/nodex",
                cta: "NodeX ansehen",
              },
            ].map((entry) => (
              <Card
                key={entry.eyebrow}
                theme="light"
                className="flex h-full min-w-0 flex-col p-6"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                  {entry.eyebrow}
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-tight text-text-primary-light md:text-2xl">
                  {entry.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-muted-light">
                  {entry.text}
                </p>
                <div className="mt-auto pt-6">
                  <Button href={entry.href} variant="secondary" theme="light">
                    {entry.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="base">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              KI-Trainings
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              KI-Trainings für Unternehmen
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Wir machen Teams sicher im Umgang mit ChatGPT, Claude, Microsoft Copilot und Prompt Engineering – mit Übungen, die direkt zu Rollen, Daten und Arbeitsprozessen passen.
            </p>
            <Button href="/loesungen/ki-trainings" variant="primary" theme="light">
              KI-Trainings ansehen
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {[
              "Produktivität steigern",
              "Sicherheit im Umgang mit Daten",
              "Strukturierte Workflows",
            ].map((benefit) => (
              <Card key={benefit} theme="light" className="p-5">
                <h3 className="text-lg font-semibold text-text-primary-light">
                  {benefit}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Beratung
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Nicht jedes Unternehmen braucht sofort KI
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Wir zeigen Ihnen ehrlich, wo KI in Ihrem Unternehmen wirklich Sinn macht – und wo nicht.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <a
              href={companyCtas.generalInquiry}
              className="inline-flex items-center justify-center rounded-button bg-text-primary-light px-5 py-2.5 text-sm font-semibold text-text-primary-dark shadow-card-light transition hover:opacity-90"
            >
              Erstgespräch anfragen
            </a>
          </div>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Orientierung
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Erst Struktur schaffen, Teams befähigen, dann kontrolliert skalieren.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Wenn Zielbild, Governance und Zuständigkeiten noch nicht sauber
              stehen, beginnt der sinnvolle Weg mit KI-Beratung für Unternehmen.
              KI-Trainings bringen die Anwendung in den Alltag. Wenn produktive
              KI bereits operativ kontrolliert werden muss, führt der nächste
              Schritt zu NodeX.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card theme="light" className="flex h-full flex-col p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                Einstieg über Beratung und Training
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-text-primary-light md:text-2xl">
                Ich will KI strukturiert einführen und Teams befähigen
              </h3>
              <p className="mt-3 text-base leading-relaxed text-text-muted-light">
                Sie brauchen einen belastbaren Einführungsweg, klare Prioritäten
                und Trainings, bevor aus einzelnen KI-Initiativen ein weiterer
                unsicherer Flickenteppich wird.
              </p>
              <ul className="mt-5 space-y-2 text-base text-text-muted-light">
                {[
                  "Use Cases priorisieren und realistisch bewerten",
                  "Datenschutz, Rollen und Verantwortung gemeinsam ordnen",
                  "Teams mit ChatGPT Training und KI-Workflows vorbereiten",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  href="/loesungen/ki-beratung"
                  variant="primary"
                  theme="light"
                >
                  KI-Beratung für Unternehmen
                </Button>
              </div>
            </Card>

            <Card theme="light" className="flex h-full flex-col p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                Einstieg über Produkt
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-text-primary-light md:text-2xl">
                Ich brauche Kontrolle, Governance und Plattformlogik für produktive KI
              </h3>
              <p className="mt-3 text-base leading-relaxed text-text-muted-light">
                Sie brauchen einen operativen Layer, der Nutzung, Richtlinien,
                Datenpfade und Transparenz zusammenhält, statt weiteres
                Tool-Chaos und neue Freigaberisiken zu erzeugen.
              </p>
              <ul className="mt-5 space-y-2 text-base text-text-muted-light">
                {[
                  "Zentrale Kontrolle über Nutzung, Rollen und Kosten",
                  "Governance und sichere Freigaben im laufenden Betrieb",
                  "Plattformlogik für Teams, Anwendungen und interne KI-Produkte",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href="/produkte/nodex" variant="secondary" theme="light">
                  NodeX ansehen
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
              Unternehmensrealität
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              KI wird in Unternehmen längst genutzt. Das Problem ist: oft ohne
              gemeinsame Steuerung.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Fachbereiche testen Tools, Teams bauen eigene Workarounds, IT
              versucht Risiken einzuhegen und Datenschutz wird erst spät
              operativ gedacht. Genau daraus entstehen unklare Zuständigkeiten,
              Schatten-KI und ein Einführungsweg, der nicht trägt.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid gap-8 sm:grid-cols-2">
              {[
                {
                  value: "Teams",
                  label:
                    "nutzen KI oft schon im Alltag, bevor Regeln, Freigaben und Zuständigkeiten sauber geklärt sind.",
                },
                {
                  value: "IT",
                  label:
                    "soll Datenschutz, Zugriffe und Betrieb absichern, ohne Fachbereiche komplett auszubremsen.",
                },
                {
                  value: "Fachbereiche",
                  label:
                    "brauchen belastbare Anwendungsfälle statt lose Tools, Pilotinseln und neue Einzellösungen.",
                },
                {
                  value: "Management",
                  label:
                    "erwartet Wirkung und Kontrolle, bekommt aber oft keine nachvollziehbare Einführungslogik.",
                },
              ].map((stat) => (
                <Card key={stat.value} theme="light" className="h-full p-5">
                  <div className="text-2xl font-semibold tracking-tight text-text-primary-light md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-text-muted-light">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-sm text-text-secondary-light">
              Genau hier entsteht der Bedarf für Beratung, Governance und einen
              operativen Produktiv-Layer.
            </div>
          </div>
        </div>
      </Region>

      <Region variant="light" tone="base">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Leistungen
            </div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-text-primary-light md:text-4xl">
              Beratung, Trainings und NodeX greifen ineinander.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Die Beratung klärt Zielbild, Governance und Einführungslogik.
              KI-Trainings befähigen Teams im Alltag. NodeX übersetzt diese
              Struktur anschließend in kontrollierten operativen Betrieb.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card theme="light" className="flex h-full flex-col p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                KI-Beratung für Unternehmen
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-text-primary-light md:text-2xl">
                Für Unternehmen, die KI strukturiert einführen statt nur Tools zu testen
              </h3>
              <p className="mt-3 text-base leading-relaxed text-text-muted-light">
                Die Beratung schafft Klarheit über Zielbild, relevante Use
                Cases, Governance und Einführungslogik. So entsteht ein
                realistischer Weg in die produktive Nutzung statt ein weiteres
                Pilotprojekt ohne Halt.
              </p>
              <ul className="mt-5 space-y-2 text-base text-text-muted-light">
                {[
                  "Für Entscheider, IT und Fachbereiche mit Einführungsbedarf",
                  "Für priorisierte Use Cases statt unkoordinierter Einzelinitiativen",
                  "Für belastbare Governance, Prozesse und Verantwortlichkeiten",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  href="/loesungen/ki-beratung"
                  variant="primary"
                  theme="light"
                >
                  KI-Beratung ansehen
                </Button>
              </div>
            </Card>

            <Card theme="light" className="flex h-full flex-col p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                KI-Trainings
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-text-primary-light md:text-2xl">
                Für Unternehmen, die Teams sicher und produktiv mit KI arbeiten lassen wollen
              </h3>
              <p className="mt-3 text-base leading-relaxed text-text-muted-light">
                Trainings übersetzen Strategie in Anwendung: ChatGPT, Claude,
                Microsoft Copilot und Prompt Engineering werden anhand realer
                Aufgaben, Datenregeln und Workflows trainiert.
              </p>
              <ul className="mt-5 space-y-2 text-base text-text-muted-light">
                {[
                  "Für Teams mit konkreten Aufgaben statt Tool-Demos",
                  "Für sichere Prompts, Datenregeln und Arbeitsroutinen",
                  "Für strukturierte Workflows, die im Alltag wiederholbar sind",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  href="/loesungen/ki-trainings"
                  variant="secondary"
                  theme="light"
                >
                  KI-Trainings ansehen
                </Button>
              </div>
            </Card>

            <Card theme="light" className="flex h-full flex-col p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
                NodeX
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-text-primary-light md:text-2xl">
                Für Unternehmen, die produktive KI sicher und kontrolliert betreiben müssen
              </h3>
              <p className="mt-3 text-base leading-relaxed text-text-muted-light">
                NodeX bündelt Kontrolle, Governance, Transparenz und
                Plattformlogik in einem operativen Layer. Damit KI-Nutzung nicht
                in Tool-Wildwuchs, unklaren Datenpfaden und unsicheren
                Workarounds endet.
              </p>
              <ul className="mt-5 space-y-2 text-base text-text-muted-light">
                {[
                  "Für Teams, IT und Verantwortliche, die zentrale Kontrolle brauchen",
                  "Für sichere Nutzung, klare Freigaben und nachvollziehbare Datenpfade",
                  "Für skalierbaren Betrieb statt lose Einzeltools",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href="/produkte/nodex" variant="secondary" theme="light">
                  NodeX ansehen
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Region>

      <Region variant="light" tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Datenschutz & Vertrauen
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Produktive KI wird erst dann belastbar, wenn Verantwortung
              mitgedacht wird.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Datenschutz, Rollen, Freigaben und Nachvollziehbarkeit sind keine
              spätere Compliance-Schicht, sondern die Voraussetzung dafür, dass
              KI im Unternehmen überhaupt verantwortbar skaliert werden kann.
            </p>
            <ul className="space-y-3 text-base text-text-muted-light">
              {[
                "Klare Zuständigkeiten verhindern Reibung zwischen IT, Fachbereichen und Datenschutz",
                "Nachvollziehbare Regeln reduzieren Schatten-KI und unsichere Einzelwege",
                "Saubere Freigaben schaffen Vertrauen in den produktiven Einsatz",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            <Card theme="light" className="p-6">
              <div className="text-lg font-semibold text-text-primary-light">
                Weniger Risiko, mehr Entscheidbarkeit
              </div>
              <p className="mt-3 text-base text-text-muted-light">
                Wenn Rollen, Daten und Freigaben geklärt sind, kann KI schneller
                eingeführt werden, weil Entscheidungen nicht ständig neu
                eskaliert werden müssen.
              </p>
            </Card>
            <Card theme="light" className="p-6">
              <div className="text-lg font-semibold text-text-primary-light">
                Vertrauen für produktiven Betrieb
              </div>
              <p className="mt-3 text-base text-text-muted-light">
                Eine saubere Governance schafft die Grundlage dafür, dass
                produktive Nutzung intern akzeptiert, verantwortet und später
                technisch sauber betrieben werden kann.
              </p>
            </Card>
          </div>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Beratungsansatz
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Beratung ist oft der pragmatischste Einstieg, wenn KI intern schon
              drängt, aber der Weg noch fehlt.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Opny arbeitet nicht an abstrakten Zukunftsbildern, sondern an den
              konkreten Fragen, die Unternehmen vor einer tragfähigen Einführung
              beantworten müssen: Wo starten wir? Wer verantwortet was? Welche
              Use Cases sind realistisch? Welche Governance trägt im Alltag?
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Strategie & Priorisierung",
                text: "Sie gewinnen ein klares Zielbild statt paralleler KI-Initiativen ohne gemeinsame Richtung.",
              },
              {
                title: "Use-Case-Workshops",
                text: "Sie wissen, welche Anwendungsfälle Wirkung bringen und welche aktuell nur Komplexität erzeugen.",
              },
              {
                title: "Governance-Setup",
                text: "Sie schaffen belastbare Regeln für Zuständigkeiten, Freigaben und Datenschutz im Alltag.",
              },
              {
                title: "Rollout & Begleitung",
                text: "Sie übersetzen Entscheidungen in Prozesse, Teams und eine realistische Einführungslogik.",
              },
            ].map((card) => (
              <Card key={card.title} theme="light" className="p-6">
                <h3 className="text-xl font-semibold text-text-primary-light md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-muted-light">
                  {card.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Region>

      <Region variant="light" tone="base">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              NodeX als Produktbaustein
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              Wenn aus Beratung belastbarer Betrieb werden soll, kommt NodeX ins Spiel.
            </h2>
            <p className="text-base leading-relaxed text-text-muted-light">
              Beratung schafft Zielbild, Priorisierung, Governance und
              Einführungslogik. NodeX operationalisiert diese Struktur im
              Betrieb und hält Nutzung, Kontrolle und Transparenz in einer
              gemeinsamen Plattformlogik zusammen.
            </p>
            <ul className="space-y-3 text-base text-text-muted-light">
              {[
                "NodeX übersetzt Governance in operativen Unternehmensbetrieb",
                "Teams arbeiten produktiv, ohne dass Kontrolle verloren geht",
                "IT, Fachbereiche und Management sehen dieselbe Betriebslogik statt fragmentierter Tools",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button href="/produkte/nodex" variant="secondary" theme="light">
                NodeX ansehen
              </Button>
            </div>
          </div>

          <Card theme="light" className="p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary-light">
              Vom Problem zum Betrieb
            </div>
            <div className="mt-4 space-y-3 text-base text-text-muted-light">
              {[
                "Die Beratung beantwortet zuerst die Einführungs- und Governance-Fragen.",
                "NodeX bildet diese Struktur anschließend im operativen KI-Betrieb ab.",
                "So entsteht ein durchgängiger Weg von Problem über Struktur bis zu skalierbarer Nutzung.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Region>

      <Region variant="light" tone="alt">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
            Wenn KI im Unternehmen nicht im Pilotmodus hängen bleiben soll,
            braucht es einen klaren nächsten Schritt.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-text-muted-light">
            Starten Sie mit einem Erstgespräch, wenn Zielbild, Governance oder
            Einführungslogik noch offen sind. Wenn Sie bereits in den
            kontrollierten Betrieb denken, führt der zweite Schritt zu NodeX.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={companyCtas.generalInquiry}
              className="inline-flex items-center justify-center rounded-button px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent bg-white text-[#0B0F1A] border border-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:bg-white/95"
            >
              Erstgespräch anfragen
            </a>
            <Button href="/produkte/nodex" variant="secondary" theme="light">
              NodeX ansehen
            </Button>
          </div>
        </div>
      </Region>
    </div>
  );
}
