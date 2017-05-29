"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var forms_1 = require("@angular/forms");
var test_html_component_1 = require("../testing/test.stub.component/test-html.component");
var platform_browser_1 = require("@angular/platform-browser");
var inut_validator_service_1 = require("./inut.validator.service");
describe('InputValidatorService: ', function () {
    var wr, r;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                forms_1.FormsModule
            ],
            declarations: [
                test_html_component_1.TestHtmlComponents
            ],
            providers: [
                inut_validator_service_1.InputValidatorService
            ]
        });
        // create component and test fixture
        var fixture = testing_1.TestBed.createComponent(test_html_component_1.TestHtmlComponents);
        var comp = fixture.componentInstance; // TestHtmlComponents' test instance
        var deWr = fixture.debugElement.query(platform_browser_1.By.css('#wrong'));
        var deR = fixture.debugElement.query(platform_browser_1.By.css('#right'));
        wr = deWr.nativeElement;
        r = deR.nativeElement;
    });
    it('inputControl', (testing_1.inject([inut_validator_service_1.InputValidatorService], function (service) {
        expect(service.inputControl(wr.value, [1])).toBeNull();
        expect(service.inputControl(r.value, [0, 1])).toEqual(r.value);
    })));
    it('inputConds', (testing_1.inject([inut_validator_service_1.InputValidatorService], function (serv) {
        var z = new forms_1.FormControl(wr.value, forms_1.Validators.compose([
            forms_1.Validators.required,
            forms_1.Validators.pattern('([0-9]+)|([0-9]+\.[0-9]+)')
        ]));
        var y = new forms_1.FormControl(r.value, forms_1.Validators.compose([
            forms_1.Validators.required,
            forms_1.Validators.pattern('([0-9]+)|([0-9]+\.[0-9]+)')
        ]));
        expect(serv.inputConds(z, [1])).toBeFalsy();
        expect(serv.inputConds(y, [0, 1])).toBeTruthy();
    })));
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
