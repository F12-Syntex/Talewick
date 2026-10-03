import type { ReactNode, CSSProperties } from "react";
/**
 * Wraps any element with filigree corner brackets (and optional crest diamond); for featured cards, covers, dialogs.
 */
export interface OrnateFrameProps {
  children?: ReactNode;
  /** Bracket length px. */
  size?: number;
  /** Corner offset from the edge, px (negative sits outside). */
  offset?: number;
  color?: string;
  glow?: boolean;
  /** Diamond centred on the top edge. */
  crest?: boolean;
  style?: CSSProperties;
}
export declare function OrnateFrame(props: OrnateFrameProps): JSX.Element;
