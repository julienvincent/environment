/*
 |--------------------------------------------------------------------------
 | Changeable paths used within the gulp scripts
 |--------------------------------------------------------------------------
**/

var paths = {
    build: './frontend/src/build', // Output location for compiled and copied files.
    js: './frontend/src/js/**/*.js', // ES6 files location to be watched.
    jsMain: './frontend/src/react/app.js',
    assets: './frontend/src/assets/css', // Webpack entry
    fileWatch: './frontend/src/**/**', // Additional files location to be watched.
    files: [
        './frontend/src/index.html'
    ]
};
module.exports = paths;