import { SCHEMA_ID, breadcrumbListId, webPageId } from "./ids";
import type { SchemaNode } from "./types";

export interface WebPageSchemaInput {
  /** Canonical URL of the page this schema describes. */
  url: string;
  name: string;
  description: string;
  /** Absolute URL of a representative image for this specific page, if any. */
  primaryImage?: string;
}

/**
 * Generic WebPage builder — every page in the app calls this. It links to
 * the site-wide WebSite/Organization by `@id` (declared once, on the
 * homepage) rather than re-declaring them, and assumes a BreadcrumbList for
 * the same URL exists in the page's own graph (see `breadcrumb.ts`).
 */
export function getWebPageSchema({
  url,
  name,
  description,
  primaryImage,
}: WebPageSchemaInput): SchemaNode {
  return {
    "@type": "WebPage",
    "@id": webPageId(url),
    url,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": SCHEMA_ID.website },
    publisher: { "@id": SCHEMA_ID.organization },
    breadcrumb: { "@id": breadcrumbListId(url) },
    ...(primaryImage && {
      primaryImageOfPage: { "@type": "ImageObject", url: primaryImage },
    }),
  };
}
