"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
exports.TEST_URL = 'http://localhost:3000/';
exports.config = {
    allScriptsTimeout: 90000,
    specs: [
        './e2e/**/*.e2e.spec.ts'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    // directConnect: true,
    // seleniumAddress: 'http://0.0.0.0:4444/wd/hub',
    baseUrl: exports.TEST_URL,
    getPageTimeout: 10000,
    ignoreUncaughtExceptions: true,
    troubleshoot: true,
    framework: 'jasmine',
    chromeOnly: true,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000,
        isVerbose: false,
        includeStackTrace: false,
    },
    // Compile and execute a ts script from e2e dir
    beforeLaunch: function () {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({ spec: { displayStacktrace: true } }));
    },
};
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.
