"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var testing_2 = require("@angular/core/testing");
var test_html_component_1 = require("../../testing/test.stub.component/test-html.component");
var modal_window_component_1 = require("./modal_window.component");
var stub_component_1 = require("../stub.component/stub.component");
var dialogs_service_1 = require("../../services/dialogs.service");
describe('ModalWindowComponent: ', function () {
    var fixture;
    var de;
    var comp;
    var spy;
    var btn;
    //mocking a dialogRef for when we open our Md dialog with a button
    var mockDialogRef = new material_1.MdDialogRef(new material_1.OverlayRef(null, null, null, null), new material_1.MdDialogContainer(null, null, null, null));
    mockDialogRef.componentInstance = new modal_window_component_1.ModalWindowComponent(null);
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                forms_1.FormsModule,
                material_1.MdDialogModule,
                material_1.MaterialModule
            ],
            declarations: [
                test_html_component_1.TestHtmlComponents,
                modal_window_component_1.ModalWindowComponent,
                stub_component_1.StubComponent
            ],
            providers: [
                dialogs_service_1.DialogsService,
                material_1.MdDialog,
                core_1.ViewContainerRef
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        });
        fixture = testing_1.TestBed.createComponent(test_html_component_1.TestHtmlComponents);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('#mwtest'));
        btn = fixture.debugElement.query(platform_browser_1.By.css('#test-button')).nativeElement;
        spy = spyOn(comp, 'open').and.returnValue(Promise.resolve(mockDialogRef));
        fixture.detectChanges();
    }));
    it('should open the dialog on clicking the button', testing_1.fakeAsync(function () {
        var el = de.nativeElement;
        btn.click();
        fixture.detectChanges();
        testing_2.tick();
        expect(comp.open).toHaveBeenCalled();
    }));
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
