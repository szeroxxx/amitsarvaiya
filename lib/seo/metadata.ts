import type { Metadata } from "next";
import { DEFAULT_ROBOTS, NOINDEX_ROBOTS, SITE_CONFIG, SITE_URL } from "./config";

/** Builds an absolute, canonical URL for a site-relative path (e.g. "/weight-loss-webinar"). */
export function getCanonicalUrl(path: string = "/"): string {
  const normalizedPath = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${SITE_URL}${normalizedPath}`;
}

export interface PageMetadataInput {
  /** Page-specific title. Rendered through the root title template ("%s | Amit Sarvaiya"). */
  title: string;
  description: string;
  /** Site-relative path used to derive the canonical URL, e.g. "/weight-loss-webinar". */
  path: string;
  /** Extra keywords merged with the site-wide defaults. */
  keywords?: string[];
  /** Overrides the default share image for this page. */
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  /** Open Graph content type. Defaults to "website"; use "article" for future blog posts. */
  type?: "website" | "article";
  /** Set true to keep this page out of search results (e.g. thank-you/internal pages). */
  noIndex?: boolean;
  /**
   * Set true to render `title` as-is instead of running it through the root
   * title template ("%s | Amit Sarvaiya"). Use only for the homepage, whose
   * title already *is* the site's default title.
   */
  absoluteTitle?: boolean;
}

/**
 * Reusable per-page metadata builder for the App Router.
 *
 * Every page calls this instead of hand-assembling a Metadata object, so
 * canonical URLs, OpenGraph/Twitter defaults, and robots directives stay
 * consistent and are never duplicated across files.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image,
  type = "website",
  noIndex = false,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const canonicalUrl = getCanonicalUrl(path);
  const resolvedImage = image ?? SITE_CONFIG.defaultImage;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords?.length ? [...keywords, ...SITE_CONFIG.keywords] : undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex ? NOINDEX_ROBOTS : DEFAULT_ROBOTS,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type,
      images: [
        {
          url: resolvedImage.url,
          width: resolvedImage.width,
          height: resolvedImage.height,
          alt: resolvedImage.alt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedImage.url],
    },
  };
}
