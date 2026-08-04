import { SITE_CONFIG, SITE_URL } from "@/lib/seo/config";
import { WEBINAR_PAGE } from "@/constants/webinar-content";
import { SCHEMA_ID } from "./ids";
import type { SchemaNode } from "./types";

/**
 * The business behind the site. Declared in full once (currently on the
 * homepage and the webinar page, per Phase 2 scope) and referenced by
 * `@id` from every other schema node — never re-declare this object
 * literal elsewhere, import and call this function instead.
 */
export function getOrganizationSchema(): SchemaNode {
  return {
    "@type": "Organization",
    "@id": SCHEMA_ID.organization,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/icon-512.png`,
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
    },
    founder: { "@id": SCHEMA_ID.person },
    sameAs: [SITE_CONFIG.social.instagram, SITE_CONFIG.social.youtube],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+${WEBINAR_PAGE.reserveSeat.whatsappNumber}`,
        contactType: "customer service",
        areaServed: "IN",
      },
    ],
    // The business is India-registered (see Terms & Conditions: jurisdiction
    // of Ahmedabad, Gujarat). Broaden this only once international service
    // is something you can stand behind if Google or a user checks it.
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}
