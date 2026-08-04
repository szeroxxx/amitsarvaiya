import { getCanonicalUrl } from "@/lib/seo/metadata";
import { breadcrumbListId } from "./ids";
import type { SchemaNode } from "./types";

export interface BreadcrumbItem {
  name: string;
  /** Site-relative path, e.g. "/" or "/weight-loss-webinar". */
  path: string;
}

/**
 * Builds a BreadcrumbList for the current page. Pass the full trail from
 * Home to the current page (inclusive) — its `@id` is derived from the
 * *last* item's path, so it matches the `breadcrumb` ref that
 * `getWebPageSchema` emits for that same page.
 */
export function getBreadcrumbSchema(items: BreadcrumbItem[]): SchemaNode {
  const currentPageUrl = getCanonicalUrl(items[items.length - 1]?.path ?? "/");

  return {
    "@type": "BreadcrumbList",
    "@id": breadcrumbListId(currentPageUrl),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}
