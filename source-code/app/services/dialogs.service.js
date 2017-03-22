var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MdDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { ModalWindowComponent } from "../core/modeling.component/modeling.component";
var DialogsService = DialogsService_1 = (function () {
    function DialogsService(dialog) {
        DialogsService_1.dialog = dialog;
    }
    DialogsService.prototype.confirm = function (title, element) {
        var dialogRef = DialogsService_1.dialog.open(ModalWindowComponent);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.element = element;
        return dialogRef.afterClosed();
    };
    return DialogsService;
}());
DialogsService = DialogsService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MdDialog])
], DialogsService);
export { DialogsService };
var DialogsService_1;
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
//# sourceMappingURL=dialogs.service.js.map