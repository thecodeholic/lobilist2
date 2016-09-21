/**
 * Created by zura on 9/21/2016.
 */
'use strict';
var conf = require('./conf');
var path = require('path');
var gulp = require('gulp');

gulp.task('copy', function () {
    gulp
        .src(['./bower_components/jquery/dist/jquery.{js,min.js}'])
        .pipe(gulp.dest(path.join(conf.paths.dist, 'jquery')));
    gulp.src(['./bower_components/bootstrap/dist/**'])
        .pipe(gulp.dest(path.join(conf.paths.dist, 'bootstrap')));
});
