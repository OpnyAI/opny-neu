import Image from "next/image";
import Region from "@/components/Region";

type CustomerLogo = {
  src: string;
  alt: string;
};

type CustomerReferencesStripProps = {
  headline?: string;
  subline?: string;
  logos?: CustomerLogo[];
  containerClassName?: string;
};

const defaultLogos: CustomerLogo[] = [
  { src: "/testimonials_company/aws.png", alt: "AWS Logo" },
  { src: "/testimonials_company/azure.png", alt: "Microsoft Azure Logo" },
  { src: "/testimonials_company/salesforce.png", alt: "Salesforce Logo" },
  { src: "/testimonials_company/splunk.png", alt: "Splunk Logo" },
  { src: "/testimonials_company/miro.png", alt: "Miro Logo" },
  { src: "/testimonials_company/pentera.png", alt: "Pentera Logo" },
];

export default function CustomerReferencesStrip({
  headline = "Kundenreferenzen, die Vertrauen schaffen",
  subline = "Unternehmen und Entscheider setzen auf Opny, um KI kontrolliert, sicher und produktiv im Arbeitsalltag nutzbar zu machen.",
  logos = defaultLogos,
  containerClassName = "py-8 md:py-12",
}: CustomerReferencesStripProps) {
  return (
    <Region variant="light" tone="base" containerClassName={containerClassName}>
      <div className="rounded-card border border-border-subtle-light/20 bg-white p-5 shadow-sm sm:p-6 md:p-8">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary-light md:text-3xl">
            {headline}
          </h2>
          <p className="text-base leading-relaxed text-text-muted-light">
            {subline}
          </p>
        </div>

        <div className="mt-7 grid min-w-0 grid-cols-2 justify-items-center gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-8">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="flex h-16 w-full min-w-0 max-w-[150px] items-center justify-center sm:h-20 sm:max-w-[170px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="max-h-12 w-auto max-w-full object-contain sm:max-h-[60px]"
              />
            </div>
          ))}
        </div>
      </div>
    </Region>
  );
}
