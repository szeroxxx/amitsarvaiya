import type { BlogPost } from "./types";

/**
 * Scores candidates by shared tags (weighted higher) and matching category,
 * then backfills with the most recent remaining posts if scoring alone
 * doesn't reach `limit` — the "Related Articles" section should always show
 * `limit` posts when that many exist, not silently show fewer.
 */
export function getRelatedPosts(current: BlogPost, allPosts: BlogPost[], limit = 3): BlogPost[] {
  const others = allPosts.filter((post) => post.slug !== current.slug);

  const scored = others
    .map((post) => {
      const sharedTags = post.tags.filter((tag) => current.tags.includes(tag)).length;
      const sameCategory = post.category === current.category ? 1 : 0;
      return { post, score: sharedTags * 2 + sameCategory };
    })
    .filter((candidate) => candidate.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((candidate) => candidate.post);

  if (scored.length >= limit) {
    return scored.slice(0, limit);
  }

  const alreadyIncluded = new Set(scored.map((post) => post.slug));
  const backfill = others
    .filter((post) => !alreadyIncluded.has(post.slug))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return [...scored, ...backfill].slice(0, limit);
}
