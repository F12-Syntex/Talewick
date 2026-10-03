import type { ReactNode, CSSProperties } from "react";
/**
 * Text/search field with leading icon, trailing slot and gold focus ring.
 */
export interface InputProps {
  value?: string;
  defaultValue?: string;
  /** Receives the string value, not the event. */
  onChange?: (value: string) => void;
  onKeyDown?: (e: any) => void;
  placeholder?: string;
  icon?: ReactNode;
  trailing?: ReactNode;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: string;
  autoFocus?: boolean;
  width?: number | string;
  style?: CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
