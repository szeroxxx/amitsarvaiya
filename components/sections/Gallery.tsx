"use client";

import { GALLERY } from "@/constants/content";
import Image from "next/image";
import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/CountUp";

export default function Gallery() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-40.5" style={{ maxWidth: "1920px" }}>
        <div className="max-w-[1595px] mx-auto flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
          {/* Text Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 md:px-12 max-w-[840px] mx-auto flex flex-col items-stretch gap-2.5"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-sectionTitle font-bold text-black text-center">
              {GALLERY.title}{" "}
              <span className="text-primary">{GALLERY.highlightedText}</span>{" "}
              {GALLERY.subtitle}
            </h2>
            <p className="text-sm sm:text-base lg:text-base font-medium text-black text-center">
              {GALLERY.description}
            </p>
          </motion.div>

          {/* Gallery Grid - Desktop (Exact Figma positions) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden 2xl:block relative w-[1181px] h-[609px]"
          >
            {/* Image 1 - Large left */}
            <div className="absolute rounded-lg overflow-hidden group" style={{ left: "0px", top: "0px", width: "277px", height: "398px" }}>
              <Image src={GALLERY.images[0].src} alt={GALLERY.images[0].alt} fill sizes="277px" className="object-cover transition-transform duration-300 group-hover:scale-105" quality={100} />
              <div className="absolute flex items-center gap-1 px-2.5 bg-primary left-0 bottom-0 h-9 backdrop-blur-sm opacity-0 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-white font-ibm text-tiny uppercase">{GALLERY.images[0].label}</p>
              </div>
            </div>


            {/* Image 2 - Small top middle */}
            <div className="absolute rounded-lg overflow-hidden group" style={{ left: "301px", top: "0px", width: "277px", height: "187px" }}>
              <Image src={GALLERY.images[1].src} alt={GALLERY.images[1].alt} fill sizes="277px" className="object-cover transition-transform duration-300 group-hover:scale-105" quality={100} />
              <div className="absolute flex items-center gap-1 px-2.5 bg-primary left-0 bottom-0 h-9 backdrop-blur-sm opacity-0 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-white font-ibm text-tiny uppercase">{GALLERY.images[1].label}</p>
              </div>
            </div>


            {/* Image 3 - Large right */}
            <div className="absolute rounded-lg overflow-hidden group" style={{ left: "603px", top: "0px", width: "578px", height: "398px" }}>
              <Image src={GALLERY.images[2].src} alt={GALLERY.images[2].alt} fill sizes="578px" className="object-cover transition-transform duration-300 group-hover:scale-105" quality={100} />
              <div className="absolute flex items-center gap-1 px-2.5 bg-primary right-0 bottom-0 h-9 backdrop-blur-sm opacity-0 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-white font-ibm text-tiny uppercase">{GALLERY.images[2].label}</p>
              </div>
            </div>


            {/* 24+ Card - Bottom left */}
            <div className="absolute bg-primary rounded-lg flex flex-col items-start justify-start p-[15px]" style={{ left: "0px", top: "422px", width: "277px", height: "187px" }}>
              <p className="text-white font-ibm font-medium" style={{ fontSize: "70px", lineHeight: "91px", letterSpacing: "-0.0143em" }}>
                <CountUp value={GALLERY.communityCount} />
              </p>
              <p className="text-white font-ibm text-small mt-[20.22px]" style={{ width: "180px", lineHeight: "25.6px" }}>
                {GALLERY.communityText}
              </p>
            </div>

            {/* Image 4 - Middle bottom */}
            <div className="absolute rounded-lg overflow-hidden group" style={{ left: "301px", top: "211px", width: "277px", height: "398px" }}>
              <Image src={GALLERY.images[3].src} alt={GALLERY.images[3].alt} fill sizes="277px" className="object-cover transition-transform duration-300 group-hover:scale-105" quality={100} />
              <div className="absolute flex items-center gap-1 px-2.5 bg-primary left-0 bottom-0 h-9 backdrop-blur-sm opacity-0 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-white font-ibm text-tiny uppercase">{GALLERY.images[3].label}</p>
              </div>
            </div>


            {/* Image 5 - Bottom right */}
            <div className="absolute rounded-lg overflow-hidden group" style={{ left: "603px", top: "422px", width: "578px", height: "187px" }}>
              <Image src={GALLERY.images[4].src} alt={GALLERY.images[4].alt} fill sizes="578px" className="object-cover transition-transform duration-300 group-hover:scale-105" quality={100} />
              <div className="absolute flex items-center gap-1 px-2.5 bg-primary right-0 bottom-0 h-9 backdrop-blur-sm opacity-0 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-white font-ibm text-tiny uppercase">{GALLERY.images[4].label}</p>
              </div>
            </div>

          </motion.div>

          {/* Gallery Grid - Mobile/Tablet (Responsive) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="2xl:hidden w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {/* Images */}
            {GALLERY.images.map((image, index) => (
              <div key={index} className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
                <div className="absolute flex items-center gap-1 px-3 bg-primary left-0 bottom-0 h-9 backdrop-blur-sm">
                  <p className="text-white font-ibm text-[10px] sm:text-xs uppercase">{image.label}</p>
                </div>
              </div>
            ))}

            {/* 24+ Card */}
            <div className="bg-primary rounded-lg flex flex-col items-start justify-start p-6 sm:p-8 aspect-[16/10]">
              <p className="text-white font-ibm font-medium text-5xl sm:text-6xl md:text-7xl leading-tight">
                <CountUp value={GALLERY.communityCount} />
              </p>
              <p className="text-white font-ibm text-sm sm:text-base mt-4 max-w-[180px]">
                {GALLERY.communityText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
