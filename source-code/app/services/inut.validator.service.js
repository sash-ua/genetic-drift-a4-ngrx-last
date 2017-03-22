var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
// Input string validation. ThefFirst stage, second's in the specific.service.applInputsData
var InputValidatorService = (function () {
    function InputValidatorService() {
    }
    InputValidatorService.prototype.inputControl = function (inputL, cond) {
        return (this.inputConds(new FormControl(inputL, Validators.compose([
            Validators.required,
            Validators.pattern('([0-9]+)|([0-9]+\.[0-9]+)')
        ])), cond)) ? inputL : null;
    };
    InputValidatorService.prototype.inputConds = function (control, cond) {
        var v = control.value;
        return (control.status === 'VALID' && v >= cond[0] && !cond[1]) || (v >= 0 && v <= cond[1]);
    };
    return InputValidatorService;
}());
InputValidatorService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], InputValidatorService);
export { InputValidatorService };
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.
//# sourceMappingURL=inut.validator.service.js.map