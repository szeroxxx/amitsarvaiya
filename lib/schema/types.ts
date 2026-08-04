/** A reference to another JSON-LD node, resolved via its `@id`. */
export type SchemaRef = { "@id": string };

/** A schema.org JSON-LD node. Loosely typed by design — schema.org's vocabulary
 *  is too large to model exhaustively, so callers get autocomplete on the
 *  common `@type`/`@id` shape while remaining free to add any valid property. */
export type SchemaNode = {
  "@type": string | string[];
  "@id"?: string;
  [key: string]: unknown;
};
