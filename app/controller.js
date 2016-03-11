"use strict"

const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;

const WINDOW_WIDTH = 400;

module.exports = class {

  constructor(options) {

    var electronScreen = electron.screen;
    var size = electronScreen.getPrimaryDisplay().workAreaSize;

    this.win = new BrowserWindow({
      width: WINDOW_WIDTH,
      height: size.height,
      show: false,
      resizable: false,
      frame: false,
      transparent: true,
      'skip-taskbar': true
    });

    this.win.on('blur', () => {
      this.win.hide();
    });

    this.win.loadURL('file://' + __dirname + '/controller.html');
  }

  showWindow(x) {
    this.win.setPosition(x - WINDOW_WIDTH/2, 0);
    this.win.show();
    this.win.focus();
  }

  toggle(x) {
    if (this.win.isVisible()) {
      this.win.hide();
    }else {
      this.showWindow(x);
    }
  }
}