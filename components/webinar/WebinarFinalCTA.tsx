"use client";

import { LinkButton } from "@/components/ui/LinkButton";
import { WEBINAR_PAGE } from "@/constants/webinar-content";
import { motion } from "framer-motion";

export default function WebinarFinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm text-primary uppercase tracking-wider mb-4 font-medium">
            {WEBINAR_PAGE.finalCTA.preTitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-textPrimary mb-6 leading-tight">
            {WEBINAR_PAGE.finalCTA.title}
          </h2>
          <p className="text-base md:text-lg text-textSecondary mb-8 leading-relaxed">
            {WEBINAR_PAGE.finalCTA.description}
          </p>

          <LinkButton variant="primary" size="lg" href="#register">
            {WEBINAR_PAGE.finalCTA.ctaText}
          </LinkButton>
        </motion.div>
      </div>
    </section>
  );
}
