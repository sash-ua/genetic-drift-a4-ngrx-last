import {Injectable, Renderer2} from '@angular/core';
import {ArrAttrSetter, AttrSetter} from "../types/types";


@Injectable()
export class DOMService {
    constructor(
        private renderer: Renderer2
    ) { }

    // Produce true if one of the tags name array is compatible to the event.target.tagName.
    compare(target: HTMLElement, tagsArr: Array<string>): boolean {
        return tagsArr.some((value: string) => target.tagName.toLowerCase() === value);
    }
    // Set SVG attr-s
    attrSetter(el: Node | HTMLElement, attrs: ArrAttrSetter, renderer: Renderer2): void {
        attrs.forEach((v: AttrSetter) => renderer.setAttribute(el, v[0], v[1]));
    }
    // Find HTML element by tag name, up from el.
    findHTMLElement<T extends  Node | HTMLElement>(el: T, parentName: string, renderer: Renderer2): T {
        if(el !== null){
            if (el.nodeName.toLowerCase() === parentName){
                return el;
            } else {
                return this.findHTMLElement(renderer.parentNode(el), parentName, renderer);
            }
        } else {
            return null;
        }
    }
}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.