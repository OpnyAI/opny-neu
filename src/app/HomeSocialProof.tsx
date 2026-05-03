import Card from "@/components/ui/Card";
import Region from "@/components/Region";
import CustomerReferencesStrip from "@/components/CustomerReferencesStrip";

const testimonials = [
  {
    quote:
      "Vor NodeX war unsere KI-Nutzung kaum kontrollierbar. Mit NodeX haben wir den Schritt zu strukturierter, sicherer KI-Nutzung geschafft.",
    name: "Marek Wowra",
    role: "Geschäftsführer, IPOsystem",
  },
  {
    quote:
      "NodeX hat aus isolierten KI-Experimenten einen gemeinsamen Workspace gemacht. Wissen, Prompts und Routinen werden endlich im Team nutzbar.",
    name: "Dr. Daniel Georges",
    role: "Director of Business Development",
  },
  {
    quote:
      "Mit NodeX arbeiten Projektteams im gleichen KI-Kontext. Dokumente, Prompts und Entscheidungen bleiben nachvollziehbar.",
    name: "Julia Bergmann",
    role: "Senior Projektleiterin, Digitale Transformation",
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
              <Card key={testimonial.name} theme="light" className="p-5">
                <blockquote className="text-base leading-relaxed text-text-primary-light">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-5 border-t border-border-subtle-light/15 pt-4">
                  <div className="text-sm font-semibold text-text-primary-light">
                    {testimonial.name}
                  </div>
                  <div className="mt-1 text-sm leading-snug text-text-muted-light">
                    {testimonial.role}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Region>
    </>
  );
}
