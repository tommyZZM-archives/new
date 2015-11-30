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
        {
            task: "browserify"
            , entry: "./src/Main.ts"
            , name: "main"
            , outdir: "./dist/js"
            , addons: {
                "tsify": {
                    isplugin: true
                    ,jsx:"react"
                },
                "browserify-shim": {
                    "shim":{
                        "react": "global:React"
                    }
                }
            }
        }
    ]
};

requireDir('./node_tools/tasks');

gulp.task('default', function(){

});

