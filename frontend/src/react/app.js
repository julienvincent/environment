/*
 |--------------------------------------------------------------------------
 | React render
 |--------------------------------------------------------------------------
 **/

import { render } from 'react'
import router from './router/router'

window.onload = () => {
    render(router, document.body)
};