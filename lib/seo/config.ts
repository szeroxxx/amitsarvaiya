/**
 * Centralized SEO configuration.
 *
 * Single source of truth for every reusable SEO constant (site identity,
 * default copy, social links, image defaults). Root layout metadata and
 * the `buildMetadata` helper both read from here so no page ever
 * hardcodes the site name, URL, or default description.
 */

const normalizeUrl = (url: string) => url.replace(/\/+$/, "");

/** Base URL of the production site. Overridable via env for staging/preview deploys. */
export const SITE_URL = normalizeUrl(
  process.env.NEXT_PUBLIC_SITE_URL || "https://amitsarvaiya.com"
);

export const SITE_CONFIG = {
  /** Short brand name, used as the OG site_name and manifest short_name. */
  name: "Amit Sarvaiya",
  /** Registered business name, for legal/publisher references. */
  legalName: "REKHABEN AMITBHAI SARVAIYA",
  url: SITE_URL,

  /** Used by the root layout as the homepage <title> and title template fallback. */
  defaultTitle: "Amit Sarvaiya - India's Top Health and Wellness Coach",
  /** %s is replaced by each page's own title. */
  titleTemplate: "%s | Amit Sarvaiya",
  defaultDescription:
    "Transform your health with Amit Sarvaiya, India's top health and wellness coach. Join live webinars and a supportive community for practical, sustainable guidance on weight loss, thyroid, diabetes, stress, digestion, and hypertension.",
  keywords: [
    "health coach India",
    "wellness coach",
    "weight loss coach",
    "thyroid lifestyle coaching",
    "diabetes lifestyle coaching",
    "stress management coach",
    "hypertension lifestyle coaching",
    "digestion health coaching",
    "healthy lifestyle coach India",
    "Amit Sarvaiya",
  ],

  author: {
    name: "Amit Sarvaiya",
    url: SITE_URL,
  },
  publisher: "REKHABEN AMITBHAI SARVAIYA",

  /** BCP 47 locale used for OpenGraph. */
  locale: "en_IN",
  themeColor: "#29B6F6",

  /** Default OpenGraph/Twitter share image. Swap for a real 1200x630 asset — see Manual Tasks. */
  defaultImage: {
    url: "/icon-512.png",
    width: 512,
    height: 512,
    alt: "Amit Sarvaiya - Health and Wellness Coach",
  },

  social: {
    instagram: "https://www.instagram.com/amit_rekha_fitcoach/",
    youtube: "https://www.youtube.com/@Amit.fitcoach",
    whatsapp: "https://wa.me/919274460030",
  },

  /** IAB/Open Graph content category. */
  category: "Health",
} as const;

/** Default crawling directive applied to every indexable page. */
export const DEFAULT_ROBOTS = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
  },
};

/** Directive for pages that must never be indexed (legal boilerplate, internal utility pages, etc). */
export const NOINDEX_ROBOTS = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
};
