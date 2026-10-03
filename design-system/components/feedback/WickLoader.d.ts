import type { ReactNode, CSSProperties } from "react";
/**
 * Signature WebGL candle-flame loader; use for long AI jobs (formatting, wiki build).
 */
export interface WickLoaderProps {
  size?: number;
  /** 0-1, flame size & glow. */
  heat?: number;
  core?: string;
  /** Hex or var(--token). */
  edge?: string;
  label?: ReactNode;
  paused?: boolean;
}
export declare function WickLoader(props: WickLoaderProps): JSX.Element;
