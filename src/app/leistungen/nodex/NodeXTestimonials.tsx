import Image from "next/image";
import Card from "@/components/ui/Card";
import Region from "@/components/Region";
import CustomerReferencesStrip from "@/components/CustomerReferencesStrip";

const testimonials = [
  {
    name: "Marek Wowra",
    position: "Geschäftsführer",
    company: "IPOsystem",
    image: "/testimonials_ceo/marek.png",
    quote:
      "Vor NodeX war unsere KI-Nutzung kaum kontrollierbar. Mit NodeX haben wir den Schritt zu strukturierter, sicherer KI-Nutzung geschafft.",
    benefits: [
      "Schatten-KI sichtbar reduziert",
      "Datenflüsse kontrollierter",
      "KI-Kosten zentral nachvollziehbar",
      "gemeinsamer KI-Workspace für Teams",
    ],
    longQuote:
      "Mittelständisches Technologie- und Dienstleistungsunternehmen. Als Geschäftsführer stand ich vor einem massiven Dilemma: Ich wusste, dass wir Künstliche Intelligenz nutzen müssen, um wettbewerbsfähig zu bleiben, aber die Realität in unserem Unternehmen sah eher nach Wildwest aus. Fast 80 % unserer Mitarbeiter nutzten auf eigene Faust irgendwelche KI-Tools. Keiner wusste genau, welche Firmendaten wo hochgeladen wurden, die Kosten waren völlig unübersichtlich und unsere Compliance-Abteilung schlug Alarm. Mit NodeX haben wir endlich den Schalter umgelegt - von unkontrollierter Schatten-KI hin zu einem echten, produktiven Enterprise-Betrieb. NodeX hat uns genau den Kontroll-Layer gegeben, der uns gefehlt hat.",
  },
  {
    name: "Dr. Daniel Georges",
    position: "Director of Business Development",
    image: "/testimonials_ceo/georges.png",
    quote:
      "NodeX hat aus isolierten KI-Experimenten einen gemeinsamen Workspace gemacht. Wissen, Prompts und Routinen werden endlich im Team nutzbar.",
    benefits: [
      "gemeinsamer KI-Workspace",
      "Prompts und Wissen im Team nutzbar",
      "sensible Daten verlassen das Unternehmen nicht unkontrolliert",
      "schnellere Auswertung von Dokumenten und Feedback",
    ],
    longQuote:
      "Vor der Einführung von NodeX standen wir in unserer Abteilung oft auf der Bremse. Wir wussten genau, wie sehr uns KI bei der täglichen Arbeit helfen könnte. Aber aus Angst vor Datenschutzverstößen und wegen strenger IT-Vorgaben haben wir KI entweder gar nicht genutzt oder jeder hat für sich allein in isolierten Tools experimentiert. NodeX hat für uns den Knoten zum Platzen gebracht. Mein Team hat jetzt einen zentralen, gemeinsamen KI-Workspace.",
  },
  {
    name: "Julia Bergmann",
    position: "Senior Projektleiterin, Digitale Transformation",
    image: "/testimonials_ceo/julia.png",
    quote:
      "Mit NodeX arbeiten Projektteams im gleichen KI-Kontext. Dokumente, Prompts und Entscheidungen bleiben nachvollziehbar.",
    benefits: [
      "Shared Workspace pro Projekt",
      "weniger Kontextverlust",
      "schnelleres Onboarding",
      "nachvollziehbare Projektentscheidungen",
    ],
    longQuote:
      "Als Projektleiterin jongliere ich täglich mit riesigen Mengen an Anforderungen, Spezifikationen und Timings. Vor NodeX glich unsere KI-Nutzung in Projektteams einem unkoordinierten Flickenteppich. NodeX hat unsere Projektarbeit grundlegend verändert. Wir nutzen jetzt für jedes große Projekt einen eigenen Shared Workspace.",
  },
];

export function NodeXTrustStrip() {
  return <CustomerReferencesStrip containerClassName="py-6 md:py-8" />;
}

export function NodeXTestimonials() {
  return (
    <Region variant="light" tone="base">
      <div className="max-w-3xl space-y-4">
        <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
          SOCIAL PROOF
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
          So nutzen Unternehmen KI – ohne dass Daten unkontrolliert nach außen gelangen
        </h2>
        <p className="text-base leading-relaxed text-text-muted-light">
          Unternehmen nutzen KI bereits. NodeX sorgt dafür, dass Teams produktiv arbeiten, während Datenflüsse, Nutzung und Kosten kontrollierbar bleiben.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.name}
            theme="light"
            className={[
              "flex h-full flex-col p-5",
              index === 0 ? "bg-white" : "",
            ].join(" ")}
          >
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.image}
                alt={`${testimonial.name}, ${testimonial.position}`}
                width={64}
                height={64}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <div className="text-base font-semibold text-text-primary-light">
                  {testimonial.name}
                </div>
                <div className="text-sm leading-snug text-text-muted-light">
                  {testimonial.position}
                  {"company" in testimonial && testimonial.company ? (
                    <>
                      <br />
                      {testimonial.company}
                    </>
                  ) : null}
                </div>
              </div>
            </div>

            <blockquote className="mt-4 text-base leading-relaxed text-text-primary-light">
              “{testimonial.quote}”
            </blockquote>

            <div className="mt-5 flex flex-wrap gap-2">
              {testimonial.benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="rounded-full border border-border-subtle-light/25 bg-[rgb(var(--opny-bg-alt))] px-3 py-1 text-xs font-medium text-text-muted-light"
                >
                  {benefit}
                </span>
              ))}
            </div>

            <details className="mt-5 text-sm text-text-muted-light">
              <summary className="cursor-pointer font-semibold text-text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-subtle-light/35 focus-visible:ring-offset-2">
                Mehr Kontext
              </summary>
              <p className="mt-3 leading-relaxed">{testimonial.longQuote}</p>
            </details>
          </Card>
        ))}
      </div>
    </Region>
  );
}
