"use client";

import { LinkButton } from "@/components/ui/LinkButton";
import { FINAL_CTA } from "@/constants/content";

export default function FinalCTA() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-[162px]">
      <div className="max-w-[1466px] min-h-[250px] md:h-[306px] mx-auto bg-light-blue border border-very-light-blue rounded-xl flex flex-col items-center justify-center gap-6 md:gap-8 px-6 py-10 md:p-8">
        {/* Pre-title */}
        <p className="text-sm md:text-base font-medium text-text-primary uppercase text-center">
          {FINAL_CTA.preTitle}
        </p>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-text-primary leading-[1.5em] text-center">
          {FINAL_CTA.title}
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base font-medium text-text-secondary text-center max-w-xl">
          {FINAL_CTA.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 w-full sm:w-auto">
          <LinkButton
            href="/"
            variant="primary"
            className="w-full sm:w-auto px-6 h-[53px] flex items-center justify-center text-sm md:text-base"
          >
            {FINAL_CTA.primaryCta}
          </LinkButton>
          <LinkButton
            href="/weight-loss-webinar"
            variant="secondary"
            className="w-full sm:w-auto px-6 h-[53px] flex items-center justify-center text-sm md:text-base"
          >
            {FINAL_CTA.secondaryCta}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
