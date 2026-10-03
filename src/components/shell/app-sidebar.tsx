"use client";

import { Suspense, useEffect } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { MiniCover } from "@/components/reader/mini-cover";
import { Tooltip } from "@/components/ui/tooltip";
import { bookHref, readingStatus, recentBooks, useLibrary } from "@/features/library/use-library";
import type { LibraryBook } from "@/features/library/types";
import { cn } from "@/lib/cn";
import { isActive, MAIN_NAV, SETTINGS_NAV, type NavItem } from "@/lib/nav";
import { useLocalFlag } from "@/lib/use-local-flag";

const EXPANDED = 248;
const COLLAPSED = 64;

/**
 * App navigation: pages on top, your recent books below (Spotify-style library list),
 * settings and the collapse toggle at the bottom. Collapses to an icon rail (Ctrl/Cmd+B).
 */
export function AppSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useLocalFlag("talewick.sidebar.collapsed");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "b") {
        event.preventDefault();
        setCollapsed(!collapsed);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [collapsed, setCollapsed]);

  return (
    <aside
      aria-label="Sidebar"
      className="flex h-full shrink-0 flex-col overflow-hidden border-r border-border bg-surface transition-[width] duration-(--dur-slow) ease-out-expo"
      style={{ width: collapsed ? COLLAPSED : EXPANDED }}
    >
      <nav aria-label="Main" className="flex flex-col gap-0.5 p-2.5">
        {MAIN_NAV.map((item) => (
          <NavLink key={item.href} item={item} active={isActive(pathname, item.href)} collapsed={collapsed} />
        ))}
      </nav>

      <div aria-hidden className="mx-4 h-px bg-linear-to-r from-transparent via-border-strong to-transparent" />

      <section aria-label="Recent books" className="flex min-h-0 flex-1 flex-col pt-3">
        <div
          className={cn(
            "px-[18px] pb-1.5 text-xs font-medium text-fg-subtle transition-opacity duration-(--dur-base)",
            collapsed && "opacity-0",
          )}
        >
          Recent
        </div>
        <Suspense fallback={<RecentList collapsed={collapsed} activeId={null} />}>
          <RecentListWithActive collapsed={collapsed} />
        </Suspense>
      </section>

      <div className={cn("flex gap-1 border-t border-border p-2.5", collapsed ? "flex-col items-center" : "items-center")}>
        <div className={cn(collapsed ? "w-full" : "min-w-0 flex-1")}>
          <NavLink item={SETTINGS_NAV} active={isActive(pathname, SETTINGS_NAV.href)} collapsed={collapsed} />
        </div>
        <Tooltip content={collapsed ? "Expand sidebar" : "Collapse sidebar"} side={collapsed ? "right" : "top"} shortcut={["Ctrl", "B"]}>
          <button
            type="button"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-expanded={!collapsed}
            onClick={() => setCollapsed(!collapsed)}
            className="grid size-9 shrink-0 cursor-pointer place-items-center rounded-[10px] text-fg-subtle transition-colors duration-(--dur-base) hover:bg-surface-hover hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
          >
            {collapsed ? <PanelLeftOpen size={18} strokeWidth={1.5} /> : <PanelLeftClose size={18} strokeWidth={1.5} />}
          </button>
        </Tooltip>
      </div>
    </aside>
  );
}

function NavLink({ item, active, collapsed }: { item: NavItem; active: boolean; collapsed: boolean }) {
  const Icon = item.icon;
  return (
    <Tooltip content={item.label} side="right" disabled={!collapsed} className="flex w-full">
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        aria-label={collapsed ? item.label : undefined}
        className={cn(
          "relative flex h-9 w-full items-center gap-3 rounded-[10px] text-sm transition-colors duration-(--dur-base)",
          "focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent",
          collapsed ? "justify-center px-0" : "px-3",
          active
            ? "bg-surface-hover font-medium text-fg shadow-[inset_0_0_0_1px_var(--border-strong),var(--shadow-inset-top)]"
            : "text-fg-muted hover:bg-[color-mix(in_srgb,var(--surface-hover)_70%,transparent)] hover:text-fg",
        )}
      >
        {active && (
          <span aria-hidden className="absolute top-1/2 -left-2.5 h-4 w-[3px] -translate-y-1/2 rounded-r-full bg-accent shadow-[0_0_8px_var(--accent-glow)]" />
        )}
        <Icon size={18} strokeWidth={1.5} className={cn("shrink-0", active && "text-accent")} />
        {!collapsed && <span className="min-w-0 flex-1 truncate">{item.label}</span>}
      </Link>
    </Tooltip>
  );
}

function RecentListWithActive({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();
  const params = useSearchParams();
  const activeId = isActive(pathname, "/book/") ? params.get("id") : null;
  return <RecentList collapsed={collapsed} activeId={activeId} />;
}

function RecentList({ collapsed, activeId }: { collapsed: boolean; activeId: string | null }) {
  const { books } = useLibrary();
  const recent = recentBooks(books);
  return (
    <ul className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto px-2.5 pb-2">
      {recent.map((book) => (
        <li key={book.id}>
          <RecentBook book={book} active={book.id === activeId} collapsed={collapsed} />
        </li>
      ))}
    </ul>
  );
}

function RecentBook({ book, active, collapsed }: { book: LibraryBook; active: boolean; collapsed: boolean }) {
  return (
    <Tooltip content={book.title} side="right" disabled={!collapsed} className="flex w-full">
      <Link
        href={bookHref(book.id)}
        aria-current={active ? "page" : undefined}
        aria-label={collapsed ? book.title : undefined}
        className={cn(
          "group/book flex h-[52px] w-full items-center gap-3 rounded-[10px] transition-colors duration-(--dur-base)",
          "focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent",
          collapsed ? "justify-center px-0" : "px-2",
          active ? "bg-surface-hover" : "hover:bg-[color-mix(in_srgb,var(--surface-hover)_70%,transparent)]",
        )}
      >
        <MiniCover title={book.title} src={book.coverUrl} />
        {!collapsed && (
          <span className="min-w-0 flex-1">
            <span className={cn("block truncate text-[13px] leading-[18px] font-medium", active ? "text-fg" : "text-fg-muted group-hover/book:text-fg")}>
              {book.title}
            </span>
            <span className="block truncate text-xs leading-4 text-fg-subtle">{readingStatus(book)}</span>
          </span>
        )}
      </Link>
    </Tooltip>
  );
}
