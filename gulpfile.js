/**
 * Created by zura on 9/21/2016.
 */
'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var path = require('gulp-path');

wrench.readdirSyncRecursive('./gulp').filter(function (file) {
    return (/\.(js)$/i).test(file);
}).map(function (file) {
    require('./gulp/' + file);
});

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['js', 'copy', 'watch']);
