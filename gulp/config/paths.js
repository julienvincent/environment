/*
 |--------------------------------------------------------------------------
 | Changeable paths used within the gulp scripts
 |--------------------------------------------------------------------------
**/

var paths = {
    build: './frontend/src/build', // Output location for compiled and copied files.
    js: './frontend/src/react/**/*.js', // ES6 files location to be watched.
    jsMain: './frontend/src/react/app.js',
    assets: './frontend/src/assets/css', // Webpack entry
    fonts: './frontend/src/assets/fonts/**',
    files: [
        './frontend/src/index.html'
    ] // List of additional files to be copied to the build path and watched
};
module.exports = paths;