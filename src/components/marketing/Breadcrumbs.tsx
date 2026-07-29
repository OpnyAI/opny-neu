import Link from "next/link";
import JsonLd from "./JsonLd";
import { siteUrl } from "@/lib/metadata";

type Breadcrumb = {
  label: string;
  href: string;
};

export default function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteUrl}${item.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav aria-label="Brotkrümelnavigation">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-text-secondary-light">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {index === items.length - 1 ? (
                <span aria-current="page" className="text-text-primary-light">
                  {item.label}
                </span>
              ) : (
                <Link className="transition hover:text-text-primary-light" href={item.href}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
