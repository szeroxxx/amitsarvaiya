import { SITE_URL } from "@/lib/seo/config";
import { getCanonicalUrl } from "@/lib/seo/metadata";
import type { BlogPost } from "@/lib/blog/types";
import { SCHEMA_ID, webPageId } from "./ids";
import type { SchemaNode } from "./types";

/**
 * BlogPosting for a single article. Author/publisher reference the
 * site-wide Person/Organization by `@id` (declared in full on the
 * homepage — see lib/schema/person.ts, organization.ts) rather than
 * re-declaring them per post.
 */
export function getArticleSchema(post: BlogPost): SchemaNode {
  const url = getCanonicalUrl(`/blog/${post.slug}`);
  const imageUrl = post.coverImage.startsWith("http") ? post.coverImage : `${SITE_URL}${post.coverImage}`;

  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@id": webPageId(url) },
    headline: post.title,
    description: post.description,
    image: [imageUrl],
    author: { "@id": SCHEMA_ID.person },
    publisher: { "@id": SCHEMA_ID.organization },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    inLanguage: "en-IN",
  };
}
