/**
 * Created by tommyZZM on 2015/7/6.
 */
"use strict";

var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var iconv = require("iconv-lite");

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 800, height: 600});

    // and load the index.html of the app.
    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    mainWindow.setMenu(null)

    // Open the devtools.
    mainWindow.openDevTools();

    var watchtask = watching(function(){
        mainWindow.reload();
    });

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        watchtask.kill();
        mainWindow = null;
    });
});

//console.log(process.stdout);
var cp = require('child_process');
var watching = function(fn){
    if(fn===void 0){fn = function(){}}
    //注意这里一定要用gulp.cmd 参:http://matthew-jackson.com/notes/development/node-child_process-enoent-error-windows/
    var watch = cp.spawn("iojs",["node_modules\\gulp\\bin\\gulp.js","watch-all"],{
        encoding: 'utf8',
        timeout: 0,
        maxBuffer: 200*1024,
        killSignal: 'SIGTERM',
        stdio: ['pipe', 'pipe', 'pipe',"ipc"],
        cwd: undefined,
        env: process.env
    });

    //console.log(typeof watch.stdout,typeof watch.stderr,typeof watch.send)
    if(watch.stdout){
        watch.stdout.on('data', function(data) {
            //var str = data.replace(/\n$/i,"");
            var str = iconv.decode(data, 'utf8');
            str = str.replace(/\n$/i,"");
            //console.log(str);
        });

        watch.stderr.setEncoding('utf8');watch.stderr.on('data', function(data) {
            //console.log(data);
        });
    }
    watch.on('message', function(data) {
       //console.log('watchFileChanged:',data);
        switch (data.cmd){
            default:{
                break;
            }
            case "onWatchChanged":{
                console.log("[gulp] watch-all task finished")
                fn();
            }
        }
    });

    return watch;
};