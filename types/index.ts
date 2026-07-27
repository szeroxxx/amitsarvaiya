export interface NavLink {
  label: string;
  href: string;
}

export interface CommunityCard {
  image: string;
  title: string;
}

export interface TestimonialItem {
  type: "quote" | "image";
  text?: string;
  author: string;
  location: string;
  image: string;
}

export interface GalleryImage {
  src: string;
  label: string;
  location: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
