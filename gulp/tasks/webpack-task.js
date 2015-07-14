/**
 * Created by tommyZZM on 2015/7/14.
 */

var fs = require('fs');
var path = require('path');

var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack-stream");
var clean = require("gulp-clean");
var tssort = require("gulp-typescript-easysort");
var concat = require("gulp-concat");
var addsrc = require("gulp-add-src");
var add = require("gulp-add");
var ignore = require('gulp-ignore');
var merge = require("merge-stream");

gulp.task("@concat-each-src",function(){
    gulp.src("./dist/**/*").pipe(clean());

    var folders = global.paths.src;

    var tasks = folders.map(function(folder) {
        var foldername = folder.substring(folder.lastIndexOf("/") + 1, folder.length);
        return gulp.src('./src/**/*.ts')
            .pipe(tssort())
            .pipe(addsrc.prepend('./define/*.h.ts'))
            .pipe(add('__definetyped.ts', '///<reference path="../define/typings/tsd.d.ts"/>'))
            .pipe(concat(foldername+".ts"))
            .pipe(gulp.dest("./dist"))
    });

    return merge(tasks);
});

gulp.task("@webpack-typescript", ["@concat-each-src"], function() {
    return gulp.src("./dist/*.ts")
        .pipe(webpack( {
            output: {
                filename: 'main.js'
            },
            externals: {
                'react': 'window.React'// 表示这个依赖项是外部lib，遇到require它不需要编译，且在浏览器端对应window.React
                ,'pixi': 'window.PIXI'
            },
            resolve: {
                extensions: ['', '.webpack.js', '.web.js', '.js', '.ts']
            },
            module: {
                loaders: [
                    { test: /\.ts$/, loader: 'ts-loader!ts-jsx-loader' }
                ]
            }
        },null,function(err, stats) {
            if(err) throw new gutil.PluginError("webpack", err);
            //gutil.log(stats.toString())
        }))
        .pipe(gulp.dest("./dist"));
});

gulp.task("webpack", ["@webpack-typescript"], function(){
    gulp.src('./dist/*.ts')
        .pipe(clean());
});