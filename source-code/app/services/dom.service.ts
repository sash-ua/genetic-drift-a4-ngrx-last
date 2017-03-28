import {Injectable, Renderer2} from '@angular/core';

@Injectable()
export class DOMService {
    constructor(
        private renderer: Renderer2
    ) { }

    // Produce true if one of the tags name array is compatible to the event.target.tagName.
    compare(target: HTMLElement, tagsArr: Array<string>): boolean {
        const elName: string = target.tagName.toLowerCase();
        return tagsArr.some((value: string) => elName === value);
    }
    // Set SVG attr-s
    attrSetter(svg: Node | HTMLElement, attrs: Array<string>[]): void {
        console.log(this.renderer, svg);
        attrs.forEach((v: string[]) => this.renderer.setAttribute(svg, v[0], v[1]));
    }
    // Find parent HTML element by tag name.
    findHTMLElement<T extends  Node | HTMLElement>(el: T, parentName: string): T {
        console.log(el.nodeName);
        if (el.nodeName  === parentName){
            return el;
        } else {
            const PN = this.renderer.parentNode(el);
            console.log(this.renderer.parentNode(el), el);
            return (PN.nodeName === parentName) ? PN : this.findHTMLElement(PN, parentName);
        }
    }

}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.