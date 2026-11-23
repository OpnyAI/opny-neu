import Button from "@/components/ui/Button";

export default function ClosingCta({
  eyebrow = "Nächster Schritt",
  title,
  text,
  href,
  label,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  href: string;
  label: string;
}) {
  return (
    <div className="overflow-hidden rounded-card bg-[rgb(var(--accent-deep))] px-6 py-12 text-white sm:px-10 md:py-16">
      <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-sm font-semibold text-blue-100">{eyebrow}</p>
          <h2 className="section-title mt-4 max-w-4xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100 md:text-lg">
            {text}
          </p>
        </div>
        <Button href={href} theme="dark">
          {label}
        </Button>
      </div>
    </div>
  );
}
