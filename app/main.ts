import { enableProdMode } from '@angular/core';
// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./app.module";
import {enableDebugTools} from '@angular/platform-browser';
import {environment} from "./environments/environment";

if(environment.production){
    enableProdMode();
    platformBrowserDynamic().bootstrapModule(AppModule);
} else {
    platformBrowserDynamic().bootstrapModule(AppModule)
        .then((appRef) => {
            enableDebugTools(appRef);
        });
}
