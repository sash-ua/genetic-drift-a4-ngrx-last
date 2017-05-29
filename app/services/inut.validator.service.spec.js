import { inject, TestBed } from "@angular/core/testing";
import { FormControl, FormsModule, Validators } from "@angular/forms";
import { TestHtmlComponents } from "../testing/test.stub.component/test-html.component";
import { By } from "@angular/platform-browser";
import { InputValidatorService } from "./inut.validator.service";
describe('InputValidatorService: ', function () {
    var wr, r;
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                TestHtmlComponents
            ],
            providers: [
                InputValidatorService
            ]
        });
        // create component and test fixture
        var fixture = TestBed.createComponent(TestHtmlComponents);
        var comp = fixture.componentInstance; // TestHtmlComponents' test instance
        var deWr = fixture.debugElement.query(By.css('#wrong'));
        var deR = fixture.debugElement.query(By.css('#right'));
        wr = deWr.nativeElement;
        r = deR.nativeElement;
    });
    it('inputControl', (inject([InputValidatorService], function (service) {
        expect(service.inputControl(wr.value, [1])).toBeNull();
        expect(service.inputControl(r.value, [0, 1])).toEqual(r.value);
    })));
    it('inputConds', (inject([InputValidatorService], function (serv) {
        var z = new FormControl(wr.value, Validators.compose([
            Validators.required,
            Validators.pattern('([0-9]+)|([0-9]+\.[0-9]+)')
        ]));
        var y = new FormControl(r.value, Validators.compose([
            Validators.required,
            Validators.pattern('([0-9]+)|([0-9]+\.[0-9]+)')
        ]));
        expect(serv.inputConds(z, [1])).toBeFalsy();
        expect(serv.inputConds(y, [0, 1])).toBeTruthy();
    })));
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
