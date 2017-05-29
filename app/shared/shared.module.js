var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./inputs.component/input.component";
import { SpinnerComponent } from "./progress.spinner/spinner.component";
import { StubComponent } from "./stub.component/stub.component";
import { ModalWindowComponent } from "./modal_window.component/modal_window.component";
import { MyMaterialModule } from "./my.material.module/my.material.module";
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            MyMaterialModule,
        ],
        declarations: [
            InputComponent,
            SpinnerComponent,
            StubComponent,
            ModalWindowComponent
        ],
        exports: [
            InputComponent,
            SpinnerComponent,
            StubComponent,
            ModalWindowComponent
        ],
        providers: []
    })
], SharedModule);
export { SharedModule };
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
