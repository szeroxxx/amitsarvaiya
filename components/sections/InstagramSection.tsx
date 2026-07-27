"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import ReelEmbed from "@/components/instagram/ReelEmbed";
import InstagramButton from "@/components/instagram/InstagramButton";
import { INSTAGRAM } from "@/constants/content";

export default function InstagramSection() {
  // Only render reels that have a real permalink (skip the placeholder slots).
  const reels = INSTAGRAM.reels.filter(
    (url) => url.includes("/reel/") && !url.includes("REPLACE_WITH")
  );
  const hasReels = reels.length > 0;

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-white">
      {/* Instagram's official embed script — no login, API key or token needed.
          onReady fires embed processing after the script (and any cached copy) is available. */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onReady={() => window.instgrm?.Embeds?.process()}
      />

      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-40.5" style={{ maxWidth: "1920px" }}>
        <div className="max-w-[1596px] mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20">
          {/* Text Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 md:px-20 lg:px-[300px] flex flex-col items-stretch gap-2.5"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-sectionTitle font-bold text-textPrimary text-center">
              {INSTAGRAM.title} <span className="text-primary">{INSTAGRAM.highlightedText}</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-base font-medium text-textSecondary text-center">
              {INSTAGRAM.description}
            </p>
          </motion.div>

          {hasReels ? (
            <>
              {/* Reels — centered flex wrap so 1, 2 or 3+ reels all look balanced.
                  Instagram embeds keep their own aspect ratio and size themselves. */}
              <div className="flex flex-wrap justify-center gap-6 items-start">
                {reels.map((url, index) => (
                  <ReelEmbed key={url} url={url} index={index} />
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center"
              >
                <InstagramButton href={INSTAGRAM.profileUrl}>
                  {INSTAGRAM.ctaText}
                </InstagramButton>
              </motion.div>
            </>
          ) : (
            /* Fallback until real reel links are added to INSTAGRAM.reels */
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center py-8"
            >
              <p className="text-textSecondary text-base mb-6">
                Catch all the latest reels straight from Instagram.
              </p>
              <InstagramButton href={INSTAGRAM.profileUrl}>
                Visit Instagram Profile
              </InstagramButton>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
