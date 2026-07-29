"use client";

import { NAV_LINKS } from "@/constants/content";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary border-b border-[#EEF8D3]">
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
              className="inline-flex items-center justify-center px-4 lg:px-6 py-2.5 lg:py-3.5 bg-veryLightBg text-darkBg text-sm lg:text-base font-semibold rounded-sm hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-darkBg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-[#EEF8D3] pt-4">
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
              className="inline-flex items-center justify-center px-6 py-3 bg-veryLightBg text-darkBg text-base font-semibold rounded-sm hover:bg-white/90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
