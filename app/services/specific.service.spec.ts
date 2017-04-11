
import {ComponentFixture, inject, TestBed} from "@angular/core/testing";
import {ErrorHandlerService} from "./error.handler.service";
import {SpecificService} from "./specific.service";

import {By} from "@angular/platform-browser";
import {TestHtmlComponents} from "../testing/test.stub.component/test-html.component";
import {DebugElement} from "@angular/core";


const INPUTS = [
    {preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2'},
    {preDefData: 100, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1'},
    {preDefData: 2, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1'},
    {preDefData: 0.5, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164'},
    {preDefData: 0.1, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2'},
    {preDefData: 0.15, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77'},
    {preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09'}
    ];

describe('Specific service: ', ()=>{
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestHtmlComponents,
            ],
            providers: [
                ErrorHandlerService ,
                SpecificService
            ]
        });

        // create component and test fixture
        let fixture: ComponentFixture<TestHtmlComponents> = TestBed.createComponent(TestHtmlComponents);
        let comp: TestHtmlComponents = fixture.componentInstance; // TestHtmlComponents' test instance

        let de: DebugElement[] = fixture.debugElement.queryAll(By.css('input'));

    });

    it('collectionDataInputs', (inject([SpecificService], (service: SpecificService)=>{
        let x = service.collectionDataInputs('input');
        expect(x).toEqual([1000,11,12,0.2,0.5,0.9]);
    })));
    it('isExist', (inject([SpecificService], (service: SpecificService)=>{
        expect(service.isExist('input')).toEqual('input');
        expect(service.isExist('')).toBeNull();
    })));
    it('applInputsData', (inject([SpecificService], (service: SpecificService)=>{
        let x = service.collectionDataInputs('input');
        expect(SpecificService.applInputsData(INPUTS, x)).toEqual(
            [ { preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [ 2 ], toolTip: 'Integer number' +
            ' from 2' },
                { preDefData: 11, hint: 'Generations', dvdrColor: 'warn', interval: [ 1 ], toolTip: 'Integer number from 1' },
                { preDefData: 12, hint: 'Simulations', dvdrColor: 'warn', interval: [ 1 ], toolTip: 'Integer number from 1' },
                { preDefData: 0.2, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [ 0, 1 ], toolTip: 'Value from 0 to 1, for ex. 0.164' },
                { preDefData: 0.5, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [ 0, 1 ], toolTip: 'Value from 0 to 1, for ex. 0.2' },
                { preDefData: 0.9, hint: 'Natural decline', dvdrColor: 'primary', interval: [ 0, 1 ], toolTip: 'Value from 0 to 1, for ex. 0.77' },
                { preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [ 0, 1 ], toolTip: 'Value from 0 to 1, for ex. 0.09' } ]
        );
    })));
    it('dimension', ()=>{
        const WW = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        const WH = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        let wf = 0.3, hf = 0.5;
        expect(SpecificService.dimension(wf, hf)).toEqual((WW >= WH) ? (wf*WW) : (hf*WH));
    });
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.