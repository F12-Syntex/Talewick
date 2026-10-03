import type { ReactNode, CSSProperties } from "react";
/**
 * Primary action button with gold sheen, glow on hover and press-scale; use for any clickable action.
 */
export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconRight?: ReactNode;
  /** Shows a Spinner and blocks clicks. */
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
  onClick?: (e: any) => void;
  type?: "button" | "submit";
  style?: CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
