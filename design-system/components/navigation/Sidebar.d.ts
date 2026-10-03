import type { ReactNode, CSSProperties } from "react";
/**
 * App navigation rail with section labels and a sliding active indicator.
 */
export interface SidebarProps {
  items: Array<{ id: string; label: ReactNode; icon?: ReactNode; badge?: ReactNode } | { section: string }>;
  activeId?: string;
  onSelect?: (id: string) => void;
  header?: ReactNode;
  footer?: ReactNode;
  width?: number;
  glass?: boolean;
}
export declare function Sidebar(props: SidebarProps): JSX.Element;
