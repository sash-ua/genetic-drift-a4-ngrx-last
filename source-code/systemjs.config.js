
    System.config({
        // transpile: 'ts',
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
    
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.min.js', // for ^4-rc.4
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.min.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // Store
            '@ngrx/core': 'npm:@ngrx/core/bundles/core.umd.js',
            '@ngrx/store': 'npm:@ngrx/store/bundles/store.umd.js',
            '@ngrx/router-store': 'npm:@ngrx/router-store/bundles/router-store.umd.js',
            '@ngrx/store-devtools': 'npm:@ngrx/store-devtools/bundles/store-devtools.umd.js',
            'ngrx-store-freeze': 'npm:ngrx-store-freeze/dist/index.js',
            'deep-freeze-strict': 'npm:deep-freeze-strict/index.js',
            'reselect': 'npm:reselect/lib/index.js',
            // other libraries
            'rxjs':                      'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
            'd3': 'npm:D3/build',
            'ts': 'npm:typescript/src/typescript.js',
            'hammerjs': 'npm:hammerjs/hammer.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'd3': {
                main: './D3',
                defaultExtension: 'js'
            }
        }
    });
    storeFreeze