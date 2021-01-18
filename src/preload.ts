import { IpcRenderer } from 'electron';

declare global {
  interface Window {
    require: (
      module: 'electron'
    ) => {
      ipcRenderer: IpcRenderer;
    };
  }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { ipcRenderer } = window.require('electron');
