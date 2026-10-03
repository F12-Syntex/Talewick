"use client";

import { useSyncExternalStore } from "react";
import type { TalewickApi } from "@shared/ipc";

const noopSubscribe = () => () => {};

/**
 * Returns the Electron bridge, or null when rendering on the server
 * (static export) or when the page is opened in a regular browser.
 */
export function useBridge(): TalewickApi | null {
  return useSyncExternalStore(
    noopSubscribe,
    () => window.talewick ?? null,
    () => null,
  );
}
