import type React from "react";

type CardTheme = "dark" | "light";

type CardProps = {
  theme?: CardTheme;
  className?: string;
  children: React.ReactNode;
};

const themeClasses: Record<CardTheme, string> = {
  dark: "card-theme-dark text-text-primary-dark",
  light: "card-theme-light text-text-primary-light",
};

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function Card({ theme = "dark", className, children }: CardProps) {
  return (
    <div
      className={cn(
        "card-shell rounded-card p-6",
        themeClasses[theme],
        className
      )}
    >
      {children}
    </div>
  );
}
