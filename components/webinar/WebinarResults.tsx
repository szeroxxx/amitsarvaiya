"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { WEBINAR_PAGE } from "@/constants/webinar-content";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WebinarResults() {
  return (
    <section className="py-16 md:py-24 bg-veryLightBg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-textPrimary mb-4">
            {WEBINAR_PAGE.results.title}
          </h2>
          <p className="text-base md:text-lg text-textSecondary max-w-3xl mx-auto mb-8">
            {WEBINAR_PAGE.results.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {WEBINAR_PAGE.results.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="relative aspect-[1/1] w-full">
                  <Image
                    src={testimonial.image}
                    alt={"testimonial.name"}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="text-center">
                    {testimonial.result}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <LinkButton variant="primary" size="lg" href="#register">
            {WEBINAR_PAGE.results.ctaText}
          </LinkButton>
          <LinkButton variant="secondary" size="lg" href="#register">
            {WEBINAR_PAGE.results.secondaryCtaText}
          </LinkButton>
        </motion.div>
      </div>
    </section>
  );
}
