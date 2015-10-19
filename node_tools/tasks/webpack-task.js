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
    var tsloader = "awesome-typescript-loader";

    gulp.src(path.join(config.out,"js","*.js")).pipe(vinylPaths(del));

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

        domain.dirname = path.dirname(src);

        if(stat.isDirectory()){
            domain.dirname = src;
            src = [path.join(src,"**/*.js"),path.join(src,"**/*.ts")]
        }

        //console.log(domain.name,domain.path,stat.isDirectory());

        return gulp.src(src)
            .pipe(named())
            .pipe(webpack({
                resolve: {
                    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
                },
                output: {
                    libraryTarget: "var",
                    library: domain.export?domain.name:"",
                    filename: ((stat.isDirectory()?"[name]":domain.filename||domain.name)+'.js').toLowerCase()
                },
                devtool: 'inline-source-map',
                externals: config.externals,
                module: {
                    loaders: [
                        {test: /\.js$/, exclude: /node_modules/, loader: loader},
                        {test: /\.ts$/, exclude: /node_modules/, loader: tsloader}
                    ]
                }
            }, null, function (err, stats) {
                if (err) throw new gutil.PluginError("webpack", err);
            }))
            .pipe(gulp.dest(path.join(config.out,"js",domain.out||"")))
    });

    return merge(tasks);
});

gulp.task("webpack", ["@webpack-source-build"], function(){

});

gulp.task("webpack-watch", ["@webpack-source-build"], function(){
    var domains = config.domains;

    gulp.watch(domains.map(function (domain) {
        return domain.dirname+"/**/*.js";
    }).concat(domains.map(function (domain) {
        return domain.dirname+"/**/*.ts";
    })),["@webpack-source-build"])
});