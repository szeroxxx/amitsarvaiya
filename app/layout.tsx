import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { DEFAULT_ROBOTS, SITE_CONFIG, SITE_URL } from "@/lib/seo/config";

const urbanist = Urbanist({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: SITE_CONFIG.themeColor,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_CONFIG.defaultTitle,
    template: SITE_CONFIG.titleTemplate,
  },
  description: SITE_CONFIG.defaultDescription,
  keywords: [...SITE_CONFIG.keywords],
  authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.author.url }],
  creator: SITE_CONFIG.author.name,
  publisher: SITE_CONFIG.publisher,
  category: SITE_CONFIG.category,
  robots: DEFAULT_ROBOTS,
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.webp", type: "image/webp" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.webp",
  },
  openGraph: {
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    url: SITE_URL,
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.locale,
    type: "website",
    images: [
      {
        url: SITE_CONFIG.defaultImage.url,
        width: SITE_CONFIG.defaultImage.width,
        height: SITE_CONFIG.defaultImage.height,
        alt: SITE_CONFIG.defaultImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    images: [SITE_CONFIG.defaultImage.url],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className={urbanist.className} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-3 focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
