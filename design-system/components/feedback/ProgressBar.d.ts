import type { ReactNode, CSSProperties } from "react";
/**
 * Thin progress track with gradient fill and glowing head; or indeterminate sweep.
 */
export interface ProgressBarProps {
  /** 0-1 */
  value?: number;
  indeterminate?: boolean;
  tone?: "accent" | "fg" | "success";
  height?: number;
  glow?: boolean;
  style?: CSSProperties;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
