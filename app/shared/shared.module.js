"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var input_component_1 = require("./inputs.component/input.component");
var spinner_component_1 = require("./progress.spinner/spinner.component");
var stub_component_1 = require("./stub.component/stub.component");
var modal_window_component_1 = require("./modal_window.component/modal_window.component");
var my_material_module_1 = require("./my.material.module/my.material.module");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            my_material_module_1.MyMaterialModule,
        ],
        declarations: [
            input_component_1.InputComponent,
            spinner_component_1.SpinnerComponent,
            stub_component_1.StubComponent,
            modal_window_component_1.ModalWindowComponent
        ],
        exports: [
            input_component_1.InputComponent,
            spinner_component_1.SpinnerComponent,
            stub_component_1.StubComponent,
            modal_window_component_1.ModalWindowComponent
        ],
        providers: []
    })
], SharedModule);
exports.SharedModule = SharedModule;
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
