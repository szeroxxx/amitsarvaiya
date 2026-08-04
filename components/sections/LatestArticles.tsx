import { getAllPosts } from "@/lib/blog/source";
import { BlogCard } from "@/components/blog/BlogCard";
import { LinkButton } from "@/components/ui/LinkButton";

/**
 * Server Component by design — it only reads and lists data, no
 * interactivity, so it stays out of the client bundle entirely (unlike most
 * sibling homepage sections, which use framer-motion and therefore have to
 * be Client Components).
 */
export default async function LatestArticles() {
  const posts = await getAllPosts();
  const latest = posts.slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-40.5" style={{ maxWidth: "1920px" }}>
        <div className="max-w-[1596px] mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20">
          <div className="px-4 md:px-12 max-w-[840px] mx-auto flex flex-col items-stretch gap-2.5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-sectionTitle font-bold text-textPrimary text-center">
              Latest <span className="text-primary">Articles</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-base font-medium text-textSecondary text-center">
              Practical, doctor-reviewed guidance on weight, thyroid, diabetes, and everyday healthy habits.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
            {latest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </ul>

          <div className="flex justify-center">
            <LinkButton href="/blog" variant="primary" size="lg">
              View All Articles
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
