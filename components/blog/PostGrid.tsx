import type { BlogPost } from "@/lib/blog/types";
import { BlogCard } from "./BlogCard";

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
        <BlogCard key={post.slug} post={post} headingLevel={2} />
      ))}
    </ul>
  );
}
