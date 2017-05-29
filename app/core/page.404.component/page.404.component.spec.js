"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var page_404_component_1 = require("./page.404.component");
describe('Page404Component: ', function () {
    var fixture, comp, de;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                page_404_component_1.Page404Component
            ]
        });
        fixture = testing_1.TestBed.createComponent(page_404_component_1.Page404Component);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create component', function () {
        expect(comp).toBeDefined();
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
