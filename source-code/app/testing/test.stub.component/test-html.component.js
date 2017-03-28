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
var TestHtmlComponents = (function () {
    function TestHtmlComponents() {
    }
    TestHtmlComponents.prototype.ngOnInit = function () { };
    return TestHtmlComponents;
}());
TestHtmlComponents = __decorate([
    Component({
        moduleId: module.id,
        template: "\n    <form>\n        <input value=\"1000\">\n        <input id=\"wrong\" value=\"11w\">\n        <input value=\"12\">\n        <input id=\"right\" value=\"0.2\">\n        <input value=\"0.5\">\n        <input value=\"0.9\">\n    </form>\n    <div id=\"dom-test\" data-test=\"22\">\n        <ul>\n            <li></li>\n            <li></li>\n            <li id=\"dom-test-ul\"></li>\n        </ul>\n    </div>",
        providers: [
            DOMService
        ]
    }),
    __metadata("design:paramtypes", [])
], TestHtmlComponents);
export { TestHtmlComponents };
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
//# sourceMappingURL=test-html.component.js.map