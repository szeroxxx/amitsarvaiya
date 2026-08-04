import { SITE_CONFIG, SITE_URL } from "@/lib/seo/config";
import { SCHEMA_ID } from "./ids";
import type { SchemaNode } from "./types";

/**
 * The coach behind the brand. Declared in full once (homepage + webinar
 * page) and referenced by `@id` elsewhere — see `organization.ts` for the
 * same pattern. Copy below is drawn from the existing WHY_HELP content in
 * `constants/content.ts` (12+ years, 22,000+ people, 24+ countries) so the
 * claims stay consistent with what's already published on the page.
 */
export function getPersonSchema(): SchemaNode {
  return {
    "@type": "Person",
    "@id": SCHEMA_ID.person,
    name: SITE_CONFIG.author.name,
    url: SITE_URL,
    jobTitle: "Health and Wellness Coach",
    description:
      "Health and wellness coach with over 12 years of experience helping more than 22,000 people across 24+ countries manage weight, thyroid, diabetes, stress, digestion, and hypertension through sustainable lifestyle changes.",
    image: `${SITE_URL}/webinar-coach.png`,
    sameAs: [SITE_CONFIG.social.instagram, SITE_CONFIG.social.youtube],
    worksFor: { "@id": SCHEMA_ID.organization },
    knowsAbout: [
      "Weight Loss",
      "Healthy Lifestyle",
      "Thyroid",
      "Diabetes",
      "Digestion",
      "Stress Management",
      "Hypertension",
      "Lifestyle Diseases",
    ],
  };
}
