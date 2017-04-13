"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var modal_window_component_1 = require("../../shared/modal_window.component/modal_window.component");
var stub_component_1 = require("../../shared/stub.component/stub.component");
var modeling_component_1 = require("./modeling.component");
var input_component_1 = require("../../shared/inputs.component/input.component");
var store_1 = require("@ngrx/store");
var animations_1 = require("@angular/platform-browser/animations");
var injectors_1 = require("../../testing/injectors");
describe('ModelingComponent: ', function () {
    var fixture;
    var de;
    var comp;
    var reducerLoc = { modeling: { spn_tgl: 'out', spn_state_val: 0, inputs: [{ preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2' }, { preDefData: 100, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 2, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 0.5, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164' }, { preDefData: 0.1, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2' }, { preDefData: 0.15, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77' }, { preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09' }], TOOLTIP_D: 100, TOOLTIP_POS: 'above', MW_TITLE: 'Graph', svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', 425]], SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path'] }, router: { path: '/modeling' } };
    var injector = injectors_1.createInjector(store_1.StoreModule.provideStore(reducerLoc, { type: reducerLoc }));
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                animations_1.BrowserAnimationsModule,
                material_1.MaterialModule,
                store_1.StoreModule.provideStore(injector),
            ],
            declarations: [
                input_component_1.InputComponent,
                stub_component_1.StubComponent,
                modal_window_component_1.ModalWindowComponent,
                modeling_component_1.ModelingComponent,
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            providers: []
        })
            .compileComponents()
            .then(function () {
            fixture = testing_1.TestBed.createComponent(modeling_component_1.ModelingComponent);
            comp = fixture.componentInstance;
            injector.get(store_1.Store).subscribe(function (v) {
                (_a = v.type.modeling, comp.spn_tgl = _a.spn_tgl, comp.spn_state_val = _a.spn_state_val, comp.inputs = _a.inputs, comp.TOOLTIP_D = _a.TOOLTIP_D, comp.TOOLTIP_POS = _a.TOOLTIP_POS, comp.MW_TITLE = _a.MW_TITLE, comp.svg_attrs = _a.svg_attrs, comp.SVG_COMPS = _a.SVG_COMPS);
                var _a;
            });
            de = fixture.debugElement;
            fixture.detectChanges();
        });
    }));
    it('should create the component', (function () {
        expect(comp).toBeDefined();
    }));
    it('should be equal inputs value and inputs.preDefData', (function () {
        var inputsL = de.queryAll(platform_browser_1.By.css('.mat-input-element'));
        var f = inputsL.some(function (v, i, arr) {
            return +v.nativeElement.value === comp.inputs[i].preDefData;
        });
        expect(f).toBeTruthy();
    }));
    it("& D3Service - should pass if render invoked successfully while ngAfterViewInit, there's svg graph", (function () {
        var elL = de.query(platform_browser_1.By.css('#graphView')).nativeElement.firstChild;
        expect(elL.tagName === 'svg').toBeTruthy();
    }));
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
