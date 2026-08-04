import type { Metadata } from "next";
import { buildMetadata, getCanonicalUrl } from "@/lib/seo/metadata";
import { SITE_CONFIG, SITE_URL } from "@/lib/seo/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { getOrganizationSchema } from "@/lib/schema/organization";
import { getPersonSchema } from "@/lib/schema/person";
import { getWebSiteSchema } from "@/lib/schema/website";
import { getWebPageSchema } from "@/lib/schema/webpage";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Community from "@/components/sections/Community";
import Webinar from "@/components/sections/Webinar";
import VideoTestimonials from "@/components/sections/VideoTestimonials";
import WhyHelp from "@/components/sections/WhyHelp";
import Gallery from "@/components/sections/Gallery";
import InstagramSection from "@/components/sections/InstagramSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = buildMetadata({
  title: SITE_CONFIG.defaultTitle,
  description: SITE_CONFIG.defaultDescription,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  const canonicalUrl = getCanonicalUrl("/");

  const schemaGraph = [
    getOrganizationSchema(),
    getPersonSchema(),
    getWebSiteSchema(),
    getWebPageSchema({
      url: canonicalUrl,
      name: SITE_CONFIG.defaultTitle,
      description: SITE_CONFIG.defaultDescription,
      primaryImage: `${SITE_URL}${SITE_CONFIG.defaultImage.url}`,
    }),
    getBreadcrumbSchema([{ name: "Home", path: "/" }]),
  ];

  return (
    <main id="main-content" className="min-h-screen">
      <JsonLd graph={schemaGraph} />
      {/* <AnnouncementBar /> */}
      <Navbar />
      <Hero />
      <Community />
      <Webinar />
      {/* <Testimonials /> */}
      <VideoTestimonials />
      <WhyHelp />
      <Gallery />
      <InstagramSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
