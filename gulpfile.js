/**
 * Created by tommyZZM on 2015/7/6.
 */
var gulp = require("gulp");
// Specify game project paths for tasks.
global.paths = {
    domains: [
        {"name":"main","path":'./src',entry:"Main.js"}//export:true
    ],
    watchfiles:[
        "./index.html"
    ],
    out: './dist',
    externals:{
        react: 'window.React',
        pixi: 'window.PIXI'
    },
    gulp:gulp
};

var requireDir  = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks');

gulp.task('default', function(){
    //gulp.start("webpack");
});

gulp.task('watch-all',["on-watch-change"], function(){
    var domains = global.paths.domains;
    gulp.watch(domains.map(function (domain) {
        return domain.path+"/**/*.js";
    }).concat(global.paths.watchfiles),["on-watch-change"]);
});

gulp.task("on-watch-change",["webpack"],function(){
    if(typeof process!== "undefined"){
        //console.log("[onfinish]");
        if(typeof process.send === "function"){
            process.send({ cmd: 'onWatchChanged' });
        }
    }
});

