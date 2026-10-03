import type { ReactNode, CSSProperties } from "react";
/**
 * Per-chapter intensity (hype) gauge, 0-5 on the heat ramp; bars, meter or pill.
 * @startingPoint section="Reader" subtitle="Chapter hype gauge" viewport="700x300"
 */
export interface HypeIndicatorProps {
  /** 0 unknown, 1 Calm, 2 Simmer, 3 Heated, 4 Intense, 5 Wild */
  level: number;
  variant?: "bars" | "meter" | "pill";
  showLabel?: boolean;
  size?: "sm" | "md";
  /** Flicker bars at level 4+. */
  animated?: boolean;
}
export declare function HypeIndicator(props: HypeIndicatorProps): JSX.Element;
