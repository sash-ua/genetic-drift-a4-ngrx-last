import {StoreService} from "./store.service";

describe('Store services: ',()=>{
    StoreService.typeCache = {label1:'text'};
    it('type -> type', ()=>{
        let z = StoreService.type('test');
        expect(z).toBe('test');
    });
    it('type -> error', ()=>{
        let l = 'label1';
        expect(()=>{
            StoreService.type(l);
        }).toThrowError(`Action type "${l}" is not unique`);
    })
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.