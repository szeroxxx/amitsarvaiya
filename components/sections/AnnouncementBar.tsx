"use client";

import { ANNOUNCEMENT_TEXT } from "@/constants/content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-primary py-2 md:py-3.5 px-4 sm:px-8 md:px-16 lg:px-40.5">
      <Link
        href="/weight-loss-webinar"
        className="flex items-center justify-center gap-2 py-2 md:py-2.5 px-4 md:px-5 bg-white/20 border border-primary/50 rounded-md hover:bg-white/30 transition-colors mx-auto max-w-fit"
      >
        <p className="text-xs sm:text-sm md:text-base font-medium text-white text-center">
          {ANNOUNCEMENT_TEXT}
        </p>
        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0" />
      </Link>
    </div>
  );
}
