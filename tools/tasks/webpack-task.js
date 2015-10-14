/**
 * Created by tommyZZM on 2015/7/14.
 */

var fs = require('fs');
var path = require('path');

var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack-stream");

var del = require("del");
var vinylPaths = require("vinyl-paths");

var clean = vinylPaths(del);
var named = require("vinyl-named");
var merge = require("merge-stream");
var concat = require("gulp-concat");
var add = require("gulp-add");
var sourcemaps = require('gulp-sourcemaps');

var config = global.gulpConfig;
//获取每个domain的源码文件夹
gulp.task("@webpack-source-build",function(){
    var domains = config.domains;
    var namebetoken = [];

    var loader = "babel-loader";
    if(config.babel && config.babel.polyfill){
        loader+="?experimental&optional=selfContained";
    }

    gulp.src(path.join(config.out,"style","*.js")).pipe(vinylPaths(del));

    var tasks = domains.map(function(domain) {
        //var foldername = domain.path.substring(domain.path.lastIndexOf("/") + 1, domain.path.length);

        if(domain.export===void 0){domain.export = true}

        if(namebetoken.indexOf(domain.name)>=0){
            throw new gutil.PluginError("[task]@webpack-concat-each-core", "duplicate core name in"+JSON.stringify(domain));
        }else{
            namebetoken.push(domain.name);
        }

        if(!fs.existsSync(domain.path))return gulp.src("");
        var stat = fs.statSync(domain.path);
        var src = domain.path;

        if(stat.isDirectory()){
            src = path.join(src,"**/*.js")
        }

        return gulp.src(src)
            .pipe(named())
            .pipe(webpack({
                output: {
                    libraryTarget: "var",
                    library: domain.export?domain.name:"",
                    filename: (stat.isDirectory()?"[name]":domain.name)+'.js'
                },
                devtool: 'inline-source-map',
                externals: config.externals,
                module: {
                    loaders: [
                        {test: /\.js$/, exclude: /node_modules/, loader: loader},
                        {test: /\.less$/, loader: "style!css!less"}
                    ]
                }
            }, null, function (err, stats) {
                if (err) throw new gutil.PluginError("webpack", err);
            }))
            .pipe(gulp.dest(path.join(config.out,"js")))
    });

    return merge(tasks);
});

gulp.task("webpack", ["@webpack-source-build"], function(){

});

gulp.task("webpack-watch", ["@webpack-source-build"], function(){
    var domains = config.domains;

    gulp.watch(domains.map(function (domain) {
        return domain.path+"/**/*.js";
    }),["@webpack-source-build"])
});