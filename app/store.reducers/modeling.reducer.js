"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var modeling = require("../store.actions/modeling.action");
var computation_service_1 = require("../services/computation.service");
var reselect_1 = require("reselect");
var specific_service_1 = require("../services/specific.service");
var MODELING_CONSTS = {
    TOOLTIP_D: 100,
    TOOLTIP_POS: 'above',
    MW_TITLE: "Graph",
    SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
};
exports.INIT_STATE = __assign({ spn_tgl: 'out', spn_state_val: 0, inputs: [
        { preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2' },
        { preDefData: 100, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' },
        { preDefData: 2, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' },
        { preDefData: 0.5, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164' },
        { preDefData: 0.1, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2' },
        { preDefData: 0.15, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77' },
        { preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09' }
    ], svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', specific_service_1.SpecificService.dimension(0.35, 0.4)]] }, MODELING_CONSTS);
function reducer(state, action) {
    if (state === void 0) { state = exports.INIT_STATE; }
    switch (action.type) {
        case modeling.ActionTypes.INPUTS:
            return __assign({ spn_tgl: 'in', spn_state_val: computation_service_1.ComputationService.rndmGen(25, 50), inputs: specific_service_1.SpecificService.applInputsData(state.inputs, action.payload), svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'],
                    ['viewBox', '0 0 305 305'],
                    ['height', '100%'],
                    ['width', specific_service_1.SpecificService.dimension(0.35, 0.4)]] }, MODELING_CONSTS);
        case modeling.ActionTypes.SPNTGL_IN:
            return __assign({ spn_tgl: 'in', spn_state_val: computation_service_1.ComputationService.rndmGen(15, 50), inputs: state.inputs, svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'],
                    ['viewBox', '0 0 305 305'],
                    ['height', '100%'],
                    ['width', specific_service_1.SpecificService.dimension(0.35, 0.4)]] }, MODELING_CONSTS);
        case modeling.ActionTypes.SPNTGL_OUT:
            return __assign({ spn_tgl: 'out', spn_state_val: 100, inputs: state.inputs, svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'],
                    ['viewBox', '0 0 305 305'],
                    ['height', '100%'],
                    ['width', specific_service_1.SpecificService.dimension(0.35, 0.4)]] }, MODELING_CONSTS);
        case modeling.ActionTypes.SPNSTVAL_ST_0:
            return __assign({ spn_tgl: 'out', spn_state_val: 0, inputs: state.inputs, svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'],
                    ['viewBox', '0 0 305 305'],
                    ['height', '100%'],
                    ['width', specific_service_1.SpecificService.dimension(0.35, 0.4)]] }, MODELING_CONSTS);
        case modeling.ActionTypes.SPNSTVAL_ST_1:
            return __assign({ spn_tgl: 'in', spn_state_val: computation_service_1.ComputationService.rndmGen(55, 70), inputs: state.inputs, svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'],
                    ['viewBox', '0 0 305 305'],
                    ['height', '100%'],
                    ['width', specific_service_1.SpecificService.dimension(0.35, 0.4)]] }, MODELING_CONSTS);
        case modeling.ActionTypes.SPNSTVAL_ST_2:
            return __assign({ spn_tgl: 'in', spn_state_val: computation_service_1.ComputationService.rndmGen(75, 95), inputs: state.inputs, svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'],
                    ['viewBox', '0 0 305 305'],
                    ['height', '100%'],
                    ['width', specific_service_1.SpecificService.dimension(0.35, 0.4)]] }, MODELING_CONSTS);
        default:
            return state;
    }
}
exports.reducer = reducer;
// Because the data structure is defined within the reducer it is optimal to
// locate our selector functions at this level. If store is to be thought of
// as a database, and REDUCERS the tables, selectors can be considered the
// queries into said database. Remember to keep your selectors small and
// focused so they can be combined and composed to fit each particular
// use-case.
exports.GET_SVG_COMPS = function (state) { return state.SVG_COMPS; };
exports.GET_SVG_ATTRS = function (state) { return state.svg_attrs; };
exports.GET_MW_TITLE = function (state) { return state.MW_TITLE; };
exports.GET_TOOLTIP_POS = function (state) { return state.TOOLTIP_POS; };
exports.GET_TOOLTIP_D = function (state) { return state.TOOLTIP_D; };
exports.GET_INPUTS = function (state) { return state.inputs; };
exports.GET_SPN_TGL = function (state) { return state.spn_tgl; };
exports.GET_SPN_STATE_VAL = function (state) { return state.spn_state_val; };
exports.GET_MODELING_STATE = reselect_1.createSelector(exports.GET_SVG_COMPS, exports.GET_SVG_ATTRS, exports.GET_MW_TITLE, exports.GET_TOOLTIP_POS, exports.GET_TOOLTIP_D, exports.GET_SPN_TGL, exports.GET_SPN_STATE_VAL, exports.GET_INPUTS, function () {
    var s = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        s[_i] = arguments[_i];
    }
    return s;
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
