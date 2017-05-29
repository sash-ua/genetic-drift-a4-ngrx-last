var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { trigger, state, transition, style, animate } from "@angular/animations";
var AnimationsServices = (function () {
    function AnimationsServices() {
    }
    AnimationsServices.animatonTwoStates = function (name, _a, _b, _c) {
        var states = _a.slice(0);
        var stylesAnim = _b.slice(0);
        var trs = _c.slice(0);
        return trigger(name, [
            state(states[0], style(stylesAnim[0])),
            state(states[1], style(stylesAnim[1])),
            transition(states[0] + ' =>' + states[1], [
                animate(trs[0])
            ]),
            transition(states[1] + ' =>' + states[0], [
                animate(trs[1])
            ])
        ]);
    };
    AnimationsServices.animatonThreeStates = function (name, stStyle, _a, _b) {
        var trsStyles = _a.slice(0);
        var trsAnimate = _b.slice(0);
        return trigger(name, [
            state('*', style(stStyle)),
            transition(':enter', [
                style(trsStyles[0]),
                animate(trsAnimate[0])
            ]),
            transition(':leave', [
                // style(trsStyles[0]),
                animate(trsAnimate[1], style(trsStyles[1]))
            ])
        ]);
    };
    return AnimationsServices;
}());
AnimationsServices = __decorate([
    Injectable()
], AnimationsServices);
export { AnimationsServices };
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.
