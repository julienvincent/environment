/*
 |--------------------------------------------------------------------------
 | React render
 |--------------------------------------------------------------------------
 **/

import { render, createElement } from 'react'
import { run, HistoryLocation } from 'react-router'
import { Router } from './router/router'
import env from 'env'

window.onload = () => {
    run(Router, env.production ? HistoryLocation : null, Handler =>
            render(createElement(Handler, {}), document.body)
    );
};