
// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation. All rights reserved.
// ----------------------------------------------------------------------------

var exec = require('cordova/exec');

// Performs browser based login using native implementation
function loginWithOptions(options, callback) {

    function success(result) {
        callback(undefined, result);
    }

    function error(errorString) {
        callback(new Error(errorString));
    }

    exec(success, error, "EasyAuth", "login", [options.provider, options.queryParameters, options.loginHost, options.loginUriPrefix]);
}

var WindowsAzure = require('cordova-plugin-ms-azure-mobile-apps.cordova-bundle');

WindowsAzure.configure({
    login: {
        loginWithOptions: loginWithOptions
    }
});

module.exports = WindowsAzure;
