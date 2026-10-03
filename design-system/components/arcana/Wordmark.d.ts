import type { ReactNode, CSSProperties } from "react";
/**
 * The name "Talewick" set in Cinzel with a soft accent glow; use wherever a brand mark goes (no logo exists).
 */
export interface WordmarkProps {
  size?: number;
  glow?: boolean;
  color?: string;
  text?: string;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
