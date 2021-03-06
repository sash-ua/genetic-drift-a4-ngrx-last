
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {TestHtmlComponents} from "../testing/test.stub.component/test-html.component";
import {DebugElement, Renderer2} from "@angular/core";
import {By} from "@angular/platform-browser";
import {DOMService} from "./dom.service";

describe('DOMService: ',()=>{
    let arr1 = ['svg', 'g', 'tspan', 'text', 'path'];
    let arr2 = ['div', 'g', 'tspan', 'text', 'path'];
    let el1: DebugElement,
        el2: DebugElement,
        serv: DOMService,
        r2: Renderer2,
        fixture: ComponentFixture<TestHtmlComponents>,
        comp: TestHtmlComponents;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                TestHtmlComponents
            ],
            providers: [
                DOMService,
                Renderer2
            ]
        });
        fixture = TestBed.createComponent(TestHtmlComponents);
        comp = fixture.componentInstance;
        el1 = fixture.debugElement.query(By.css('#dom-test'));
        el2 = fixture.debugElement.query(By.css('#dom-test-ul'));
        serv = fixture.debugElement.injector.get(DOMService);
        r2 = fixture.debugElement.injector.get(Renderer2);
        fixture.detectChanges();
    });
    it('compare - should compare is el-s tag one of tags array, return true-false', (()=>{
        expect(serv.compare(el1.nativeElement, arr1)).toBeFalsy();
        expect(serv.compare(el1.nativeElement, arr2)).toBeTruthy();
    }));
    it('attrSetter - set attribute than should return \'1\'', (()=>{
        fixture.detectChanges();
        serv.attrSetter(el1.nativeElement, [['data-test', '1']], r2);
        expect(el1.nativeElement.getAttribute('data-test')).toMatch('1');
    }));
    it('findHTMLElement - should be truthy, if ther\'s at list one el-t with tag \'div\' among his ancestors' , (()=>{
        fixture.detectChanges();
        expect(serv.findHTMLElement(el2.nativeElement, 'div', r2)).toBeTruthy();
    }));
    it('findHTMLElement - should be null, if ther\'s not any el-t with tag \'svg\' among his ancestors' , (()=>{
        fixture.detectChanges();
        expect(serv.findHTMLElement(el2.nativeElement, 'svg', r2)).toBeNull();
    }));
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.