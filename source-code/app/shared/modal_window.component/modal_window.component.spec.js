import { TestBed, async, fakeAsync } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";
import { MdDialogRef, MdDialog, MdDialogModule, OverlayRef } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { tick } from "@angular/core/testing";
import { TestHtmlComponents } from "../../testing/test.stub.component/test-html.component";
import { ModalWindowComponent } from "./modal_window.component";
import { StubComponent } from "../stub.component/stub.component";
import { DialogsService } from "../../services/dialogs.service";
describe('ModalWindowComponent: ', function () {
    var fixture;
    var de;
    var comp;
    var btn;
    //mocking a dialogRef for when we open our Md dialog with a button
    var mockDialogRef = new MdDialogRef(new OverlayRef(null, null, null, null), {});
    mockDialogRef.componentInstance = new ModalWindowComponent(null);
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                MdDialogModule
            ],
            declarations: [
                TestHtmlComponents,
                ModalWindowComponent,
                StubComponent
            ],
            providers: [
                DialogsService,
                MdDialog
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(TestHtmlComponents);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('#mwtest'));
        btn = fixture.debugElement.query(By.css('#test-button')).nativeElement;
        spyOn(comp, 'open').and.returnValue(mockDialogRef);
    }));
    it('should create the component', (function () {
        expect(comp).toBeDefined();
    }));
    it('should open the dialog on clicking the button', fakeAsync(function () {
        var el = de.nativeElement;
        btn.click();
        fixture.detectChanges();
        tick();
        expect(comp.open).toHaveBeenCalled();
    }));
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
//# sourceMappingURL=modal_window.component.spec.js.map