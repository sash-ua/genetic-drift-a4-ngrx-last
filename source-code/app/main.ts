import { enableProdMode } from '@angular/core';
// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./app.module";
// enableProdMode();
// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
