/**
 * Created by zura on 9/21/2016.
 */
'use strict';
var conf = require('./conf');
var path = require('path');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('js', function () {
    // @todo
    gulp
        .src(conf.jsSources)
        .pipe(uglify({mangle: false}))
        .pipe(concat(conf.package.name+'.js'))
        .pipe(gulp.dest(path.join(conf.paths.dist, 'js')))
        .on('error', function(){
            console.log(arguments);
        });
});
