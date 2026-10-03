"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BookOpen, ChevronLeft } from "lucide-react";
import { Ornament } from "@/components/arcana/ornament";
import { BookCover } from "@/components/reader/book-cover";
import { HypeIndicator } from "@/components/reader/hype-indicator";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import { findBook, readingStatus, useLibrary } from "@/features/library/use-library";

/** Book overview. The reader itself is not built yet. */
export function BookDetail() {
  const { books } = useLibrary();
  const book = findBook(books, useSearchParams().get("id"));

  if (!book) {
    return (
      <div className="grid h-full place-items-center text-sm text-fg-muted">
        <div className="text-center">
          <p>This book is not in your library.</p>
          <Link href="/" className="mt-2 inline-block text-accent hover:text-fg">
            Back to Library
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <div key={book.id} className="animate-[tw-fade-up_var(--dur-slow)_var(--ease-out-expo)] px-9 pt-6 pb-10">
        <Link
          href="/"
          className="inline-flex h-7 items-center gap-1 rounded-[8px] pr-2.5 pl-1.5 text-xs text-fg-muted transition-colors duration-(--dur-base) hover:bg-surface-hover hover:text-fg"
        >
          <ChevronLeft size={15} strokeWidth={1.5} />
          Library
        </Link>

        <div className="mt-6 flex gap-10">
          <BookCover width={200} title={book.title} author={book.author} src={book.coverUrl} showMeta={false} progress={book.progress > 0 ? book.progress : undefined} />

          <div className="min-w-0 flex-1 pt-2">
            <h1 className="font-serif text-[34px] leading-10 text-fg">{book.title}</h1>
            <p className="mt-1 text-sm text-fg-muted">{book.author}</p>
            <Ornament className="mt-5 max-w-[420px]" />

            <dl className="mt-6 grid max-w-[420px] grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
              <dt className="text-fg-subtle">Progress</dt>
              <dd className="flex items-center gap-3">
                <ProgressBar value={book.progress} label={`${book.title} progress`} />
                <span className="shrink-0 font-mono text-xs text-fg-muted">{Math.round(book.progress * 100)}%</span>
              </dd>
              <dt className="text-fg-subtle">Chapter</dt>
              <dd className="text-fg">
                {book.currentChapter > 0 ? `${book.currentChapter} of ${book.totalChapters}` : `${book.totalChapters} chapters`}
                {book.currentChapterTitle && <span className="text-fg-muted"> · {book.currentChapterTitle}</span>}
              </dd>
              {book.nextChapterHype != null && (
                <>
                  <dt className="text-fg-subtle">Next chapter</dt>
                  <dd>
                    <HypeIndicator level={book.nextChapterHype} variant="pill" />
                  </dd>
                </>
              )}
              <dt className="text-fg-subtle">Format</dt>
              <dd className="font-mono text-xs leading-5 text-fg-muted uppercase">{book.format}</dd>
            </dl>

            <div className="mt-8 flex items-center gap-4">
              <Button size="lg" icon={<BookOpen size={16} strokeWidth={1.5} />} disabled>
                {book.progress > 0 && book.progress < 1 ? "Resume" : book.progress >= 1 ? "Read again" : "Start reading"}
              </Button>
              <span className="text-xs text-fg-subtle">{readingStatus(book)} · The reader arrives in a later version.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
