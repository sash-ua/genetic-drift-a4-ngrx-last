"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var instruction_component_1 = require("./instruction.component");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
describe('InstructionComponent', function () {
    var fixture;
    var comp;
    var de;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                animations_1.BrowserAnimationsModule,
                material_1.MaterialModule
            ],
            declarations: [
                instruction_component_1.InstructionComponent
            ]
        })
            .compileComponents()
            .then(function () {
            fixture = testing_1.TestBed.createComponent(instruction_component_1.InstructionComponent);
            comp = fixture.componentInstance;
            fixture.detectChanges();
        });
    }));
    it('InstructionComponent - should create component', function () {
        expect(comp).toBeDefined();
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
