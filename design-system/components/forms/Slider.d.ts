import type { ReactNode, CSSProperties } from "react";
/**
 * Draggable range slider with glowing thumb and value bubble; for zoom, TTS speed, radius.
 */
export interface SliderProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  showValue?: boolean;
  format?: (value: number) => string;
  disabled?: boolean;
  width?: number | string;
}
export declare function Slider(props: SliderProps): JSX.Element;
