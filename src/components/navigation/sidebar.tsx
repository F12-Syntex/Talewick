"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type SidebarEntry =
  | { section: string }
  | { id: string; label: string; icon: React.ReactNode; badge?: React.ReactNode; disabled?: boolean };

/** App navigation with Cinzel section labels and a sliding active indicator. */
export function Sidebar({
  items,
  activeId,
  onSelect,
  footer,
  label = "Main",
}: {
  items: SidebarEntry[];
  activeId: string;
  onSelect: (id: string) => void;
  footer?: React.ReactNode;
  label?: string;
}) {
  const buttons = useRef(new Map<string, HTMLButtonElement>());
  const [indicator, setIndicator] = useState<{ top: number; height: number } | null>(null);

  useLayoutEffect(() => {
    const el = buttons.current.get(activeId);
    setIndicator(el ? { top: el.offsetTop, height: el.offsetHeight } : null);
  }, [activeId, items.length]);

  return (
    <nav aria-label={label} className="flex h-full w-[232px] shrink-0 flex-col border-r border-border bg-surface p-2.5">
      <div className="relative flex min-h-0 flex-1 flex-col gap-px overflow-auto">
        {indicator && (
          <span
            aria-hidden
            className="absolute inset-x-0 rounded-[8px] bg-surface-hover shadow-[inset_0_0_0_1px_var(--border-strong),var(--shadow-inset-top)] transition-[top,height] duration-(--dur-slow) ease-out-expo"
            style={{ top: indicator.top, height: indicator.height }}
          />
        )}
        {items.map((item, index) => {
          if ("section" in item) {
            return (
              <div
                key={`section-${item.section}`}
                className={cn(
                  "px-2.5 pb-1.5 font-display text-[11px] font-semibold tracking-(--tracking-rune) text-fg-subtle uppercase",
                  index ? "pt-3.5" : "pt-1",
                )}
              >
                {item.section}
              </div>
            );
          }
          const active = item.id === activeId;
          return (
            <button
              key={item.id}
              ref={(el) => {
                if (el) buttons.current.set(item.id, el);
                else buttons.current.delete(item.id);
              }}
              type="button"
              disabled={item.disabled}
              aria-current={active ? "page" : undefined}
              onClick={() => onSelect(item.id)}
              className={cn(
                "group/item relative flex h-8 items-center gap-2.5 rounded-[8px] px-2.5 text-left text-[13px] transition-colors duration-(--dur-base)",
                "focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent",
                active ? "font-medium text-fg" : "text-fg-muted",
                !active && !item.disabled && "cursor-pointer hover:bg-[color-mix(in_srgb,var(--surface-hover)_60%,transparent)] hover:text-fg",
                item.disabled && "cursor-default text-fg-subtle",
              )}
            >
              <span
                className={cn("grid transition-colors duration-(--dur-base)", active && "text-accent")}
                style={{ filter: active ? "drop-shadow(0 0 6px var(--accent-glow))" : undefined }}
              >
                {item.icon}
              </span>
              <span className="min-w-0 flex-1 truncate">{item.label}</span>
              {item.disabled ? (
                <span className="text-[11px] text-fg-subtle/80">Soon</span>
              ) : (
                item.badge != null && <span className="font-mono text-[11px] text-fg-subtle">{item.badge}</span>
              )}
            </button>
          );
        })}
      </div>
      {footer && <div className="mt-2.5 border-t border-border pt-2.5">{footer}</div>}
    </nav>
  );
}
