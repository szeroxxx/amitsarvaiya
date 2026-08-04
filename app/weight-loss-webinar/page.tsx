import type { Metadata } from "next";
import { buildMetadata, getCanonicalUrl } from "@/lib/seo/metadata";
import { SITE_URL } from "@/lib/seo/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { getOrganizationSchema } from "@/lib/schema/organization";
import { getPersonSchema } from "@/lib/schema/person";
import { getWebPageSchema } from "@/lib/schema/webpage";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { getWebinarEventSchema } from "@/lib/schema/event";
import Navbar from "@/components/sections/Navbar";
import WebinarHero from "@/components/webinar/WebinarHero";
import WhyWebinarExists from "@/components/webinar/WhyWebinarExists";
import WebinarCTA from "@/components/webinar/WebinarCTA";
import WebinarResults from "@/components/webinar/WebinarResults";
import WebinarFinalCTA from "@/components/webinar/WebinarFinalCTA";
import Footer from "@/components/sections/Footer";

const PAGE_PATH = "/weight-loss-webinar";
const PAGE_TITLE = "Free Weight Loss Webinar";
const PAGE_DESCRIPTION =
  "Join Amit Sarvaiya's free live webinar to learn how to lose weight sustainably without giving up your favorite foods or spending hours in the gym.";

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
  keywords: ["weight loss webinar", "free health webinar India"],
});

export default function WeightLossWebinarPage() {
  const canonicalUrl = getCanonicalUrl(PAGE_PATH);

  const schemaGraph = [
    getWebinarEventSchema(),
    getOrganizationSchema(),
    getPersonSchema(),
    getWebPageSchema({
      url: canonicalUrl,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      primaryImage: `${SITE_URL}/webinar-thumbnail.png`,
    }),
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Weight Loss Webinar", path: PAGE_PATH },
    ]),
  ];

  return (
    <main id="main-content" className="min-h-screen">
      <JsonLd graph={schemaGraph} />
      <Navbar />
      <WebinarHero />
      <WebinarResults />
      <WhyWebinarExists />
      <WebinarCTA />
      <WebinarFinalCTA />
      <Footer />
    </main>
  );
}
