import { contextBridge, ipcRenderer } from "electron";
import { IpcChannel, type TalewickApi } from "../shared/ipc";

const api: TalewickApi = {
  platform: process.platform,
  window: {
    minimize: () => ipcRenderer.send(IpcChannel.WindowMinimize),
    toggleMaximize: () => ipcRenderer.send(IpcChannel.WindowToggleMaximize),
    close: () => ipcRenderer.send(IpcChannel.WindowClose),
    isMaximized: () => ipcRenderer.invoke(IpcChannel.WindowIsMaximized),
    onMaximizedChange: (listener) => {
      const handler = (_event: Electron.IpcRendererEvent, maximized: boolean) => listener(maximized);
      ipcRenderer.on(IpcChannel.WindowMaximizedChanged, handler);
      return () => ipcRenderer.removeListener(IpcChannel.WindowMaximizedChanged, handler);
    },
  },
};

contextBridge.exposeInMainWorld("talewick", api);
