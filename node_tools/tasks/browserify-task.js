"use strict";

var fs = require('fs');
var path = require('path');

var gulp = require("gulp");
var gutil = require("gulp-util");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var browserify = require("browserify");
var watchify = require("watchify");
var babelify = require("babelify");
var coffeeify = require("coffeeify");
var browserifyShim = require("browserify-shim");

var config = global.myConfig;

gulp.task("@build-browserify",function(){
    return browserifyBuild()
});

function browserifyBuild(){
    let b = watchify(browserify().add('./src/Main.js'));
    b.on('update', bundle);
    b.on('log', gutil.log);
    function bundle(){
        return browserify().add('./src/Main.js')
            .transform(babelify, {presets: ["es2015", "react"],extensions: [".js"]})
            .transform(coffeeify)
            .transform(browserifyShim,{
                shim:{
                    react:"global:React"
                }
            })
            .bundle()
            .on('error', function (error) { gutil.log(gutil.colors.red(error.toString())); })
            .pipe(source('./main.js'))
            .pipe(buffer())
            .pipe(gulp.dest('./dist/js/'));
    }

    return bundle()
}

gulp.task("bb",function(){
    return gulp.start(["@build-browserify"])
});