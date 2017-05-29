import {ActionReducer, combineReducers} from "@ngrx/store";
import {storeFreeze} from "ngrx-store-freeze";
import {compose} from "@ngrx/core";
import * as fromRouter from '@ngrx/router-store';
import * as fromModeling from './modeling.reducer';
import { createSelector } from 'reselect';
import {environment} from "../environments/environment";

export interface State {
    modeling: fromModeling.State,
    router: fromRouter.RouterState;
}
const REDUCERS = {
    modeling: fromModeling.reducer,
    router: fromRouter.routerReducer,
};

export const DEV_REDUCER: ActionReducer<State> = compose(storeFreeze, combineReducers)(REDUCERS);
const PROD_REDUCER: ActionReducer<State> = combineReducers(REDUCERS);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return PROD_REDUCER(state, action);
    } else {
        return DEV_REDUCER(state, action);
    }
}

export const MODELING_STATE = (state: State) => state.modeling;

export const MODELING_INIT = createSelector(MODELING_STATE, fromModeling.GET_MODELING_STATE);

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.