import type React from "react";

type SectionTheme = "dark" | "light";

type SectionProps = {
  theme?: SectionTheme;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const themeClasses: Record<SectionTheme, string> = {
  dark:
    "theme-dark bg-[linear-gradient(180deg,rgb(var(--bg-dark))_0%,rgb(var(--surface-dark))_100%)] text-text-primary-dark before:content-[''] before:absolute before:inset-x-0 before:top-0 before:z-0 before:h-12 before:bg-[linear-gradient(180deg,rgb(var(--bg-light))_0%,transparent_100%)] before:pointer-events-none after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:z-0 after:h-12 after:bg-[linear-gradient(0deg,rgb(var(--bg-light))_0%,transparent_100%)] after:pointer-events-none",
  light: "theme-light text-text-primary-light",
};

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function Section({
  theme = "dark",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={cn(
        "relative isolate w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 [&>*]:relative [&>*]:z-10",
        themeClasses[theme],
        className
      )}
    >
      {children}
    </section>
  );
}
