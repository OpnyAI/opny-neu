import type { MetadataRoute } from "next";
import { getStandardPage, standardPages, type StandardPageId } from "@/content/standard-pages";

const baseUrl = "https://www.opny.ai";
const relaunchDate = "2026-07-29";
const authenticTrustContentDate = "2026-11-23";
const pages = [
  {
    path: "/",
    lastModified: "2026-11-23",
    images: [
      `${baseUrl}/media/authentictrust/authentictrust-documents-evidence-1600x1000.jpg`,
      `${baseUrl}/media/authentictrust/authentictrust-risks-actions-1600x1000.jpg`,
    ],
  },
  {
    path: "/automotive",
    lastModified: authenticTrustContentDate,
    images: [`${baseUrl}/media/opny/automotive-quality-inspection-v2.jpg`],
  },
  { path: "/produkte", lastModified: authenticTrustContentDate },
  {
    path: "/tisax-software",
    lastModified: authenticTrustContentDate,
    images: [
      `${baseUrl}/media/authentictrust/authentictrust-documents-evidence-1600x1000.jpg`,
    ],
  },
  ...Object.keys(standardPages).map((id) => {
    const page = getStandardPage(id as StandardPageId);
    return {
      path: page.standard.href,
      lastModified: authenticTrustContentDate,
      images: [`${baseUrl}/media/authentictrust/${page.media.file}`],
    };
  }),
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
  {
    path: "/loesungen/ki-beratung-automotive",
    lastModified: authenticTrustContentDate,
  },
  {
    path: "/loesungen/ki-schulungen-automotive",
    lastModified: authenticTrustContentDate,
  },
  {
    path: "/ki-governance-automotive",
    lastModified: authenticTrustContentDate,
  },
  {
    path: "/wissen/ki-im-unternehmen-einfuehren",
    lastModified: authenticTrustContentDate,
  },
  {
    path: "/ueber-opny",
    lastModified: authenticTrustContentDate,
    images: [`${baseUrl}/media/opny/mehmet-catalsakal-founder-about-web.jpg`],
  },
  { path: "/kontakt", lastModified: "2026-11-23" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: "lastModified" in page ? page.lastModified : relaunchDate,
    ...("images" in page ? { images: [...page.images] } : {}),
    ...("videos" in page ? { videos: [...page.videos] } : {}),
  }));
}
