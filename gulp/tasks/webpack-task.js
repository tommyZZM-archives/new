/**
 * Created by tommyZZM on 2015/7/14.
 */

var fs = require('fs');
var path = require('path');

var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack-stream");

var clean = require("gulp-clean");
var named = require("vinyl-named");
var merge = require("merge-stream");
var concat = require("gulp-concat");
var add = require("gulp-add");

var extname = ".es6~";

gulp.task("@webpack-clean-tmp",function(){
    return gulp.src("./**/*"+extname).pipe(clean());
});

//获取每个核心的源码文件夹
gulp.task("@webpack-concat-each-core",function(){
    var cores = global.paths.src;
    var i=0;
    var namebetoken = [];

    var tasks = cores.map(function(core) {
        var foldername = core.path.substring(core.path.lastIndexOf("/") + 1, core.path.length);

        var entryname = (core.name||foldername)+extname;
        if(namebetoken.indexOf(core.name)>=0){
            throw new gutil.PluginError("[task]@webpack-concat-each-core", "duplicate core name in"+JSON.stringify(core));
        }else{
            namebetoken.push(core.name);
        }

        cores[i].entrypath = path.join(core.path,entryname);
        i++;

        return gulp.src([path.join(core.path,core.entry||'Main.js')])
            .pipe(add('use_strict.js', '"use strict";',true))
            .pipe(concat(entryname))
            .pipe(gulp.dest(core.path))
    });

    return merge(tasks);
});

//source build
gulp.task("@webpack-load-src",["@webpack-concat-each-core"], function() {
    gulp.src("./dist/*").pipe(clean());

    var cores = global.paths.src;

    return gulp.src(cores.map(function (core) {
        return core.entrypath;
    }))
        .pipe(named())
        .pipe(webpack({
            output: {
                filename: '[name].js'
            },
            externals: global.paths.externals,
            module: {
                loaders: [
                    {test: /\.es6~$/, exclude: /node_modules/, loader: "babel-loader"}
                ]
            }
        }, null, function (err, stats) {
            if (err) throw new gutil.PluginError("webpack", err);
            //gulp.start(["@webpack-clean-tmp"]);
        }))
        .pipe(gulp.dest("./dist"));
});

gulp.task("webpack", ["@webpack-load-src"], function(){

});

gulp.task("webpack-watch", ["@webpack-load-src"], function(){
    var cores = global.paths.src;

    gulp.watch(cores.map(function (core) {
        return core.path+"/**/*.js";
    }),["@webpack-load-src"])
});

gulp.task("webpack-clean-tmp",function(){
    gulp.start(["@webpack-clean-tmp"]);
});