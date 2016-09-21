/**
 * Created by zura on 9/21/2016.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('copy', function () {
    // @todo
});

gulp.task('less', function(){
    // @todo
});

gulp.task('js', function(){
    // @todo
});

gulp.src('./less/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/css'));