import {
    Component, HostListener, HostBinding, ViewChild, ElementRef, AfterViewInit
} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/let';
import {D3Service} from "../../services/d3.service";
import {ComputationService} from "../../services/computation.service";
import {ErrorHandlerService} from "../../services/error.handler.service";
import {DialogsService} from "../../services/dialogs.service";
import {Inputs, svgAttributes} from "../../types/types";
import {DOMService} from "../../services/dom.service";
import {AnimationsServices} from "../../services/animations.service";
import {SpecificService} from "../../services/specific.service";

import {Store} from "@ngrx/store";
import * as rootReducer from '../../store.reducers/index';
import {
    StartSpinnerAnim, EndSpinnerAnim, SpnStage0, SpnStage2,
    SpnStage3, GetInputs
} from "../../store.actions/modeling.action";

@Component({
    moduleId: module.id,
    template:
    `<section class="wrapper wrapper__modeling">
        <h2>Visualization</h2>
        <form>
            <app-input *ngFor="let input of inputs;" 
                [app-input-data]="input"
                [mdTooltip]="input.toolTip"
                [mdTooltipPosition]="TOOLTIPPOS"
                [mdTooltipShowDelay]="TOOLTIPD"
                class="modeling__inputs">
            </app-input>
            <button md-raised-button class="modeling__btn" #launch>Launch</button>
            <progress-spinner-i [spinner-start-val]="spStVal"
                                [@openHide]="spTgl">   
            </progress-spinner-i>       
        </form>
        <div id="graphView" #graphView></div>
    </section>`,
    styleUrls: ['modeling.component.css'],
    animations: [
        AnimationsServices.animatonThreeStates(
            'routeAnimationRight',
            {opacity: 1, transform: 'translateX(0)'},
            [{opacity: 0, transform: 'translateX(100%)'}, {opacity: 0, transform: 'translateX(100%)'}],
            ['0.4s ease-in', '0.4s ease-out']
        ),
        AnimationsServices.animatonTwoStates(
            'openHide',
            ['in', 'out'],
            [{display: 'block', opacity: 1, transform: 'translateZ(0)'},{display: 'none', opacity: 0, transform: 'translateZ(0)'}],
            ['300ms ease-in', '200ms ease-out']
        )
    ],
    providers: [
        ComputationService,
        ErrorHandlerService,
        SpecificService,
        DialogsService,
        DOMService,

    ]
})
export class ModelingComponent implements AfterViewInit{
    MWTITLE: string ;
    SVGATTRS: svgAttributes;
    SVGCOMPS: Array<string>;
    TOOLTIPD: number;
    TOOLTIPPOS: string;
    inputs: Inputs;
    spTgl: string;
    spStVal: number;

    constructor(
        public D3: D3Service,
        public CS: ComputationService,
        public ES: ErrorHandlerService,
        public SS: SpecificService,
        public DS: DialogsService,
        public DOMS: DOMService,
        private store: Store<rootReducer.State>,
    ){
        // Can be used combineLatest()
        this.store.select(rootReducer.MODELING_INIT)
            .subscribe(
                (v: any[]) => {
                    [this.SVGCOMPS, this.SVGATTRS, this.MWTITLE, this.TOOLTIPPOS, this.TOOLTIPD, this.spTgl, this.spStVal, this.inputs] = v;
                },
                (e) => {this.ES.handleError(e)}
            );
    }

    @ViewChild("launch", {read: ElementRef}) launch: ElementRef;
    @ViewChild("graphView", {read: ElementRef}) graphView: ElementRef;
    @HostBinding('@routeAnimationRight') routeAnimationRight = true;
    @HostBinding('style.position')  position = 'absolute';

    // Set event listener on the host.
    @HostListener('click', ['$event']) clickHandler(e: Event): void {
        const TARGET: any = e.target;
        if(this.DOMS.compare(TARGET, this.SVGCOMPS)){
            const SVG = this.DOMS.findHTMLElement(TARGET, 'svg');
            if(SVG.getAttribute('data-D3-graph')){
                const SVGClONE = SVG.cloneNode(true);
                this.DOMS.attrSetter(SVGClONE, this.SVGATTRS);
                this.DS.confirm(this.MWTITLE, SVGClONE)
            }
        }
    };

    ngAfterViewInit(){
        const GV: HTMLElement = this.graphView.nativeElement;
        // Generate graph while rendering page.
        this.render(this.inputs, GV);
        // Button 'Lunch' handler. Produce D3 Graph after clicking and manage spinner.
        Observable.fromEvent(this.launch.nativeElement, 'click')
            .let((obs: Observable<{}>) =>
                obs.do(()=>{this.store.dispatch(new SpnStage0);})
                    .debounceTime(4)
                    .do(()=>{this.store.dispatch(new StartSpinnerAnim);})
            )
            .debounceTime(300)
            .do(()=> {
                this.store.dispatch(new SpnStage2);
                this.store.dispatch(new GetInputs(this.SS.collectionDataInputs('input')));
                this.render(this.inputs, GV);
            })
            .debounceTime(300)
            .let((obs: Observable<any>) =>
                obs.do(()=>{this.store.dispatch(new SpnStage3);})
                    .debounceTime(100)
                    .do(()=>{this.store.dispatch(new EndSpinnerAnim);})
            )
            .subscribe(
                () => {},
                (e: Error) => {this.ES.handleError(e);}
            );
    }

    // Render array type of Inputs with D3
    render(inputs: Inputs, view: HTMLElement): void {
        const NG = this.CS.arrG(
            this.CS.NGen,
            this.CS.NRandom,
            inputs[0].preDefData,
            inputs[6].preDefData,
            inputs[5].preDefData,
            inputs[4].preDefData
        )(
            [inputs[1].preDefData]
        );
        // Draw chart
        this.D3.drawChart(
            this.CS.arrG(
                this.CS.cmptnAlleles(
                    this.CS.bounchCoin1,
                    inputs[3].preDefData,
                    this.CS.tossing1
                ),
                NG
            )(
                [inputs[2].preDefData]
            ),
            'Generations',
            'A1',
            ['Eff. population size:', this.CS.harmonic1(NG), 'Generations: ', inputs[1].preDefData ],
            inputs[1].preDefData,
            view
        );
    }
}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.