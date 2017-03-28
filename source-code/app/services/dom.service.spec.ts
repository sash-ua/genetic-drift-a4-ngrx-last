
import {ComponentFixture, inject, TestBed, async, TestComponentRenderer} from "@angular/core/testing";
import {TestHtmlComponents} from "../testing/test.stub.component/test-html.component";
import {DebugElement, NO_ERRORS_SCHEMA, Renderer2} from "@angular/core";
import {By} from "@angular/platform-browser";
import {DOMService} from "./dom.service";
import {FormsModule} from "@angular/forms";

describe('DOMService',()=>{
    let arr1 = ['svg', 'g', 'tspan', 'text', 'path'];
    let arr2 = ['div', 'g', 'tspan', 'text', 'path'];
    let el1: HTMLElement, el2: HTMLElement;
    let fixture: ComponentFixture<TestHtmlComponents>;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
            ],
            declarations: [
                TestHtmlComponents
            ],
            providers: [
                DOMService,
                Renderer2
            ]
        });
        fixture = TestBed.createComponent(TestHtmlComponents);
        let comp: TestHtmlComponents = fixture.componentInstance;
        let d1: DebugElement = fixture.debugElement.query(By.css('#dom-test'));
        el1=d1.nativeElement;
        let d2: DebugElement = fixture.debugElement.query(By.css('#dom-test-ul'));
        el2= d2.nativeElement;
    });
    it('DOMService - compare', (inject([DOMService],(serv: DOMService)=>{
        expect(serv.compare(el1, arr1)).toBeFalsy();
        expect(serv.compare(el1, arr2)).toBeTruthy();
    })));
    // it('DOMService - attrSetter', async(inject([DOMService], (serv: DOMService)=>{
    //     fixture.detectChanges();
    //     serv.attrSetter(el1, [['data-test', '1']]);
    //     fixture.whenStable().then(()=>{
    //         expect(el1.querySelector('#dom-test-ul').getAttribute('data-test')).toBeTruthy();
    //     });
    // })));
    // it('DOMService - findHTMLElement', (inject([DOMService], (serv: DOMService)=>{
    //     expect(serv.findHTMLElement(el2, 'div')).toEqual('');
    // })))
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.