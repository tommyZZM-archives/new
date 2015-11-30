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

var addonsPredefineMap = {
    tsify:require("tsify"),
    babelify:require("babelify"),
    coffeeify:require("coffeeify"),
    "browserify-shim":require("browserify-shim")
};

var config = global.myConfig;
var browserifyTasks =  config.tasks.filter(task=>task.task==="browserify");

browserifyTasks.forEach(task=>{
    gulp.task("bb@"+task.name,function(){
        return browserifyBuild(task.entry,task.name,task.outdir,
            {watch:true,addons:task.addons});
    })
});

gulp.task("@build-browserify",function(){
    var merged = mergeStream();
    browserifyTasks.forEach(task=>{
        let s = browserifyBuild(task.entry,task.name,task.outdir,
            {
                watch:false
                ,addons:task.addons
            });
        merged.add(s);
    });
    return merged
});

function browserifyBuild(entry,filename,outdir,opts){
    let br = browserify().add(entry);
    let b = opts.watch?
        (watchify(br)):
        (br);
    if(opts.watch){
        b.on('update', bundle);
        b.on('log', gutil.log);
    }
    function bundle(){
        return broserifyAddTransforms(b,opts.addons)
            //.plugin(addonsPredefineMap.tsify)
            .bundle()
            .on('error', function (error) { gutil.log(gutil.colors.red(error.toString())); })
            .pipe(source(filename+".js"))//'./main.js'
            .pipe(buffer())
            .pipe(gulp.dest(outdir));//'./dist/js/'
    }

    return bundle()
}

function broserifyAddTransforms(b,addonsObj){
    var resultB = b;
    //resultB = b.plugin(dtsGeneratify);

    var addons = [];
    for(var name in addonsObj){
        addons.push({name:addonsPredefineMap[name]||name,opt:addonsObj[name],isplugin:addonsObj[name].isplugin})
    }
    if(Array.isArray(addons) && addons.length>0){
        addons.forEach(addon=>{
            resultB = resultB[addon.isplugin?"plugin":"transform"](addon.name,addon.opt||{});
        })
    }

    return resultB
}

gulp.task("bb",function(){
    return gulp.start(["@build-browserify"])
});