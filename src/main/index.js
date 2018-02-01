'use strict';

const electron = require('electron');
const path = require('path');
const url = require('url');
require('../server');

const { app, BrowserWindow } = electron;  

let mainWin;

function createWindow() {
	mainWin = new BrowserWindow({
		width: 1280,
		height: 720,
		useContentSize: true,
		resizable: false
	});
	// mainWin.setMenu(null);
	mainWin.loadURL(url.format({
		pathname: 'localhost:1700',
		protocol: 'http:',
		slashes: true
	}));

	mainWin.on('closed', () => {
		mainWin = null;
	});

	const { webContents } = mainWin;
	let devToolsIsOpened = false;

	webContents.on('before-input-event', (event, input) => {
		if (input.key === 'F12' && input.type === 'keyDown') {
			devToolsIsOpened
				? webContents.closeDevTools()
				: webContents.openDevTools();
		}
	});

	webContents.on('devtools-opened', () => devToolsIsOpened = true);
	webContents.on('devtools-closed', () => devToolsIsOpened = false);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWin === null) {
		createWindow();
	}
});

console.log(11111)