import { SITE_URL } from "@/lib/seo/config";

/**
 * Stable `@id`s for the entities that are declared in full exactly once
 * (Organization, Person, WebSite — currently on the homepage) and referenced
 * by `{ "@id": ... }` everywhere else. This is what keeps every other page's
 * JSON-LD free of duplicated entity declarations.
 */
export const SCHEMA_ID = {
  organization: `${SITE_URL}#organization`,
  person: `${SITE_URL}#person`,
  website: `${SITE_URL}#website`,
} as const;

/** Per-page node ids, derived from that page's own canonical URL. */
export const webPageId = (canonicalUrl: string) => `${canonicalUrl}#webpage`;
export const breadcrumbListId = (canonicalUrl: string) => `${canonicalUrl}#breadcrumb`;
export const eventId = (canonicalUrl: string) => `${canonicalUrl}#event`;
