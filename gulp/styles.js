/**
 * Created by zura on 9/21/2016.
 */
'use strict';
var conf = require('./conf');
var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function () {
    // @todo
    gulp.src(conf.lessSources)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public/css'));
});
