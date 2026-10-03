import type { ReactNode, CSSProperties } from "react";
/**
 * Fantasy divider: fading hairlines with diamond studs, optional Cinzel label; separates sections.
 */
export interface OrnamentProps {
  /** Cinzel small-caps label in the centre; omit for a glowing diamond. */
  label?: ReactNode;
  glow?: boolean;
  width?: number | string;
  style?: CSSProperties;
}
export declare function Ornament(props: OrnamentProps): JSX.Element;
