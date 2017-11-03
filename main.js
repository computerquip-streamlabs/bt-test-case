const electron = require('electron');
const bt = require('backtrace-node');

bt.initialize({
  disableGlobalHandler: true,
  endpoint: "https://streamlabs.sp.backtrace.io:6098",
  token: "e3f92ff3be69381afe2718f94c56da4644567935cc52dec601cf82b3f52a06ce"
});

let mainWnd;

function main() {
    electron.app.on('window-all-closed', () => {
        electron.app.quit();
    });

    mainWnd = new electron.BrowserWindow(
        {width: 800, height: 600}
    );

    mainWnd.on('closed', () => {
        win = null;
    });

    mainWnd.loadURL(`file://${__dirname}/renderer.html`)    
}

electron.app.on("ready", () => {
    main();
});