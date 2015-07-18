/*
 |--------------------------------------------------------------------------
 | Webpack configuration
 |--------------------------------------------------------------------------
 **/

'use strict';

var webpack = require('webpack');
var flag = require('yargs').argv;

var paths = require('./paths.js');

var config = {
    entry: paths.jsMain,
    output: {
        filename: 'app.js',
        path: paths.build,
        publicPath: './'
    },
    stats: {
        colors: true,
        reasons: true
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ].concat(!flag.production ? [] : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.AggressiveMergingPlugin()
        ]),
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?stage=0&optional=runtime'
            }
        ]
    }
};
module.exports = config;