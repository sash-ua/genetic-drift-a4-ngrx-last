import {ActionReducer, combineReducers} from "@ngrx/store";
import {storeFreeze} from "ngrx-store-freeze";
import {compose} from "@ngrx/core";
import * as fromRouter from '@ngrx/router-store';
import * as fromModeling from './modeling.reducer';
import { createSelector } from 'reselect';

export interface State {
    modeling: fromModeling.State,
    router: fromRouter.RouterState;
}
const reducers = {
    modeling: fromModeling.reducer,
    router: fromRouter.routerReducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: any, action: any) {
    // if (environment.production) {
    //     return productionReducer(state, action);
    // } else {
    //     return developmentReducer(state, action);
    // }
    return developmentReducer(state, action);
}

export const modelingState = (state: State) => state.modeling;

export const MODELINGINIT = createSelector(modelingState, fromModeling.getModelingConst);


//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.