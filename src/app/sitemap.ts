import type { MetadataRoute } from "next";

const baseUrl = "https://www.opny.ai";
const relaunchDate = "2026-07-29";
const authenticTrustContentDate = "2026-11-16";
const pages = [
  {
    path: "/",
    lastModified: authenticTrustContentDate,
    images: [
      `${baseUrl}/opny-brand-icon-1024.png`,
      `${baseUrl}/media/opny/automotive-quality-inspection-v2.jpg`,
    ],
  },
  {
    path: "/automotive",
    lastModified: authenticTrustContentDate,
    images: [`${baseUrl}/media/opny/automotive-quality-inspection-v2.jpg`],
  },
  { path: "/produkte", lastModified: authenticTrustContentDate },
  {
    path: "/produkte/authentictrust",
    lastModified: authenticTrustContentDate,
    images: [
      `${baseUrl}/media/authentictrust/authentictrust-dashboard-1600x1000.jpg`,
      `${baseUrl}/media/authentictrust/authentictrust-documents-evidence-1600x1000.jpg`,
      `${baseUrl}/media/authentictrust/authentictrust-review-results-1600x1000.jpg`,
      `${baseUrl}/media/authentictrust/authentictrust-risks-actions-1600x1000.jpg`,
    ],
  },
  {
    path: "/produkte/nodex",
    lastModified: authenticTrustContentDate,
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
  { path: "/loesungen", lastModified: authenticTrustContentDate },
  { path: "/loesungen/ki-beratung-automotive" },
  { path: "/loesungen/ki-schulungen-automotive" },
  { path: "/ki-governance-automotive", lastModified: authenticTrustContentDate },
  { path: "/wissen/ki-im-unternehmen-einfuehren" },
  {
    path: "/ueber-opny",
    images: [`${baseUrl}/media/opny/mehmet-catalsakal-founder-about-web.jpg`],
  },
  { path: "/kontakt", lastModified: authenticTrustContentDate },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified:
      "lastModified" in page ? page.lastModified : relaunchDate,
    ...("images" in page ? { images: [...page.images] } : {}),
    ...("videos" in page ? { videos: [...page.videos] } : {}),
  }));
}
