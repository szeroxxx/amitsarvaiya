import type { Metadata } from "next";
import { buildMetadata, getCanonicalUrl } from "@/lib/seo/metadata";
import { getAllPosts } from "@/lib/blog/source";
import { paginate } from "@/lib/blog/pagination";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWebPageSchema } from "@/lib/schema/webpage";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { PostGrid } from "@/components/blog/PostGrid";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

const PAGE_PATH = "/blog";
const PAGE_TITLE = "Blog";
const PAGE_DESCRIPTION =
  "Health, lifestyle, and wellness articles from Amit Sarvaiya on weight loss, thyroid, diabetes, stress, digestion, and hypertension.";

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getAllPosts();
  return buildMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: PAGE_PATH,
    // Self-adjusting: stays out of the index until getAllPosts() returns
    // real content, then flips to indexable automatically — no manual step.
    noIndex: posts.length === 0,
  });
}

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const posts = await getAllPosts();
  const { items, currentPage, totalPages } = paginate(posts, Number(page) || 1);
  const canonicalUrl = getCanonicalUrl(PAGE_PATH);

  const schemaGraph = [
    getWebPageSchema({
      url: canonicalUrl,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
    }),
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: PAGE_PATH },
    ]),
  ];

  return (
    <main id="main-content" className="min-h-screen">
      <JsonLd graph={schemaGraph} />
      <Navbar />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-textPrimary mb-10 text-center">
            {PAGE_TITLE}
          </h1>

          <PostGrid
            posts={items}
            emptyMessage="New articles are on the way. Check back soon."
          />

          {totalPages > 1 && (
            <nav aria-label="Blog pagination" className="flex justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <Link
                  key={pageNumber}
                  href={pageNumber === 1 ? PAGE_PATH : `${PAGE_PATH}?page=${pageNumber}`}
                  aria-current={pageNumber === currentPage ? "page" : undefined}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-sm border border-veryLightBg text-textPrimary aria-[current=page]:bg-primary aria-[current=page]:text-white aria-[current=page]:border-primary"
                >
                  {pageNumber}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
