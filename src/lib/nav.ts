import { Activity, Download, Library, Network, Quote, Settings, Sparkles, type LucideIcon } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  /** One plain sentence about the page, used by placeholders until it is built. */
  description: string;
}

export const MAIN_NAV: NavItem[] = [
  { href: "/", label: "Library", icon: Library, description: "Every book you have added." },
  {
    href: "/quotes/",
    label: "Quotes",
    icon: Quote,
    description: "Highlight a passage while you read and it is saved here, with the chapter it came from.",
  },
  {
    href: "/wiki/",
    label: "Wiki",
    icon: Network,
    description: "Characters, places and events, built only from the chapters you have already read.",
  },
  {
    href: "/buddy/",
    label: "Buddy",
    icon: Sparkles,
    description: "Ask about the story so far. Buddy knows your wiki and never spoils what is ahead.",
  },
  {
    href: "/stats/",
    label: "Stats",
    icon: Activity,
    description: "Reading time, pace and streaks appear here once you start reading.",
  },
  {
    href: "/downloads/",
    label: "Downloads",
    icon: Download,
    description: "Novels you download appear here with their progress and chapter range.",
  },
];

export const SETTINGS_NAV: NavItem = {
  href: "/settings/",
  label: "Settings",
  icon: Settings,
  description: "Appearance, themes, shortcuts and AI settings will live here.",
};

/** Normalises "/quotes" and "/quotes/" so either matches a nav href. */
export function isActive(pathname: string, href: string) {
  const clean = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);
  return clean(pathname) === clean(href);
}
