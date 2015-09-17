/*
 |--------------------------------------------------------------------------
 | Application Settings
 |--------------------------------------------------------------------------
 **/

var window = window || null;
module.exports = {
    mock: true,
    errorsOnly: false,
    delay: 500,
    production: false,
    api: 'http://api.' + (window ? window.location.hostname : null) + '/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
};