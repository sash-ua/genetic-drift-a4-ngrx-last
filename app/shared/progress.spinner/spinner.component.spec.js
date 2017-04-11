"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var spinner_component_1 = require("./spinner.component");
var material_1 = require("@angular/material");
describe('SpinnerComponent: ', function () {
    var fixture, comp, de, el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                material_1.MaterialModule
            ],
            declarations: [
                spinner_component_1.SpinnerComponent
            ]
        }).compileComponents()
            .then(function () {
            fixture = testing_1.TestBed.createComponent(spinner_component_1.SpinnerComponent);
            comp = fixture.componentInstance;
            comp.value = 50;
            de = fixture.debugElement;
            fixture.detectChanges();
        });
    }));
    it('should create component', function () {
        expect(comp).toBeDefined();
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
//# sourceMappingURL=spinner.component.spec.js.map