/**
 * Adiciona os modulos necessarios
 */

// Electron
var app = require('app');
    BrowserWindow = require('browser-window');

/**
 * Inicia variáveis globais
 */

var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 1024, height: 800});
    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');

    /**
     * Ação executada quando a janela for fechada
     * @method on
     */
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
