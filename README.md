![nginx 1.7.10](https://img.shields.io/badge/nginx-v1.7.10-brightgreen.svg) ![hhvm status](https://img.shields.io/badge/hhvm-beta-orange.svg) ![License MIT](https://img.shields.io/dub/l/vibe-d.svg)

A personalised, opinionated environment for developing applications. Easy to use in a team environment and makes deployment fast and simple.

## Contains:

Out-of-the-box this environment was built to be used with the following technologies

+ [React](http://facebook.github.io/react/) and [Flummox](http://acdlite.github.io/flummox) frontend
+ [Laravel 5.1](http://laravel.com/) backend
+ [Docker](https://www.docker.com/) containers

## Gulp:

The gulp build process is easy to customise and change as you please, and comes with a few basic build processes. This environment makes use of [laravel-elixir](http://laravel.com/docs/5.1/elixir)
for much of the build process.

+ `gulp` Bundles and transpiles the EcmaScript 6 react code into EcmaScript 5, Bundles and translates sass files to css and outputs everything to the build directory
+ `gulp watch` Watches for file changes and runs the default build process. Additionally launches [browser-sync](http://www.browsersync.io/) on port `4200`

Additional tags

+ `gulp --production` or `gulp watch --production` Adds an additional minification step.

This environment uses webpack to transpile and bundle the EcmaScript 6 code. You can also use [laravel-elixirs](http://laravel.com/docs/5.1/elixir) babelify extension.

#### Thank you [laravel-elixirs](http://laravel.com/docs/5.1/elixir) for creating a slick gulp utility.

## Docker:

This environment makes use of [docker-compose](https://docs.docker.com/compose/) along with [Docker](https://www.docker.com/) to make developing easy if you are working alone or with a team.

Containers:
+ `proxy` This container is for deployment, it proxies subdomains to specific containers. Documentation can be found here: [jwilder/nginx-proxy](https://github.com/jwilder/nginx-proxy)
+ `mysql` Database that stores its database in the mysql folder
+ `backend` Backend container that uses a nginx base and is set up for use with [Laravel](http://laravel.com/)
+ `frontend` Frontend container that uses a nginx base.

The last three containers are for working with Laravel and making deployment easier:
+ `composer` Run composer commands within the laravel container.
+ `artisan` Run artisan commands within the laravel container.
+ `npm` Run npm commands within the laravel container. Generally used on deployment.