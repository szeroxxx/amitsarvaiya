import { SITE_CONFIG, SITE_URL } from "@/lib/seo/config";
import { SCHEMA_ID } from "./ids";
import type { SchemaNode } from "./types";

/**
 * Declared in full once (homepage) and referenced by `@id` elsewhere via
 * `isPartOf`. Deliberately has no `potentialAction` SearchAction — the site
 * has no on-site search. Add one here if a search feature ships later.
 */
export function getWebSiteSchema(): SchemaNode {
  return {
    "@type": "WebSite",
    "@id": SCHEMA_ID.website,
    name: SITE_CONFIG.name,
    url: SITE_URL,
    description: SITE_CONFIG.defaultDescription,
    inLanguage: "en-IN",
    publisher: { "@id": SCHEMA_ID.organization },
  };
}
