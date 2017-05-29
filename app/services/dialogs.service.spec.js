import { TestBed } from "@angular/core/testing";
import { DialogsService } from "./dialogs.service";
import { TestHtmlComponents, TestModule } from "../testing/test.stub.component/test-html.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";
import { MdDialog, MdDialogModule, OverlayContainer } from "@angular/material";
describe('DialogsService: ', function () {
    var fixture;
    var de;
    var comp;
    var el;
    var ds;
    var md;
    var overlayContainerElement;
    var txt = 'Test title';
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                MdDialogModule,
                TestModule
            ],
            declarations: [],
            providers: [
                { provide: OverlayContainer, useFactory: function () {
                        overlayContainerElement = document.createElement('div');
                        return { getContainerElement: function () { return overlayContainerElement; } };
                    } }
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
    it('compare - should create dialog window', (function () {
        fixture.detectChanges();
        var x = overlayContainerElement.querySelector('md-dialog-container');
        expect(x).toBeDefined();
    }));
    it('compare - dialog window should contain the title and element', (function () {
        fixture.detectChanges();
        var y = overlayContainerElement.querySelector('#mwtest');
        var z = overlayContainerElement.querySelector('h2');
        expect(y.textContent).toContain('test Dialog');
        expect(z.textContent).toContain(txt);
    }));
});
// //Copyright (c) 2017 Alex Tranchenko. All rights reserved.
// //MIT License. 
