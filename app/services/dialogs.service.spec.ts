
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {DialogsService} from "./dialogs.service";
import {TestHtmlComponents, TestModule} from "../testing/test.stub.component/test-html.component";
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";
import {MdDialog, MdDialogModule, OverlayContainer} from "@angular/material";

describe('DialogsService: ',()=>{
    let fixture: ComponentFixture<TestHtmlComponents>;
    let de: DebugElement;
    let comp: TestHtmlComponents;
    let el: HTMLElement;
    let ds: DialogsService;
    let md: MdDialog;
    let overlayContainerElement: HTMLElement;
    const txt: string = 'Test title';

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                MdDialogModule,
                TestModule
            ],
            declarations: [],
            providers: [
                {provide: OverlayContainer, useFactory: () => {
                    overlayContainerElement = document.createElement('div');
                    return {getContainerElement: () => overlayContainerElement};
                }}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(TestHtmlComponents);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        ds = de.injector.get(DialogsService);
        md = de.injector.get(MdDialog);
        el = de.query(By.css('#mwtest')).nativeElement;
        ds.confirm(txt, el, md);
    });
    it('compare - should create dialog window', (()=>{
        fixture.detectChanges();
        const x = overlayContainerElement.querySelector('md-dialog-container');
        expect(x).toBeDefined();
    }));
    it('compare - dialog window should contain the title and element', (()=>{
        fixture.detectChanges();
        const y = overlayContainerElement.querySelector('#mwtest');
        const z = overlayContainerElement.querySelector('h2');
        expect(y.textContent).toContain('test Dialog');
        expect(z.textContent).toContain(txt);
    }));
});

// //Copyright (c) 2017 Alex Tranchenko. All rights reserved.
// //MIT License.