import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from "@angular/core";
import {SpecificService} from "../../services/specific.service";
import {DOMService} from "../../services/dom.service";
import {DialogsService} from "../../services/dialogs.service";

@Component({
    template: `
    <form>
        <input value="1000">
        <input id="wrong" value="11w">
        <input value="12">
        <input id="right" value="0.2">
        <input value="0.5">
        <input value="0.9">
    </form>
    <div id="dom-test" >
        <ul>
            <li>1</li>
            <li>2</li>
            <li id="dom-test-ul">3</li>
        </ul>
    </div>
    <button id="test-button" (click)="open()">Check clicking</button>
    <div id="mwtest">test Dialog</div>`,
    providers: []
})
export class TestHtmlComponents {
    constructor(  ) { }
    open(){
        return true;
    }
}

import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {ModalWindowComponent} from "../../shared/modal_window.component/modal_window.component";
import {StubComponent} from "../../shared/stub.component/stub.component";
import {MaterialModule, MdDialogModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
    imports: [
        BrowserModule,
        MdDialogModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    exports: [
        TestHtmlComponents
    ],
    declarations: [
        TestHtmlComponents,
        ModalWindowComponent,
        StubComponent
    ],
    providers: [
        DOMService,
        DialogsService
    ],
    bootstrap:[
        TestHtmlComponents
    ],
    // DialogService entry point
    entryComponents: [
        ModalWindowComponent
    ],
})
export class TestModule { }


//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.