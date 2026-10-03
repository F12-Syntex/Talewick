import type { ReactNode, CSSProperties } from "react";
/**
 * Small status/label pill; use for counts, states (New, Formatted) and heat tags.
 */
export interface BadgeProps {
  tone?: "neutral" | "accent" | "success" | "danger" | "heat-1" | "heat-2" | "heat-3" | "heat-4" | "heat-5";
  variant?: "soft" | "outline" | "solid";
  /** Glowing leading dot. */
  dot?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
