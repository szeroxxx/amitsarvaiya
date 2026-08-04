import type { TocEntry } from "@/lib/blog/render";

interface TableOfContentsProps {
  entries: TocEntry[];
}

export function TableOfContents({ entries }: TableOfContentsProps) {
  if (entries.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="bg-lightBg border border-veryLightBg rounded-md p-5 mb-10">
      <p className="text-xs font-semibold uppercase tracking-wide text-textSecondary mb-3">
        In this article
      </p>
      <ul className="space-y-2 list-none text-sm">
        {entries.map((entry) => (
          <li key={entry.id} className={entry.level === 3 ? "pl-4" : undefined}>
            <a href={`#${entry.id}`} className="text-textPrimary hover:text-primary transition-colors">
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
