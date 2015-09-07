/*
 |--------------------------------------------------------------------------
 | If storm-serve or serve-static cannot find any files on the current URL,
 | then serve the index according to storm-serves specifications
 |--------------------------------------------------------------------------
 **/

var path = require("path");
var serve = require("storm-serve");

module.exports = function (options) {

    return function (request, response, next) {

        // Force the url to point to what storm-serve serves it's index to
        request.url = '/';
        return serve.main(options)(request, response, next)
    }
};