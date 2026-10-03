"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";
import { Kbd } from "./kbd";

type Side = "top" | "bottom" | "right";

/**
 * Glass tooltip shown after a short hover or on focus.
 * Rendered in a portal with fixed positioning so containers with overflow:hidden never clip it.
 */
export function Tooltip({
  content,
  side = "top",
  delay = 250,
  shortcut,
  disabled = false,
  className,
  children,
}: {
  content: React.ReactNode;
  side?: Side;
  delay?: number;
  shortcut?: string[];
  /** When true the tooltip never opens (e.g. labels are already visible). */
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const anchor = useRef<HTMLSpanElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  const show = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    clearTimeout(timer.current);
    setOpen(false);
  };
  useEffect(() => () => clearTimeout(timer.current), []);

  useLayoutEffect(() => {
    if (!open || !anchor.current) return;
    const rect = anchor.current.getBoundingClientRect();
    setPosition(
      side === "right"
        ? { x: rect.right + 10, y: rect.top + rect.height / 2 }
        : { x: rect.left + rect.width / 2, y: side === "bottom" ? rect.bottom + 8 : rect.top - 8 },
    );
  }, [open, side]);

  const visible = open && !disabled && position;

  return (
    <span ref={anchor} className={cn("relative inline-flex", className)} onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      {visible &&
        createPortal(
          <span
            role="tooltip"
            className={cn(
              "pointer-events-none fixed z-[100]",
              side === "right" && "-translate-y-1/2",
              side === "bottom" && "-translate-x-1/2",
              side === "top" && "-translate-x-1/2 -translate-y-full",
            )}
            style={{ left: position.x, top: position.y }}
          >
            <span
              className={cn(
                "inline-flex animate-[tw-pop-in_160ms_var(--ease-out)] items-center gap-2 rounded-[8px] border border-border-glass bg-surface-tooltip px-2 py-[5px] text-xs leading-4 whitespace-nowrap text-fg shadow-md backdrop-blur-md",
                side === "bottom" ? "origin-top" : side === "right" ? "origin-left" : "origin-bottom",
              )}
            >
              {content}
              {shortcut && <Kbd keys={shortcut} />}
            </span>
          </span>,
          document.body,
        )}
    </span>
  );
}
