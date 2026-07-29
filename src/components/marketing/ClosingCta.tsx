import Link from "next/link";

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
    <div className="overflow-hidden rounded-shell bg-[#101012] px-6 py-12 text-white sm:px-10 md:px-14 md:py-16">
      <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">
            {eyebrow}
          </div>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            {text}
          </p>
        </div>
        <Link
          href={href}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#1d1d1f] transition hover:bg-white/90"
        >
          {label}
        </Link>
      </div>
    </div>
  );
}
