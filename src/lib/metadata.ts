import type { Metadata } from "next";

export const siteUrl = "https://www.opny.ai";
const socialImage = {
  url: `${siteUrl}/media/opny/automotive-quality-inspection-v2.jpg`,
  width: 1672,
  height: 941,
  alt: "Qualitätsprüfung eines bearbeiteten Aluminiumgehäuses bei einem Automotive-Zulieferer",
};

export function createMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
}): Metadata {
  const url = `${siteUrl}${path}`;
  const pageImage = image
    ? {
        ...image,
        url: image.url.startsWith("http") ? image.url : `${siteUrl}${image.url}`,
      }
    : socialImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Opny`,
      description,
      url,
      siteName: "Opny",
      locale: "de_DE",
      type: "website",
      images: [pageImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Opny`,
      description,
      images: [pageImage.url],
    },
  };
}
