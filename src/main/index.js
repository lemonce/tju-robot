'use strict';

const electron = require('electron');
const path = require('path');
const url = require('url');

const { app, BrowserWindow } = electron;  

let mainWin;

function createWindow() {
	mainWin = new BrowserWindow({ width: 800, height: 600 });
	mainWin.setMenu(null);
	mainWin.loadURL(url.format({
		pathname: path.join(__dirname, '../../dist/index.html'),
		protocol: 'file:',
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
