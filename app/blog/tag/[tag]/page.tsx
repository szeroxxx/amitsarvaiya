import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, getCanonicalUrl } from "@/lib/seo/metadata";
import { getAllTags, getPostsByTag } from "@/lib/blog/source";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWebPageSchema } from "@/lib/schema/webpage";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { PostGrid } from "@/components/blog/PostGrid";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

function getPageCopy(tag: string) {
  return {
    path: `/blog/tag/${tag}`,
    title: `#${tag} Articles`,
    description: `Articles tagged ${tag} from Amit Sarvaiya's health and wellness blog.`,
  };
}

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const posts = await getPostsByTag(tag);
  const { path, title, description } = getPageCopy(tag);

  return buildMetadata({
    title,
    description,
    path,
    noIndex: posts.length === 0,
  });
}

export default async function BlogTagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const posts = await getPostsByTag(tag);

  if (posts.length === 0) {
    notFound();
  }

  const { path, title, description } = getPageCopy(tag);
  const canonicalUrl = getCanonicalUrl(path);

  const schemaGraph = [
    getWebPageSchema({ url: canonicalUrl, name: title, description }),
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: `#${tag}`, path },
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
          <PostGrid posts={posts} emptyMessage="No articles with this tag yet." />
        </div>
      </section>
      <Footer />
    </main>
  );
}
