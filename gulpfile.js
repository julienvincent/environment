/*
 |--------------------------------------------------------------------------
 | Gulp compile script
 |--------------------------------------------------------------------------
**/

var gulp = require('gulp');
var elixir = require('laravel-elixir');
var paths = require('./gulp/config/paths.js');

require('./gulp/config/elixir.js');
require('./gulp/extensions/builder.js');
require('./gulp/extensions/carbon.js');
require('./gulp/extensions/sync.js');

elixir(function(mix) {

    mix.sass('app.sass', false, { indentedSyntax: true });
    mix.styles([
        'app.css'
    ], paths.build + '/app.css', paths.assets);

    mix.build();
    mix.carbon();
    mix.sync();
});