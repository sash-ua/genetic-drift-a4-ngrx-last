import { ReflectiveInjector } from '@angular/core';
export function createInjector(_a) {
    var ngModule = _a.ngModule, providers = _a.providers;
    var injector = ReflectiveInjector.resolveAndCreate((providers || []).concat([ngModule]));
    injector.get(ngModule);
    return injector;
}
export function createChildInjector(parent, _a) {
    var ngModule = _a.ngModule, providers = _a.providers;
    var injector = parent.resolveAndCreateChild((providers || []).concat([ngModule]));
    injector.get(ngModule);
    return injector;
}
