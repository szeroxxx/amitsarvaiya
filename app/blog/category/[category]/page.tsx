import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, getCanonicalUrl } from "@/lib/seo/metadata";
import { getAllCategories, getPostsByCategory } from "@/lib/blog/source";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWebPageSchema } from "@/lib/schema/webpage";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { PostGrid } from "@/components/blog/PostGrid";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

function getPageCopy(category: string) {
  return {
    path: `/blog/category/${category}`,
    title: `${category} Articles`,
    description: `Articles filed under ${category} from Amit Sarvaiya's health and wellness blog.`,
  };
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const posts = await getPostsByCategory(category);
  const { path, title, description } = getPageCopy(category);

  return buildMetadata({
    title,
    description,
    path,
    noIndex: posts.length === 0,
  });
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const posts = await getPostsByCategory(category);

  if (posts.length === 0) {
    notFound();
  }

  const { path, title, description } = getPageCopy(category);
  const canonicalUrl = getCanonicalUrl(path);

  const schemaGraph = [
    getWebPageSchema({ url: canonicalUrl, name: title, description }),
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: category, path },
    ]),
  ];

  return (
    <main id="main-content" className="min-h-screen">
      <JsonLd graph={schemaGraph} />
      <Navbar />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-textPrimary mb-10 text-center">
            {title}
          </h1>
          <PostGrid posts={posts} emptyMessage="No articles in this category yet." />
        </div>
      </section>
      <Footer />
    </main>
  );
}
