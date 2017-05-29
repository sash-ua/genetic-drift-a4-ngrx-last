var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Renderer2 } from '@angular/core';
var DOMService = (function () {
    function DOMService(renderer) {
        this.renderer = renderer;
    }
    // Produce true if one of the tags name array is compatible to the event.target.tagName.
    DOMService.prototype.compare = function (target, tagsArr) {
        return tagsArr.some(function (value) { return target.tagName.toLowerCase() === value; });
    };
    // Set SVG attr-s
    DOMService.prototype.attrSetter = function (el, attrs, renderer) {
        attrs.forEach(function (v) { return renderer.setAttribute(el, v[0], v[1]); });
    };
    // Find HTML element by tag name, up from el.
    DOMService.prototype.findHTMLElement = function (el, parentName, renderer) {
        if (el !== null) {
            if (el.nodeName.toLowerCase() === parentName) {
                return el;
            }
            else {
                return this.findHTMLElement(renderer.parentNode(el), parentName, renderer);
            }
        }
        else {
            return null;
        }
    };
    return DOMService;
}());
DOMService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Renderer2])
], DOMService);
export { DOMService };
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
