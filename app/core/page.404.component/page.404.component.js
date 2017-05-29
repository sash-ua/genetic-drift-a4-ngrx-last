var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ChangeDetectionStrategy } from "@angular/core";
var Page404Component = (function () {
    function Page404Component() {
    }
    return Page404Component;
}());
Page404Component = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'page-404',
        styles: ['.page-404{color: #b43232; font-size: 34px}'],
        template: '<h1 class="page-404">404. Page not found!</h1>'
    })
], Page404Component);
export { Page404Component };
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
