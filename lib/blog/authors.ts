import { SITE_CONFIG, SITE_URL } from "@/lib/seo/config";
import type { BlogAuthor } from "./types";

/** Reuses the identity already established in lib/seo/config.ts and lib/schema/person.ts — never re-declare "Amit Sarvaiya" as a separate literal. */
export const DEFAULT_AUTHOR: BlogAuthor = {
  name: SITE_CONFIG.author.name,
  slug: "amit-sarvaiya",
  image: `${SITE_URL}/webinar-coach.png`,
};
