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

const baseClasses =
  "inline-flex items-center justify-center rounded-button px-5 py-2.5 text-sm font-semibold transition";

const variantClasses: Record<ButtonTheme, Record<ButtonVariant, string>> = {
  dark: {
    primary:
      "bg-text-primary-dark text-text-primary-light shadow-card-light hover:opacity-90",
    secondary:
      "border border-border-subtle-dark/20 text-text-primary-dark hover:border-border-subtle-dark/35 hover:text-text-secondary-dark",
  },
  light: {
    primary:
      "bg-text-primary-light text-text-primary-dark shadow-card-light hover:opacity-90",
    secondary:
      "border border-border-subtle-light/20 text-text-primary-light hover:border-border-subtle-light/35 hover:text-text-secondary-light",
  },
};

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

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
