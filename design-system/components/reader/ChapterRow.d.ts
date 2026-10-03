import type { ReactNode, CSSProperties } from "react";
/**
 * Table-of-contents row: number, title, meta, hype gauge; read rows dim, current row glows.
 */
export interface ChapterRowProps {
  number: ReactNode;
  title: ReactNode;
  meta?: ReactNode;
  hype?: number;
  state?: "unread" | "read" | "current";
  trailing?: ReactNode;
  onClick?: () => void;
}
export declare function ChapterRow(props: ChapterRowProps): JSX.Element;
