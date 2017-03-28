  // Karma configuration

module.exports = function(config) {
  var appBase    = 'app/';        // transpiled app JS and map files
  var appSrcBase = 'app/';        // app source TS files
  var appAssets  = 'base/app/';   // component assets fetched by Angular's compiler
  
  var testBase    = 'app/testing/';         // transpiled test JS and map files
  var testSrcBase = 'app/testing/';         // test source TS files
  
  config.set({
      // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
      // frameworks to use. available frameworks: https:  //npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
      // Karma plugins loaded
    plugins: [
        'karma-jasmine',
        'karma-coverage',
        'karma-chrome-launcher',
        'karma-htmlfile-reporter',
        'karma-phantomjs-launcher',
        'karma-*'
    ],
      // list of files / patterns to load in the browser/testing environment,
      //array which contains all the files needed to start our app with Karma.
    files: [
        // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',
        // Polyfills
      'node_modules/core-js/client/shim.js',
      'node_modules/reflect-metadata/Reflect.js',
        // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
        // RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },
        // Systemjs
      { pattern: 'systemjs.config.js', included: false, watched: false },
        // { pattern: 'systemjs.config.extras.js', included: false, watched: false },
      {pattern: 'karma-test-shim.js', included: true, watched: true},
        // {pattern: 'app/testing/index.js', included: true, watched: true},
  
        // paths loaded via module imports
        // Angular itself
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: true},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true},
        // NGRX
      { pattern: 'node_modules/@ngrx/**/*.js', included: false, watched: true },
        // ngrx-store-freeze
      { pattern: 'node_modules/ngrx-store-freeze/dist/*', included: false, watched: true },
        // deep-freeze-strict
      { pattern: 'node_modules/deep-freeze-strict/*', included: false, watched: true },
        // Reselect
      { pattern: 'node_modules/reselect/lib/*', included: false, watched: true },
        // D3
      { pattern: 'node_modules/d3/build/*', included: false, watched: true },
        // HammerJS
      { pattern: 'node_modules/hammerjs/*', included: false, watched: true },
        // transpiled application & spec code paths loaded via module imports
      { pattern: appBase + '**/*.js', included: false, watched: true },
      { pattern: testBase + '**/*.js', included: false, watched: true },
        
        // Asset (HTML & CSS) paths loaded via Angular's component compiler
        // (these paths need to be rewritten, see proxies section)
      // { pattern: appBase + '**/*.html', included: false, watched: true },
      { pattern: appBase + '**/*.css', included: false, watched: true },
  
        // Paths for debugging with source maps in dev tools
      { pattern: appSrcBase + '**/*.ts', included: false, watched: false },
      { pattern: appBase + '**/*.js.map', included: false, watched: false },
      { pattern: testSrcBase + '**/*.ts', included: false, watched: false },
      { pattern: testBase + '**/*.js.map', included: false, watched: false }
    ],
      // proxied base paths
      // a proxied path to execute the Angular app in the same path as when we execute locally.
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/app/": appAssets
    },
  
      // list of files to exclude
    exclude: [],
  
      // preprocess matching files before serving them to the browser
      // available preprocessors: https:  //npmjs.org/browse/keyword/karma-preprocessor
      // Source files that you wanna generate coverage for.
      // Do not include tests or libraries (these files will be instrumented by Istanbul)
      //regular expression to get to which files we should create the coverage report.
      // Basically all the TypeScript files that doesn’t have a spec inside.
    preprocessors: {
        'app/**/!(*spec).js': ['coverage']
    },
    htmlReporter: {
        outputFile: 'reports/index.html'
    },
  
      // optionally, configure the reporter
    coverageReporter: {
        type: 'json',
        dir: 'reports/',
        subdir: '.',
        file: 'coverage.json'
    },
      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https:  //npmjs.org/browse/keyword/karma-reporter
      // Coverage reporter generates the coverage
      // reporters:  ['progress', 'dots', 'coverage'],
    reporters: ['progress', 'html', 'coverage'],
      // web server port
    port: 9876,
    
      // enable / disable colors in the output (reporters and logs)
    colors: true,
  
      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    
      // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
  
      // start these browsers
      // available browser launchers: https:  //npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    
      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
  
      // Concurrency level
      // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
