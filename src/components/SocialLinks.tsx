import { socialLinks, type SocialIconKey } from "@/config/social";

type SocialLinksProps = {
  variant: "header" | "footer";
  className?: string;
};

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

function SocialIcon({ iconKey, className }: { iconKey: SocialIconKey; className?: string }) {
  const sharedProps = {
    className: cn("h-5 w-5", className),
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  if (iconKey === "youtube") {
    return (
      <svg {...sharedProps}>
        <rect x="3" y="6.5" width="18" height="11" rx="3.2" />
        <path d="M10.2 9.2L15.8 12 10.2 14.8V9.2z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (iconKey === "tiktok") {
    return (
      <svg {...sharedProps}>
        <path d="M14 4.5v8.1a3.6 3.6 0 1 1-3-3.54" />
        <path d="M14 5c.78 1.58 2.25 2.56 4 2.66" />
      </svg>
    );
  }

  if (iconKey === "instagram") {
    return (
      <svg {...sharedProps}>
        <rect x="4" y="4" width="16" height="16" rx="4.2" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="16.5" cy="7.5" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <path d="M7.5 9.5V16h3.1v-3.4c0-1 .2-1.95 1.48-1.95 1.25 0 1.27 1.16 1.27 2.02V16h3.14v-4.06c0-2.4-.51-4.24-3.31-4.24-1.34 0-2.24.74-2.61 1.43V9.5H7.5z" />
      <rect x="7.5" y="7.25" width="3.1" height="1.2" fill="currentColor" stroke="none" />
      <circle cx="9.05" cy="5.95" r="0.95" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function SocialLinks({ variant, className }: SocialLinksProps) {
  const isFooter = variant === "footer";

  return (
    <div
      className={cn(
        "flex items-center",
        isFooter ? "gap-2.5" : "gap-1.5",
        className,
      )}
    >
      {socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel ?? social.label}
          className={cn(
            "inline-flex shrink-0 items-center justify-center rounded-full border border-border-subtle-light/20 text-text-secondary-light transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary-light/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
            "hover:border-border-subtle-light/35 hover:text-text-primary-light",
            isFooter ? "h-11 w-11" : "h-10 w-10",
          )}
        >
          <SocialIcon
            iconKey={social.iconKey}
            className={isFooter ? "h-[1.15rem] w-[1.15rem]" : "h-[1.05rem] w-[1.05rem]"}
          />
        </a>
      ))}
    </div>
  );
}
