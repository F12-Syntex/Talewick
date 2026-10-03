import { cn } from "@/lib/cn";

function Diamond({ size, filled = false, glow = false }: { size: number; filled?: boolean; glow?: boolean }) {
  return (
    <span
      aria-hidden
      className={cn("shrink-0 rotate-45 border border-ornament", filled ? "bg-accent" : "bg-transparent")}
      style={{ width: size, height: size, boxShadow: glow ? "0 0 10px var(--accent-glow)" : undefined }}
    />
  );
}

function Line({ direction }: { direction: "left" | "right" }) {
  return (
    <span
      aria-hidden
      className={cn(
        "h-px min-w-3 flex-1 opacity-70",
        direction === "left" ? "bg-linear-to-r" : "bg-linear-to-l",
        "from-transparent to-ornament",
      )}
    />
  );
}

/** Diamond-studded divider with an optional Cinzel label. */
export function Ornament({ label, glow = true, className }: { label?: React.ReactNode; glow?: boolean; className?: string }) {
  return (
    <div role="separator" className={cn("flex w-full items-center gap-2", className)}>
      <Line direction="left" />
      <Diamond size={4} />
      {label ? (
        <span
          className="font-display text-[11px] font-semibold tracking-(--tracking-rune) whitespace-nowrap text-ornament uppercase"
          style={{ textShadow: glow ? "0 0 12px var(--accent-glow)" : undefined }}
        >
          {label}
        </span>
      ) : (
        <Diamond size={7} filled glow={glow} />
      )}
      <Diamond size={4} />
      <Line direction="right" />
    </div>
  );
}
