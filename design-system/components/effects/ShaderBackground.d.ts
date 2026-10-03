import type { ReactNode, CSSProperties } from "react";
/**
 * Ambient WebGL smoke/aurora field in accent tones, reacting to the cursor; fills its positioned parent.
 * @startingPoint section="Effects" subtitle="Ambient shader backdrop" viewport="700x300"
 */
export interface ShaderBackgroundProps {
  colorA?: string;
  colorB?: string;
  base?: string;
  /** 0-1 blend over base. */
  intensity?: number;
  speed?: number;
  interactive?: boolean;
  paused?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}
export declare function ShaderBackground(props: ShaderBackgroundProps): JSX.Element;
