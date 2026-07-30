// All content extracted exactly from Figma

export const ANNOUNCEMENT_TEXT =
  "Join \"webinar nu name ahiya lakhvani che\"";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Upcoming Webinar", href: "/weight-loss-webinar" },
];

export const HERO = {
  // subtitle: "Transform Your Health with",
  title: "Trusted Health & Wellness Coach from India",
  description:
    "You are in the right place if you are ready to feel better, look better, and permanently take charge of your health.",
  primaryCta: "Join Upcoming Webinar",
  secondaryCta: "Book Call Directly",
};

export const COMMUNITY = {
  title: "A Community that pushes You to stay on track and",
  highlightedText: "believe in Yourself",
  description:
    "When you join, you are not just starting a health journey—you become part of a family that supports, encourages, and shows what is possible when people choose to change together.",
  cards: [
    {
      image: "/community-card-1.png",
      title: "Simple, practical steps to fix your lifestyle",
    },
    {
      image: "/community-card-2.png",
      title: "A supportive community that keeps you motivated",
    },
    {
      image: "/community-card-3.png",
      title: "Live daily webinars with real guidance",
    },
    {
      image: "/community-card-4.png",
      title: "Personal help whenever you need it",
    },
  ],
};

export const WEBINAR = {
  title: "Join My Next Webinar",
  description:
    "I will walk you through the most important but simple strategies that have helped thousands of people reset their energy, manage their lifestyle, and feel in control again.",
  checklist: [
    "Understand why health problems go beyond 'just weight'.",
    "Learn practical food and lifestyle adjustments anyone can start today.",
    "See real success stories of people who transformed with small changes.",
  ],
  ctaText: "Reserve your spot today →",
  image: "/webinar-coach.png",
  thumbnail: "/webinar-thumbnail.png",
};

export const TESTIMONIALS = {
  title: "What Our",
  highlightedText: "Community",
  subtitle: "is Saying ",
  description:
    "Real change is best explained by the people who have lived it. Every story is different, but each one proves that transformation is possible when you decide to take the first step.",
  items: [
    {
      type: "quote" as const,
      text: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
      author: "Jennifer Anderson",
      location: "Business owner, Ahmedabad ",
    },
    {
      type: "image" as const,
      image: "/testimonial-1.webp",
      author: "Jennifer Anderson",
      location: "Business owner, Ahmedabad ",
    },
    {
      type: "quote" as const,
      text: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
      author: "Jennifer Anderson",
      location: "Business owner, Ahmedabad ",
    },
    {
      type: "image" as const,
      image: "/testimonial-2.webp",
      author: "Jennifer Anderson",
      location: "Business owner, Ahmedabad ",
    },
    {
      type: "image" as const,
      image: "/testimonial-3.webp",
      author: "Jennifer Anderson",
      location: "Business owner, Ahmedabad ",
    },
    {
      type: "quote" as const,
      text: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!, I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
      author: "Jennifer Anderson",
      location: "Business owner, Ahmedabad ",
    },
    {
      type: "image" as const,
      image: "/testimonial-4.webp",
      author: "Jennifer Anderson",
      location: "Business owner, Ahmedabad ",
    },
    {
      type: "quote" as const,
      text: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
      author: "Jennifer Anderson",
      location: "Business owner, Ahmedabad ",
    },
  ],
};

export const VIDEO_TESTIMONIALS = {
  title: "Real Stories,",
  highlightedText: "Real Transformations",
  subtitle: "",
  description:
    "Hear it straight from the people who lived it. Hover to preview, tap any video to watch the full story.",
  // Portrait (9:16) testimonial videos hosted locally in /public/testimonials.
  // Each item points to a compressed mp4 + a poster frame generated from the video.
  videos: [
    { src: "/testimonials/testimonial-1.mp4", poster: "/testimonials/poster-1.jpg" },
    { src: "/testimonials/testimonial-2.mp4", poster: "/testimonials/poster-2.jpg" },
    { src: "/testimonials/testimonial-3.mp4", poster: "/testimonials/poster-3.jpg" },
    { src: "/testimonials/testimonial-4.mp4", poster: "/testimonials/poster-4.jpg" },
    { src: "/testimonials/testimonial-5.mp4", poster: "/testimonials/poster-5.jpg" },
    { src: "/testimonials/testimonial-6.mp4", poster: "/testimonials/poster-6.jpg" },
    { src: "/testimonials/testimonial-7.mp4", poster: "/testimonials/poster-7.jpg" },
    { src: "/testimonials/testimonial-8.mp4", poster: "/testimonials/poster-8.jpg" },
    { src: "/testimonials/testimonial-9.mp4", poster: "/testimonials/poster-9.jpg" },
  ],
};

