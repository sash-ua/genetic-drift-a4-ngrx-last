var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { DOMService } from "../../services/dom.service";
import { DialogsService } from "../../services/dialogs.service";
var TestHtmlComponents = (function () {
    function TestHtmlComponents() {
    }
    TestHtmlComponents.prototype.open = function () {
        return true;
    };
    return TestHtmlComponents;
}());
TestHtmlComponents = __decorate([
    Component({
        template: "\n    <form>\n        <input value=\"1000\">\n        <input id=\"wrong\" value=\"11w\">\n        <input value=\"12\">\n        <input id=\"right\" value=\"0.2\">\n        <input value=\"0.5\">\n        <input value=\"0.9\">\n    </form>\n    <div id=\"dom-test\" >\n        <ul>\n            <li>1</li>\n            <li>2</li>\n            <li id=\"dom-test-ul\">3</li>\n        </ul>\n    </div>\n    <button id=\"test-button\" (click)=\"open()\">Check clicking</button>\n    <div id=\"mwtest\">test Dialog</div>",
        providers: []
    }),
    __metadata("design:paramtypes", [])
], TestHtmlComponents);
export { TestHtmlComponents };
import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { ModalWindowComponent } from "../../shared/modal_window.component/modal_window.component";
import { StubComponent } from "../../shared/stub.component/stub.component";
import { MaterialModule, MdDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
var TestModule = (function () {
    function TestModule() {
    }
    return TestModule;
}());
TestModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            MdDialogModule,
            BrowserAnimationsModule,
            MaterialModule
        ],
        exports: [
            TestHtmlComponents
        ],
        declarations: [
            TestHtmlComponents,
            ModalWindowComponent,
            StubComponent
        ],
        providers: [
            DOMService,
            DialogsService
        ],
        bootstrap: [
            TestHtmlComponents
        ],
        // DialogService entry point
        entryComponents: [
            ModalWindowComponent
        ],
    })
], TestModule);
export { TestModule };
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
