export const POSTS_PER_PAGE = 9;

export interface PaginatedResult<T> {
  items: T[];
  currentPage: number;
  totalPages: number;
}

/** Clamps `page` into range and slices `items` accordingly — generic so it also works for category/tag listings. */
export function paginate<T>(items: T[], page: number, perPage: number = POSTS_PER_PAGE): PaginatedResult<T> {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const currentPage = Math.min(Math.max(1, page || 1), totalPages);
  const start = (currentPage - 1) * perPage;

  return {
    items: items.slice(start, start + perPage),
    currentPage,
    totalPages,
  };
}
