"use client";

import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

interface InstagramButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function InstagramButton({ href, children }: InstagramButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-white rounded-sm font-semibold text-lg transition-all duration-300 hover:bg-accent hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <Instagram className="w-5 h-5" />
      <span>{children}</span>
    </motion.a>
  );
}
