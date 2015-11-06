"use strict";

var fs = require('fs');
var path = require('path');

var gulp = require("gulp");
var gutil = require("gulp-util");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var mergeStream = require("merge-stream");

var browserify = require("browserify");
var watchify = require("watchify");
var babelify = require("babelify");
var coffeeify = require("coffeeify");
var browserifyShim = require("browserify-shim");

var config = global.myConfig;

config.tasks.forEach(task=>{
    gulp.task("bb@"+task.name,function(){
        return browserifyBuild(task.entry,task.name,task.outdir,
            {babelPreset:task.babelPreset,moduleShim:task.moduleShim,watch:true});
    })
});

gulp.task("@build-browserify",function(){
    var merged = mergeStream();
    config.tasks.forEach(task=>{
        let s = browserifyBuild(task.entry,task.name,task.outdir,
            {babelPreset:task.babelPreset,moduleShim:task.moduleShim,watch:false});
        merged.add(s);
    });
    return merged
});

function browserifyBuild(entry,filename,outdir,opts){
    let b = opts.watch?(watchify(browserify().add(entry))):(browserify().add(entry));
    if(opts.watch){
        b.on('update', bundle);
        b.on('log', gutil.log);
    }
    function bundle(){
        return b
            .transform(babelify, {presets: opts.babelPreset,extensions: [".js"]})
            .transform(coffeeify)
            .transform(browserifyShim,{
                shim:opts.moduleShim
            })
            .bundle()
            .on('error', function (error) { gutil.log(gutil.colors.red(error.toString())); })
            .pipe(source(filename+".js"))//'./main.js'
            .pipe(buffer())
            .pipe(gulp.dest(outdir));//'./dist/js/'
    }

    return bundle()
}

gulp.task("bb",function(){
    return gulp.start(["@build-browserify"])
});