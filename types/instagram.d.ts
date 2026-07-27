// Types for the two client-side Instagram tools this project uses:
//  - window.instgrm: Instagram's embed.js runtime (manual reel fallback)
//  - <behold-widget>: Behold's web component that auto-renders the latest reels
import type { DetailedHTMLProps, HTMLAttributes } from "react";

export {};

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }

  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { "feed-id"?: string };
    }
  }
}
