import StandardLandingPage from "@/components/marketing/StandardLandingPage";
import { getStandardPage } from "@/content/standard-pages";
import { createMetadata } from "@/lib/metadata";

const page = getStandardPage("iso27001");
export const metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: page.standard.href,
  image: {
    url: `/media/authentictrust/${page.media.file}`,
    width: 1600,
    height: 1000,
    alt: page.media.alt,
  },
});

export default function Page() {
  return <StandardLandingPage standardId="iso27001" />;
}
