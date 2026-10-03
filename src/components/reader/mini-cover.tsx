import { cn } from "@/lib/cn";
import { coverGradient } from "@/lib/cover";

/** Small cover thumbnail for lists. Generated from the title when there is no image. */
export function MiniCover({ title, src, className }: { title: string; src?: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative block h-10 w-7 shrink-0 overflow-hidden rounded-[2px_5px_5px_2px] shadow-[var(--shadow-sm),0_0_0_1px_rgba(255,255,255,.05)]",
        className,
      )}
      style={{ background: src ? undefined : coverGradient(title) }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- local covers, static export */}
      {src && <img src={src} alt="" className="block size-full object-cover" />}
      <span className="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(90deg,rgba(0,0,0,.4),rgba(255,255,255,.1)_45%,transparent)]" />
    </span>
  );
}
