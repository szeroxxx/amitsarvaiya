import type { BlogPost } from "./types";

export interface AdjacentPosts {
  /** The next older post (further back in publish order), if any. */
  previous?: BlogPost;
  /** The next newer post (further forward in publish order), if any. */
  next?: BlogPost;
}

/**
 * `allPosts` must already be sorted newest-first (as getAllPosts() returns).
 * "Next" moves toward newer posts, "Previous" toward older ones — matching
 * how a reader moved forward through publish order would expect the labels
 * to behave.
 */
export function getAdjacentPosts(current: BlogPost, allPosts: BlogPost[]): AdjacentPosts {
  const index = allPosts.findIndex((post) => post.slug === current.slug);
  if (index === -1) return {};

  return {
    next: index > 0 ? allPosts[index - 1] : undefined,
    previous: index < allPosts.length - 1 ? allPosts[index + 1] : undefined,
  };
}
