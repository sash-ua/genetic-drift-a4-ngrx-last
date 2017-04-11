"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var ngrx_store_freeze_1 = require("ngrx-store-freeze");
var core_1 = require("@ngrx/core");
var fromRouter = require("@ngrx/router-store");
var fromModeling = require("./modeling.reducer");
var reselect_1 = require("reselect");
var environment_1 = require("../environments/environment");
var REDUCERS = {
    modeling: fromModeling.reducer,
    router: fromRouter.routerReducer,
};
var DEV_REDUCER = core_1.compose(ngrx_store_freeze_1.storeFreeze, store_1.combineReducers)(REDUCERS);
var PROD_REDUCER = store_1.combineReducers(REDUCERS);
function reducer(state, action) {
    if (environment_1.environment.production) {
        return PROD_REDUCER(state, action);
    }
    else {
        return DEV_REDUCER(state, action);
    }
}
exports.reducer = reducer;
exports.MODELING_STATE = function (state) { return state.modeling; };
exports.MODELING_INIT = reselect_1.createSelector(exports.MODELING_STATE, fromModeling.GET_MODELING_STATE);
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
//# sourceMappingURL=index.js.map