export const WHY_HELP = {
  title: "Real Solutions for Real Health Challenges",
  images: [
    "/solution-1.jpg",
    "/solution-2.webp",
    "/solution-3.webp",
    "/solution-4.webp",
  ],
  mainText:
    "I have seen the same struggles again and again in people facing stress, thyroid issues, weight gain, skin problems, digestion issues, hypertension, diabetes, and many other lifestyle-related conditions. These are often signs that your lifestyle is out of balance. For over 12 years, I have helped more than 22,000 people across 24+ countries reset their health, energy, and confidence through simple lifestyle changes. No crash diets. No extreme workouts. Just practical steps that naturally fit into your everyday life.",
  quote:
    "Health should be easy, practical, and within reach for everyone, no matter where they are.",
  author: "Amit Sarvaiya",
  ctaText: "Ready to start your transformation? Let's begin",
};

export const GALLERY = {
  title: "Where",
  highlightedText: "Community",
  subtitle: "Energy Meets Personal Care",
  description:
    "Transformation is never a solo journey. You get the strength of a supportive community together with one-on-one guidance that makes your journey truly yours.",
  images: [
    { src: "/why-help-2.png", label: "Ahmedabad" },
    { src: "/community-1.jpeg", label:  "Surat" },
    { src: "/gallery-3.png", label: "HEALTH SURVEY IN SMALL TOWNS AND DISTRICS" },
    { src: "/community-card-4.png", label:"Surat" },
    { src: "/gallery-4.png", label: "HEALTH SURVEY IN SMALL TOWNS AND DISTRICS" },


  ],
  communityCount: "24+",
  communityText: "Countries where people have already joined this community",
};

export const INSTAGRAM = {
  title: "Latest",
  highlightedText: "Reels",
  description:
    "Follow Amit & Rekha for daily fitness tips, transformations, nutrition advice and motivation.",
  username: "amit_rekha_fitcoach",
  profileUrl: "https://www.instagram.com/amit_rekha_fitcoach/",
  ctaText: "See More on Instagram",

  /**
   * AUTO-FETCH LATEST REELS (recommended) — via Behold (free, no login/API in code).
   * One-time setup:
   *   1. Sign up free at https://behold.so and connect the Instagram account.
   *   2. Create a feed, set it to show Reels (limit 6).
   *   3. Copy the Feed ID from the widget's "Embed Code"
   *      (looks like: L7mnQCHvZeMZLbNXmJll).
   *   4. Paste it below. The section then auto-updates with the latest reels.
   * Leave this empty to fall back to the manual `reels` list further down.
   */
  beholdFeedId: "",

  /**
   * FALLBACK — manual reel links, used only while `beholdFeedId` above is empty.
   * On Instagram: open a reel → Share (paper-plane) → "Copy link" → paste here.
   * These render as real, live Instagram embeds — no login or API needed.
   */
  reels: [
    "https://www.instagram.com/reel/DRCjEB_AoNM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DZ4S-hcCzn-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DP1JsP0AgvC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DSmfQ4KgmwU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  ],
};

export const FINAL_CTA = {
  preTitle: "BE PART OF SOMETHING BIGGER",
  title: "Be Part of a Growing Health Community",
  description: "Thousands have already begun transforming their lifestyle with simple steps, expert guidance, and the support of a caring community. The results are waiting for you too.",
  primaryCta: "Join Community",
  secondaryCta: "Join Live Webinar",
};

export const FOOTER = {
  brand: "Amit Sarvaiya",
  links: [
    { label: "Home", href: "/" },
    { label: "Terms and condition", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  goToTopText: "Go To Top",
  copyright: "© 2025 Amit Sarvaiya. All rights reserved.",
};
