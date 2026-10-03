import type { HypeLevel } from "@/components/reader/hype-indicator";

export type LibrarySection = "bookshelf" | "series" | "comic";

export interface LibraryBook {
  id: string;
  title: string;
  author: string;
  format: "epub" | "pdf";
  section: LibrarySection;
  coverUrl?: string;
  /** Reading progress, 0 to 1. */
  progress: number;
  currentChapter: number;
  totalChapters: number;
  currentChapterTitle?: string;
  /** Hype of the next unread chapter, 0 when not analysed yet. */
  nextChapterHype?: HypeLevel;
  /** ISO 8601 timestamp of the last reading session. */
  lastReadAt?: string;
}
