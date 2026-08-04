import { SITE_URL } from "@/lib/seo/config";
import { WEBINAR_PAGE } from "@/constants/webinar-content";
import { getCanonicalUrl } from "@/lib/seo/metadata";
import { SCHEMA_ID, eventId } from "./ids";
import type { SchemaNode } from "./types";

const WEBINAR_PATH = "/weight-loss-webinar";

/**
 * ⚠️ PLACEHOLDER SCHEDULE — REPLACE BEFORE PRODUCTION DEPLOY.
 *
 * Google's structured data policies require Event dates to reflect a real,
 * genuinely scheduled session. Shipping this placeholder unchanged (or
 * letting it go stale after the date passes) risks losing Event rich
 * results or a manual action for misleading markup. Confirmed with the
 * site owner that sessions are real recurring live webinars, not an
 * evergreen/on-demand funnel — so Event schema is appropriate here, but
 * only once these values track the actual next session.
 *
 * Update every time a new session is scheduled, or — better, in a later
 * phase — wire this to a real data source (CMS field, booking API, env var)
 * instead of a hardcoded literal.
 */
export const WEBINAR_SCHEDULE_PLACEHOLDER = {
  startDate: "2026-01-10T18:30:00+05:30",
  endDate: "2026-01-10T20:00:00+05:30",
  availability: "https://schema.org/InStock" as const,
};

/**
 * Declared in full on the webinar page only. Organizer/performer reference
 * the site-wide Organization/Person by `@id` rather than re-declaring them.
 */
export function getWebinarEventSchema(): SchemaNode {
  const webinarUrl = getCanonicalUrl(WEBINAR_PATH);

  return {
    "@type": "Event",
    "@id": eventId(webinarUrl),
    name: "Free Weight Loss & Lifestyle Webinar with Amit Sarvaiya",
    description: WEBINAR_PAGE.hero.description,
    url: webinarUrl,
    image: [`${SITE_URL}/webinar-thumbnail.png`],
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: webinarUrl,
    },
    startDate: WEBINAR_SCHEDULE_PLACEHOLDER.startDate,
    endDate: WEBINAR_SCHEDULE_PLACEHOLDER.endDate,
    organizer: { "@id": SCHEMA_ID.organization },
    performer: { "@id": SCHEMA_ID.person },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: WEBINAR_SCHEDULE_PLACEHOLDER.availability,
      url: webinarUrl,
      validFrom: WEBINAR_SCHEDULE_PLACEHOLDER.startDate,
    },
  };
}
