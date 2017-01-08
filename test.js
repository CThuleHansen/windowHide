const electron = require('electron')
const BrowserWindow = electron.remote.BrowserWindow
const path = require('path')
const url = require('url')
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index2.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('close', function(e){
  e.preventDefault()
  mainWindow.hide()
  console.log('Window hiddnen')
  return false}
)