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
    sync = require('browser-sync').create(),
    env = require("./env"),

    servePort = 8000,
    syncPort = 4200;

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

            transform: [['babelify', {sourceMap: false, stage: 0, optional: 'runtime'}]]
        }
    },

    aliases: {
        "env": __dirname + '/env.js',
        "factories": __dirname + '/factories/factories.js'
    }
}));

server.use(serve.scss());
server.use(express.static(path.resolve(path.join(__dirname, 'static'))));

if (!env.production) {
    sync.watch([
        __dirname + "/react/**/*.{js,scss}",
        __dirname + "/static/**/**",
        __dirname + "/factories/factories.js",
        __dirname + "/index.html"
    ]).on('change', sync.reload);

    sync.init({
        proxy: 'localhost:' + servePort,
        port: syncPort,
        ghostMode: false,
        reloadOnRestart: true,
        open: false,
        notify: false,
        minify: false,
        logLevel: "silent"
    });
}

server.listen(servePort);