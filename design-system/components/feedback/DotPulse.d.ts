import type { ReactNode, CSSProperties } from "react";
/**
 * Three glowing dots pulsing in sequence; for "AI is thinking" states.
 */
export interface DotPulseProps {
  size?: number;
  color?: string;
  gap?: number;
}
export declare function DotPulse(props: DotPulseProps): JSX.Element;
