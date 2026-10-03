import type { ReactNode, CSSProperties } from "react";
/**
 * Full-window column: TitleBar on top, scrollable main area filling the rest on --background.
 * @startingPoint section="Shell" subtitle="Empty Talewick window: title bar + main area" viewport="1280x820"
 */
export interface AppShellProps {
  children?: ReactNode;
  /** Custom title bar element; defaults to <TitleBar />. Pass null for none. */
  titleBar?: ReactNode;
  style?: CSSProperties;
}
export declare function AppShell(props: AppShellProps): JSX.Element;
