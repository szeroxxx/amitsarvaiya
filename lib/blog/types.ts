export interface BlogAuthor {
  name: string;
  /** Used for a future /blog/author/[slug] route. */
  slug: string;
  bio?: string;
  /** Absolute or site-relative image URL. */
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  /** Meta description — shown in search results, kept separate from the on-page excerpt. */
  description: string;
  /** Short teaser shown on index/category/tag/related-post cards. */
  excerpt: string;
  /** Site-relative or absolute path to the cover image. */
  coverImage: string;
  coverImageAlt: string;
  category: string;
  tags: string[];
  author: BlogAuthor;
  /** ISO 8601 date string. */
  publishedAt: string;
  /** ISO 8601 date string. Omit if never updated since publish. */
  updatedAt?: string;
  /** Excluded from getAllPosts()/sitemap/index when true. */
  draft?: boolean;
  /**
   * Raw body content. Plain string today; swap for MDX/rich content once a
   * real content source is wired in (see lib/blog/source.ts).
   */
  content: string;
}
