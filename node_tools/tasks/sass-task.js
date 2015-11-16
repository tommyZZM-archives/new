/* Created by tommyZZM on 2015/11/10.*/
"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');

var config = global.myConfig;
var sassTasks =  config.tasks.filter(task=>task.task==="sass");

sassTasks.forEach(task=>{
    gulp.task("sb@"+task.name,function(){
        return sassBuild(task.entry,task.outdir);
    });

    gulp.task("sb@w@"+task.name,function(){
        gulp.watch(task.files||"*.sass",["sb@"+task.name])
    })
});

function sassBuild(entry,outdir,opts){
   return gulp.src(entry)
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest(outdir));
}
