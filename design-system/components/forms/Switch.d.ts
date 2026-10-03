import type { ReactNode, CSSProperties } from "react";
/**
 * On/off toggle with spring knob and accent glow; for settings.
 */
export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: ReactNode;
  size?: "sm" | "md";
}
export declare function Switch(props: SwitchProps): JSX.Element;
