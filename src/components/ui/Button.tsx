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

const variantClasses: Record<ButtonTheme, Record<ButtonVariant, string>> = {
  dark: { primary: "button-inverse", secondary: "button-ghost" },
  light: { primary: "button-primary", secondary: "button-secondary" },
};

export default function Button({
  variant = "primary",
  theme = "dark",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const styles = cn("button", variantClasses[theme][variant], className);
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
        <Link
          href={href}
          prefetch={href.includes("?") ? false : undefined}
          className={styles}
          {...anchorProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <Link
        href={href}
        prefetch={href.includes("?") ? false : undefined}
        className={styles}
        {...anchorProps}
      >
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
