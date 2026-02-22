export type SocialIconKey = "youtube" | "tiktok" | "instagram" | "linkedin";

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  iconKey: SocialIconKey;
  ariaLabel?: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@Opny_AI",
    iconKey: "youtube",
    ariaLabel: "Opny auf YouTube",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@opny.ai?_r=1&_t=ZG-948DurHTZhZ",
    iconKey: "tiktok",
    ariaLabel: "Opny auf TikTok",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/opny.ai?igsh=cDVzN25ibHp0Y3l6&utm_source=qr",
    iconKey: "instagram",
    ariaLabel: "Opny auf Instagram",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mehmet-catalsakal-43264a15b/",
    iconKey: "linkedin",
    ariaLabel: "Opny auf LinkedIn",
  },
];
