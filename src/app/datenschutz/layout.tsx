import type { ReactNode } from "react";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Datenschutz",
  description:
    "Datenschutzhinweise von Opny zur Website, Kontaktaufnahme, Analyse und eingesetzten Dienstleistern.",
  path: "/datenschutz",
});

export default function DatenschutzLayout({ children }: { children: ReactNode }) {
  return children;
}
