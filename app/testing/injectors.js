"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
function createInjector(_a) {
    var ngModule = _a.ngModule, providers = _a.providers;
    var injector = core_1.ReflectiveInjector.resolveAndCreate((providers || []).concat([ngModule]));
    injector.get(ngModule);
    return injector;
}
exports.createInjector = createInjector;
function createChildInjector(parent, _a) {
    var ngModule = _a.ngModule, providers = _a.providers;
    var injector = parent.resolveAndCreateChild((providers || []).concat([ngModule]));
    injector.get(ngModule);
    return injector;
}
exports.createChildInjector = createChildInjector;
