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
var StubComponent = (function () {
    function StubComponent(renderer) {
        this.renderer = renderer;
    }
    StubComponent.prototype.ngAfterViewInit = function () {
        this.renderer.appendChild(this.stubBody.nativeElement, this.body);
    };
    return StubComponent;
}());
__decorate([
    core_1.ViewChild("stubBody", { read: core_1.ElementRef }),
    __metadata("design:type", core_1.ElementRef)
], StubComponent.prototype, "stubBody", void 0);
__decorate([
    core_1.Input('stub-cmpnt-body'),
    __metadata("design:type", Object)
], StubComponent.prototype, "body", void 0);
StubComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'stub-cmpnt',
        template: " <div #stubBody></div>"
    }),
    __metadata("design:paramtypes", [core_1.Renderer2])
], StubComponent);
exports.StubComponent = StubComponent;
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
