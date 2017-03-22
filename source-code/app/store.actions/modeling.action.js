import { StoreService } from "../services/store.service";
export var ActionTypes = {
    SPNTGL_IN: StoreService.type('[Modeling] in st_1 Spinner'),
    SPNTGL_OUT: StoreService.type('[Modeling] out st_4 Spinner'),
    SPNSTVAL_ST_0: StoreService.type('[Modeling] 0 Spinner'),
    SPNSTVAL_ST_1: StoreService.type('[Modeling] 2 Spinner'),
    SPNSTVAL_ST_2: StoreService.type('[Modeling] 3 Spinner'),
    INPUTS: StoreService.type('[Modeling] get inputs'),
};
var GetInputs = (function () {
    function GetInputs(payload) {
        this.payload = payload;
        this.type = ActionTypes.INPUTS;
    }
    return GetInputs;
}());
export { GetInputs };
var StartSpinnerAnim = (function () {
    function StartSpinnerAnim() {
        this.type = ActionTypes.SPNTGL_IN;
    }
    return StartSpinnerAnim;
}());
export { StartSpinnerAnim };
var EndSpinnerAnim = (function () {
    function EndSpinnerAnim() {
        this.type = ActionTypes.SPNTGL_OUT;
    }
    return EndSpinnerAnim;
}());
export { EndSpinnerAnim };
var SpnStage0 = (function () {
    function SpnStage0() {
        this.type = ActionTypes.SPNSTVAL_ST_0;
    }
    return SpnStage0;
}());
export { SpnStage0 };
var SpnStage2 = (function () {
    function SpnStage2() {
        this.type = ActionTypes.SPNSTVAL_ST_1;
    }
    return SpnStage2;
}());
export { SpnStage2 };
var SpnStage3 = (function () {
    function SpnStage3() {
        this.type = ActionTypes.SPNSTVAL_ST_2;
    }
    return SpnStage3;
}());
export { SpnStage3 };
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
//# sourceMappingURL=modeling.action.js.map