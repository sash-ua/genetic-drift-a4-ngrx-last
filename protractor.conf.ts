
import {browser, Config} from "protractor";
import {SpecReporter} from 'jasmine-spec-reporter';

export const TEST_URL = 'http://localhost:3000/';

export const config: Config = {
    allScriptsTimeout: 90000,
    specs: [
        './e2e/**/*.e2e.spec.ts'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    // directConnect: true,
    // seleniumAddress: 'http://0.0.0.0:4444/wd/hub',
    baseUrl: TEST_URL,
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
    beforeLaunch: function() {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare() {
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    },
    // useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
    // useAllAngular2AppRoots: true
};

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.

