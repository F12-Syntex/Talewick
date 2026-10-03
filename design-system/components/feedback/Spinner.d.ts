import type { ReactNode, CSSProperties } from "react";
/**
 * Small conic ring spinner for inline/button loading.
 */
export interface SpinnerProps {
  size?: number;
  color?: string;
  thickness?: number;
  /** Seconds per rotation. */
  speed?: number;
}
export declare function Spinner(props: SpinnerProps): JSX.Element;
