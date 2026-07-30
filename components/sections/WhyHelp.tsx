"use client";

import { WHY_HELP } from "@/constants/content";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyHelp() {
  return (
    <section className="py-10 md:py-12.5 bg-white">
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-40.5" style={{ maxWidth: "1920px" }}>
        {/* Container */}
        <div 
          className="bg-lightBg border border-veryLightBg flex flex-col items-center gap-6 md:gap-8 lg:gap-10 max-w-[1596px] mx-auto p-6 sm:p-10 md:p-16 lg:p-20 rounded-lg md:rounded-[10px]"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-sectionTitle font-bold text-textPrimary text-center"
          >
            {WHY_HELP.title}
          </motion.h2>

          {/* Images Group - Responsive Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          >
            {WHY_HELP.images.map((image, index) => (
              <div 
                key={index}
                className="relative w-full aspect-[277/398] rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Why help ${index + 1}`}
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            ))}
          </motion.div>

          {/* Main Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-small font-medium text-textSecondary text-center max-w-[1092px]"
          >
            {WHY_HELP.mainText}
          </motion.p>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center max-w-[444px]"
          >
            <p className="text-sm sm:text-base md:text-small font-medium text-textSecondary italic mb-2">
              {WHY_HELP.quote}
            </p>
            <p className="text-sm sm:text-base md:text-small font-bold text-primary">
              - {WHY_HELP.author}
            </p>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/weight-loss-webinar"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white text-sm sm:text-base font-semibold rounded-sm hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] w-full sm:w-auto"
            >
              {WHY_HELP.ctaText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
