import Navbar from "@/components/sections/Navbar";
import WebinarHero from "@/components/webinar/WebinarHero";
import WhyWebinarExists from "@/components/webinar/WhyWebinarExists";
import WebinarCTA from "@/components/webinar/WebinarCTA";
import WebinarResults from "@/components/webinar/WebinarResults";
import WebinarFinalCTA from "@/components/webinar/WebinarFinalCTA";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Weight Loss Webinar - Amit Sarvaya",
  description:
    "Join the free webinar to learn how to lose weight without giving up your favorite foods or spending hours in the gym.",
};

export default function WeightLossWebinarPage() {
  return (
    <main className="min-h-screen">
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
