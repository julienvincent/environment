/*
 |--------------------------------------------------------------------------
 | Created by Julien Vincent
 |--------------------------------------------------------------------------
**/

import Request from 'superagent'

let api = 'http://' + window.location.hostname + ':8080/';

class API {

    POST(url, options, cb) {

        if (arguments.length == 2 && typeof options === 'function') {

            cb = options;
            options = {
                send: {}
            }
        }

        cb = cb || function() {};
        options = options || {send: {}};

        Request.post(api + url)
        .withCredentials()
        .set('X-Requested-With', 'XMLHttpRequest')
        .send(options.send)
        .end((err, res) => cb(err, res))
    }

    GET(url, options, cb) {

        if (arguments.length == 2 && typeof options === 'function') {

            cb = options;
            options = {}
        }

        cb = cb || function() {};
        options = options || {};

        Request.get(api + url)
            .withCredentials()
            .set('X-Requested-With', 'XMLHttpRequest')
            .end((err, res) => cb(err, res))
    }
}
let run = new API();
export default run;