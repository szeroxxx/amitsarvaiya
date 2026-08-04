import type { MetadataRoute } from "next";
import { getCanonicalUrl } from "@/lib/seo/metadata";
import { getAllPosts } from "@/lib/blog/source";

interface StaticRoute {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}

/**
 * Every public, indexable route in the app. Add new pages here as they
 * ship. Keep this list in sync with the routes rendered under `app/`.
 */
const staticRoutes: StaticRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/weight-loss-webinar", changeFrequency: "weekly", priority: 0.9 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

/**
 * Blog routes, generated from the same source every blog page reads from
 * (lib/blog/source.ts). Returns nothing until real posts exist — the blog
 * index itself only joins the sitemap once it has content worth indexing,
 * consistent with its self-adjusting `noIndex` in app/blog/page.tsx.
 */
async function getDynamicRoutes(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  if (posts.length === 0) return [];

  const blogIndexEntry: MetadataRoute.Sitemap = [
    { url: getCanonicalUrl("/blog"), lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: getCanonicalUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const categories = Array.from(new Set(posts.map((post) => post.category)));
  const categoryEntries: MetadataRoute.Sitemap = categories.map((category) => ({
    url: getCanonicalUrl(`/blog/category/${category}`),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.4,
  }));

  return [...blogIndexEntry, ...postEntries, ...categoryEntries];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: getCanonicalUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const dynamicEntries = await getDynamicRoutes();

  return [...staticEntries, ...dynamicEntries];
}
