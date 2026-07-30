"use client";

import { COMMUNITY } from "@/constants/content";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Community() {
  return (
    <section className="py-10 md:py-12.5 bg-white">
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-40.5" style={{ maxWidth: "1920px" }}>
        <div className="max-w-[1595px] mx-auto flex flex-col gap-8 md:gap-12.5">
          {/* Text Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 md:px-12 max-w-[840px] mx-auto flex flex-col items-stretch gap-2.5"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-sectionTitle font-bold text-textPrimary text-center">
              {COMMUNITY.title}{" "}
              <span className="text-primary">{COMMUNITY.highlightedText}</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-base font-medium text-textSecondary text-center">
              {COMMUNITY.description}
            </p>
          </motion.div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4.75">
            {COMMUNITY.cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col gap-4.75 p-4.75 bg-lightBg border border-veryLightBg rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative w-full h-48 md:h-56 lg:h-card-img rounded-md overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    quality={100}
                  />
                </div>

                {/* Text Container */}
                <div className="flex flex-col items-stretch gap-1">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-cardTitle font-semibold text-textPrimary text-center">
                    {card.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
