"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";

/** Card whose border and surface light up under the cursor. */
export function SpotlightCard({
  children,
  className,
  contentClassName,
  glow = "var(--accent)",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  glow?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (event: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onClick={onClick}
      className={cn(
        "group/spot relative rounded-lg bg-border p-px shadow-sm transition-shadow duration-(--dur-slow) ease-out hover:shadow-lg",
        onClick && "cursor-pointer",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-(--dur-slow) ease-out group-hover/spot:opacity-100"
        style={{ background: `radial-gradient(360px circle at var(--mx,50%) var(--my,0px), color-mix(in srgb,${glow} 70%,transparent), transparent 60%)` }}
      />
      <div className={cn("relative h-full overflow-hidden rounded-[calc(var(--radius-lg)-1px)] bg-surface", contentClassName)}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-(--dur-slow) ease-out group-hover/spot:opacity-100"
          style={{ background: `radial-gradient(480px circle at var(--mx,50%) var(--my,0px), color-mix(in srgb,${glow} 9%,transparent), transparent 55%)` }}
        />
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  );
}
