"use client";

import { TESTIMONIALS } from "@/constants/content";
import { Quote, Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-40.5" style={{ maxWidth: "1920px" }}>
        <div className="max-w-[1596px] mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20">
          {/* Text Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 md:px-12 max-w-[840px] mx-auto flex flex-col items-stretch gap-2.5"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-sectionTitle font-bold text-textPrimary text-center">
              {TESTIMONIALS.title}{" "}
              <span className="text-primary">{TESTIMONIALS.highlightedText}</span>{" "}
              {TESTIMONIALS.subtitle}
            </h2>
            <p className="text-sm sm:text-base lg:text-base font-medium text-textSecondary text-center">
              {TESTIMONIALS.description}
            </p>
          </motion.div>

          {/* Testimonials Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-5">
            {TESTIMONIALS.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                className="flex"
              >
                {item.type === "quote" ? (
                  <div className="h-full flex flex-col bg-lightBg border border-veryLightBg rounded-md p-6 md:p-8 lg:p-10 gap-4 lg:gap-4.75">
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-textSecondary" />
                    <p className="text-sm sm:text-base lg:text-base font-medium text-textSecondary flex-grow">
                      {item.text}
                    </p>
                    <p className="text-sm sm:text-base lg:text-base font-semibold text-primary">
                      {item.author}
                    </p>
                  </div>
                ) : (
                  <div className="h-full flex flex-col bg-lightBg border border-veryLightBg rounded-md overflow-hidden">
                    <div className="relative w-full aspect-[340/400]">
                      <Image
                        src={item.image}
                        alt={item.author}
                        fill
                        className="object-cover"
                        quality={100}
                      />
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[42px] h-[42px] bg-white rounded-full flex items-center justify-center opacity-80 hover:opacity-100 cursor-pointer transition-opacity">
                          <Play className="w-5 h-5 text-primary ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <div className="px-6 md:px-8 lg:px-10 py-4 flex flex-col gap-2">
                      <p className="text-sm sm:text-base lg:text-base font-semibold text-primary">
                        {item.author}
                      </p>
                      <p className="text-sm sm:text-base lg:text-base font-medium text-textSecondary">
                        {item.location}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
