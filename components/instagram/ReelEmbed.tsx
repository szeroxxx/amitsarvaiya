"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface ReelEmbedProps {
  url: string;
  index: number;
}

/**
 * Renders a single Instagram reel using Instagram's official embed markup.
 * Instagram's embed.js (loaded once in InstagramSection) replaces this
 * blockquote with the live reel iframe. No login, API or token required —
 * the only requirement is that the reel is from a public account.
 */
export default function ReelEmbed({ url, index }: ReelEmbedProps) {
  useEffect(() => {
    // If embed.js is already loaded (e.g. client-side navigation), ask it
    // to process any blockquotes that haven't been turned into embeds yet.
    window.instgrm?.Embeds?.process();
  }, [url]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="w-full max-w-[400px] sm:w-[340px] flex justify-center"
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 12,
          boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
          margin: 0,
          maxWidth: 540,
          minWidth: 260,
          width: "100%",
          padding: 0,
        }}
      />
    </motion.div>
  );
}
