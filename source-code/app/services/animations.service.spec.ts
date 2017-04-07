
import {AnimationsServices} from "./animations.service";
import {TestBed} from "@angular/core/testing";

describe('AnimationsServices: ', ()=>{
    const threeStates: AnimationsServices = { name: 'routeAnimationRight', definitions: [ Object({ type: 0, name: '*', styles: Object({ type: 6, styles: Object({ opacity: 1, transform: 'translateX(0)' }) }) }), Object({ type: 1, expr: ':enter', animation: [ Object({ type: 6, styles: Object({ opacity: 0, transform: 'translateX(100%)' }) }), Object({ type: 4, styles: null, timings: '0.4s ease-in' }) ] }), Object({ type: 1, expr: ':leave', animation: [ Object({ type: 4, styles: Object({ type: 6, styles: Object({ opacity: 0, transform: 'translateX(100%)' }) }), timings: '0.4s ease-out' }) ] }) ] };
    const twoStates: AnimationsServices = { name: 'openHide', definitions: [ Object({ type: 0, name: 'in', styles: Object({ type: 6, styles: Object({ display: 'block', opacity: 1, transform: 'translateZ(0)' }) }) }), Object({ type: 0, name: 'out', styles: Object({ type: 6, styles: Object({ display: 'none', opacity: 0, transform: 'translateZ(0)' }) }) }), Object({ type: 1, expr: 'in =>out', animation: [ Object({ type: 4, styles: null, timings: '300ms ease-in' }) ] }), Object({ type: 1, expr: 'out =>in', animation: [ Object({ type: 4, styles: null, timings: '200ms ease-out' }) ] }) ] };

    it('should create two states animation object', ()=>{
        let x = AnimationsServices.animatonTwoStates(
            'openHide',
            ['in', 'out'],
            [{display: 'block', opacity: 1, transform: 'translateZ(0)'},{display: 'none', opacity: 0, transform: 'translateZ(0)'}],
            ['300ms ease-in', '200ms ease-out']
        );
        expect(x).toEqual(twoStates);
    });
    it('should create three states animation object', ()=>{
        let x = AnimationsServices.animatonThreeStates(
            'routeAnimationRight',
            {opacity: 1, transform: 'translateX(0)'},
            [{opacity: 0, transform: 'translateX(100%)'}, {opacity: 0, transform: 'translateX(100%)'}],
            ['0.4s ease-in', '0.4s ease-out']
        );
        expect(x).toEqual(threeStates);
    });
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.