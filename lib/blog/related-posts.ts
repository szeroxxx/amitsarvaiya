import type { BlogPost } from "./types";

/**
 * Scores candidates by shared tags (weighted higher) and matching category,
 * returning the top `limit` matches. Pure and source-agnostic — works the
 * same regardless of where `allPosts` came from.
 */
export function getRelatedPosts(current: BlogPost, allPosts: BlogPost[], limit = 3): BlogPost[] {
  const scored = allPosts
    .filter((post) => post.slug !== current.slug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) => current.tags.includes(tag)).length;
      const sameCategory = post.category === current.category ? 1 : 0;
      return { post, score: sharedTags * 2 + sameCategory };
    })
    .filter((candidate) => candidate.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((candidate) => candidate.post);
}
