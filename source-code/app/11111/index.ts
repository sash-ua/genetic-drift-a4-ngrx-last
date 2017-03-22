import { ActionReducer } from '@ngrx/store';
import * as deepFreeze from 'deep-freeze-strict';

/**
 * Middleware that prevents state from being mutated anywhere in the app.
 */
export function storeFreeze(reducer): ActionReducer<any> {

    return function (state = {}, action) {

        deepFreeze(state);

        // guard against trying to freeze null or undefined types
        if (action.payload) {
            deepFreeze(action.payload);
        }

        const nextState = reducer(state, action);

        deepFreeze(nextState);

        return nextState;
    };
}
export function deepFreeze (o) {
    Object.freeze(o);

    var oIsFunction = typeof o === "function";
    var hasOwnProp = Object.prototype.hasOwnProperty;

    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (hasOwnProp.call(o, prop)
            && (oIsFunction ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments' : true )
            && o[prop] !== null
            && (typeof o[prop] === "object" || typeof o[prop] === "function")
            && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });

    return o;
};