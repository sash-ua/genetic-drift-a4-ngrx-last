"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var error_handler_service_1 = require("./error.handler.service");
var specific_service_1 = require("./specific.service");
var platform_browser_1 = require("@angular/platform-browser");
var test_html_component_1 = require("../testing/test.stub.component/test-html.component");
var INPUTS = [
    { preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2' },
    { preDefData: 100, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' },
    { preDefData: 2, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' },
    { preDefData: 0.5, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164' },
    { preDefData: 0.1, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2' },
    { preDefData: 0.15, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77' },
    { preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09' }
];
describe('Specific service: ', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                test_html_component_1.TestHtmlComponents,
            ],
            providers: [
                error_handler_service_1.ErrorHandlerService,
                specific_service_1.SpecificService
            ]
        });
        // create component and test fixture
        var fixture = testing_1.TestBed.createComponent(test_html_component_1.TestHtmlComponents);
        var comp = fixture.componentInstance; // TestHtmlComponents' test instance
        var de = fixture.debugElement.queryAll(platform_browser_1.By.css('input'));
    });
    it('collectionDataInputs', (testing_1.inject([specific_service_1.SpecificService], function (service) {
        var x = service.collectionDataInputs('input');
        expect(x).toEqual([1000, 11, 12, 0.2, 0.5, 0.9]);
    })));
    it('isExist', (testing_1.inject([specific_service_1.SpecificService], function (service) {
        expect(service.isExist('input')).toEqual('input');
        expect(service.isExist('')).toBeNull();
    })));
    it('applInputsData', (testing_1.inject([specific_service_1.SpecificService], function (service) {
        var x = service.collectionDataInputs('input');
        expect(specific_service_1.SpecificService.applInputsData(INPUTS, x)).toEqual([{ preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number' +
                    ' from 2' },
            { preDefData: 11, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' },
            { preDefData: 12, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' },
            { preDefData: 0.2, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164' },
            { preDefData: 0.5, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2' },
            { preDefData: 0.9, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77' },
            { preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09' }]);
    })));
    it('dimension', function () {
        var WW = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        var WH = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        var wf = 0.3, hf = 0.5;
        expect(specific_service_1.SpecificService.dimension(wf, hf)).toEqual((WW >= WH) ? (wf * WW) : (hf * WH));
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
