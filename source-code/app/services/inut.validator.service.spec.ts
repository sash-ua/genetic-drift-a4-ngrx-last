
import {ComponentFixture, inject, TestBed} from "@angular/core/testing";
import {FormControl, FormsModule, Validators, AbstractControl} from "@angular/forms";
import {TestHtmlComponents} from "../testing/test.stub.component/test-html.component";
import {DebugElement, Input} from "@angular/core";
import {By} from "@angular/platform-browser";
import {InputValidatorService} from "./inut.validator.service";

describe('InputValidatorService: ',()=>{
    let wr: HTMLElement, r: HTMLElement;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                FormsModule
            ],
            declarations:[
                TestHtmlComponents
            ],
            providers:[
                InputValidatorService
            ]
        });
        // create component and test fixture
        let fixture: ComponentFixture<TestHtmlComponents> = TestBed.createComponent(TestHtmlComponents);
        let comp: TestHtmlComponents = fixture.componentInstance; // TestHtmlComponents' test instance

        let deWr: DebugElement = fixture.debugElement.query(By.css('#wrong'));
        let deR: DebugElement = fixture.debugElement.query(By.css('#right'));
        wr = deWr.nativeElement;
        r = deR.nativeElement;
    });

    it('inputControl', (inject([InputValidatorService], (service: InputValidatorService)=>{
        expect(service.inputControl(wr.value, [1])).toBeNull();
        expect(service.inputControl(r.value, [0, 1])).toEqual(r.value);
    })));
    it('inputConds', (inject([InputValidatorService], (serv: InputValidatorService)=>{
        let z: AbstractControl = new FormControl(
            wr.value,
            Validators.compose([
                Validators.required,
                Validators.pattern('([0-9]+)|([0-9]+\.[0-9]+)')
            ])
            );
        let y: AbstractControl = new FormControl(
            r.value,
            Validators.compose([
                Validators.required,
                Validators.pattern('([0-9]+)|([0-9]+\.[0-9]+)')
            ])
            );
        expect(serv.inputConds(z, [1])).toBeFalsy();
        expect(serv.inputConds(y, [0, 1])).toBeTruthy();
    })))
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.