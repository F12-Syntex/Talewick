import type { ReactNode, CSSProperties } from "react";
/**
 * Glass notification card (e.g. "Quote saved"); render inside your own stack/positioning.
 */
export interface ToastProps {
  title: ReactNode;
  description?: ReactNode;
  tone?: "neutral" | "accent" | "success" | "danger" | "info";
  icon?: ReactNode;
  action?: ReactNode;
  onClose?: () => void;
  /** ms; shows a depleting line along the bottom. */
  duration?: number;
  style?: CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
