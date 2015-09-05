/*
 |--------------------------------------------------------------------------
 | Wrapper around superagent. Adds some nice defaults
 |
 | - If mocks are enabled, then all requests will be directed at
 |   mocks. The url will be passed as well as a @resolve callback
 |--------------------------------------------------------------------------
 **/

import Request from 'superagent'
import { mock } from './mocks'
import env from 'env'

env.production ?
    env.api = 'http://' + window.location.hostname + ':8080/' : env.api;

export function post(url, options) {
    options = options || {send: {}};

    return new Promise((resolve, reject) => {
        if (!env.mock) {
            Request.post(api + url)
                .withCredentials()
                .set(headers)
                .send(options.send)
                .end((err, res) => {
                    if (!err) {
                        resolve(res.body)
                    } else {
                        reject(err)
                    }
                })
        } else {
            setTimeout(() => {
                !env.errorsOnly ? mock(url, resolve) : mock(url, reject)
            }, env.delay)
        }
    })

}

export function put(url, options) {
    options = options || {send: {}};


    return new Promise((resolve, reject) => {
        if (!env.mock) {
            Request.put(api + url)
                .withCredentials()
                .set(headers)
                .send(options.send)
                .end((err, res) => {
                    if (!err) {
                        resolve(res.body)
                    } else {
                        reject(err)
                    }
                })
        } else {
            setTimeout(() => {
                !env.errorsOnly ? mock(url, resolve) : mock(url, reject)
            }, env.delay)
        }
    })

}

export function get(url) {

    return new Promise((resolve, reject) => {
        if (!env.mock) {
            Request.get(api + url)
                .withCredentials()
                .set(headers)
                .end((err, res) => {
                    if (!err) {
                        resolve(res.body)
                    } else {
                        reject(err)
                    }
                })
        } else {

            setTimeout(() => {
                !env.errorsOnly ? mock(url, resolve) : mock(url, reject)
            }, env.delay)
        }
    })

}

export function del(url) {

    return new Promise((resolve, reject) => {
        if (!env.mock) {
            Request.del(api + url)
                .withCredentials()
                .set(headers)
                .end((err, res) => {
                    if (!err) {
                        resolve(res.body)
                    } else {
                        reject(err)
                    }
                })
        } else {
            setTimeout(() => {
                !env.errorsOnly ? mock(url, resolve) : mock(url, reject)
            }, env.delay)
        }
    })
}