import type { BlogPost } from "./types";

/**
 * The single place blog data is loaded from. Every page/route imports the
 * functions below, never this function directly — so swapping the data
 * source (MDX files under content/blog/*.mdx, a headless CMS, a database)
 * later means editing only this one function.
 *
 * Returns no posts today — content hasn't been written yet. Every page that
 * consumes getAllPosts()/getPostBySlug() is already built to render a
 * correct empty state and stay out of the sitemap/index until this returns
 * real data, so adding posts here is the only step needed to go live.
 */
async function loadAllPosts(): Promise<BlogPost[]> {
  return [];
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await loadAllPosts();
  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.map((post) => post.category)));
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.flatMap((post) => post.tags)));
}
