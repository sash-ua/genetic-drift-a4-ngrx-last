"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_service_1 = require("./store.service");
describe('Store services: ', function () {
    store_service_1.StoreService.typeCache = { label1: 'text' };
    it('type -> type', function () {
        var z = store_service_1.StoreService.type('test');
        expect(z).toBe('test');
    });
    it('type -> error', function () {
        var l = 'label1';
        expect(function () {
            store_service_1.StoreService.type(l);
        }).toThrowError("Action type \"" + l + "\" is not unique");
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
