import type { ReactNode, CSSProperties } from "react";
/**
 * Card whose border and surface light up under the cursor; for featured items (Continue reading).
 */
export interface SpotlightCardProps {
  children?: ReactNode;
  padding?: number | string;
  radius?: string;
  glow?: string;
  onClick?: () => void;
  style?: CSSProperties;
}
export declare function SpotlightCard(props: SpotlightCardProps): JSX.Element;
