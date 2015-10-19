/**
 * Created by tommyZZM on 2015/7/6.
 */
var gulp = require("gulp");
var gutil = require("gulp-util");

// Specify game project paths for tasks.
global.gulpConfig = {
    domains: [//scriptfile
        {"name":"main","path":'./src/Main.ts'}//export:true
    ],
    babel:{
        polyfill:false
    },
    watchfiles:[
        "./index.html"
    ],
    out: './bin',
    externals:{
        react: 'window.React'
    },
    gulp:gulp
};

var requireDir  = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./node_tools/tasks');

gulp.task('default', function(){
    gulp.start("webpack");
});

//Electron 使用的子进程运行的 task
gulp.task('watch-all',["on-watch-change"], function(){
    var domains = global.gulpConfig.domains;
    gulp.watch(domains.map(function (domain) {
        return domain.path+"/**/*.js";
    }).concat(global.gulpConfig.watchfiles),["on-watch-change"]);
});

gulp.task("on-watch-change",["webpack"],function(){
    if(typeof process!== "undefined"){
        if(typeof process.send === "function"){
            process.send({ cmd: 'onTaskFinish' });
        }
    }
});

