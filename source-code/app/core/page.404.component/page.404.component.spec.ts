
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Page404Component} from "./page.404.component";
import {DebugElement} from "@angular/core";

describe('Page404Component: ', ()=>{
    let fixture: ComponentFixture<Page404Component>,
        comp: Page404Component,
        de: DebugElement;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [
                Page404Component
            ]
        });
        fixture = TestBed.createComponent(Page404Component);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create component', ()=>{
        expect(comp).toBeDefined();
    });
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.