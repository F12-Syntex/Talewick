import type { ReactNode, CSSProperties } from "react";
/**
 * Keyboard key caps for shortcuts in tooltips, menus and inputs.
 */
export interface KbdProps {
  keys?: string[];
  children?: ReactNode;
}
export declare function Kbd(props: KbdProps): JSX.Element;
