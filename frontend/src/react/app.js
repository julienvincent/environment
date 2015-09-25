/*
 |--------------------------------------------------------------------------
 | React render
 |--------------------------------------------------------------------------
 **/

import { render, createFactory } from 'react'
import { Provider } from 'react-redux';
import router from './router/router'
import store from './flux/store'

window.onload = () => {
    render(createFactory(Provider)({store: store}, router), document.body)
};
