import type { ReactNode, CSSProperties } from "react";
/**
 * Hover/focus hint bubble in glass with optional shortcut keys.
 */
export interface TooltipProps {
  content: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  delay?: number;
  shortcut?: string[];
  children: ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
