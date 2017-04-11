import { Injectable } from '@angular/core';
import {Inputs, Range} from "../types/types";

@Injectable()
export class SpecificService {
    constructor() { }
    // Fn used to collect inputted by user data into array.
    // For first three el-s of HTMLCollection by tag return integer, for others - float.
    collectionDataInputs(tag: string): Range{
        return [].slice.call(document.querySelectorAll(tag)).map((v: any, i: number, arr: HTMLAllCollection) => {
            return (i === 0 || i === 1 || i === 2) ? parseInt(this.isExist(v.value), 10) : parseFloat(this.isExist(v.value));
        });
    }

    // Return null if given value is undef. or null or value if it exist.
    isExist(val: any){
        return val ? val : null;
    }

    // Return arr: Inputs from collectioned users data, if they acceptable they add to returned array.
    // (values should be from acceptable interval of possible values)
    static applInputsData(inputs: Inputs, arr: Range): Inputs {
        return  inputs.map((v, i, a) => {
            if(arr[i] >= v.interval[0] && arr[i] !== v.preDefData){
                const x = Object.assign({}, v);
                x.preDefData = arr[i];
                return x;
            } else {
                return v;
            }
        });
    }
    // width factor(wf), height factor(hf). If window width(ww) > window height(wh) return wf*ww else hf*wh
    static dimension(wf: number, hf: number): number{
        const WW = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        const WH = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        return (WW >= WH) ? (wf*WW) : (hf*WH);
    }
}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.