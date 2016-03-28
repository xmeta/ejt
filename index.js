'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

// See https://github.com/atom/electron/blob/master/docs/api/crash-reporter.md
require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadURL('file://' + __dirname + '/src/index.html');
    mainWindow.webContents.on('did-finish-load', function () {
        mainWindow.setTitle(app.getName());
    });
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
