"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_service_1 = require("../services/store.service");
exports.ActionTypes = {
    SPNTGL_IN: store_service_1.StoreService.type('[Modeling] in,rndm-in Spinner'),
    SPNTGL_OUT: store_service_1.StoreService.type('[Modeling] out,100-out Spinner'),
    SPNSTVAL_ST_0: store_service_1.StoreService.type('[Modeling] out,0-0 Spinner'),
    SPNSTVAL_ST_1: store_service_1.StoreService.type('[Modeling] in,rndm-1 Spinner'),
    SPNSTVAL_ST_2: store_service_1.StoreService.type('[Modeling] in,rndm-2 Spinner'),
    INPUTS: store_service_1.StoreService.type('[Modeling] get inputs'),
};
var GetInputs = (function () {
    function GetInputs(payload) {
        this.payload = payload;
        this.type = exports.ActionTypes.INPUTS;
    }
    return GetInputs;
}());
exports.GetInputs = GetInputs;
var StartSpinnerAnim = (function () {
    function StartSpinnerAnim() {
        this.type = exports.ActionTypes.SPNTGL_IN;
    }
    return StartSpinnerAnim;
}());
exports.StartSpinnerAnim = StartSpinnerAnim;
var EndSpinnerAnim = (function () {
    function EndSpinnerAnim() {
        this.type = exports.ActionTypes.SPNTGL_OUT;
    }
    return EndSpinnerAnim;
}());
exports.EndSpinnerAnim = EndSpinnerAnim;
var SpnStage0 = (function () {
    function SpnStage0() {
        this.type = exports.ActionTypes.SPNSTVAL_ST_0;
    }
    return SpnStage0;
}());
exports.SpnStage0 = SpnStage0;
var SpnStage2 = (function () {
    function SpnStage2() {
        this.type = exports.ActionTypes.SPNSTVAL_ST_1;
    }
    return SpnStage2;
}());
exports.SpnStage2 = SpnStage2;
var SpnStage3 = (function () {
    function SpnStage3() {
        this.type = exports.ActionTypes.SPNSTVAL_ST_2;
    }
    return SpnStage3;
}());
exports.SpnStage3 = SpnStage3;
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
//# sourceMappingURL=modeling.action.js.map