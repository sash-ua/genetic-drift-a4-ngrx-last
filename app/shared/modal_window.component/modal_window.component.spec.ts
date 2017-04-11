import {ComponentFixture, TestBed, async, fakeAsync} from "@angular/core/testing";
import {DebugElement, NO_ERRORS_SCHEMA, ViewContainerRef} from "@angular/core";
import {By} from "@angular/platform-browser";
import {inject} from "@angular/core/testing";
import {MdDialogRef, MdDialog, MdDialogModule, OverlayRef, MaterialModule, MdDialogContainer} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {tick} from "@angular/core/testing";
import {TestHtmlComponents} from "../../testing/test.stub.component/test-html.component";
import {ModalWindowComponent} from "./modal_window.component";
import {StubComponent} from "../stub.component/stub.component";
import {DialogsService} from "../../services/dialogs.service";
import Spy = jasmine.Spy;

describe('ModalWindowComponent: ', ()=> {
    let fixture: ComponentFixture<TestHtmlComponents>;
    let de: DebugElement;
    let comp: TestHtmlComponents;
    let spy: Spy;
    let btn: HTMLElement;

    //mocking a dialogRef for when we open our Md dialog with a button
    let mockDialogRef = new MdDialogRef(new OverlayRef(null,null,null,null), new MdDialogContainer(null,null,null,null));
    mockDialogRef.componentInstance = new ModalWindowComponent(null);
    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            imports:[
                FormsModule,
                MdDialogModule,
                MaterialModule
            ],
            declarations: [
                TestHtmlComponents,
                ModalWindowComponent,
                StubComponent
            ],
            providers: [
                DialogsService,
                MdDialog,
                ViewContainerRef
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(TestHtmlComponents);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('#mwtest'));
        btn = fixture.debugElement.query(By.css('#test-button')).nativeElement;
        spy = spyOn(comp, 'open').and.returnValue(Promise.resolve(mockDialogRef));
        fixture.detectChanges();
    }));
    it('should open the dialog on clicking the button', fakeAsync(()=>{
        let el: HTMLElement = de.nativeElement;
        btn.click();
        fixture.detectChanges();
        tick();
        expect(comp.open).toHaveBeenCalled();
    }))
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.