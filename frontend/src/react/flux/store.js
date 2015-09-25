/*
 |--------------------------------------------------------------------------
 | Created by Julien Vincent
 |--------------------------------------------------------------------------
 **/

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from './middleware/api'
import reducer from './reducers/root'

const store = applyMiddleware(thunk, api)(createStore)(reducer, {});
export default store;