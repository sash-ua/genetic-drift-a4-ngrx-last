"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var test_html_component_1 = require("../testing/test.stub.component/test-html.component");
var platform_browser_1 = require("@angular/platform-browser");
var d3_service_1 = require("./d3.service");
describe('D3Service: ', function () {
    var fixture, comp, de, serv, el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                test_html_component_1.TestHtmlComponents
            ],
            providers: [
                d3_service_1.D3Service
            ]
        });
        fixture = testing_1.TestBed.createComponent(test_html_component_1.TestHtmlComponents);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.query(platform_browser_1.By.css('#dom-test-ul'));
        serv = de.injector.get(d3_service_1.D3Service);
        fixture.detectChanges();
    });
    it('should add svg chart to element #dom-test-ul', testing_1.async(function () {
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            serv.drawChart([1, 2, 3, 4, 3, 2, 1], 'X', 'Y', el.nativeElement, ['Legend', 1], 10);
            expect(el.nativeElement.firstElementChild).toBeDefined();
            expect(el.nativeElement.firstElementChild.tagName).toEqual('svg');
        });
    }));
    it('should add svg chart to element #dom-test-ul', testing_1.async(function () {
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            serv.drawChart([1, 2, 3, 4, 3, 2, 1], 'X', 'Y', el.nativeElement, []);
            expect(el.nativeElement.firstElementChild).toBeDefined();
            expect(el.nativeElement.firstElementChild.tagName).toEqual('svg');
        });
    }));
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
