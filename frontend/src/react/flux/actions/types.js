/*
 |--------------------------------------------------------------------------
 | Action types as constants
 |--------------------------------------------------------------------------
 **/

/**
 * A user action type.
 */
export const GET_USER_BEGIN = 'GET_USER_BEGIN';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

/**
 * Determine if action is an API call or not
 */
export const API = 'API';
export const API_GET = 'get';
export const API_POST = 'post';
export const API_PUT = 'put';
export const API_DELETE = 'del';
