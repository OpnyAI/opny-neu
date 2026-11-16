import { permanentRedirect } from "next/navigation";

export default function LegacyProductPage() {
  permanentRedirect("/produkte/authentictrust");
}
