/*
 |--------------------------------------------------------------------------
 | Reloads the browser on file changes
 |--------------------------------------------------------------------------
 **/

var gulp = require('gulp');
var elixir = require('laravel-elixir');
var sync = require('browser-sync');

var paths = require('../config/paths.js');

elixir.extend('sync', function () {

    gulp.task('sync', function () {
        if (sync.active === true) {
            sync.reload();
        } else if (gulp.tasks.watch.done === true) {
            sync({
                server: {
                    baseDir: paths.build
                },
                port: 4200,
                open: false,
                notify: false
            });
        }
    });

    this.registerWatcher('sync', paths.build + '/**');
    return this.queueTask('sync');
});