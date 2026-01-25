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
  "inline-flex items-center justify-center rounded-button px-5 py-2.5 text-sm font-semibold transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variantClasses: Record<ButtonTheme, Record<ButtonVariant, string>> = {
  dark: {
    primary:
      "bg-text-primary-dark text-text-primary-light shadow-card-light hover:opacity-90 " +
      "focus-visible:ring-text-primary-dark focus-visible:ring-offset-transparent",
    secondary:
      // Secondary on DARK surfaces: always readable
      // - Force text color and border even if parent sets text colors
      // - Slight frosted bg improves contrast
      "!text-white border border-white/25 bg-white/5 hover:bg-white/10 hover:border-white/35 " +
      "focus-visible:ring-white/25 focus-visible:ring-offset-transparent",
  },
  light: {
    primary:
      "bg-text-primary-light text-text-primary-dark shadow-card-light hover:opacity-90 " +
      "focus-visible:ring-text-primary-dark focus-visible:ring-offset-white",
    secondary:
      "border border-border-subtle-light/20 text-text-primary-light hover:border-border-subtle-light/35 hover:text-text-secondary-light " +
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

  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");
    const isHashLink = href.startsWith("#") || href.startsWith("/#");
    const normalizedHash = href.startsWith("/#") ? href.replace("/#", "#") : href;

    if (!isExternal) {
      if (isHashLink) {
        return (
          <a href={normalizedHash} className={styles} {...(props as any)}>
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={styles} {...(props as any)}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={styles} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...(props as any)}>
      {children}
    </button>
  );
}
