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

var cp = require('child_process');

exports.runtasks = function(){
    //cp.exec("gulp webpack-watch");
};
