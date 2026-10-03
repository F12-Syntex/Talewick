import { SAMPLE_LIBRARY } from "./sample-library";
import type { LibraryBook } from "./types";

/**
 * The single source of library data for the UI.
 * Returns sample books until import lands; swap this for the real store (via IPC) then.
 */
export function useLibrary(): { books: LibraryBook[] } {
  return { books: SAMPLE_LIBRARY };
}

/** The most recently read book that is started but not finished. */
export function findContinueReading(books: LibraryBook[]) {
  return books
    .filter((book) => book.progress > 0 && book.progress < 1 && book.lastReadAt)
    .sort((a, b) => (b.lastReadAt ?? "").localeCompare(a.lastReadAt ?? ""))[0];
}
