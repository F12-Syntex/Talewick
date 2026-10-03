import type { ReactNode, CSSProperties } from "react";
/**
 * Shimmering placeholder block or text lines while content loads.
 */
export interface SkeletonProps {
  width?: number | string;
  height?: number;
  radius?: string | number;
  /** Render N text lines (last one shorter). */
  lines?: number;
  style?: CSSProperties;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;
