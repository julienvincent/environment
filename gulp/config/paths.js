/*
 |--------------------------------------------------------------------------
 | Changeable paths used within the gulp scripts
 |--------------------------------------------------------------------------
**/

var paths = {
    build: './frontend/build', // Output location for compiled and copied files.
    js: './frontend/src/js/**/*.js', // ES6 files location to be watched.
    jsMain: './frontend/src/js/app.js', // Webpack entry
    fileWatch: './frontend/src/**/**' // Additional files location to be watched.
};

var files = [
    './frontend/src/index.html'
];