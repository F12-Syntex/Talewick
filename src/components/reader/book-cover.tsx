"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

const hash = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
};

/**
 * Book cover with 3D tilt, cursor glare, spine shading and a progress strip.
 * Without `src` it renders a generated cover tinted from the title.
 */
export function BookCover({
  src,
  title,
  author,
  progress,
  width = 148,
  tilt = true,
  showMeta = true,
  onClick,
}: {
  src?: string;
  title: string;
  author?: string;
  progress?: number;
  width?: number;
  tilt?: boolean;
  showMeta?: boolean;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);
  const height = Math.round(width * 1.5);
  const hue = hash(title) % 360;

  const onMove = (event: React.MouseEvent) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPointer({ x: (event.clientX - rect.left) / rect.width, y: (event.clientY - rect.top) / rect.height });
  };
  const rx = pointer ? (0.5 - pointer.y) * 10 : 0;
  const ry = pointer ? (pointer.x - 0.5) * 12 : 0;

  const Root = onClick ? "button" : "div";

  return (
    <Root
      {...(onClick ? { type: "button" as const, onClick } : {})}
      className={cn(
        "flex flex-col gap-2.5 text-left",
        onClick && "cursor-pointer rounded-[10px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
      )}
      style={{ width }}
    >
      <div className="perspective-[800px]">
        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={() => setPointer(null)}
          className="relative overflow-hidden rounded-[4px_10px_10px_4px]"
          style={{
            width,
            height,
            transform: `rotateX(${rx}deg) rotateY(${ry}deg) translateY(${pointer ? -4 : 0}px)`,
            transition: pointer
              ? "transform 90ms linear, box-shadow var(--dur-base)"
              : "transform var(--dur-slower) var(--ease-out-expo), box-shadow var(--dur-slow)",
            boxShadow: pointer
              ? "var(--shadow-lg), 0 0 0 1px rgba(255,255,255,.07)"
              : "var(--shadow-md), 0 0 0 1px rgba(255,255,255,.04)",
            background: `linear-gradient(160deg, hsl(${hue} 28% 24%), hsl(${(hue + 30) % 360} 32% 9%))`,
          }}
        >
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element -- local covers, static export
            <img src={src} alt="" className="block size-full object-cover" />
          ) : (
            <div
              className="absolute inset-0 flex flex-col justify-between"
              style={{ padding: `${width * 0.1}px ${width * 0.1}px ${width * 0.09}px ${width * 0.14}px` }}
            >
              <div
                className="font-serif leading-[1.1] font-medium text-balance"
                style={{ fontSize: Math.max(13, width * 0.12), color: `hsl(${hue} 40% 88%)` }}
              >
                {title}
              </div>
              {author && (
                <div
                  className="font-mono tracking-[0.12em] uppercase"
                  style={{ fontSize: Math.max(8, width * 0.058), color: `hsl(${hue} 20% 66%)` }}
                >
                  {author}
                </div>
              )}
            </div>
          )}
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-2.5 bg-[linear-gradient(90deg,rgba(0,0,0,.4),rgba(255,255,255,.1)_45%,transparent)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-opacity duration-(--dur-base)"
            style={{
              opacity: pointer ? 1 : 0,
              background: pointer
                ? `radial-gradient(circle at ${pointer.x * 100}% ${pointer.y * 100}%, rgba(255,255,255,.2), transparent 55%)`
                : undefined,
            }}
          />
          {progress != null && (
            <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black/55">
              <div
                className="h-full bg-linear-to-r from-accent-lo to-accent-hi shadow-[0_0_8px_var(--accent-glow)]"
                style={{ width: `${Math.max(0, Math.min(1, progress)) * 100}%` }}
              />
            </div>
          )}
        </div>
      </div>
      {showMeta && (
        <div className="min-w-0">
          <div className="truncate text-[13px] leading-[17px] font-medium text-fg">{title}</div>
          {author && <div className="mt-0.5 truncate text-xs leading-4 text-fg-muted">{author}</div>}
        </div>
      )}
    </Root>
  );
}
