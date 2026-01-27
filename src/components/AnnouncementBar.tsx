export default function AnnouncementBar() {
  return (
    <div className="sticky top-0 z-50 h-10 w-full border-b border-border-subtle-dark/20 bg-[linear-gradient(90deg,rgb(var(--bg-dark))_0%,rgb(var(--surface-dark))_55%,rgb(var(--bg-dark))_100%)] backdrop-blur">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-3 px-4 text-xs text-text-secondary-dark sm:px-6 lg:px-10">
        <span className="truncate sm:hidden">
          opny.ai – Kontrollierte KI-Systeme.
        </span>
        <span className="hidden sm:block">
          opny.ai – Kontrollierte KI-Systeme für Unternehmen. Umsetzung statt
          PowerPoint.
        </span>
        <a
          className="flex-shrink-0 text-text-primary-dark transition hover:text-text-primary-dark/80"
          href="/#produkt"
        >
          Mehr erfahren →
        </a>
      </div>
    </div>
  );
}
