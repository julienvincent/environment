/*
 |--------------------------------------------------------------------------
 | Webpack configuration
 |--------------------------------------------------------------------------
 **/

var webpack = require('webpack');
var flag = require('yargs').argv;

require('./paths.js');

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
        webpack.optimize.OccurenceOrderPlugin()
    ].concat(flag.min ? [] : [
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
                loader: 'babel-loader?experimental&optional=runtime'
            }
        ]
    }
};

module.exports = config;