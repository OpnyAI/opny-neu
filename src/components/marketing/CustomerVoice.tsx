import Image from "next/image";
import Region from "@/components/Region";

const testimonials = [
  {
    quote:
      "Vor NodeX war unsere KI-Nutzung kaum kontrollierbar. Mit NodeX haben wir den Schritt zu strukturierter, sicherer KI-Nutzung geschafft.",
    name: "Marek Wowra",
    role: "Geschäftsführer",
    company: "IPOsystem Deutschland GmbH",
    image: "/testimonials_ceo/marek.png",
  },
  {
    quote:
      "NodeX hat aus isolierten KI-Experimenten einen gemeinsamen Workspace gemacht. Wissen, Prompts und Routinen werden endlich im Team nutzbar.",
    name: "Dr. Daniel Georges",
    role: "Director of Business Development",
    company: "LCM Digital",
    image: "/testimonials_ceo/georges.png",
  },
] as const;

export default function CustomerVoice() {
  return (
    <Region tone="surface">
      <section
        aria-labelledby="customer-voice-title"
        className="space-y-10 lg:space-y-12"
      >
        <div className="max-w-3xl">
          <div className="eyebrow">Kundenstimmen</div>
          <h2 id="customer-voice-title" className="section-title mt-5">
            Erfahrungen mit NodeX.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-text-muted-light">
            Zwei Perspektiven darauf, wie Teams ihre KI-Nutzung gemeinsam und
            kontrolliert organisieren.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="h-full overflow-hidden rounded-card border border-black/[0.08] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.07)]"
            >
              <div className="grid h-full md:grid-cols-[0.37fr_0.63fr]">
                <div className="relative hidden min-h-[420px] bg-[#e8eef5] md:block">
                  <Image
                    src={testimonial.image}
                    alt={`Porträt von ${testimonial.name}`}
                    fill
                    sizes="(min-width: 1024px) 215px, 37vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex min-w-0 flex-col justify-between p-7 sm:p-8">
                  <blockquote className="text-[1.35rem] font-medium leading-[1.38] tracking-[-0.03em] text-text-primary-light">
                    „{testimonial.quote}“
                  </blockquote>

                  <footer className="mt-10 border-t border-black/[0.09] pt-5">
                    <div className="flex items-center gap-4">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#e8eef5] md:hidden">
                        <Image
                          src={testimonial.image}
                          alt={`Porträt von ${testimonial.name}`}
                          fill
                          sizes="80px"
                          className="object-cover object-center"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary-light">
                          {testimonial.name}
                        </div>
                        <div className="mt-1 text-sm leading-relaxed text-text-muted-light">
                          {testimonial.role} · {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Region>
  );
}
