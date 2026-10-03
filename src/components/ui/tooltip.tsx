"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Kbd } from "./kbd";

/** Glass tooltip shown after a short hover or on focus. */
export function Tooltip({
  content,
  side = "top",
  delay = 250,
  shortcut,
  children,
}: {
  content: React.ReactNode;
  side?: "top" | "bottom";
  delay?: number;
  shortcut?: string[];
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    clearTimeout(timer.current);
    setOpen(false);
  };
  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <span className="relative inline-flex" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      {open && (
        <span
          role="tooltip"
          className={cn(
            "pointer-events-none absolute left-1/2 z-60 -translate-x-1/2",
            side === "bottom" ? "top-[calc(100%+8px)]" : "bottom-[calc(100%+8px)]",
          )}
        >
          <span
            className={cn(
              "inline-flex animate-[tw-pop-in_160ms_var(--ease-out)] items-center gap-2 rounded-[8px] border border-border-glass bg-surface-tooltip px-2 py-[5px] text-xs leading-4 whitespace-nowrap text-fg shadow-md backdrop-blur-md",
              side === "bottom" ? "origin-top" : "origin-bottom",
            )}
          >
            {content}
            {shortcut && <Kbd keys={shortcut} />}
          </span>
        </span>
      )}
    </span>
  );
}
