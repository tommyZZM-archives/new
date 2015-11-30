/**
 * Created by tommyZZM on 2015/11/16.
 */
"use strict";
var path = require("path");

function dtsGeneratify(b, opts){
    var entryFile;
    var entryDir;
    var referenceFilesHashDir = {};
    var referenceFiles = [];
    b.on('file', function(file,id,parent){
        if(!entryFile){
            entryFile = file;
            entryDir = path.dirname(file);
        }
        if(!(file in referenceFilesHashDir)){
            referenceFilesHashDir[file] = true;
            var fileRelativePath = path.relative(entryDir,file);
            if(!/^\.\./.test(fileRelativePath)){
                referenceFiles.push(file)
            }
        }
        //console.log(file)
    });

    b.pipeline.once('end',function(){
        console.log("end",referenceFiles)
    });

    b.on('bundle', function(){

    });

    b.on('package', function (pkg) {

    })
}

module.exports = dtsGeneratify;