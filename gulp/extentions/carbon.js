/*
 |--------------------------------------------------------------------------
 | Copies any additional files into the build directory
 |--------------------------------------------------------------------------
 **/

var gulp = require('gulp');
var elixir = require('laravel-elixir');

require('../config/paths.js');

elixir.extend('carbon', function () {

    gulp.task('carbon', function () {
        files.forEach(function (file) {
            gulp.src(file)
                .pipe(gulp.dest(paths.build))
        });
    });

    this.registerWatcher('carbon', paths.fileWatch);
    return this.queueTask('carbon');
});