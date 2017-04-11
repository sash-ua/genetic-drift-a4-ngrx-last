
import {ComponentFixture, TestBed, async} from "@angular/core/testing";
import {SpinnerComponent} from "./spinner.component";
import {DebugElement} from "@angular/core";
import {MaterialModule} from "@angular/material";

describe('SpinnerComponent: ', ()=>{
    let fixture: ComponentFixture<SpinnerComponent>,
        comp: SpinnerComponent,
        de: DebugElement,
        el: HTMLElement;
    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            imports:[
                MaterialModule
            ],
            declarations: [
                SpinnerComponent
            ]
        }).compileComponents()
            .then(()=>{
                fixture = TestBed.createComponent(SpinnerComponent);
                comp = fixture.componentInstance;
                comp.value = 50;
                de = fixture.debugElement;
                fixture.detectChanges();
            })
    }));
    it('should create component', ()=>{
        expect(comp).toBeDefined();
    })

});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.