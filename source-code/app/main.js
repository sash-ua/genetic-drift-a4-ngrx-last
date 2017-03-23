// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from "./app.module";
import { enableDebugTools } from '@angular/platform-browser';
// enableProdMode();
// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule)
    .then(function (appRef) {
    enableDebugTools(appRef);
});
//# sourceMappingURL=main.js.map