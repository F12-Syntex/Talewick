import type { ReactNode } from "react";
/**
 * Talewick's 36px draggable title bar.
 * classic: the repo's v0.2.3 bar (app name left, 48px caption buttons).
 * arcane: Cinzel wordmark + context breadcrumb, centred search pill, action slot,
 * pill window controls, ornament hairline that fills with reading progress.
 * On macOS ("darwin") 80px is reserved for native traffic lights and no controls render.
 * @startingPoint section="Shell" subtitle="Frameless 36px title bar, classic or arcane" viewport="700x200"
 */
export interface TitleBarProps {
  /** classic text (classic variant only). Default "Talewick". */
  title?: string;
  platform?: "win32" | "darwin" | "linux";
  variant?: "classic" | "arcane";
  maximized?: boolean;
  showControls?: boolean;
  /** arcane: breadcrumb after the wordmark, e.g. "The Ashen Lantern · Ch. 213". */
  context?: ReactNode;
  /** arcane: placeholder text; renders a centred search pill with ⌘K. */
  search?: string;
  onSearch?: () => void;
  /** arcane: IconButtons (size="sm") left of the window controls. */
  actions?: ReactNode;
  /** arcane: 0-1 reading progress along the bottom hairline. */
  progress?: number;
  onMinimize?: () => void;
  onToggleMaximize?: () => void;
  onClose?: () => void;
}
export declare function TitleBar(props: TitleBarProps): JSX.Element;
