import { registerWindowIpc } from "./window";

/** Registers every IPC handler. Call once, before any window is created. */
export function registerIpc() {
  registerWindowIpc();
}
