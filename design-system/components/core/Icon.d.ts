import type { ReactNode, CSSProperties } from "react";
/**
 * Lucide icon renderer (1.5px stroke default); requires the lucide UMD script on the page.
 */
export interface IconProps {
  /** Lucide name, kebab-case, e.g. "book-open". */
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  style?: CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
