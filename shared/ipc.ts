/**
 * IPC contract shared by the main process, preload and renderer.
 * Add new channels here first, then implement them under electron/ipc/
 * and expose them in electron/preload.ts.
 */
export const IpcChannel = {
  WindowMinimize: "window:minimize",
  WindowToggleMaximize: "window:toggle-maximize",
  WindowClose: "window:close",
  WindowIsMaximized: "window:is-maximized",
  WindowMaximizedChanged: "window:maximized-changed",
} as const;

export type Unsubscribe = () => void;

export interface WindowApi {
  minimize(): void;
  toggleMaximize(): void;
  close(): void;
  isMaximized(): Promise<boolean>;
  onMaximizedChange(listener: (maximized: boolean) => void): Unsubscribe;
}

/** Everything the preload exposes on `window.talewick`. */
export interface TalewickApi {
  platform: NodeJS.Platform;
  window: WindowApi;
}
