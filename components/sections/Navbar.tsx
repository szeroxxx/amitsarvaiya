"use client";

import { NAV_LINKS } from "@/constants/content";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollAnimation();

  return (
    <header>
      <nav
        aria-label="Primary"
        className={cn(
          "sticky top-0 z-50 w-full bg-primary border-b border-[#EEF8D3] transition-shadow duration-300",
          isScrolled && "shadow-md"
        )}
      >
      <div className="px-4 sm:px-8 md:px-16 lg:px-40.5 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-brand font-semibold text-darkBg">
            Amit Sarvaiya
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {/* Nav Links */}
            <div className="flex items-center gap-4 lg:gap-[26px]">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm lg:text-base font-semibold text-darkBg hover:opacity-50 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact Button */}
            <Link
              href="tel:+919274460030"
              className="inline-flex items-center justify-center px-4 lg:px-6 py-2.5 lg:py-3.5 bg-veryLightBg text-darkBg text-sm lg:text-base font-semibold rounded-sm hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-darkBg relative w-6 h-6"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4 flex flex-col gap-4 border-t border-[#EEF8D3] pt-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-semibold text-darkBg hover:opacity-50 transition-opacity"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="tel:+919274460030"
                  className="inline-flex items-center justify-center px-6 py-3 bg-veryLightBg text-darkBg text-base font-semibold rounded-sm hover:bg-white/90 transition-all duration-200 active:scale-[0.98]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </nav>
    </header>
  );
}
