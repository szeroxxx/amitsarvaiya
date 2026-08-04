import type { SchemaNode } from "@/lib/schema/types";

interface JsonLdProps {
  /** One or more schema.org nodes to emit as a single `@graph`. */
  graph: SchemaNode[];
}

/**
 * Renders a page's structured data as one `<script type="application/ld+json">`
 * tag containing a schema.org `@graph`. Using a single graph per page (instead
 * of one script tag per entity) lets nodes reference each other by `@id`
 * without repeating full entity declarations — see `lib/schema/`.
 */
export function JsonLd({ graph }: JsonLdProps) {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });

  return (
    <script
      type="application/ld+json"
      // Escape "<" so a literal "</script>" inside stringified data can't
      // break out of this tag. Content here is always server-generated from
      // static config, never raw user input, but this is cheap insurance.
      dangerouslySetInnerHTML={{ __html: json.replace(/</g, "\\u003c") }}
    />
  );
}
