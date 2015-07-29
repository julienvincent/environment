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

    gulp.task('fonts', function () {
        gulp.src(paths.fonts)
            .pipe(gulp.dest("./frontend/src/build/fonts"))
    });

    paths.files.forEach(function (file) {
        this.registerWatcher('carbon', file);
    }.bind(this));
    this.registerWatcher('fonts', paths.fonts);

    this.queueTask('fonts');
    return this.queueTask('carbon');
});