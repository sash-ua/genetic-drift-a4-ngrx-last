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
var SpecificService = (function () {
    function SpecificService() {
    }
    // Fn used to collect inputted by user data into array.
    // For first three el-s of HTMLCollection by tag return integer, for others - float.
    SpecificService.prototype.collectionDataInputs = function (tag) {
        var _this = this;
        return [].slice.call(document.querySelectorAll(tag)).map(function (v, i, arr) {
            return (i === 0 || i === 1 || i === 2) ? parseInt(_this.isExist(v.value), 10) : parseFloat(_this.isExist(v.value));
        });
    };
    // Return null if given value is undef. or null or value if it exist.
    SpecificService.prototype.isExist = function (val) {
        return val ? val : null;
    };
    // Return arr: Inputs from collectioned users data, if they acceptable they add to returned array.
    // (values should be from acceptable interval of possible values)
    SpecificService.applInputsData = function (inputs, arr) {
        return inputs.map(function (v, i, a) {
            if (arr[i] >= v.interval[0] && arr[i] !== v.preDefData) {
                var x = Object.assign({}, v);
                x.preDefData = arr[i];
                return x;
            }
            else {
                return v;
            }
        });
    };
    // width factor(wf), height factor(hf). If window width(ww) > window height(wh) return wf*ww else hf*wh
    SpecificService.dimension = function (wf, hf) {
        var WW = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        var WH = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        return (WW >= WH) ? (wf * WW) : (hf * WH);
    };
    return SpecificService;
}());
SpecificService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], SpecificService);
export { SpecificService };
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
