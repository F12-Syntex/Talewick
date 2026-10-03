"use client";

import { Activity, BookOpen, Download, Library, Network, Quote, Settings, Sparkles } from "lucide-react";
import { Sidebar, type SidebarEntry } from "@/components/navigation/sidebar";
import { Button } from "@/components/ui/button";
import { useLibrary } from "@/features/library/use-library";

const ICON = { size: 16, strokeWidth: 1.5 } as const;

/** App-level navigation. Only Library is built; the rest are shown as coming soon. */
export function AppSidebar() {
  const { books } = useLibrary();

  const items: SidebarEntry[] = [
    { section: "Read" },
    { id: "library", label: "Library", icon: <Library {...ICON} />, badge: books.length },
    { id: "reading", label: "Reading now", icon: <BookOpen {...ICON} />, disabled: true },
    { id: "quotes", label: "Quotes", icon: <Quote {...ICON} />, disabled: true },
    { id: "downloads", label: "Downloads", icon: <Download {...ICON} />, disabled: true },
    { section: "AI" },
    { id: "wiki", label: "Wiki", icon: <Network {...ICON} />, disabled: true },
    { id: "buddy", label: "Buddy", icon: <Sparkles {...ICON} />, disabled: true },
    { id: "stats", label: "Stats", icon: <Activity {...ICON} />, disabled: true },
  ];

  return (
    <Sidebar
      items={items}
      activeId="library"
      onSelect={() => {}}
      footer={
        <Button variant="ghost" size="sm" fullWidth disabled icon={<Settings size={15} strokeWidth={1.5} />} className="justify-start">
          Settings
        </Button>
      }
    />
  );
}
