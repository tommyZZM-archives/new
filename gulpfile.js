/**
 * Created by tommyZZM on 2015/7/6.
 */
var gulp = require("gulp");

var requireDir  = require('require-dir');

// Specify game project paths for tasks.
global.paths = {
    src: [
        './src'
    ],
    out: './dist'
};

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks');

gulp.task('default', function(){

});