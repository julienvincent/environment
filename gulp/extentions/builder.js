/*
 |--------------------------------------------------------------------------
 | Transpiler and bundler from ES6 - ES5
 |--------------------------------------------------------------------------
 **/

var gulp = require("gulp");
var elixir = require("laravel-elixir");
var webpack = require('webpack');
var $ = require('gulp-load-plugins')();

var config = require('../config/webpack.js');
require('../config/paths.js');

elixir.extend('build', function () {

    gulp.task('build', function (callback) {

        function check(err) {
            if (err) throw new $.util.PluginError('webpack', err);

            return callback();
        }

        webpack(config).run(check)
    });

    this.registerWatcher('build', paths.js);
    return this.queueTask('build');
});