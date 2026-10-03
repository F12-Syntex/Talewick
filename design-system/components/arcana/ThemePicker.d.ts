import type { ReactNode, CSSProperties } from "react";
/**
 * Grid of live theme tiles; each tile renders in its own theme. Set data-theme on <html> from onChange.
 * @startingPoint section="Arcana" subtitle="Six fantasy themes, live tiles" viewport="700x320"
 */
export interface ThemePickerProps {
  value?: string;
  onChange?: (themeId: string) => void;
  themes?: Array<{ id: string; name: string; note?: string; motes?: "up" | "down" | "drift" }>;
  columns?: number;
}
export declare function ThemePicker(props: ThemePickerProps): JSX.Element;
export declare const THEMES: Array<{ id: string; name: string; note: string; motes: "up" | "down" | "drift" }>;
