'use strict';

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain
const globalShortcut = electron.globalShortcut
var mainWindow = null;

// var configuration = require('./configuration');

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        frame: true,
        height: 800,
        resizable: true,
        width: 500
    });

    mainWindow.loadURL('file://' + __dirname + '/app/slotmachine.html');

    // globalShortcut.register('ctrl+shift+1', function () {
    //     mainWindow.webContents.send('global-shortcut', 0);
    // });
    // globalShortcut.register('ctrl+shift+2', function () {
    //     mainWindow.webContents.send('global-shortcut', 1);
    // });

    // if (!configuration.readSettings('shortcutKeys')) {
    //     configuration.saveSettings('shortcutKeys', []);
    // }
    // setGlobalShortcuts();
});

ipcMain.on('close-main-window', function () {
    app.quit();
    mainWindow = null;
});

// var settingsWindow = null;

// ipcMain.on('open-settings-window', function () {
//     if (settingsWindow) {
//         return;
//     }

//     settingsWindow = new BrowserWindow({
//         frame: false,
//         height: 200,
//         resizable: false,
//         width: 200
//     });

//     settingsWindow.loadURL('file://' + __dirname + '/app/settings.html');

//     settingsWindow.on('closed', function () {
//         settingsWindow = null;
//     });
// });

// ipcMain.on('close-settings-window', function () {
//     if (settingsWindow) {
//         settingsWindow.close();
//     }
// });

// ipcMain.on('set-global-shortcuts', function () {
//     setGlobalShortcuts();
// });

// function setGlobalShortcuts() {
//     globalShortcut.unregisterAll();

//     var shortcutKeysSetting = configuration.readSettings('shortcutKeys');
//     var shortcutPrefix = shortcutKeysSetting.length === 0 ? '' : shortcutKeysSetting.join('+') + '+';

//     globalShortcut.register(shortcutPrefix + '1', function () {
//         mainWindow.webContents.send('global-shortcut', 0);
//     });
//     globalShortcut.register(shortcutPrefix + '2', function () {
//         mainWindow.webContents.send('global-shortcut', 1);
//     });
// }
