"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX, X, ChevronLeft, ChevronRight } from "lucide-react";
import { VIDEO_TESTIMONIALS } from "@/constants/content";

type VideoItem = { src: string; poster: string };

/* -------------------------------------------------------------------------- */
/*  Single card — poster by default, plays muted preview on hover (desktop)    */
/* -------------------------------------------------------------------------- */
function VideoCard({
  item,
  index,
  onOpen,
}: {
  item: VideoItem;
  index: number;
  onOpen: (index: number) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  const handleEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    // play() returns a promise that can reject if interrupted — ignore safely.
    v.play().catch(() => {});
  };

  const handleLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setReady(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="snap-start shrink-0"
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        aria-label="Play video testimonial"
        className="group relative block w-[230px] sm:w-[250px] lg:w-[270px] aspect-[9/16] overflow-hidden rounded-lg bg-black shadow-sm ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {/* Blurred poster backdrop — fills the card for both portrait & landscape videos */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.poster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl brightness-75"
        />

        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          muted
          loop
          playsInline
          preload="none"
          onPlaying={() => setReady(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Subtle gradient for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {/* Play badge — hidden once the hover preview is actually playing */}
        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            ready ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-0.5 h-6 w-6 text-primary" fill="currentColor" />
          </span>
        </div>

        {/* Muted hint while previewing */}
        <span
          className={`absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-opacity duration-300 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <VolumeX className="h-4 w-4" />
        </span>
      </button>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Fullscreen lightbox — plays the selected video with sound + controls       */
/* -------------------------------------------------------------------------- */
function VideoModal({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: VideoItem[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);
  const item = items[index];

  // Close on Escape, navigate with arrow keys.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onNavigate]);

  // Autoplay the newly selected video with sound.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    v.play().catch(() => {});
  }, [index, muted]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Prev */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + items.length) % items.length);
        }}
        aria-label="Previous video"
        className="absolute left-2 sm:left-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Video */}
      <div
        className="relative aspect-[9/16] h-[85vh] max-h-[85vh] max-w-[92vw] overflow-hidden rounded-xl bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          key={item.src}
          src={item.src}
          poster={item.poster}
          controls
          autoPlay
          playsInline
          className="h-full w-full object-contain"
        />
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute" : "Mute"}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
        >
          {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % items.length);
        }}
        aria-label="Next video"
        className="absolute right-2 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                     */
/* -------------------------------------------------------------------------- */
export default function VideoTestimonials() {
  const items = VIDEO_TESTIMONIALS.videos as VideoItem[];
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-40.5" style={{ maxWidth: "1920px" }}>
        <div className="max-w-[1596px] mx-auto flex flex-col gap-10 md:gap-14 lg:gap-16">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 md:px-12 max-w-[960px] mx-auto flex flex-col items-stretch gap-2.5"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-sectionTitle font-bold text-textPrimary text-center">
              {VIDEO_TESTIMONIALS.title}{" "}
              <span className="text-primary">{VIDEO_TESTIMONIALS.highlightedText}</span>{" "}
              {VIDEO_TESTIMONIALS.subtitle}
            </h2>
            <p className="text-sm sm:text-base lg:text-base font-medium text-textSecondary text-center">
              {VIDEO_TESTIMONIALS.description}
            </p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            {/* Desktop scroll buttons */}
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="hidden lg:flex absolute -left-5 top-1/2 z-10 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white text-textPrimary shadow-lg ring-1 ring-black/5 transition-colors hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="hidden lg:flex absolute -right-5 top-1/2 z-10 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white text-textPrimary shadow-lg ring-1 ring-black/5 transition-colors hover:bg-primary hover:text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div
              ref={scrollerRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {items.map((item, i) => (
                <VideoCard key={item.src} item={item} index={i} onOpen={setOpenIndex} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {openIndex !== null && (
        <VideoModal
          items={items}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
