import { getCanonicalUrl } from "@/lib/seo/metadata";
import type { FaqItem } from "@/lib/blog/types";
import type { SchemaNode } from "./types";

/**
 * FAQPage for a post's FAQ section. Only call this when `faqs.length > 0` —
 * an empty FAQPage is invalid and shouldn't be emitted.
 */
export function getFaqSchema(faqs: FaqItem[], path: string): SchemaNode {
  const url = getCanonicalUrl(path);

  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
