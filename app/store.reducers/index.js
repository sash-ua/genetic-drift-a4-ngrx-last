import { combineReducers } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";
import { compose } from "@ngrx/core";
import * as fromRouter from '@ngrx/router-store';
import * as fromModeling from './modeling.reducer';
import { createSelector } from 'reselect';
import { environment } from "../environments/environment";
var REDUCERS = {
    modeling: fromModeling.reducer,
    router: fromRouter.routerReducer,
};
export var DEV_REDUCER = compose(storeFreeze, combineReducers)(REDUCERS);
var PROD_REDUCER = combineReducers(REDUCERS);
export function reducer(state, action) {
    if (environment.production) {
        return PROD_REDUCER(state, action);
    }
    else {
        return DEV_REDUCER(state, action);
    }
}
export var MODELING_STATE = function (state) { return state.modeling; };
export var MODELING_INIT = createSelector(MODELING_STATE, fromModeling.GET_MODELING_STATE);
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
