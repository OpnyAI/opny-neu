import React from "react";

type RegionVariant = "light" | "dark" | "bridge";
type RegionTone = "base" | "alt" | "surface";
type RegionSpacing = "compact" | "standard" | "hero";

type RegionProps = {
  variant?: RegionVariant;
  tone?: RegionTone;
  withDividers?: boolean;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  as?: React.ElementType;
  spacing?: RegionSpacing;
};

function cn(...parts: Array<string | undefined | null | false>) {
  return parts.filter(Boolean).join(" ");
}

export default function Region({
  variant = "light",
  tone = "base",
  withDividers = false,
  children,
  className,
  containerClassName,
  id,
  as = "section",
  spacing = "standard",
}: RegionProps) {
  const Comp = as;

  const toneClass =
    tone === "alt"
      ? "bg-[rgb(var(--opny-bg-alt))]"
      : tone === "surface"
        ? "bg-[rgb(var(--opny-surface))]"
        : "bg-[rgb(var(--opny-bg))]";

  const dividerClass = withDividers
    ? "border-y border-[color:rgb(var(--opny-border)/0.2)]"
    : "";

  const themeClass = variant === "dark" ? "theme-dark" : "theme-light";
  const textClass =
    variant === "dark" ? "text-text-primary-dark" : "text-text-primary-light";

  const regionBase = cn(
    "relative w-full max-w-full overflow-x-clip",
    toneClass,
    textClass,
    themeClass,
    dividerClass,
    className,
  );

  const spacingClass =
    spacing === "compact"
      ? "py-12 md:py-16"
      : spacing === "hero"
        ? "py-16 md:py-24 lg:py-28"
        : "py-20 md:py-28 lg:py-32";

  const container = cn(
    "relative z-10 mx-auto w-full min-w-0 max-w-7xl px-5 sm:px-8 lg:px-10",
    spacingClass,
    containerClassName,
  );

  return (
    <Comp id={id} className={regionBase}>
      <div className={container}>{children}</div>
    </Comp>
  );
}
