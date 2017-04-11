import * as modeling from "../store.actions/modeling.action"
import {ComputationService} from "../services/computation.service";
import {createSelector} from 'reselect';
import {ArrAttrSetter, Inputs} from "../types/types";
import {SpecificService} from "../services/specific.service";

export interface MConsts{
    TOOLTIP_D: number;
    TOOLTIP_POS: string;
    MW_TITLE: string ;
    SVG_COMPS: Array<string>;

}
export interface State extends MConsts{
    spn_tgl: string;
    spn_state_val: number;
    inputs: Inputs;
    svg_attrs: ArrAttrSetter;
}
const MODELING_CONSTS: MConsts = {
    TOOLTIP_D: 100,
    TOOLTIP_POS: 'above',
    MW_TITLE: "Graph",
    SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
};

export const INIT_STATE: State = {
    spn_tgl: 'out',
    spn_state_val: 0,
    inputs: [
        {preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2'},
        {preDefData: 100, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1'},
        {preDefData: 2, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1'},
        {preDefData: 0.5, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164'},
        {preDefData: 0.1, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2'},
        {preDefData: 0.15, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77'},
        {preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09'}
    ],
    svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', SpecificService.dimension(0.35, 0.4)]],
    ...MODELING_CONSTS
};

export function reducer(state: State = INIT_STATE, action: modeling.Actions): State{
    switch (action.type){
        case modeling.ActionTypes.INPUTS:
            return {
                spn_tgl:'in',
                spn_state_val: ComputationService.rndmGen(25, 50),
                inputs: SpecificService.applInputsData(state.inputs, action.payload),
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'],
                    ['viewBox', '0 0 305 305'],
                    ['height', '100%'],
                    ['width', SpecificService.dimension(0.35, 0.4)]],
                ...MODELING_CONSTS
            };
        case modeling.ActionTypes.SPNTGL_IN:
            return {
                spn_tgl:'in',
                spn_state_val: ComputationService.rndmGen(15, 50),
                inputs: state.inputs,
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'],
                    ['viewBox', '0 0 305 305'],
                    ['height', '100%'],
                    ['width', SpecificService.dimension(0.35, 0.4)]],
                ...MODELING_CONSTS
            };
        case modeling.ActionTypes.SPNTGL_OUT:
            return {
                spn_tgl:'out',
                spn_state_val: 100,
                inputs: state.inputs,
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'],
                    ['viewBox', '0 0 305 305'],
                    ['height', '100%'],
                    ['width', SpecificService.dimension(0.35, 0.4)]],
                ...MODELING_CONSTS};
        case modeling.ActionTypes.SPNSTVAL_ST_0:
            return {
                spn_tgl:'out',
                spn_state_val: 0,
                inputs: state.inputs,
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'],
                    ['viewBox', '0 0 305 305'],
                    ['height', '100%'],
                    ['width', SpecificService.dimension(0.35, 0.4)]],
                ...MODELING_CONSTS};
        case modeling.ActionTypes.SPNSTVAL_ST_1:
            return {
                spn_tgl:'in',
                spn_state_val: ComputationService.rndmGen(55, 70),
                inputs: state.inputs,
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'],
                    ['viewBox', '0 0 305 305'],
                    ['height', '100%'],
                    ['width', SpecificService.dimension(0.35, 0.4)]],
                ...MODELING_CONSTS};
        case modeling.ActionTypes.SPNSTVAL_ST_2:
            return {
                spn_tgl:'in',
                spn_state_val: ComputationService.rndmGen(75, 95),
                inputs: state.inputs,
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'],
                    ['viewBox', '0 0 305 305'],
                    ['height', '100%'],
                    ['width', SpecificService.dimension(0.35, 0.4)]],
                ...MODELING_CONSTS};
        default:
            return state;
    }
}

  // Because the data structure is defined within the reducer it is optimal to
  // locate our selector functions at this level. If store is to be thought of
  // as a database, and REDUCERS the tables, selectors can be considered the
  // queries into said database. Remember to keep your selectors small and
  // focused so they can be combined and composed to fit each particular
  // use-case.

export const GET_SVG_COMPS  = (state: State): Array<string> => state.SVG_COMPS;
export const GET_SVG_ATTRS  = (state: State): ArrAttrSetter => state.svg_attrs;
export const GET_MW_TITLE  = (state: State): string => state.MW_TITLE;
export const GET_TOOLTIP_POS  = (state: State): string => state.TOOLTIP_POS;
export const GET_TOOLTIP_D  = (state: State): number => state.TOOLTIP_D;
export const GET_INPUTS  = (state: State): Inputs => state.inputs;

export const GET_SPN_TGL = (state: State): string => state.spn_tgl;
export const GET_SPN_STATE_VAL = (state: State): number => state.spn_state_val;

export const GET_MODELING_STATE = createSelector(GET_SVG_COMPS, GET_SVG_ATTRS, GET_MW_TITLE, GET_TOOLTIP_POS, GET_TOOLTIP_D, GET_SPN_TGL, GET_SPN_STATE_VAL, GET_INPUTS, (...s: any[])=> {return s});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.