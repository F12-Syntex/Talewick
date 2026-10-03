import type { ReactNode, CSSProperties } from "react";
/**
 * Book cover tile with 3D tilt, glare, spine shading and reading-progress strip; generated cover when no image.
 */
export interface BookCoverProps {
  src?: string;
  title?: string;
  author?: string;
  /** 0-1 */
  progress?: number;
  width?: number;
  tilt?: boolean;
  showMeta?: boolean;
  onClick?: () => void;
}
export declare function BookCover(props: BookCoverProps): JSX.Element;
