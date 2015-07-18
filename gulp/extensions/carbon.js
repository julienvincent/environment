/*
 |--------------------------------------------------------------------------
 | Copies any additional files into the build directory
 |--------------------------------------------------------------------------
 **/

var gulp = require('gulp');
var elixir = require('laravel-elixir');

var paths = require('../config/paths.js');

elixir.extend('carbon', function () {

    gulp.task('carbon', function () {
        paths.files.forEach(function (file) {
            gulp.src(file)
                .pipe(gulp.dest(paths.build))
        });
    });

    paths.files.forEach(function (file) {
        this.registerWatcher('carbon', file);
    }.bind(this));
    return this.queueTask('carbon');
});