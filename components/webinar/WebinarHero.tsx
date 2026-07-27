"use client";

import { LinkButton } from "@/components/ui/LinkButton";
import { WEBINAR_PAGE } from "@/constants/webinar-content";
import { motion } from "framer-motion";

export default function WebinarHero() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-textPrimary mb-6 max-w-4xl mx-auto leading-tight">
            {WEBINAR_PAGE.hero.title}
          </h1>
          <p className="text-base md:text-lg text-textSecondary max-w-3xl mx-auto mb-8 leading-relaxed">
            {WEBINAR_PAGE.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <LinkButton variant="primary" size="lg" href="#register">
              {WEBINAR_PAGE.hero.ctaText}
            </LinkButton>
            <LinkButton variant="secondary" size="lg" href="#register">
              {WEBINAR_PAGE.hero.secondaryCtaText}
            </LinkButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src={WEBINAR_PAGE.hero.videoUrl}
            title="Weight Loss Webinar Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
