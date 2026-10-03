"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { OrnateFrame } from "@/components/arcana/ornate-frame";
import { BookCover } from "@/components/reader/book-cover";
import { HypeIndicator } from "@/components/reader/hype-indicator";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import type { LibraryBook } from "./types";
import { bookHref } from "./use-library";

/** Hero card for the book you were last reading. */
export function ContinueReadingCard({ book }: { book: LibraryBook }) {
  const router = useRouter();
  const href = bookHref(book.id);
  const percent = Math.round(book.progress * 100);
  return (
    <OrnateFrame crest glow offset={-6} size={16} className="mt-7">
      <div className="group/card relative rounded-lg border border-border bg-surface p-[18px] shadow-sm transition-[box-shadow,border-color] duration-(--dur-slow) ease-out hover:border-border-strong hover:shadow-lg">
        <div className="flex items-center gap-5">
          <BookCover width={84} title={book.title} author={book.author} src={book.coverUrl} showMeta={false} tilt={false} />
          <div className="min-w-0 flex-1">
            <div className="font-display text-[11px] font-semibold tracking-(--tracking-rune) text-ornament uppercase">
              Continue reading
            </div>
            <h2 className="mt-1.5 truncate font-serif text-[26px] leading-[30px] text-fg">
              {/* The title link covers the whole card; the Resume button sits above it. */}
              <Link href={href} className="text-fg transition-colors duration-(--dur-base) group-hover/card:text-accent-hi after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none">
                {book.title}
              </Link>
            </h2>
            <div className="mt-1 flex flex-wrap items-center gap-2.5 text-[13px] text-fg-muted">
              <span>
                Chapter {book.currentChapter}
                {book.currentChapterTitle && ` · ${book.currentChapterTitle}`}
              </span>
              {book.nextChapterHype != null && (
                <>
                  <span className="text-fg-subtle">·</span>
                  <span className="inline-flex items-center gap-2">
                    Next: <HypeIndicator level={book.nextChapterHype} variant="pill" />
                  </span>
                </>
              )}
            </div>
            <div className="mt-3.5 flex max-w-[420px] items-center gap-3">
              <ProgressBar value={book.progress} label={`${book.title} progress`} />
              <span className="font-mono text-[11px] text-fg-muted">{percent}%</span>
            </div>
          </div>
          <Button size="lg" className="relative z-10" iconRight={<ArrowRight size={16} strokeWidth={1.5} />} onClick={() => router.push(href)}>
            Resume
          </Button>
        </div>
      </div>
    </OrnateFrame>
  );
}
