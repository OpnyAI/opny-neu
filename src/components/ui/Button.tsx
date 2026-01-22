import type React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary";
type ButtonTheme = "dark" | "light";

type ButtonProps = {
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className">;

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Important: Button text colors must NOT depend on surrounding theme classes.
 * In prod, CSS variable order can differ -> text could become white on white.
 * Therefore we use explicit, theme-safe Tailwind colors for core CTA readability.
 */
const baseClasses =
  "inline-flex items-center justify-center rounded-button px-5 py-2.5 text-sm font-semibold transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variantClasses: Record<ButtonTheme, Record<ButtonVariant, string>> = {
  dark: {
    // Dark theme primary: light text on dark button
    primary:
      "bg-[#0B0F1A] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:opacity-95",
    // Dark theme secondary: subtle outline on dark backgrounds
    secondary:
      "border border-white/15 text-white/90 hover:border-white/25 hover:text-white",
  },

  light: {
    // Light theme primary: dark text on light button (safe in prod)
    primary:
      "bg-white text-[#0B0F1A] border border-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:bg-white/95",
    // Light theme secondary: outline button, dark text
    secondary:
      "border border-black/12 text-[#0B0F1A] bg-transparent hover:border-black/20 hover:bg-black/[0.03]",
  },
};

export default function Button({
  variant = "primary",
  theme = "dark",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const styles = cn(baseClasses, variantClasses[theme][variant], className);

  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (!isExternal) {
      return (
        <Link href={href} className={styles} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
