"use client";

import { useSyncExternalStore } from "react";
import type { MoteMode } from "@/components/arcana/mote-field";

/** Mirrors THEMES in design-system/components/arcana/ThemePicker.jsx. */
export const THEMES = [
  { id: "ember", name: "Ember", note: "Candlelit gold", motes: "up" },
  { id: "arcane", name: "Arcane", note: "Violet starlight", motes: "drift" },
  { id: "verdant", name: "Verdant", note: "Elderwood moss", motes: "drift" },
  { id: "frost", name: "Frost", note: "Moonlit ice", motes: "down" },
  { id: "bloodmoon", name: "Bloodmoon", note: "Crimson night", motes: "up" },
  { id: "parchment", name: "Parchment", note: "Scholar's vellum", motes: "drift" },
] as const satisfies ReadonlyArray<{ id: string; name: string; note: string; motes: MoteMode }>;

export type ThemeId = (typeof THEMES)[number]["id"];

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

/** The active theme from `data-theme` on <html>. */
export function useTheme(): (typeof THEMES)[number] {
  const id = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme ?? "ember",
    () => "ember",
  );
  return THEMES.find((theme) => theme.id === id) ?? THEMES[0];
}
