import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: "#29B6F6",
        secondary: "#81D4FA",
        "light-blue": "rgba(179, 229, 252, 0.2)",
        "very-light-blue": "#E1F5FE",
        "text-primary": "#262626",
        "text-secondary": "#333333",
        "dark-bg": "#1E1E1E",
        accent: "#0089C8",
        // Backwards compatibility aliases
        lightBg: "rgba(179, 229, 252, 0.2)",
        veryLightBg: "#E1F5FE",
        textPrimary: "#262626",
        textSecondary: "#333333",
        darkBg: "#1E1E1E",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        ibm: ["IBM Plex Sans", "sans-serif"],
      },
      fontSize: {
        // Exact Figma sizes
        tiny: ["12px", { lineHeight: "14.4px", letterSpacing: "0.042em" }],
        small: ["16px", { lineHeight: "1.5em" }],
        base: ["18px", { lineHeight: "1.5em" }],
        body: ["22px", { lineHeight: "1.5em" }],
        cardTitle: ["26px", { lineHeight: "1.5em" }],
        brand: ["28px", { lineHeight: "1" }],
        sectionTitle: ["48px", { lineHeight: "1.5em" }],
        heroTitle: ["58px", { lineHeight: "1" }],
        galleryStat: ["70px", { lineHeight: "91px" }],
      },
      spacing: {
        // Exact Figma spacing
        "4.75": "19px",
        "5": "20px",
        "14.5": "58px",
        "40.5": "162px",
      },
      maxWidth: {
        container: "1920px",
        content: "1596px",
        contentSmall: "1092px",
        quote: "444px",
        heroText: "761px",
      },
      width: {
        "card-sm": "384px",
        "card-md": "385px",
        "card-lg": "610px",
      },
      height: {
        hero: "832px",
        "card-img": "288px",
        "testimonial-sm": "400px",
        "testimonial-lg": "520px",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "50px",
        full: "73px",
      },
      backdropBlur: {
        xs: "1px",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports -- Tailwind's config loader expects a synchronous plugins array; require() is the documented pattern even in .ts configs.
  plugins: [require("@tailwindcss/typography")],
};
export default config;
