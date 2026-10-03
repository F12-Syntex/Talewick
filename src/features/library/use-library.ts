import { SAMPLE_LIBRARY } from "./sample-library";
import type { LibraryBook } from "./types";

/**
 * The single source of library data for the UI.
 * Returns sample books until import lands; swap this for the real store (via IPC) then.
 */
export function useLibrary(): { books: LibraryBook[] } {
  return { books: SAMPLE_LIBRARY };
}

/** Books you have opened, most recent first. */
export function recentBooks(books: LibraryBook[]) {
  return books
    .filter((book) => book.lastReadAt)
    .sort((a, b) => (b.lastReadAt ?? "").localeCompare(a.lastReadAt ?? ""));
}

/** The most recently read book that is started but not finished. */
export function findContinueReading(books: LibraryBook[]) {
  return recentBooks(books).find((book) => book.progress > 0 && book.progress < 1);
}

export function findBook(books: LibraryBook[], id: string | null) {
  return id ? books.find((book) => book.id === id) : undefined;
}

/** Short reading status for lists: "Ch. 213 · 42%", "Finished" or "Not started". */
export function readingStatus(book: LibraryBook) {
  if (book.progress >= 1) return "Finished";
  if (book.progress <= 0) return "Not started";
  return `Ch. ${book.currentChapter} · ${Math.round(book.progress * 100)}%`;
}

export const bookHref = (id: string) => `/book/?id=${encodeURIComponent(id)}`;
