/*
 |--------------------------------------------------------------------------
 | Serve web-server
 |--------------------------------------------------------------------------
 **/

var serve = require("storm-serve"),
    express = require("express"),
    server = express(),
    compression = require('compression'),
    path = require('path'),
    sync = require('browser-sync'),
    env = require("./env");

server.use(compression());

server.use(serve.main({
    mappings: {
        "/index.html": __dirname + "/index.html",
        "/*.js": __dirname + "/react",
        "/*.scss": __dirname + "/react"
    },

    deps: {

        uglify: env.production ? {} : false,
        moduleDeps: {

            transform: [['babelify', {sourceMap: false, stage: 0}]]
        }
    },

    aliases: {
        "env": __dirname + '/env.js',
        "dom-elements": __dirname + '/factories/factories.js'
    }
}));

server.use(serve.scss());
server.use(express.static(path.resolve(path.join(__dirname,'static'))));

if (!env.production) {
    sync.watch("frontend/react/**/*.{js,css,scss,html}", sync.reload);

    sync.init({
        proxy: 'localhost:8000',
        port: 4200,
        ghostMode: false,
        reloadOnRestart: true,
        notify: false,
        minify: false
    })
}

server.listen(8000);