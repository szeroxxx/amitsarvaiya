import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";
import { categoryToSlug } from "@/lib/blog/source";
import { getReadingTime } from "@/lib/blog/reading-time";
import { formatPostDate } from "@/lib/blog/format-date";

interface BlogCardProps {
  post: BlogPost;
  /**
   * Blog index/category/tag pages render this straight under an `<h1>` with
   * no other heading in between, so the card title must be `<h2>` there.
   * Homepage "Latest Articles" and an article's "Related Articles" already
   * wrap the grid in their own `<h2>`, so the card title should be `<h3>`
   * in those contexts. Defaults to the more common `<h3>` case.
   */
  headingLevel?: 2 | 3;
}

/**
 * The one card design used everywhere a post is listed — blog index,
 * category/tag pages, homepage "Latest Articles", and an article's
 * "Related Articles". Deliberately has exactly two links (the article, and
 * the category badge) rather than one link per visible element, so it stays
 * a single clean stop in a screen reader's link list instead of several
 * redundant ones pointing at the same two destinations.
 */
export function BlogCard({ post, headingLevel = 3 }: BlogCardProps) {
  const href = `/blog/${post.slug}`;
  const readingTime = getReadingTime(post.content);
  const TitleTag = headingLevel === 2 ? "h2" : "h3";

  return (
    <li className="group relative flex flex-col bg-white border border-veryLightBg rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/blog/category/${categoryToSlug(post.category)}`}
        className="absolute top-3 left-3 z-10 text-xs uppercase tracking-wide font-semibold bg-primary text-white rounded-sm px-2.5 py-1 hover:bg-primary/90 transition-colors"
      >
        {post.category}
      </Link>

      <Link href={href} className="flex flex-col flex-1">
        <div className="relative w-full aspect-video overflow-hidden bg-veryLightBg">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col flex-1 p-6 gap-2">
          <p className="text-xs text-textSecondary">
            {readingTime} min read · {formatPostDate(post.publishedAt)}
          </p>
          <TitleTag className="text-lg font-semibold text-textPrimary group-hover:text-primary transition-colors">
            {post.title}
          </TitleTag>
          <p className="text-sm text-textSecondary flex-1">{post.excerpt}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-2">
            Read More
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </li>
  );
}
