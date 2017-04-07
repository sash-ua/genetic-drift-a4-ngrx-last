import {Component, Input, ViewChild, ElementRef, AfterViewInit, Renderer2} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'stub-cmpnt',
    template: ` <div #stubBody></div>`
})
export class StubComponent implements AfterViewInit {
    constructor(
        public renderer: Renderer2
    ) { }
    @ViewChild("stubBody", {read: ElementRef}) stubBody: ElementRef;
    @Input ('stub-cmpnt-body') body: any;
    ngAfterViewInit() {
        this.renderer.appendChild(this.stubBody.nativeElement, this.body);
    }
}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.