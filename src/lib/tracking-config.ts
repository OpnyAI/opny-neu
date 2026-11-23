export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const GOOGLE_ADS_ID = /^AW-\d+$/.test(
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
)
  ? process.env.NEXT_PUBLIC_GOOGLE_ADS_ID!
  : "";
export const META_PIXEL_ID = /^\d{6,20}$/.test(
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
)
  ? process.env.NEXT_PUBLIC_META_PIXEL_ID!
  : "";
export const LINKEDIN_PARTNER_ID = /^\d{1,20}$/.test(
  process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || "",
)
  ? process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID!
  : "";
// An added provider or a changed destination requires a new marketing choice.
export const MARKETING_REVISION = [
  GOOGLE_ADS_ID ? `google-ads:${GOOGLE_ADS_ID}` : "",
  META_PIXEL_ID ? `meta:${META_PIXEL_ID}` : "",
  LINKEDIN_PARTNER_ID ? `linkedin:${LINKEDIN_PARTNER_ID}` : "",
]
  .filter(Boolean)
  .join("|") || "none";
export const HAS_MARKETING = Boolean(
  GOOGLE_ADS_ID || META_PIXEL_ID || LINKEDIN_PARTNER_ID,
);
export const HAS_TRACKING = Boolean(GA_ID || HAS_MARKETING);
