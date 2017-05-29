"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var ModalWindowComponent = (function () {
    function ModalWindowComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return ModalWindowComponent;
}());
ModalWindowComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "for-test",
        template: "\n        <button md-button class=\"modal-wndw__btn\"\n                (click)=\"dialogRef.close()\">X</button>\n        <h2 md-dialog-title>{{ title }}</h2>\n        <stub-cmpnt [stub-cmpnt-body]=\"element\"></stub-cmpnt>",
        styles: ["\n        h2{\n            text-align: center;\n            text-transform: uppercase;\n            margin: 0 0 0 40px;\n            padding: 0;\n        }\n        .modal-wndw__btn{\n            position: relative;\n            min-width: 40px;\n            padding: 0;\n            float: right;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], ModalWindowComponent);
exports.ModalWindowComponent = ModalWindowComponent;
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
