"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var page_404_component_1 = require("./page.404.component/page.404.component");
var instruction_component_1 = require("./inctruction.component/instruction.component");
var modeling_component_1 = require("./modeling.component/modeling.component");
var app_routing_module_1 = require("./app-routing.module");
var shared_module_1 = require("../shared/shared.module");
var d3_service_1 = require("../services/d3.service");
var dialogs_service_1 = require("../services/dialogs.service");
var modal_window_component_1 = require("../shared/modal_window.component/modal_window.component");
var my_material_module_1 = require("../shared/my.material.module/my.material.module");
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            shared_module_1.SharedModule,
            my_material_module_1.MyMaterialModule,
        ],
        declarations: [
            page_404_component_1.Page404Component,
            instruction_component_1.InstructionComponent,
            modeling_component_1.ModelingComponent,
        ],
        exports: [
            page_404_component_1.Page404Component,
            instruction_component_1.InstructionComponent,
            modeling_component_1.ModelingComponent,
            app_routing_module_1.AppRoutingModule,
        ],
        providers: [
            d3_service_1.D3Service,
            dialogs_service_1.DialogsService
        ],
        // DialogService entry point
        entryComponents: [
            modal_window_component_1.ModalWindowComponent
        ],
    })
], CoreModule);
exports.CoreModule = CoreModule;
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
