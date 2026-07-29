import type { MetadataRoute } from "next";

const baseUrl = "https://www.opny.ai";
const pages = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/automotive", priority: 1, changeFrequency: "weekly" },
  { path: "/produkte", priority: 0.9, changeFrequency: "weekly" },
  { path: "/produkte/trustarch", priority: 0.9, changeFrequency: "weekly" },
  { path: "/produkte/nodex", priority: 0.9, changeFrequency: "weekly" },
  { path: "/loesungen/ki-beratung-automotive", priority: 0.8, changeFrequency: "monthly" },
  { path: "/loesungen/ki-schulungen-automotive", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ki-governance-automotive", priority: 0.8, changeFrequency: "monthly" },
  { path: "/wissen/ki-im-unternehmen-einfuehren", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ueber-opny", priority: 0.6, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.5, changeFrequency: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    priority,
    changeFrequency,
  }));
}
