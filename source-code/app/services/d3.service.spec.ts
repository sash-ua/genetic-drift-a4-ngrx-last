
import {ComponentFixture, TestBed, async} from "@angular/core/testing";
import {TestHtmlComponents} from "../testing/test.stub.component/test-html.component";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {D3Service} from "./d3.service";

describe('D3Service: ', ()=>{
    let fixture: ComponentFixture<TestHtmlComponents>,
        comp: TestHtmlComponents,
        de: DebugElement,
        serv: D3Service,
        el: DebugElement;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[
                TestHtmlComponents
            ],
            providers:[
                D3Service
            ]
        });
        fixture = TestBed.createComponent(TestHtmlComponents);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.query(By.css('#dom-test-ul'));
        serv = de.injector.get(D3Service);
        fixture.detectChanges();
    });
    it('should add svg chart to element #dom-test-ul', async(()=>{
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            serv.drawChart([1,2,3,4,3,2,1], 'X', 'Y', el.nativeElement,['Legend', 1],  10);
            expect(el.nativeElement.firstElementChild).toBeDefined();
            expect(el.nativeElement.firstElementChild.tagName).toEqual('svg');
        });
    }));
    it('should add svg chart to element #dom-test-ul', async(()=>{
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            serv.drawChart([1,2,3,4,3,2,1], 'X', 'Y', el.nativeElement, [] );
            expect(el.nativeElement.firstElementChild).toBeDefined();
            expect(el.nativeElement.firstElementChild.tagName).toEqual('svg');
        });
    }));
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.