import {StoreService} from "./store.service";

describe('store services',()=>{
    StoreService.typeCache = {label1:'text'};
    it('StoreService-type -> type', ()=>{
        let z = StoreService.type('test');
        expect(z).toBe('test');
    });
    it('StoreService - type -> error', ()=>{
        let l = 'label1';
        expect(()=>{
            StoreService.type(l);
        }).toThrowError(`Action type "${l}" is not unique`);
    })
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.