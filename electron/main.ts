import { app, BrowserWindow, Menu } from "electron";
import path from "node:path";
import { registerIpc } from "./ipc";
import { APP_ORIGIN, registerAppSchemePrivileges, serveStaticExport } from "./protocol";
import { createMainWindow } from "./window";

const isDev = process.argv.includes("--dev");
const DEV_URL = process.env.TALEWICK_DEV_URL ?? "http://localhost:3000";

// Tests and screenshot runs use their own profile so they don't hit the single-instance lock
// of a Talewick window that is already open.
if (process.env.TALEWICK_USER_DATA) app.setPath("userData", process.env.TALEWICK_USER_DATA);

registerAppSchemePrivileges();

if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  let mainWindow: BrowserWindow | null = null;

  app.on("second-instance", () => {
    if (!mainWindow) return;
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  });

  const openMainWindow = () => {
    mainWindow = createMainWindow(isDev ? DEV_URL : `${APP_ORIGIN}/`, isDev);
    mainWindow.on("closed", () => (mainWindow = null));
  };

  app.whenReady().then(() => {
    Menu.setApplicationMenu(null);
    registerIpc();
    if (!isDev) serveStaticExport(path.join(app.getAppPath(), "out"));
    openMainWindow();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) openMainWindow();
    });
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
}
