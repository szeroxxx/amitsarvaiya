"use client";

import { WEBINAR } from "@/constants/content";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import RegisterModal from "@/components/webinar/RegisterModal";

export default function Webinar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-10 md:py-12.5 bg-white">
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-40.5" style={{ maxWidth: "1920px" }}>
        {/* Gradient Container */}
        <div 
          className="relative overflow-hidden max-w-[1597px] mx-auto p-6 sm:p-8 md:p-12 lg:p-0"
          style={{
            minHeight: "400px",
            background: "linear-gradient(225deg, rgba(41, 182, 246, 1) 0%, rgba(225, 245, 254, 1) 100%)",
            borderRadius: "10px",
          }}
        >
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-14 px-8 xl:px-16 py-14 xl:py-16">
            {/* Text Container - Left Side */}
            <div className="flex flex-col flex-1 min-w-0 max-w-[610px]">
              {/* Title */}
              <h2 className="font-bold text-textPrimary mb-[23px] text-4xl xl:text-[48px]" style={{ lineHeight: "1.5em" }}>
                Join Amit Sarvaiya <span className="text-textPrimary">Live</span>
              </h2>

              {/* Description */}
              <p className="text-base xl:text-body font-medium text-textPrimary mb-[22.5px]">
                {WEBINAR.description}
              </p>

              {/* Checklist */}
              <ul className="flex flex-col gap-[7px] mb-[26px] list-none">
                {WEBINAR.checklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-[26.39px]">
                    <Check
                      className="text-accent flex-shrink-0 mt-[7px]"
                      style={{ width: "17.59px", height: "18px" }}
                      aria-hidden="true"
                    />
                    <p className="text-base xl:text-body font-medium text-textPrimary">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-textSecondary text-white text-base font-semibold rounded-sm hover:bg-textSecondary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] self-start"
              >
                {WEBINAR.ctaText}
              </button>
            </div>

            {/* Images - Right Side */}
            <div className="relative flex-1 shrink-0 max-w-[440px] xl:max-w-[500px] aspect-square">
              {/* Coach Image */}
              <Image
                src={WEBINAR.image}
                alt="Amit Sarvaiya coaching"
                fill
                sizes="(max-width: 1280px) 40vw, 500px"
                className="object-contain"
                quality={100}
              />

              {/* Thumbnail Image - overlapping bottom-left, scales with the coach image */}
              <div
                className="absolute border border-primary rounded-[10px] overflow-hidden"
                style={{
                  left: "-12%",
                  top: "62%",
                  width: "68%",
                  aspectRatio: "422 / 223",
                  boxShadow: "4px 4px 0px 0px rgba(41, 182, 246, 0.5)",
                }}
              >
                <Image
                  src={WEBINAR.thumbnail}
                  alt="Webinar preview"
                  fill
                  sizes="(max-width: 1280px) 27vw, 340px"
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Layout */}
          <div className="lg:hidden flex flex-col gap-6 md:gap-8">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textPrimary">
              Join Amit Sarvaiya <span className="text-textPrimary">Live</span>
            </h2>

            {/* Images Container - Mobile/Tablet */}
            <div className="relative flex flex-col sm:flex-row gap-4 md:gap-6">
              {/* Coach Image */}
              <div className="relative w-full sm:w-1/2 h-64 sm:h-80 md:h-96">
                <Image
                  src={WEBINAR.image}
                  alt="Amit Sarvaiya coaching"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain"
                  quality={100}
                />
              </div>

              {/* Thumbnail Image */}
              <div className="relative w-full sm:w-1/2 h-48 sm:h-80 md:h-96 border-2 border-primary rounded-lg overflow-hidden">
                <Image
                  src={WEBINAR.thumbnail}
                  alt="Webinar preview"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-body font-medium text-textPrimary">
              {WEBINAR.description}
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 md:gap-4 list-none">
              {WEBINAR.checklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3 md:gap-4">
                  <Check className="text-accent flex-shrink-0 mt-1 w-5 h-5" aria-hidden="true" />
                  <p className="text-base sm:text-lg md:text-body font-medium text-textPrimary">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-textSecondary text-white text-base font-semibold rounded-sm hover:bg-textSecondary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] w-full sm:w-auto"
            >
              {WEBINAR.ctaText}
            </button>
          </div>
        </div>
      </div>

      <RegisterModal open={modalOpen} onClose={() => setModalOpen(false)} source="homepage" />
    </section>
  );
}
