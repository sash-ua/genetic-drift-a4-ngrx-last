"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var stub_component_1 = require("./stub.component");
var material_1 = require("@angular/material");
describe('StubComponent: ', function () {
    var fixture, comp, de, el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                material_1.MaterialModule
            ],
            declarations: [
                stub_component_1.StubComponent
            ],
            providers: [
                core_1.Renderer2
            ]
        });
        fixture = testing_1.TestBed.createComponent(stub_component_1.StubComponent);
        comp = fixture.componentInstance;
        comp.body = document.createElement('div');
        de = fixture.debugElement;
        fixture.detectChanges();
    });
    it('should create component', function () {
        expect(comp).toBeDefined();
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
