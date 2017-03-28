import { inject, TestBed } from "@angular/core/testing";
import { TestHtmlComponents } from "../testing/test.stub.component/test-html.component";
import { Renderer2 } from "@angular/core";
import { By } from "@angular/platform-browser";
import { DOMService } from "./dom.service";
import { FormsModule } from "@angular/forms";
describe('DOMService', function () {
    var arr1 = ['svg', 'g', 'tspan', 'text', 'path'];
    var arr2 = ['div', 'g', 'tspan', 'text', 'path'];
    var el1, el2;
    var fixture;
    beforeEach(function () {
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
        var comp = fixture.componentInstance;
        var d1 = fixture.debugElement.query(By.css('#dom-test'));
        el1 = d1.nativeElement;
        var d2 = fixture.debugElement.query(By.css('#dom-test-ul'));
        el2 = d2.nativeElement;
    });
    it('DOMService - compare', (inject([DOMService], function (serv) {
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
//# sourceMappingURL=dom.service.spec.js.map