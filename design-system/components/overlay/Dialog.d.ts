import type { ReactNode, CSSProperties } from "react";
/**
 * Modal glass panel with blurred backdrop and blur-in entrance; for confirmations and settings.
 */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  width?: number;
  /** Position absolute inside nearest positioned parent instead of fixed to viewport. */
  contained?: boolean;
}
export declare function Dialog(props: DialogProps): JSX.Element;
