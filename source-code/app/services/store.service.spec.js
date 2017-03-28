import { StoreService } from "./store.service";
describe('store services', function () {
    StoreService.typeCache = { label1: 'text' };
    it('StoreService-type -> type', function () {
        var z = StoreService.type('test');
        expect(z).toBe('test');
    });
    it('StoreService - type -> error', function () {
        var l = 'label1';
        expect(function () {
            StoreService.type(l);
        }).toThrowError("Action type \"" + l + "\" is not unique");
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
//# sourceMappingURL=store.service.spec.js.map