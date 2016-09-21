/**
 * Created by zura on 9/21/2016.
 */
'use strict';
var fs = require('fs');
var path = require('path');

exports.package = JSON.parse(fs.readFileSync('./package.json'));
exports.paths = {
    src : 'src',
    dist: 'dist'
};
exports.jsSources = [
    path.join(exports.paths.src, 'js/app.js'),
    path.join(exports.paths.src, 'js/**/*.js')
];
exports.lessSources = [path.join(exports.paths.src, 'less/**/*.less')];