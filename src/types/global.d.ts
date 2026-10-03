import type { TalewickApi } from "@shared/ipc";

declare global {
  interface Window {
    /** Present only inside Electron (exposed by electron/preload.ts). */
    talewick?: TalewickApi;
  }
}

export {};
