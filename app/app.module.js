"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// angular's modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
// UI
// import {MyMaterialModule} from "./shared/my.material.module/my.material.module";
// Modules
var core_module_1 = require("./core/core.module");
var shared_module_1 = require("./shared/shared.module");
// Components & services
var AppComponent_1 = require("./AppComponent");
var error_handler_service_1 = require("./services/error.handler.service");
var hammerjs_config_1 = require("./app.configs/hammerjs.config");
// Store
var index_1 = require("./store.reducers/index");
var store_1 = require("@ngrx/store");
var router_store_1 = require("@ngrx/router-store");
var store_devtools_1 = require("@ngrx/store-devtools");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            shared_module_1.SharedModule,
            core_module_1.CoreModule,
            animations_1.BrowserAnimationsModule,
            store_1.StoreModule.provideStore(index_1.reducer),
            router_store_1.RouterStoreModule.connectRouter(),
            store_devtools_1.StoreDevtoolsModule.instrumentOnlyWithExtension({ maxAge: 25 })
        ],
        declarations: [
            AppComponent_1.AppComponent
        ],
        bootstrap: [
            AppComponent_1.AppComponent
        ],
        exports: [],
        providers: [
            error_handler_service_1.ErrorHandlerService,
            { provide: platform_browser_1.HAMMER_GESTURE_CONFIG, useClass: hammerjs_config_1.HammerConfig }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
