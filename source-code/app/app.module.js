var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// angular's modules
import { NgModule } from "@angular/core";
import { BrowserModule, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// UI
import { MaterialModule } from "@angular/material";
// Modules
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
// Components & services
import { AppComponent } from "./AppComponent";
import { ErrorHandlerService } from "./services/error.handler.service";
import { HammerConfig } from "./app.configs/hammerjs.config";
// Store
import { reducer } from "./store.reducers/index";
import { StoreModule } from "@ngrx/store";
import { RouterStoreModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            FormsModule,
            SharedModule,
            CoreModule,
            BrowserAnimationsModule,
            MaterialModule,
            StoreModule.provideStore(reducer),
            RouterStoreModule.connectRouter(),
            StoreDevtoolsModule.instrumentOnlyWithExtension({ maxAge: 25 })
        ],
        declarations: [
            AppComponent
        ],
        bootstrap: [
            AppComponent
        ],
        exports: [],
        providers: [
            ErrorHandlerService,
            { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map