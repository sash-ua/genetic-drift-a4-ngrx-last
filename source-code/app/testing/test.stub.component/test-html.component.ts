import {Component, OnInit, Renderer2} from "@angular/core";
import {SpecificService} from "../../services/specific.service";
import {DOMService} from "../../services/dom.service";

@Component({
    moduleId: module.id,
    template: `
    <form>
        <input value="1000">
        <input id="wrong" value="11w">
        <input value="12">
        <input id="right" value="0.2">
        <input value="0.5">
        <input value="0.9">
    </form>
    <div id="dom-test" data-test="22">
        <ul>
            <li></li>
            <li></li>
            <li id="dom-test-ul"></li>
        </ul>
    </div>`,
    providers: [
        DOMService
    ]
})
export class TestHtmlComponents implements OnInit {
    constructor() { }

    ngOnInit() { }
}


//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.