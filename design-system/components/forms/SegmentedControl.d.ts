import type { ReactNode, CSSProperties } from "react";
/**
 * Tab-like option switcher with a sliding indicator; for view modes (Bookshelf / Series / Comic).
 */
export interface SegmentedControlProps {
  options: Array<string | { value: string; label: ReactNode; icon?: ReactNode }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: "sm" | "md";
  fullWidth?: boolean;
}
export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element;
