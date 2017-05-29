var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { MdProgressSpinner, MdInputContainer, MdInputModule, MdProgressSpinnerModule, MdInputDirective, MdButtonModule, MdButton, MdDialogModule, MdTooltipModule, MdTooltip, MdRaisedButtonCssMatStyler, MdButtonCssMatStyler, MdProgressSpinnerCssMatStyler } from "@angular/material";
var MyMaterialModule = (function () {
    function MyMaterialModule() {
    }
    return MyMaterialModule;
}());
MyMaterialModule = __decorate([
    NgModule({
        imports: [
            MdTooltipModule,
            MdDialogModule,
            MdInputModule,
            MdProgressSpinnerModule,
            MdButtonModule
        ],
        exports: [
            MdProgressSpinner,
            MdProgressSpinnerCssMatStyler,
            MdInputContainer,
            MdInputDirective,
            MdButton,
            MdRaisedButtonCssMatStyler,
            MdButtonCssMatStyler,
            MdTooltip
        ],
        declarations: [],
        providers: [],
    })
], MyMaterialModule);
export { MyMaterialModule };
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
