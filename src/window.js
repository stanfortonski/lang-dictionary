// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');

process.env.NODE_ENV = 'production';

var mainWindow;
function createWindow(){
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 512,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.resolve(__dirname, '../dist/index.html'));
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function(){
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0)
      createWindow();
  });

  const contextMenuTemplate = [
    {
      label: 'Copy',
      role: 'copy',
      accelerator: 'CommandOrControl+C',
    }
  ];
  const contextMenu = Menu.buildFromTemplate(contextMenuTemplate);

  mainWindow.webContents.on('context-menu', (e, params) => {
    e.preventDefault()
    contextMenu.popup(mainWindow, params.x, params.y);
  }, false);
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function(){
  if (process.platform !== 'darwin')
    app.quit();
});

if (process.env.NODE_ENV !== 'production'){
  const mainMenuTemplate = [{
    label: 'Developer Tools',
    submenu: [
        {
            label: 'Toggle DevTools',
            click(item, focusedWindow){
                focusedWindow.toggleDevTools();
            },
            accelerator: 'CommandOrControl+I'
        },
        {
            role: 'reload'
        }
    ]
  }];
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
}
else {
  Menu.setApplicationMenu(null);
}
