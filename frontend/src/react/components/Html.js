/*
 |--------------------------------------------------------------------------
 | React HTML factories
 |--------------------------------------------------------------------------
**/

import React from 'react'

let _ = React.createFactory;
let div = _('div'),
    h1 = _('h1'),
    i = _('i'),
    p = _('p'),
    image = _('img'),
    form = _('form'),
    input = _('input'),
    a = _('a'),
    Transitions = _(require('react/lib/ReactCSSTransitionGroup'));

export { _, i, div, h1, p, image, form, input, a, Transitions };