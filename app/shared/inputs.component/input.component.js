var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { InputValidatorService } from "../../services/inut.validator.service";
var InputComponent = (function () {
    function InputComponent(validation) {
        this.validation = validation;
    }
    return InputComponent;
}());
__decorate([
    Input('app-input-data'),
    __metadata("design:type", Object)
], InputComponent.prototype, "input", void 0);
InputComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'app-input',
        template: "<md-input-container\n                [dividerColor]=\"input.dvdrColor\"\n                class=\"my-input\">\n            <input mdInput\n                [value]=\"input.preDefData\"\n                [placeholder]=\"input.hint\"\n                (input)=\"id.value = validation.inputControl(id.value, input.interval)\" \n                #id>\n        </md-input-container>",
        styles: ['.my-input { margin: 10px 10px}'],
        providers: [
            InputValidatorService,
        ]
    }),
    __metadata("design:paramtypes", [InputValidatorService])
], InputComponent);
export { InputComponent };
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
