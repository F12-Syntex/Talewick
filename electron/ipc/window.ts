import { BrowserWindow, ipcMain } from "electron";
import { IpcChannel } from "../../shared/ipc";

function senderWindow(event: Electron.IpcMainEvent | Electron.IpcMainInvokeEvent) {
  return BrowserWindow.fromWebContents(event.sender);
}

export function registerWindowIpc() {
  ipcMain.on(IpcChannel.WindowMinimize, (event) => senderWindow(event)?.minimize());

  ipcMain.on(IpcChannel.WindowToggleMaximize, (event) => {
    const win = senderWindow(event);
    if (!win) return;
    if (win.isMaximized()) win.unmaximize();
    else win.maximize();
  });

  ipcMain.on(IpcChannel.WindowClose, (event) => senderWindow(event)?.close());

  ipcMain.handle(IpcChannel.WindowIsMaximized, (event) => senderWindow(event)?.isMaximized() ?? false);
}

/** Pushes maximize state changes to the window's renderer. */
export function forwardWindowState(win: BrowserWindow) {
  const send = () => win.webContents.send(IpcChannel.WindowMaximizedChanged, win.isMaximized());
  win.on("maximize", send);
  win.on("unmaximize", send);
}
