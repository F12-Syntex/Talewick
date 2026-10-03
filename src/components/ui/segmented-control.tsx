"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export interface SegmentOption<T extends string> {
  value: T;
  label: string;
  icon?: React.ReactNode;
}

/** Tabs with a sliding indicator. Controlled: pass `value` and `onChange`. */
export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  size = "md",
  label,
}: {
  options: SegmentOption<T>[];
  value: T;
  onChange: (value: T) => void;
  size?: "sm" | "md";
  label?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const buttons = useRef(new Map<T, HTMLButtonElement>());
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  useLayoutEffect(() => {
    const measure = () => {
      const el = buttons.current.get(value);
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (wrap.current) observer.observe(wrap.current);
    return () => observer.disconnect();
  }, [value, options.length]);

  return (
    <div
      ref={wrap}
      role="tablist"
      aria-label={label}
      className="relative inline-flex gap-0.5 rounded-[10px] border border-border bg-background p-[3px] shadow-[inset_0_1px_2px_rgba(0,0,0,.3)]"
    >
      {indicator && (
        <span
          aria-hidden
          className="absolute inset-y-[3px] rounded-[7px] border border-border-strong bg-surface-hover shadow-[0_1px_2px_rgba(0,0,0,.4),var(--shadow-inset-top)] transition-[left,width] duration-(--dur-slow) ease-out-expo"
          style={{ left: indicator.left, width: indicator.width }}
        />
      )}
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            ref={(el) => {
              if (el) buttons.current.set(option.value, el);
              else buttons.current.delete(option.value);
            }}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(option.value)}
            className={cn(
              "relative z-10 inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-[7px] px-3 font-medium transition-colors duration-(--dur-base) ease-out",
              size === "sm" ? "h-[26px] text-xs" : "h-[30px] text-[13px]",
              selected ? "text-fg" : "text-fg-muted hover:text-fg",
            )}
          >
            {option.icon}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
