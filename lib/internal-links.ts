/**
 * Central registry of every public page's identity (path, label, short
 * description, category). This is the one place that knows what pages
 * exist — Footer/Navbar nav items, contextual "related content" links, and
 * the blog's related-posts UI can all read from here instead of each
 * hardcoding its own copy of the site map.
 */
export interface SitePage {
  path: string;
  label: string;
  description: string;
  category: "core" | "legal" | "blog";
}

export const SITE_PAGES: SitePage[] = [
  {
    path: "/",
    label: "Home",
    description: "Health and wellness coaching with Amit Sarvaiya.",
    category: "core",
  },
  {
    path: "/weight-loss-webinar",
    label: "Free Weight Loss Webinar",
    description: "Join the free live webinar on sustainable weight loss.",
    category: "core",
  },
  {
    path: "/blog",
    label: "Blog",
    description: "Health and lifestyle articles.",
    category: "blog",
  },
  {
    path: "/privacy",
    label: "Privacy Policy",
    description: "How personal data is collected and used.",
    category: "legal",
  },
  {
    path: "/terms",
    label: "Terms and Conditions",
    description: "Terms governing use of the site and services.",
    category: "legal",
  },
];

/**
 * Pages worth cross-linking to from body content — excludes the current
 * page and legal boilerplate (privacy/terms are reachable from the footer
 * on every page already, so surfacing them again in a "related" context
 * would be over-linking).
 */
export function getRelatedPages(currentPath: string, limit = 3): SitePage[] {
  return SITE_PAGES.filter(
    (page) => page.path !== currentPath && page.category !== "legal"
  ).slice(0, limit);
}
