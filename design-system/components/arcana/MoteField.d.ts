import type { ReactNode, CSSProperties } from "react";
/**
 * Ambient floating motes (embers, starlight, fireflies, snow) in theme colours; fills its positioned parent.
 */
export interface MoteFieldProps {
  density?: number;
  /** up = embers, down = snow, drift = fireflies/starlight */
  mode?: "up" | "down" | "drift";
  color?: string;
  color2?: string;
  speed?: number;
  size?: number;
  paused?: boolean;
  style?: CSSProperties;
}
export declare function MoteField(props: MoteFieldProps): JSX.Element;
