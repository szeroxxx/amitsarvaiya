import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";

interface ArticleNavProps {
  previous?: BlogPost;
  next?: BlogPost;
}

/** Simple chronological prev/next navigation between posts — also gives crawlers a second path through the whole blog beyond the index and related-articles links. */
export function ArticleNav({ previous, next }: ArticleNavProps) {
  if (!previous && !next) return null;

  return (
    <nav aria-label="Article navigation" className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-veryLightBg pt-8">
      {previous ? (
        <Link
          href={`/blog/${previous.slug}`}
          className="group flex items-center gap-3 p-4 rounded-md border border-veryLightBg hover:border-primary transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
          <span className="flex flex-col min-w-0">
            <span className="text-xs text-textSecondary uppercase tracking-wide">Previous</span>
            <span className="text-sm font-semibold text-textPrimary group-hover:text-primary transition-colors truncate">
              {previous.title}
            </span>
          </span>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group flex items-center gap-3 p-4 rounded-md border border-veryLightBg hover:border-primary transition-colors sm:text-right sm:flex-row-reverse"
        >
          <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
          <span className="flex flex-col min-w-0">
            <span className="text-xs text-textSecondary uppercase tracking-wide">Next</span>
            <span className="text-sm font-semibold text-textPrimary group-hover:text-primary transition-colors truncate">
              {next.title}
            </span>
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
