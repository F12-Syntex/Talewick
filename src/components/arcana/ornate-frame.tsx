import { cn } from "@/lib/cn";

type Corner = "tl" | "tr" | "bl" | "br";

const RADIUS: Record<Corner, string> = { tl: "4px 0 0 0", tr: "0 4px 0 0", bl: "0 0 0 4px", br: "0 0 4px 0" };

/** Corner brackets and an optional crest diamond around any element. One per view at most. */
export function OrnateFrame({
  children,
  size = 14,
  offset = -1,
  glow = false,
  crest = false,
  className,
}: {
  children: React.ReactNode;
  size?: number;
  offset?: number;
  glow?: boolean;
  crest?: boolean;
  className?: string;
}) {
  const border = "1px solid var(--ornament)";
  return (
    <div className={cn("relative", className)}>
      {children}
      {(["tl", "tr", "bl", "br"] as const).map((corner) => (
        <span
          key={corner}
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            width: size,
            height: size,
            borderRadius: RADIUS[corner],
            filter: glow ? "drop-shadow(0 0 4px var(--accent-glow))" : undefined,
            ...(corner[0] === "t" ? { top: offset, borderTop: border } : { bottom: offset, borderBottom: border }),
            ...(corner[1] === "l" ? { left: offset, borderLeft: border } : { right: offset, borderRight: border }),
          }}
        />
      ))}
      {crest && (
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 -ml-[3.5px] size-[7px] rotate-45 bg-background"
          style={{ top: offset - 4, border, boxShadow: glow ? "0 0 10px var(--accent-glow)" : undefined }}
        />
      )}
    </div>
  );
}
