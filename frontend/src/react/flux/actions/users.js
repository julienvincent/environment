/*
 |--------------------------------------------------------------------------
 | An example action that calls the API middleware
 |--------------------------------------------------------------------------
 **/

import { GET_USER_BEGIN, GET_USER_SUCCESS, GET_USER_FAILURE, API, API_GET } from './types'
import store from '../store'

export const getUser = () => {
    return {
        [API]: {
            types: [GET_USER_BEGIN, GET_USER_SUCCESS, GET_USER_FAILURE],
            method: API_GET,
            endpoint: 'auth'
        }
    }
};
