/**
 * Created by zura on 9/21/2016.
 */
'use strict';
var gulp = require('gulp');
var conf = require('./conf');

gulp.task('watch', function() {
  gulp.watch(conf.jsSources, ['js']);
  gulp.watch(conf.lessSources, ['less']);
});