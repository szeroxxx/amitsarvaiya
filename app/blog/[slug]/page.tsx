import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata, getCanonicalUrl } from "@/lib/seo/metadata";
import { getAllPosts, getPostBySlug } from "@/lib/blog/source";
import { getReadingTime } from "@/lib/blog/reading-time";
import { getRelatedPosts } from "@/lib/blog/related-posts";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWebPageSchema } from "@/lib/schema/webpage";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Article Not Found",
      description: "This article could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
    image: { url: post.coverImage, alt: post.coverImageAlt },
    type: "article",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const relatedPosts = getRelatedPosts(post, allPosts);
  const readingTime = getReadingTime(post.content);
  const canonicalUrl = getCanonicalUrl(`/blog/${post.slug}`);

  // TODO (future phase): add BlogPosting/Article JSON-LD here once real
  // posts exist, following the lib/schema/ @id-reference pattern
  // (author -> SCHEMA_ID.person, publisher -> SCHEMA_ID.organization).
  // Intentionally not implemented yet — no content to describe.
  const schemaGraph = [
    getWebPageSchema({
      url: canonicalUrl,
      name: post.title,
      description: post.description,
      primaryImage: post.coverImage,
    }),
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];

  return (
    <main id="main-content" className="min-h-screen">
      <JsonLd graph={schemaGraph} />
      <Navbar />
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-sm text-textSecondary mb-2">
            {post.author.name} · {readingTime} min read
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-textPrimary mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="text-xs uppercase tracking-wide bg-lightBg border border-veryLightBg rounded-sm px-2.5 py-1 text-textSecondary hover:text-primary transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
          <div className="prose prose-lg max-w-none text-textSecondary">{post.content}</div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section aria-label="Related articles" className="py-12 bg-veryLightBg">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-textPrimary mb-6">Related Articles</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 list-none">
              {relatedPosts.map((related) => (
                <li key={related.slug}>
                  <Link href={`/blog/${related.slug}`} className="text-textPrimary hover:text-primary font-medium">
                    {related.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
