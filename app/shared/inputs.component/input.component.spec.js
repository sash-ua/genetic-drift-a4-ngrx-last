"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var input_component_1 = require("./input.component");
var core_1 = require("@angular/core");
describe('InputComponent: ', function () {
    var fixture, comp, de;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                input_component_1.InputComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        });
        fixture = testing_1.TestBed.createComponent(input_component_1.InputComponent);
        comp = fixture.componentInstance;
        comp.input = { preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2' };
        fixture.detectChanges();
    });
    it('should create component', function () {
        expect(comp).toBeDefined();
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
