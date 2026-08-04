const dateFormatter = new Intl.DateTimeFormat("en-IN", { year: "numeric", month: "long", day: "numeric" });

/** Formats an ISO date string (e.g. a post's publishedAt) consistently everywhere a post date is shown. */
export function formatPostDate(isoDate: string): string {
  return dateFormatter.format(new Date(isoDate));
}
