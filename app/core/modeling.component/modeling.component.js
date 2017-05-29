var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener, HostBinding, ViewChild, ElementRef, Renderer2 } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/let';
import { D3Service } from "../../services/d3.service";
import { ComputationService } from "../../services/computation.service";
import { ErrorHandlerService } from "../../services/error.handler.service";
import { DialogsService } from "../../services/dialogs.service";
import { DOMService } from "../../services/dom.service";
import { AnimationsServices } from "../../services/animations.service";
import { SpecificService } from "../../services/specific.service";
import { Store } from "@ngrx/store";
import * as rootReducer from '../../store.reducers/index';
import { StartSpinnerAnim, EndSpinnerAnim, SpnStage0, SpnStage2, SpnStage3, GetInputs } from "../../store.actions/modeling.action";
import { MdDialog } from "@angular/material";
var ModelingComponent = (function () {
    function ModelingComponent(D3, CS, ES, SS, DS, DOMS, store, renderer, dialog) {
        var _this = this;
        this.D3 = D3;
        this.CS = CS;
        this.ES = ES;
        this.SS = SS;
        this.DS = DS;
        this.DOMS = DOMS;
        this.store = store;
        this.renderer = renderer;
        this.dialog = dialog;
        this.routeAnimationRight = true;
        this.position = 'absolute';
        // Can be used combineLatest()
        this.subsToStore = this.store.select(rootReducer.MODELING_INIT)
            .subscribe(function (v) {
            _this.SVG_COMPS = v[0], _this.svg_attrs = v[1], _this.MW_TITLE = v[2], _this.TOOLTIP_POS = v[3], _this.TOOLTIP_D = v[4], _this.spn_tgl = v[5], _this.spn_state_val = v[6], _this.inputs = v[7];
        }, function (e) { _this.ES.handleError(e); });
    }
    // Set event listener on the host.
    ModelingComponent.prototype.clickHandler = function (e) {
        var TARGET = e.target;
        if (this.DOMS.compare(TARGET, this.SVG_COMPS)) {
            var SVG = this.DOMS.findHTMLElement(TARGET, 'svg', this.renderer);
            if (SVG.getAttribute('data-D3-graph')) {
                var SVGClONE = SVG.cloneNode(true);
                this.DOMS.attrSetter(SVGClONE, this.svg_attrs, this.renderer);
                this.DS.confirm(this.MW_TITLE, SVGClONE, this.dialog);
            }
        }
    };
    ;
    ModelingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var GV = this.graphView.nativeElement;
        // Generate graph while rendering page.
        this.render(this.inputs, GV);
        // Button 'Lunch' handler. Produce D3 Graph after clicking and manage spinner.
        this.subsToEvent = Observable.fromEvent(this.launch.nativeElement, 'click')
            .let(function (obs) {
            return obs.do(function () { _this.store.dispatch(new SpnStage0); })
                .debounceTime(4)
                .do(function () { _this.store.dispatch(new StartSpinnerAnim); });
        })
            .debounceTime(300)
            .do(function () {
            _this.store.dispatch(new SpnStage2);
            _this.store.dispatch(new GetInputs(_this.SS.collectionDataInputs('input')));
            _this.render(_this.inputs, GV);
        })
            .debounceTime(300)
            .let(function (obs) {
            return obs.do(function () { _this.store.dispatch(new SpnStage3); })
                .debounceTime(100)
                .do(function () { _this.store.dispatch(new EndSpinnerAnim); });
        })
            .subscribe(function () { }, function (e) { _this.ES.handleError(e); });
    };
    ModelingComponent.prototype.ngOnDestroy = function () {
        this.subsToStore.unsubscribe();
        this.subsToEvent.unsubscribe();
    };
    // Render array type of Inputs with D3
    ModelingComponent.prototype.render = function (inputs, view) {
        var NG = this.CS.arrG(this.CS.NGen, this.CS.NRandom, inputs[0].preDefData, inputs[6].preDefData, inputs[5].preDefData, inputs[4].preDefData)([inputs[1].preDefData]);
        // Draw chart
        this.D3.drawChart(this.CS.arrG(this.CS.cmptnAlleles(this.CS.bounchCoin1, inputs[3].preDefData, this.CS.tossing1), NG)([inputs[2].preDefData]), 'Generations', 'A1', view, ['Eff. population size:', this.CS.harmonic1(NG), 'Generations: ', inputs[1].preDefData], inputs[1].preDefData);
    };
    return ModelingComponent;
}());
__decorate([
    ViewChild("launch", { read: ElementRef }),
    __metadata("design:type", ElementRef)
], ModelingComponent.prototype, "launch", void 0);
__decorate([
    ViewChild("graphView", { read: ElementRef }),
    __metadata("design:type", ElementRef)
], ModelingComponent.prototype, "graphView", void 0);
__decorate([
    HostBinding('@routeAnimationRight'),
    __metadata("design:type", Object)
], ModelingComponent.prototype, "routeAnimationRight", void 0);
__decorate([
    HostBinding('style.position'),
    __metadata("design:type", Object)
], ModelingComponent.prototype, "position", void 0);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], ModelingComponent.prototype, "clickHandler", null);
ModelingComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'md-comp',
        template: "<section class=\"wrapper wrapper__modeling\">\n            <h2>Visualization</h2>\n            <form>\n                <app-input *ngFor=\"let input of inputs;\"\n                           [app-input-data]=\"input\"\n                           [mdTooltip]=\"input.toolTip\"\n                           [mdTooltipPosition]=\"TOOLTIP_POS\"\n                           [mdTooltipShowDelay]=\"TOOLTIP_D\"\n                           class=\"modeling__inputs\">\n                </app-input>\n                <button md-raised-button class=\"modeling__btn\" #launch>Launch</button>\n                <progress-spinner-d [spinner-start-val]=\"spn_state_val\"\n                                    [@openHide]=\"spn_tgl\">\n                </progress-spinner-d>\n            </form>\n            <div id=\"graphView\" #graphView></div>\n        </section>",
        styleUrls: ['modeling.component.css'],
        animations: [
            AnimationsServices.animatonThreeStates('routeAnimationRight', { opacity: 1, transform: 'translateX(0)' }, [{ opacity: 0, transform: 'translateX(100%)' }, { opacity: 0, transform: 'translateX(100%)' }], ['0.4s ease-in', '0.4s ease-out']),
            AnimationsServices.animatonTwoStates('openHide', ['in', 'out'], [{ display: 'block', opacity: 1, transform: 'translateZ(0)' }, { display: 'none', opacity: 0, transform: 'translateZ(0)' }], ['300ms ease-in', '200ms ease-out'])
        ],
        providers: [
            ComputationService,
            ErrorHandlerService,
            SpecificService,
            DialogsService,
            DOMService,
            D3Service,
        ]
    }),
    __metadata("design:paramtypes", [D3Service,
        ComputationService,
        ErrorHandlerService,
        SpecificService,
        DialogsService,
        DOMService,
        Store,
        Renderer2,
        MdDialog])
], ModelingComponent);
export { ModelingComponent };
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
