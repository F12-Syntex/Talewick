/**
 * Minimize, maximize/restore and close for the frameless title bar (Windows/Linux).
 * classic: 48px full-height buttons, 11px 1px glyphs (repo). pill: 28px rounded buttons, 10px glyphs.
 * Close hovers to --danger.
 */
export interface WindowControlsProps {
  maximized?: boolean;
  variant?: "classic" | "pill";
  onMinimize?: () => void;
  onToggleMaximize?: () => void;
  onClose?: () => void;
}
export declare function WindowControls(props: WindowControlsProps): JSX.Element;
