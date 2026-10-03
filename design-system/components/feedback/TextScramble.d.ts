import type { ReactNode, CSSProperties } from "react";
/**
 * Text that resolves from random glyphs, left to right; for AI loading labels and reveals.
 */
export interface TextScrambleProps {
  text: string;
  duration?: number;
  /** Repeat after pause ms. */
  loop?: boolean;
  pause?: number;
  mono?: boolean;
  style?: CSSProperties;
}
export declare function TextScramble(props: TextScrambleProps): JSX.Element;
