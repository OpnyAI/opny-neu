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
    <div className="closing-cta">
      <div className="closing-cta-layout">
        <div>
          <p className="closing-cta-eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="closing-cta-copy">{text}</p>
        </div>
        <Button href={href} theme="dark">
          {label}
        </Button>
      </div>
    </div>
  );
}
