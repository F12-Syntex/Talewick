import { BrowserWindow, shell } from "electron";
import path from "node:path";
import { forwardWindowState } from "./ipc/window";

const BACKGROUND = "#0e0e11";

export function createMainWindow(startUrl: string, isDev: boolean) {
  const isMac = process.platform === "darwin";

  const win = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 900,
    minHeight: 600,
    show: false,
    frame: isMac,
    titleBarStyle: isMac ? "hiddenInset" : "hidden",
    backgroundColor: BACKGROUND,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  win.once("ready-to-show", () => win.show());
  forwardWindowState(win);

  // Links that try to open a new window go to the system browser instead.
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("http:") || url.startsWith("https:")) void shell.openExternal(url);
    return { action: "deny" };
  });

  // No menu means no default DevTools shortcut; keep F12 in development only.
  if (isDev) {
    win.webContents.on("before-input-event", (_event, input) => {
      if (input.type === "keyDown" && input.key === "F12") win.webContents.toggleDevTools();
    });
  }

  void win.loadURL(startUrl);
  return win;
}
