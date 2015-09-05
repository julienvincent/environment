/*
 |--------------------------------------------------------------------------
 | React HTML factories
 |
 | - INCOMPLETE. Happy to accept PR's to complete :)
 |--------------------------------------------------------------------------
 **/

var _ = require('react').createFactory;
exports._ = _;
exports.transition = _(require('react/lib/ReactCSSTransitionGroup'));
exports.div = _('div');
exports.h1 = _('h1');
exports.h2 = _('h2');
exports.h3 = _('h3');
exports.h4 = _('h4');
exports.h5 = _('h5');
exports.h6 = _('h6');
exports.a = _('a');
exports.button = _('button');
exports.p = _('p');
exports.b = _('b');
exports.i = _('i');
exports.image = _('img');
exports.form = _('form');
exports.input = _('input');
exports.select = _('select');
exports.option = _('option');
exports.label = _('label');