
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {InputComponent} from "./input.component";
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";

describe('InputComponent: ', ()=>{
    let fixture: ComponentFixture<InputComponent>,
        comp: InputComponent,
        de: DebugElement;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [
                InputComponent
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        });
        fixture = TestBed.createComponent(InputComponent);
        comp = fixture.componentInstance;
        comp.input = {preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2'};
        fixture.detectChanges();
    });
    it('should create component', ()=>{
        expect(comp).toBeDefined();
    });
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.