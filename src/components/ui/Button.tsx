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
 * IMPORTANT:
 * We must be resilient against parent text color overrides (e.g. theme-light / text-* on containers).
 * Therefore, for secondary buttons we use explicit text + border colors with high specificity via Tailwind's `!`.
 */
const baseClasses =
  "inline-flex min-h-11 items-center justify-center rounded-button px-5 py-2.5 text-sm font-semibold tracking-[-0.01em] transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variantClasses: Record<ButtonTheme, Record<ButtonVariant, string>> = {
  dark: {
    primary:
      "bg-white text-[#1d1d1f] hover:bg-white/90 " +
      "focus-visible:ring-text-primary-dark focus-visible:ring-offset-transparent",
    secondary:
      // Secondary on DARK surfaces: always readable
      // - Force text color and border even if parent sets text colors
      // - Slight frosted bg improves contrast
      "!text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 " +
      "focus-visible:ring-white/25 focus-visible:ring-offset-transparent",
  },
  light: {
    primary:
      "bg-[#1d1d1f] text-white hover:bg-black " +
      "focus-visible:ring-text-primary-dark focus-visible:ring-offset-white",
    secondary:
      "border border-black/15 bg-white/60 text-text-primary-light hover:border-black/30 hover:bg-white " +
      "focus-visible:ring-border-subtle-light/35 focus-visible:ring-offset-white",
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
  const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExternal) {
      return (
        <a href={href} className={styles} {...anchorProps}>
          {children}
        </a>
      );
    }

    if (href.startsWith("#")) {
      return (
        <a href={href} className={styles} {...anchorProps}>
          {children}
        </a>
      );
    }

    if (href.startsWith("/#")) {
      return (
        <Link href={href} className={styles} {...anchorProps}>
          {children}
        </Link>
      );
    }

    return (
      <Link href={href} className={styles} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...buttonProps}>
      {children}
    </button>
  );
}
