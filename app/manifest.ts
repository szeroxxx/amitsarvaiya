import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONFIG.name} - Health & Wellness Coach`,
    short_name: SITE_CONFIG.name,
    description: SITE_CONFIG.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: SITE_CONFIG.themeColor,
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
