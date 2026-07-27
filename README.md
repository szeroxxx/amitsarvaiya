# Health & Wellness Coach Landing Page

A pixel-perfect recreation of a health and wellness coach landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 15** - App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Subtle animations
- **Lucide React** - Icons
- **next/image** - Optimized images

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Poppins font
│   ├── page.tsx            # Home page composition
│   └── globals.css         # Global styles
├── components/
│   ├── ui/
│   │   ├── Button.tsx      # Reusable button component
│   │   └── Card.tsx        # Reusable card components
│   └── sections/
│       ├── AnnouncementBar.tsx
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Community.tsx
│       ├── Webinar.tsx
│       ├── Testimonials.tsx
│       ├── WhyHelp.tsx
│       ├── Gallery.tsx
│       ├── FinalCTA.tsx
│       └── Footer.tsx
├── constants/
│   └── content.ts          # All content and copy
├── lib/
│   └── utils.ts            # Utility functions
├── types/
│   └── index.ts            # TypeScript interfaces
└── public/
    └── [images]            # All images (.webp format)
```

## Color System

- **Primary:** `#29B6F6`
- **Primary Hover:** `#4FC3F7`
- **Secondary:** `#81D4FA`
- **Light Background:** `#B3E5FC`
- **Very Light Background:** `#E1F5FE`
- **White:** `#FFFFFF`
- **Text Primary:** `#1F2937`
- **Text Secondary:** `#6B7280`
- **Border:** `#E5E7EB`

## Typography

- **Font Family:** Poppins
- **Hero Title:** Bold (700)
- **Section Titles:** Semibold (600)
- **Paragraphs:** Regular (400)
- **Buttons:** Medium (500)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Add images to the `public` folder:
   - hero.webp
   - community-1.webp to community-4.webp
   - webinar-coach.webp
   - testimonial-1.webp to testimonial-6.webp
   - why-help-1.webp to why-help-4.webp
   - gallery-1.webp to gallery-6.webp

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Features

- ✅ Fully responsive (390px - 1440px+)
- ✅ SEO optimized
- ✅ Accessible
- ✅ Smooth scroll navigation
- ✅ Sticky navigation with scroll shadow
- ✅ Subtle fade-in animations
- ✅ Hover effects on cards and buttons
- ✅ Optimized images with next/image
- ✅ Production-ready code

## Sections

1. **Announcement Bar** - Top notification strip
2. **Navigation** - Sticky header with logo and links
3. **Hero** - Full-width background with overlay and CTAs
4. **Community** - 4-card feature grid
5. **Webinar CTA** - Large gradient card with checklist
6. **Testimonials** - Grid of quotes and images
7. **Why Help** - Personal story section with images
8. **Gallery** - Masonry-style community photos
9. **Final CTA** - Join community section
10. **Footer** - Links and copyright

## Build for Production

```bash
npm run build
npm start
```

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or any other hosting platform that supports Next.js.

## Notes

- This is a pixel-perfect implementation based on design screenshots
- All content is placeholder and should be replaced with actual content
- Images are referenced but not included - add actual images to /public
- Font (Poppins) is loaded from Google Fonts
- All components are fully reusable and maintainable

## License

MIT
