export default function SectionIntro({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-4xl space-y-4 ${center ? "mx-auto text-center" : ""}`}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title text-text-primary-light">
        {title}
      </h2>
      {text ? (
        <p className="lead-copy max-w-3xl">{text}</p>
      ) : null}
    </div>
  );
}
