import Link from "next/link";
import type { BlogPost } from "@/lib/blog/types";

interface PostGridProps {
  posts: BlogPost[];
  emptyMessage: string;
}

/** Shared card grid used by the blog index, category, and tag listing pages. */
export function PostGrid({ posts, emptyMessage }: PostGridProps) {
  if (posts.length === 0) {
    return (
      <p className="text-textSecondary text-center max-w-xl mx-auto py-12">
        {emptyMessage}
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
      {posts.map((post) => (
        <li key={post.slug} className="bg-lightBg border border-veryLightBg rounded-md p-6">
          <Link href={`/blog/${post.slug}`} className="block group">
            <h2 className="text-xl font-semibold text-textPrimary group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-textSecondary mt-2">{post.excerpt}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
