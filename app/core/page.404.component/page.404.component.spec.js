import { TestBed } from "@angular/core/testing";
import { Page404Component } from "./page.404.component";
describe('Page404Component: ', function () {
    var fixture, comp, de;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [
                Page404Component
            ]
        });
        fixture = TestBed.createComponent(Page404Component);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create component', function () {
        expect(comp).toBeDefined();
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
