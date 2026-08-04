import { marked } from "marked";

export interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

/** Matches how GitHub/most markdown heading-id plugins slugify text — lowercase, hyphenated, punctuation stripped. */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const renderer = new marked.Renderer();
renderer.heading = ({ tokens, depth }) => {
  const text = tokens.map((t) => ("raw" in t ? t.raw : "")).join("");
  const id = slugifyHeading(text);
  return `<h${depth} id="${id}">${marked.parseInline(text)}</h${depth}>\n`;
};

marked.use({ renderer, gfm: true, breaks: false });

/** Converts a post's raw Markdown body into HTML with slugged heading ids (so the table of contents can link to them). */
export function renderMarkdown(content: string): string {
  return marked.parse(content, { async: false }) as string;
}

/** Extracts H2/H3 headings from raw Markdown for the on-page table of contents — derived from the same content it will link into, never maintained separately. */
export function getTableOfContents(content: string): TocEntry[] {
  const tokens = marked.lexer(content);
  const entries: TocEntry[] = [];

  for (const token of tokens) {
    if (token.type === "heading" && (token.depth === 2 || token.depth === 3)) {
      entries.push({
        id: slugifyHeading(token.text),
        text: token.text,
        level: token.depth as 2 | 3,
      });
    }
  }

  return entries;
}
