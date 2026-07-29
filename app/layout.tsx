import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

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
  themeColor: "#29B6F6",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://amitsarvaiya.com"),
  title: "Amit Sarvaiya - India's Top Health and Wellness Coach",
  description:
    "Transform your health with India's top health and wellness coach. Join a supportive community and take charge of your health.",
  keywords: [
    "health coach",
    "wellness coach",
    "nutrition coaching",
    "healthy lifestyle",
    "weight loss",
    "India",
  ],
  authors: [{ name: "Amit Sarvaiya" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.webp", type: "image/webp" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.webp", sizes: "180x180", type: "image/webp" },
    ],
    shortcut: "/favicon.webp",
  },
  openGraph: {
    title: "Amit Sarvaiya - India's Top Health and Wellness Coach",
    description:
      "Transform your health with India's top health and wellness coach.",
    type: "website",
    images: [
      {
        url: "/favicon.webp",
        width: 512,
        height: 512,
        alt: "Amit Sarvaiya Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Amit Sarvaiya - India's Top Health and Wellness Coach",
    description: "Transform your health with India's top health and wellness coach.",
    images: ["/favicon.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
