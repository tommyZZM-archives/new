/**
 * Created by tommyZZM on 2015/7/6.
 */
var gulp = require("gulp");

var requireDir  = require('require-dir');

// Specify game project paths for tasks.
global.paths = {
    src: [
        {"name":"main","path":'./src',entry:"Main.js"}
    ],
    out: './dist',
    externals:{
        react: 'window.React',
        pixi: 'window.PIXI'
    }
};

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks');

gulp.task('default', function(){

});