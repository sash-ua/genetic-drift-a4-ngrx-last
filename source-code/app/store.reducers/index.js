import { combineReducers } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";
import { compose } from "@ngrx/core";
import * as fromRouter from '@ngrx/router-store';
import * as fromModeling from './modeling.reducer';
import { createSelector } from 'reselect';
var reducers = {
    modeling: fromModeling.reducer,
    router: fromRouter.routerReducer,
};
var developmentReducer = compose(storeFreeze, combineReducers)(reducers);
export function reducer(state, action) {
    // if (environment.production) {
    //     return productionReducer(state, action);
    // } else {
    //     return developmentReducer(state, action);
    // }
    return developmentReducer(state, action);
}
export var modelingState = function (state) { return state.modeling; };
export var MODELINGINIT = createSelector(modelingState, fromModeling.getModelingConst);
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
//# sourceMappingURL=index.js.map