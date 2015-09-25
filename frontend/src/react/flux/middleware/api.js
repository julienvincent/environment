/*
 |--------------------------------------------------------------------------
 | Created by Julien Vincent
 |--------------------------------------------------------------------------
 **/

import { API, API_GET, API_POST, API_PUT, API_DELETE } from '../actions/types'
import request from 'superagent'
import env from 'env'
import { mock } from '../mocks/mocks'

env.production ?
    env.api = 'http://' + window.location.hostname + ':8080/' : env.api;

export default store => next => action => {
    if (typeof action[API] === 'undefined') {
        return next(action)
    }
    if (!action[API].method) {
        return next(createAction({type: ''}))
    }

    if (!Array.isArray(action[API].types) && action[API].types.length !== 3) {
        throw new Error('Expecting action types to be an array')
    }
    const [pending, success, failure] = action[API].types;

    let method = action[API].method,
        endpoint = action[API].endpoint,
        post = action[API].post || null;

    let fetch = new Promise((resolve, reject) => {
        if (!env.mock) {
            request[method](env.api + endpoint)
                .withCredentials()
                .set(env.headers)
                .send(post)
                .end((err, res) => {
                    if (err) return reject(err);
                    return resolve(res.body);
                })
        } else {
            setTimeout(() => {
                !env.errorsOnly ? mock(endpoint, resolve) : reject(new Error('Mocked error'))
            }, env.delay)
        }
    });

    next(createAction({type: pending}));
    fetch.then(result => {
        next(createAction({type: success, response: result}))
    }, error => {
        next(createAction({type: failure, error: error}))
    });

    function createAction(data) {
        const newAction = {...action, ...data};
        delete newAction[API];
        return newAction
    }
}

