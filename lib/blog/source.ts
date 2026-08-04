import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { DEFAULT_AUTHOR } from "./authors";
import { slugifyHeading } from "./render";
import type { BlogPost, FaqItem, ExternalReference } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

interface PostFrontmatter {
  title: string;
  description: string;
  excerpt: string;
  coverImage: string;
  coverImageAlt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  draft?: boolean;
  faqs?: FaqItem[];
  externalReferences?: ExternalReference[];
}

function readPostFile(filename: string): BlogPost {
  const slug = filename.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;

  return {
    slug,
    title: fm.title,
    description: fm.description,
    excerpt: fm.excerpt,
    coverImage: fm.coverImage,
    coverImageAlt: fm.coverImageAlt,
    category: fm.category,
    tags: fm.tags ?? [],
    author: DEFAULT_AUTHOR,
    publishedAt: fm.publishedAt,
    updatedAt: fm.updatedAt,
    draft: fm.draft ?? false,
    content: content.trim(),
    faqs: fm.faqs ?? [],
    externalReferences: fm.externalReferences,
  };
}

/**
 * The single place blog data is loaded from. Every page/route imports the
 * functions below, never this function directly — so swapping the data
 * source (a headless CMS, a database) later means editing only this one
 * function. Today it reads every content/blog/*.mdx file on disk.
 */
async function loadAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const filenames = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  return filenames.map(readPostFile);
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

/** Category names are display text ("Internal Fat & Insulin Resistance") — URLs use a slugified version so links never contain spaces or "&". */
export const categoryToSlug = slugifyHeading;

export async function getPostsByCategorySlug(categorySlug: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => categoryToSlug(post.category) === categorySlug);
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.map((post) => post.category)));
}

export async function getAllCategorySlugs(): Promise<string[]> {
  const categories = await getAllCategories();
  return categories.map(categoryToSlug);
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  return Array.from(new Set(posts.flatMap((post) => post.tags)));
}
