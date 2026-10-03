import { FolderOpen, Plus } from "lucide-react";
import { Ornament } from "@/components/arcana/ornament";
import { OrnateFrame } from "@/components/arcana/ornate-frame";
import { Button } from "@/components/ui/button";

/** First-run state when no books have been added. */
export function EmptyLibrary({ onImport, onScan }: { onImport?: () => void; onScan?: () => void }) {
  return (
    <OrnateFrame crest glow offset={-6} size={16} className="mx-auto mt-16 max-w-[520px]">
      <div className="rounded-lg border border-border bg-surface px-10 py-12 text-center shadow-sm">
        <Ornament />
        <h2 className="mt-6 font-display text-xl font-semibold tracking-(--tracking-display) text-fg">Your library is empty</h2>
        <p className="mx-auto mt-2 max-w-[340px] text-[13px] leading-5 text-fg-muted">
          Add EPUB or PDF files, or scan a folder. Talewick remembers where you stopped in every book.
        </p>
        <div className="mt-7 flex justify-center gap-2.5">
          <Button icon={<Plus size={15} strokeWidth={1.5} />} onClick={onImport}>
            Import books
          </Button>
          <Button variant="secondary" icon={<FolderOpen size={15} strokeWidth={1.5} />} onClick={onScan}>
            Scan folder
          </Button>
        </div>
      </div>
    </OrnateFrame>
  );
}
