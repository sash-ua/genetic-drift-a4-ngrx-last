
import {ComponentFixture, TestBed, async} from "@angular/core/testing";
import {SpinnerComponent} from "./spinner.component";
import {DebugElement} from "@angular/core";
import {MaterialModule} from "@angular/material";
import {By} from "@angular/platform-browser";

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
    });
    it('should define a default value of undefined for the value attribute', () => {
        let progressElement = fixture.debugElement.query(By.css('md-progress-spinner'));
        expect(progressElement.componentInstance.value).toEqual(50);
    });
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.