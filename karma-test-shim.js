// /*global jasmine, __karma__, window*/

// Error.stackTraceLimit = Infinity; //
// "No stacktrace"" is usually best for app testing.
Error.stackTraceLimit = 0;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

var builtPath = '/base/app/';

__karma__.loaded = function () {};

function isJsFile(path) {
    return path.slice(-3) === '.js';
}

function isBuiltFile(path) {
    return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}
function isSpecFile(path) {
    return path.slice(-8) === '.spec.js';
}

var allSpecFiles = Object.keys(window.__karma__.files)
    .filter(isSpecFile)
    .filter(isBuiltFile);

// Load our SystemJS configuration.
SystemJS.config({
    baseURL: '/base',
    // Extend usual application package list with test folder
    packages: { 'testing': { main: 'index', defaultExtension: 'js' } },

    // Assume npm: is set in `paths` in systemjs.config
    // Map the angular testing umd bundles
    map: {
        '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
        '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
        '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
        '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
        '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
        '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
        '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd.js',
        '@angular/forms/testing': 'npm:@angular/forms/bundles/forms-testing.umd.js',
        'testing': 'app/testing'
    },
});
SystemJS.import('systemjs.config.js')
    .then(initTestBed)
    .then(initTesting);

function initTestBed(){
    return Promise.all([
        SystemJS.import('@angular/core/testing'),
        SystemJS.import('@angular/platform-browser-dynamic/testing')
    ])
        .then(function (providers) {
            var coreTesting    = providers[0];
            var browserTesting = providers[1];
            coreTesting.TestBed.initTestEnvironment(
                browserTesting.BrowserDynamicTestingModule,
                browserTesting.platformBrowserDynamicTesting());
        })
}

// Import all spec files and start karma
function initTesting () {
    return Promise.all(
        allSpecFiles.map(function (moduleName) {
            return SystemJS.import(moduleName);
        })
    )
        .then(__karma__.start, __karma__.error);
}
