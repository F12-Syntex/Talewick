import type { ReactNode, CSSProperties } from "react";
/**
 * Square icon-only button for toolbars and chrome; always pass a label for tooltip/aria.
 */
export interface IconButtonProps {
  icon: ReactNode;
  label: string;
  variant?: "ghost" | "secondary" | "primary";
  size?: "sm" | "md" | "lg";
  /** Toggled-on state: accent tint. */
  active?: boolean;
  disabled?: boolean;
  onClick?: (e: any) => void;
  style?: CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
