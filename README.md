# DEPRECATED

![nginx 1.7.10](https://img.shields.io/badge/nginx-v1.7.10-brightgreen.svg) ![hhvm status](https://img.shields.io/badge/hhvm-beta-orange.svg) ![License MIT](https://img.shields.io/dub/l/vibe-d.svg)

My own personalized development environment, opened to the world :)

This is just a mash-up of some awesome technologies.

## Contains:

What's under the hood?

+ [React](http://facebook.github.io/react/) and [Flummox](http://acdlite.github.io/flummox) frontend
+ [Laravel 5.1](http://laravel.com/) backend
+ [Docker](https://www.docker.com/) containers
+ [Storm-Serve](https://github.com/projectstorm/serve) frontend webserver

## Gulp?

Nah. Have a look at [Storm-Serve](https://github.com/projectstorm/serve). Transpiling, minifying, bundling and much more is all handled for you.

## Some options:

There is a simple environment file located at `frontend/src/env.js` that contains a few project settings.

	{
		mock: true, // Mock the API
		errorsOnly: false, // All ajax requests respond with rejected promises
		delay: 500, // A delay on mock requests.
		production: true, // Application environment
		api: 'http://api.' + (window ? window.location.hostname : null) + '/', // The URL of the API
		headers: {
			'X-Requested-With': 'XMLHttpRequest'
		} // Headers to be applied to all ajax requests
	}
	
If you would like to use this throughout your application, import it using its serve alias:
	
	import env from 'env'
	
	if (env.production) {
		// do some code
	}
 
#### mock
* Intercepts ajax requests and points the specified url at the mock API
* While errorsOnly is `false`, always returns a resolved promise

#### errorsOnly
* Stops mocks from resolving. Returns a rejected promise (false)

#### delay
* Adds a delay to mock API requests in order to mimic different connection speeds

#### production
* While `true`, react-router uses HistoryLocation URL's
* While `false`, the ajax API sends all requests to `'http://' + window.location.hostname + ':8080/'`. Note: In order for CORS to work properly in Laravel, set
  `CORS_ADDRESS` to the URL of your frontend. For example - if `http://localhost:4200` points to your frontend, then set `CORS_ADDRESS=http://localhost:4200` in Laravel.
* While `false` a browser-sync session will be started on port `4200` and pointed at serve.

#### api
* The URL of your backend. Assuming `api.` as this is what the docker proxy expects

#### headers
* All headers you want sent with ajax requests can be added here

## Docker:

This environment makes use of [docker-compose](https://docs.docker.com/compose/) along with [Docker](https://www.docker.com/) to make developing easy if you are working alone or with a team.

Containers:

+ `proxy` This container is for deployment, it proxies subdomains to specific containers. Documentation can be found here: [jwilder/nginx-proxy](https://github.com/jwilder/nginx-proxy)
+ `mysql` Database that stores its database in the mysql folder
+ `backend` Backend container that uses a nginx base and is set up for use with [Laravel](http://laravel.com/)
+ `frontend` Frontend container that uses a node base, and runs the serve.js server

Convenience containers. (Optional)

+ `composer` Run composer commands for Laravel.
+ `artisan` Run artisan commands for Laravel
