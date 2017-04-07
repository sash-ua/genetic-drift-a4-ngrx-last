import { TestBed, async } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";
import { MaterialModule } from "@angular/material";
import { ModalWindowComponent } from "../../shared/modal_window.component/modal_window.component";
import { StubComponent } from "../../shared/stub.component/stub.component";
import { ModelingComponent } from "./modeling.component";
import { InputComponent } from "../../shared/inputs.component/input.component";
import { Store, StoreModule } from "@ngrx/store";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { createInjector } from "../../testing/injectors";
describe('ModelingComponent: ', function () {
    var fixture;
    var de;
    var comp;
    var reducerLoc = { modeling: { spn_tgl: 'out', spn_state_val: 0, inputs: [{ preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2' }, { preDefData: 100, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 2, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 0.5, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164' }, { preDefData: 0.1, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2' }, { preDefData: 0.15, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77' }, { preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09' }], TOOLTIP_D: 100, TOOLTIP_POS: 'above', MW_TITLE: 'Graph', svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', 425]], SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path'] }, router: { path: '/modeling' } };
    var injector = createInjector(StoreModule.provideStore(reducerLoc, { type: reducerLoc }));
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                MaterialModule,
                StoreModule.provideStore(injector),
            ],
            declarations: [
                InputComponent,
                StubComponent,
                ModalWindowComponent,
                ModelingComponent,
            ],
            schemas: [NO_ERRORS_SCHEMA],
            providers: []
        })
            .compileComponents()
            .then(function () {
            fixture = TestBed.createComponent(ModelingComponent);
            comp = fixture.componentInstance;
            injector.get(Store).subscribe(function (v) {
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
        var inputsL = de.queryAll(By.css('.mat-input-element'));
        var f = inputsL.some(function (v, i, arr) {
            return +v.nativeElement.value === comp.inputs[i].preDefData;
        });
        expect(f).toBeTruthy();
    }));
    it("& D3Service - should pass if render invoked successfully while ngAfterViewInit, there's svg graph", (function () {
        var elL = de.query(By.css('#graphView')).nativeElement.firstChild;
        expect(elL.tagName === 'svg').toBeTruthy();
    }));
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
//# sourceMappingURL=modeling.component.spec.js.map