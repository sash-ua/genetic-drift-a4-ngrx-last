var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as modeling from "../store.actions/modeling.action";
import { ComputationService } from "../services/computation.service";
import { createSelector } from 'reselect';
import { SpecificService } from "../services/specific.service";
var MODELING_CONSTS = {
    TOOLTIP_D: 100,
    TOOLTIP_POS: 'above',
    MW_TITLE: "Graph",
    SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', SpecificService.dimension(0.35, 0.4)]],
    SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
};
var INIT_STATE = __assign({ SPN_TGL: 'out', SPN_STATE_VAL: 0, INPUTS: [
        { preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2' },
        { preDefData: 100, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' },
        { preDefData: 2, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' },
        { preDefData: 0.5, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164' },
        { preDefData: 0.1, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2' },
        { preDefData: 0.15, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77' },
        { preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09' }
    ] }, MODELING_CONSTS);
export function reducer(state, action) {
    if (state === void 0) { state = INIT_STATE; }
    console.log(state);
    console.log(action);
    switch (action.type) {
        case modeling.ActionTypes.INPUTS:
            return __assign({ SPN_TGL: 'in', SPN_STATE_VAL: ComputationService.rndmGen(25, 50), INPUTS: SpecificService.applInputsData(state.INPUTS, action.payload) }, MODELING_CONSTS);
        case modeling.ActionTypes.SPNTGL_IN:
            return __assign({ SPN_TGL: 'in', SPN_STATE_VAL: ComputationService.rndmGen(15, 50), INPUTS: state.INPUTS }, MODELING_CONSTS);
        case modeling.ActionTypes.SPNTGL_OUT:
            return __assign({ SPN_TGL: 'out', SPN_STATE_VAL: 100, INPUTS: state.INPUTS }, MODELING_CONSTS);
        case modeling.ActionTypes.SPNSTVAL_ST_0:
            return __assign({ SPN_TGL: 'out', SPN_STATE_VAL: 0, INPUTS: state.INPUTS }, MODELING_CONSTS);
        case modeling.ActionTypes.SPNSTVAL_ST_1:
            return __assign({ SPN_TGL: 'in', SPN_STATE_VAL: ComputationService.rndmGen(55, 70), INPUTS: state.INPUTS }, MODELING_CONSTS);
        case modeling.ActionTypes.SPNSTVAL_ST_2:
            return __assign({ SPN_TGL: 'in', SPN_STATE_VAL: ComputationService.rndmGen(75, 95), INPUTS: state.INPUTS }, MODELING_CONSTS);
        default:
            return state;
    }
}
// Because the data structure is defined within the reducer it is optimal to
// locate our selector functions at this level. If store is to be thought of
// as a database, and reducers the tables, selectors can be considered the
// queries into said database. Remember to keep your selectors small and
// focused so they can be combined and composed to fit each particular
// use-case.
export var getSVGComps = function (state) { return state.SVG_COMPS; };
export var getSVGAttrs = function (state) { return state.SVG_ATTRS; };
export var getMWTitle = function (state) { return state.MW_TITLE; };
export var getToolTipPos = function (state) { return state.TOOLTIP_POS; };
export var getTooltipPd = function (state) { return state.TOOLTIP_D; };
export var getInputs = function (state) { return state.INPUTS; };
export var getSpnTgl = function (state) { return state.SPN_TGL; };
export var getSpnStVal = function (state) { return state.SPN_STATE_VAL; };
// export const modelingTooltips = createSelector(toolTipPos, tooltipPd, (...s: any[])=> {return s});
// export const getSMSAttr = createSelector(SVGAttrs, MWTitle, SVGComps, (...s: any[])=> {return s});
export var getModelingConst = createSelector(getSVGComps, getSVGAttrs, getMWTitle, getToolTipPos, getTooltipPd, getSpnTgl, getSpnStVal, getInputs, function () {
    var s = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        s[_i] = arguments[_i];
    }
    return s;
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
//# sourceMappingURL=modeling.reducer.js.map