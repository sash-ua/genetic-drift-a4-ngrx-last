import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
    // constructor(private store: Store<rootReducer.State>){}
    static typeCache: { [label: string]: boolean } = {};
    // It check action labels for uniqueness.
    static type<T>(label: T | ''): T {
        if (this.typeCache[<string>label]) {
            throw new Error(`Action type "${label}" is not unique`);
        }
        this.typeCache[<string>label] = true;
        return <T>label;
    }
}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.