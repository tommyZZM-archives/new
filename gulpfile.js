/**
 * Created by tommyZZM on 2015/7/6.
 */
var gulp = require("gulp");
var gutil = require("gulp-util");

var requireDir  = require('require-dir');

global.myConfig = {
    global:{
        moduleShim:{}
    },
    tasks: [
        {entry: "./src/Main.js", name: "main", outdir: "./dist/js", babelPreset: ["es2015", "stage-1"], moduleShim: {
            "react":"global:React"
        }}
    ]
};

requireDir('./node_tools/tasks');

gulp.task('default', function(){

});

