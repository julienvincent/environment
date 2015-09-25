/*
 |--------------------------------------------------------------------------
 | Created by Julien Vincent
 |--------------------------------------------------------------------------
 **/

import { GET_USER_SUCCESS } from '../actions/types'

export default function users(state = {error: null, user: {}, pending: false}, action = null) {
    let newState = {};
    switch(action.type) {
        case GET_USER_SUCCESS:
            newState = {
                user: action.response.user
            };
            return {...state, ...newState};
        default:
            return state
    }
}
