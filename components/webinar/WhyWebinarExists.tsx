"use client";

import { LinkButton } from "@/components/ui/LinkButton";
import { WEBINAR_PAGE } from "@/constants/webinar-content";
import { motion } from "framer-motion";

export default function WhyWebinarExists() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-textPrimary mb-6">
            {WEBINAR_PAGE.excuses.title}
          </h2>
          <p className="text-base md:text-lg text-textSecondary mb-8">
            {WEBINAR_PAGE.excuses.description}
          </p>

          <div className="text-left bg-veryLightBg rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-textPrimary mb-6 text-center">
              {WEBINAR_PAGE.excuses.subtitle}
            </h3>
            <ul className="space-y-4 list-none">
              {WEBINAR_PAGE.excuses.reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <p className="text-base md:text-lg text-textPrimary">
                    {reason}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton variant="primary" size="lg" href="#register">
              {WEBINAR_PAGE.excuses.ctaText}
            </LinkButton>
            <LinkButton variant="secondary" size="lg" href="#register">
              {WEBINAR_PAGE.excuses.secondaryCtaText}
            </LinkButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
