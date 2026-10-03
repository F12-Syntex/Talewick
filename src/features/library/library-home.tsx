"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FolderOpen, Plus, Search } from "lucide-react";
import { MoteField } from "@/components/arcana/mote-field";
import { Ornament } from "@/components/arcana/ornament";
import { ShaderBackground } from "@/components/effects/shader-background";
import { PageHeader } from "@/components/layout/page-header";
import { BookCover } from "@/components/reader/book-cover";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import { Tooltip } from "@/components/ui/tooltip";
import { useBridge } from "@/lib/bridge";
import { useTheme } from "@/lib/theme";
import { ContinueReadingCard } from "./continue-reading-card";
import { EmptyLibrary } from "./empty-library";
import { bookHref, findContinueReading, useLibrary } from "./use-library";

export function LibraryHome() {
  const { books } = useLibrary();
  const theme = useTheme();
  const isMac = useBridge()?.platform === "darwin";
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  // Ctrl/Cmd+K focuses library search.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
        searchRef.current?.select();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const continueReading = useMemo(() => findContinueReading(books), [books]);
  const shelf = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return books;
    return books.filter((book) => book.title.toLowerCase().includes(q) || book.author.toLowerCase().includes(q));
  }, [books, query]);

  return (
    <div className="relative h-full overflow-x-hidden overflow-y-auto">
      {/* Ambient header: shader smoke and motes, faded into the background. Never behind reading text. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[360px]">
        <ShaderBackground intensity={0.45} interactive={false} />
        <MoteField mode={theme.motes} density={44} />
        <div className="absolute inset-0 bg-linear-to-b from-transparent from-30% to-background" />
      </div>

      <div className="relative animate-[tw-fade-up_var(--dur-slower)_var(--ease-out-expo)] px-9 pt-7 pb-10">
        <PageHeader title="Library">
          {books.length > 0 && (
            <Input
              ref={searchRef}
              value={query}
              onValueChange={setQuery}
              placeholder="Search books"
              aria-label="Search books"
              icon={<Search size={15} strokeWidth={1.5} />}
              trailing={<Kbd keys={[isMac ? "⌘" : "Ctrl", "K"]} />}
              wrapperClassName="min-w-[90px] flex-[0_1_260px]"
            />
          )}
          <Tooltip content="Scan folders" side="bottom">
            <IconButton variant="secondary" label="Scan folders" icon={<FolderOpen size={16} strokeWidth={1.5} />} />
          </Tooltip>
          <Button icon={<Plus size={15} strokeWidth={1.5} />}>Import</Button>
        </PageHeader>

        {books.length === 0 ? (
          <EmptyLibrary />
        ) : (
          <>
            {continueReading && !query && <ContinueReadingCard book={continueReading} />}

            <Ornament label={query ? `Results · ${shelf.length}` : `All books · ${books.length}`} className="mt-[34px] mb-5" />

            {shelf.length > 0 ? (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(132px,1fr))] gap-x-[22px] gap-y-[26px]">
                {shelf.map((book) => (
                  <BookCover
                    key={book.id}
                    width={132}
                    title={book.title}
                    author={book.author}
                    src={book.coverUrl}
                    progress={book.progress > 0 ? book.progress : undefined}
                    href={bookHref(book.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center text-sm text-fg-muted">
                No books match “{query.trim()}”.{" "}
                <button type="button" onClick={() => setQuery("")} className="cursor-pointer text-accent hover:text-fg">
                  Clear search
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
