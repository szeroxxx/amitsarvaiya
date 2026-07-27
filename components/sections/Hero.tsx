"use client";

import { HERO } from "@/constants/content";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/community-card-1.png"
          alt="Community gathering"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-[rgba(30,30,30,0.8)]" />
      </div>

      {/* Rounded Bottom Corner - Hidden on mobile */}
      <div className="absolute bottom-0 right-0 left-0 h-8 md:h-12 lg:h-16 bg-white rounded-tl-[30px] md:rounded-tl-[40px] lg:rounded-tl-[50px]" />

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-40.5">
        <div className="w-full max-w-[1183px] flex flex-col items-center">
          {/* Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4 md:gap-5 mb-8 md:mb-12.5"
          >
            {/* Subtitle Container */}
            <div className="flex flex-col items-center gap-2 md:gap-3.5">
              {/* <div className="flex items-center gap-2.5 py-2.5">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-brand font-semibold text-white text-center">
                  {HERO.subtitle}
                </p>
              </div> */}

              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-heroTitle font-bold text-white text-center px-4">
                {HERO.title}
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-base font-medium text-white text-center max-w-[90%] sm:max-w-[80%] lg:max-w-heroText px-4">
              {HERO.description}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 w-full sm:w-auto px-4"
          >
            <Link
              href="/weight-loss-webinar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 md:px-5 py-3 md:py-4 bg-primary text-textSecondary text-sm md:text-base font-semibold rounded-sm hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              {HERO.primaryCta}
            </Link>
            <Link
              href="tel:+919274460030"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-6 py-3 md:py-4 bg-[#F6FBE9] text-textPrimary text-sm md:text-base font-semibold rounded-sm border border-[#B3E5FC] hover:bg-white transition-colors whitespace-nowrap"
            >
              {HERO.secondaryCta}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
