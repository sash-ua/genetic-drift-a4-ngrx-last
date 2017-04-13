"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var dialogs_service_1 = require("./dialogs.service");
var test_html_component_1 = require("../testing/test.stub.component/test-html.component");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
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
        testing_1.TestBed.configureTestingModule({
            imports: [
                material_1.MdDialogModule,
                test_html_component_1.TestModule
            ],
            declarations: [],
            providers: [
                { provide: material_1.OverlayContainer, useFactory: function () {
                        overlayContainerElement = document.createElement('div');
                        return { getContainerElement: function () { return overlayContainerElement; } };
                    } }
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        });
        fixture = testing_1.TestBed.createComponent(test_html_component_1.TestHtmlComponents);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        ds = de.injector.get(dialogs_service_1.DialogsService);
        md = de.injector.get(material_1.MdDialog);
        el = de.query(platform_browser_1.By.css('#mwtest')).nativeElement;
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
