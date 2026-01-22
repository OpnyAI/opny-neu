import React from "react";

type RegionVariant = "light" | "dark" | "bridge";
type RegionSize = "hero" | "section" | "tight";

type RegionProps = {
  variant?: RegionVariant;
  size?: RegionSize;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
};

function cn(...parts: Array<string | undefined | null | false>) {
  return parts.filter(Boolean).join(" ");
}

const NOISE_DATA_URL =
  "data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\" viewBox=\"0 0 140 140\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"140\" height=\"140\" filter=\"url(%23n)\" opacity=\"0.35\"/%3E%3C/svg%3E";

export default function Region({
  variant = "light",
  size = "section",
  children,
  className,
  containerClassName,
  id,
  as = "section",
}: RegionProps) {
  const Comp: any = as;

  const isDark = variant === "dark";
  const isBridge = variant === "bridge";

  const sizeClasses =
    size === "hero"
      ? "py-8 sm:py-10"
      : size === "tight"
        ? "py-4 sm:py-6"
        : "py-10 sm:py-12";

  const regionBase = cn(
    "relative w-full",
    sizeClasses,
    "overflow-hidden",
    isDark ? "theme-dark" : "theme-light",
    className,
  );

  const regionBg = isDark
    ? "bg-[rgb(var(--region-dark))] text-text-primary-dark"
    : isBridge
      ? "bg-[linear-gradient(180deg,rgb(var(--bg))_0%,rgba(246,247,251,0.98)_100%)] text-text-primary-light"
      : "bg-[rgb(var(--bg))] text-text-primary-light";

  const container = cn(
    "relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8",
    containerClassName,
  );

  const lightOverlays = !isDark && !isBridge ? (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 [background-image:linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("${NOISE_DATA_URL}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />
    </>
  ) : null;

  const bridgeOverlay = isBridge ? (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(900px_280px_at_50%_0%,rgba(15,23,42,0.03),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-border-subtle-light/30" />
    </>
  ) : null;

  const darkOverlays = isDark ? (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("${NOISE_DATA_URL}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-70 [background:radial-gradient(1200px_600px_at_20%_20%,rgba(110,231,183,0.08),transparent_60%),radial-gradient(900px_500px_at_80%_30%,rgba(255,255,255,0.05),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-16 bg-[linear-gradient(180deg,rgb(var(--bg))_0%,rgba(11,18,32,0.6)_60%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-16 bg-[linear-gradient(0deg,rgb(var(--bg))_0%,rgba(11,18,32,0.6)_60%,transparent_100%)]" />
    </>
  ) : null;

  return (
    <Comp id={id} className={cn(regionBase, regionBg)}>
      {lightOverlays}
      {bridgeOverlay}
      {darkOverlays}
      <div className={container}>{children}</div>
    </Comp>
  );
}
