import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Community from "@/components/sections/Community";
import Webinar from "@/components/sections/Webinar";
import Testimonials from "@/components/sections/Testimonials";
import VideoTestimonials from "@/components/sections/VideoTestimonials";
import WhyHelp from "@/components/sections/WhyHelp";
import Gallery from "@/components/sections/Gallery";
import InstagramSection from "@/components/sections/InstagramSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
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
