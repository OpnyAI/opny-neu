import type { MetadataRoute } from "next";

const baseUrl = "https://www.opny.ai";
const relaunchDate = "2026-07-29";
const pages = [
  {
    path: "/",
    images: [
      `${baseUrl}/opny-brand-icon-1024.png`,
      `${baseUrl}/media/opny/automotive-quality-inspection-v2.jpg`,
    ],
  },
  {
    path: "/automotive",
    images: [`${baseUrl}/media/opny/automotive-quality-inspection-v2.jpg`],
  },
  { path: "/produkte" },
  {
    path: "/produkte/trustarch",
    images: [
      `${baseUrl}/media/trustarch/marketing-opny-trustarch-poster.jpg`,
      `${baseUrl}/media/trustarch/trustarch-dashboard-1600x1000.jpg`,
      `${baseUrl}/media/trustarch/trustarch-documents-evidence-1600x1000.jpg`,
      `${baseUrl}/media/trustarch/trustarch-review-results-1600x1000.jpg`,
      `${baseUrl}/media/trustarch/trustarch-risks-actions-1600x1000.jpg`,
    ],
    videos: [
      {
        title: "TrustArch Produktdemo",
        description:
          "TrustArch zeigt, wie Compliance-Anforderungen, Nachweise, Risiken und Maßnahmen zentral organisiert werden.",
        thumbnail_loc: `${baseUrl}/media/trustarch/marketing-opny-trustarch-poster.jpg`,
        content_loc: `${baseUrl}/media/trustarch/marketing-opny-trustarch.mp4`,
        family_friendly: "yes",
      },
    ],
  },
  {
    path: "/produkte/nodex",
    images: [`${baseUrl}/media/nodex/marketing-opny-nodex-poster.jpg`],
    videos: [
      {
        title: "NodeX Produktdemo",
        description:
          "NodeX zeigt den kontrollierten Zugang zu freigegebenen KI-Modellen mit zentralen Regeln für Daten, Nutzung und Kosten.",
        thumbnail_loc: `${baseUrl}/media/nodex/marketing-opny-nodex-poster.jpg`,
        content_loc: `${baseUrl}/media/nodex/marketing-opny-nodex.MP4`,
        family_friendly: "yes",
      },
    ],
  },
  { path: "/loesungen/ki-beratung-automotive" },
  { path: "/loesungen/ki-schulungen-automotive" },
  { path: "/ki-governance-automotive" },
  { path: "/wissen/ki-im-unternehmen-einfuehren" },
  {
    path: "/ueber-opny",
    images: [`${baseUrl}/media/opny/mehmet-catalsakal-founder-about-web.jpg`],
  },
  { path: "/kontakt" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: relaunchDate,
    ...("images" in page ? { images: [...page.images] } : {}),
    ...("videos" in page ? { videos: [...page.videos] } : {}),
  }));
}
