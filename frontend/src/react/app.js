/*
 |--------------------------------------------------------------------------
 | React render
 |--------------------------------------------------------------------------
 **/

import { render, createElement } from 'react'
import { run, HistoryLocation } from 'react-router'
import { Router } from './routes/Router'

// add HistoryLocation to remove '/#/' from URL's
run(Router, Handler =>
        render(createElement(Handler, {}), document.body)
);