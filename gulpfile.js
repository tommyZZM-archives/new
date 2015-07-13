/**
 * Created by tommyZZM on 2015/7/6.
 */
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack-stream");
var clean = require("gulp-clean");
var tssort = require("gulp-typescript-easysort");
var concat = require("gulp-concat");
var add = require("gulp-add-src");
var ignore = require('gulp-ignore');

gulp.task("@webpack", function() {
    // run webpack
    gulp.src("./dist/**/*").pipe(clean());

    return gulp.src('./src/**/*.ts')
        .pipe(tssort())
        .pipe(add.prepend('./entry/entry.ts'))
        .pipe(concat("___tmp.ts"))
        .pipe(gulp.dest("./dist"))
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
        .pipe(gulp.dest("./dist"))
});

gulp.task("webpack", ["@webpack"], function(){
    gulp.src('./dist/___tmp.ts')
        .pipe(clean());
});