/**
 * Created by tommyZZM on 2015/7/6.
 */
var gulp = require("gulp");
var gutil = require("gulp-util");

var requireDir  = require('require-dir');requireDir('./node_tools/tasks');

global.myConfig = {
    tasks: [
        {entry: "./src/Main.ts", name: "main", out: "./bin"}
    ]
};

gulp.task('default', function(){

});

