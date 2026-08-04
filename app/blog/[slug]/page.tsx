import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata, getCanonicalUrl } from "@/lib/seo/metadata";
import { getAllPosts, getPostBySlug, categoryToSlug } from "@/lib/blog/source";
import { getReadingTime } from "@/lib/blog/reading-time";
import { getRelatedPosts } from "@/lib/blog/related-posts";
import { getAdjacentPosts } from "@/lib/blog/adjacent-posts";
import { formatPostDate } from "@/lib/blog/format-date";
import { renderMarkdown, getTableOfContents } from "@/lib/blog/render";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWebPageSchema } from "@/lib/schema/webpage";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { getArticleSchema } from "@/lib/schema/article";
import { getFaqSchema } from "@/lib/schema/faq";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BlogCard } from "@/components/blog/BlogCard";
import { ArticleWebinarCTA } from "@/components/blog/ArticleWebinarCTA";
import { ArticleNav } from "@/components/blog/ArticleNav";
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
  const { previous, next } = getAdjacentPosts(post, allPosts);
  const readingTime = getReadingTime(post.content);
  const canonicalUrl = getCanonicalUrl(`/blog/${post.slug}`);
  const toc = getTableOfContents(post.content);
  const bodyHtml = renderMarkdown(post.content);
  const hasFaqs = post.faqs.length > 0;

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
    getArticleSchema(post),
    ...(hasFaqs ? [getFaqSchema(post.faqs, `/blog/${post.slug}`)] : []),
  ];

  return (
    <main id="main-content" className="min-h-screen">
      <JsonLd graph={schemaGraph} />
      <Navbar />
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-textSecondary mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span aria-hidden="true"> / </span>
            <span className="text-textPrimary">{post.title}</span>
          </nav>

          <p className="text-sm text-textSecondary mb-2">
            By {post.author.name} · {formatPostDate(post.publishedAt)} · {readingTime} min read
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-textPrimary mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            <Link
              href={`/blog/category/${categoryToSlug(post.category)}`}
              className="text-xs uppercase tracking-wide bg-primary text-white rounded-sm px-2.5 py-1 hover:bg-primary/90 transition-colors"
            >
              {post.category}
            </Link>
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

          <TableOfContents entries={toc} />

          <div
            className="prose prose-lg max-w-none prose-headings:text-textPrimary prose-headings:font-semibold prose-p:text-textSecondary prose-li:text-textSecondary prose-a:text-primary prose-strong:text-textPrimary"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />

          {hasFaqs && (
            <section aria-labelledby="faq-heading" className="mt-14">
              <h2 id="faq-heading" className="text-2xl font-semibold text-textPrimary mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {post.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-lg font-semibold text-textPrimary mb-1">{faq.question}</h3>
                    <p className="text-textSecondary">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {post.externalReferences && post.externalReferences.length > 0 && (
            <section aria-labelledby="references-heading" className="mt-14 border-t border-veryLightBg pt-8">
              <h2 id="references-heading" className="text-xl font-semibold text-textPrimary mb-4">
                References
              </h2>
              <ul className="space-y-2 text-sm list-none">
                {post.externalReferences.map((ref) => (
                  <li key={ref.url}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-primary hover:underline underline-offset-2"
                    >
                      {ref.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <p className="mt-14 text-xs text-textSecondary border-t border-veryLightBg pt-6 mb-10">
            This article is for general educational purposes and does not replace individual medical advice. Please consult a qualified doctor before making changes relevant to a diagnosed condition.
          </p>

          <ArticleNav previous={previous} next={next} />
        </div>
      </article>

      <ArticleWebinarCTA />

      {relatedPosts.length > 0 && (
        <section aria-label="Related articles" className="py-12 md:py-16 bg-veryLightBg">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-semibold text-textPrimary mb-6 text-center">Related Articles</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </ul>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
