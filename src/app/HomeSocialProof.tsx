import Image from "next/image";
import Card from "@/components/ui/Card";
import Region from "@/components/Region";
import CustomerReferencesStrip from "@/components/CustomerReferencesStrip";

const testimonials = [
  {
    quote:
      "Vor NodeX war unsere KI-Nutzung kaum kontrollierbar. Mit NodeX haben wir den Schritt zu strukturierter, sicherer KI-Nutzung geschafft.",
    name: "Marek Wowra",
    role: "Geschäftsführer, IPOsystem",
    image: "/testimonials_ceo/marek.png",
  },
  {
    quote:
      "NodeX hat aus isolierten KI-Experimenten einen gemeinsamen Workspace gemacht. Wissen, Prompts und Routinen werden endlich im Team nutzbar.",
    name: "Dr. Daniel Georges",
    role: "Director of Business Development",
    image: "/testimonials_ceo/georges.png",
  },
  {
    quote:
      "Mit NodeX arbeiten Projektteams im gleichen KI-Kontext. Dokumente, Prompts und Entscheidungen bleiben nachvollziehbar.",
    name: "Julia Bergmann",
    role: "Senior Projektleiterin, Digitale Transformation",
    image: "/testimonials_ceo/julia.png",
  },
];

export default function HomeSocialProof() {
  return (
    <>
      <CustomerReferencesStrip />

      <Region variant="light" tone="surface">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
              Social Proof
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary-light md:text-4xl">
              So nutzen Unternehmen KI mit NodeX
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                theme="light"
                className="flex h-full min-w-0 flex-col p-5"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}, ${testimonial.role}`}
                    width={64}
                    height={64}
                    className="h-14 w-14 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-text-primary-light">
                      {testimonial.name}
                    </div>
                    <div className="mt-1 text-sm leading-snug text-text-muted-light">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <blockquote className="text-base leading-relaxed text-text-primary-light">
                  <span className="mt-5 block">
                  “{testimonial.quote}”
                  </span>
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </Region>
    </>
  );
}
