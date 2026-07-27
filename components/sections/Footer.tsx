"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FOOTER } from "@/constants/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-primary border-t border-text-primary">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-[162px] py-8 md:py-[50px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-[50px]">
          {/* Brand Name */}
          <h3 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-white text-center md:text-left">
            {FOOTER.brand}
          </h3>

          {/* Navigation Links */}
          <nav className="flex flex-col sm:flex-row gap-4 md:gap-[26px] items-center">
            {FOOTER.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base md:text-lg font-medium text-white hover:text-very-light-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Go To Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-[14px] py-[14px] bg-white text-primary font-medium rounded-[73px] hover:bg-very-light-blue transition-colors"
            aria-label="Go to top"
          >
            <span className="text-base md:text-lg whitespace-nowrap">{FOOTER.goToTopText}</span>
            <div className="w-[34px] h-[34px] bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <ArrowUp className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Copyright Box */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-[162px] pb-8 md:pb-[50px]">
        <div className="bg-very-light-blue border border-primary rounded-lg py-3 md:py-4 px-4 md:px-[20px] md:pr-[30px]">
          <p className="text-sm sm:text-base md:text-lg font-normal text-text-primary text-center">
            {FOOTER.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
