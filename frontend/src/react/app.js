/*
 |--------------------------------------------------------------------------
 | React render
 |--------------------------------------------------------------------------
 **/

import { render, createElement } from 'react'
import { run } from 'react-router'
import { Router } from './routes/Router'

run(Router, Handler =>
        render(createElement(Handler, {}), document.body)
);