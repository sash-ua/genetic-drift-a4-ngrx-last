
import {StoreService} from "../services/store.service";
import {Action} from "@ngrx/store";

export const ActionTypes = {
    SPNTGL_IN: StoreService.type('[Modeling] in st_1 Spinner'),
    SPNTGL_OUT: StoreService.type('[Modeling] out st_4 Spinner'),
    SPNSTVAL_ST_0: StoreService.type('[Modeling] 0 Spinner'),
    SPNSTVAL_ST_1: StoreService.type('[Modeling] 2 Spinner'),
    SPNSTVAL_ST_2: StoreService.type('[Modeling] 3 Spinner'),
    INPUTS: StoreService.type('[Modeling] get inputs'),
};

export class GetInputs implements Action {
    type = ActionTypes.INPUTS;
    constructor(public payload: Array<number>){}
}
export class StartSpinnerAnim implements Action {
    type = ActionTypes.SPNTGL_IN;
}
export class EndSpinnerAnim implements Action {
    type = ActionTypes.SPNTGL_OUT;
}
export class SpnStage0 implements Action {
    type = ActionTypes.SPNSTVAL_ST_0;
}
export class SpnStage2 implements Action {
    type = ActionTypes.SPNSTVAL_ST_1;
}
export class SpnStage3 implements Action {
    type = ActionTypes.SPNSTVAL_ST_2;
}

export type Actions =
    StartSpinnerAnim
    | EndSpinnerAnim
    | SpnStage0
    | SpnStage2
    | SpnStage3;

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.