"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var test_html_component_1 = require("../testing/test.stub.component/test-html.component");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var dom_service_1 = require("./dom.service");
describe('DOMService: ', function () {
    var arr1 = ['svg', 'g', 'tspan', 'text', 'path'];
    var arr2 = ['div', 'g', 'tspan', 'text', 'path'];
    var el1, el2, serv, r2, fixture, comp;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [],
            declarations: [
                test_html_component_1.TestHtmlComponents
            ],
            providers: [
                dom_service_1.DOMService,
                core_1.Renderer2
            ]
        });
        fixture = testing_1.TestBed.createComponent(test_html_component_1.TestHtmlComponents);
        comp = fixture.componentInstance;
        el1 = fixture.debugElement.query(platform_browser_1.By.css('#dom-test'));
        el2 = fixture.debugElement.query(platform_browser_1.By.css('#dom-test-ul'));
        serv = fixture.debugElement.injector.get(dom_service_1.DOMService);
        r2 = fixture.debugElement.injector.get(core_1.Renderer2);
        fixture.detectChanges();
    });
    it('compare - should compare is el-s tag one of tags array, return true-false', (function () {
        expect(serv.compare(el1.nativeElement, arr1)).toBeFalsy();
        expect(serv.compare(el1.nativeElement, arr2)).toBeTruthy();
    }));
    it('attrSetter - set attribute than should return \'1\'', (function () {
        fixture.detectChanges();
        serv.attrSetter(el1.nativeElement, [['data-test', '1']], r2);
        expect(el1.nativeElement.getAttribute('data-test')).toMatch('1');
    }));
    it('findHTMLElement - should be truthy, if ther\'s at list one el-t with tag \'div\' among his ancestors', (function () {
        fixture.detectChanges();
        expect(serv.findHTMLElement(el2.nativeElement, 'div', r2)).toBeTruthy();
    }));
    it('findHTMLElement - should be null, if ther\'s not any el-t with tag \'svg\' among his ancestors', (function () {
        fixture.detectChanges();
        expect(serv.findHTMLElement(el2.nativeElement, 'svg', r2)).toBeNull();
    }));
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
