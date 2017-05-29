"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("./index.js");
var specific_service_1 = require("../services/specific.service");
var index_1 = require("../testing/index");
var store_1 = require("@ngrx/store");
var injectors_1 = require("../testing/injectors");
describe('Store: ', function () {
    it('should provide an Observable Store', function () {
        var reducers = {
            counter1: 1,
            counter2: 2,
            counter3: 3
        };
        var initialState = {};
        var injector = injectors_1.createInjector(store_1.StoreModule.provideStore(reducers, { type: initialState }));
        var store = injector.get(store_1.Store);
        expect(store).toBeDefined();
    });
    it('store.paths', function () {
        var state;
        state = index_js_1.reducer({ modeling: { spn_tgl: 'out', spn_state_val: 0, inputs: [{ preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2' }, { preDefData: 100, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 2, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 0.5, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164' }, { preDefData: 0.1, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2' }, { preDefData: 0.15, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77' }, { preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09' }], TOOLTIP_D: 100, TOOLTIP_POS: 'above', MW_TITLE: 'Graph', svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', 425]], SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path'] }, router: { path: '' } }, { type: '[Router] Update Location', payload: { path: '/modeling' } });
        expect(state).toEqual({ modeling: { spn_tgl: 'out', spn_state_val: 0, inputs: [{ preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2' }, { preDefData: 100, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 2, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 0.5, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164' }, { preDefData: 0.1, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2' }, { preDefData: 0.15, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77' }, { preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09' }], TOOLTIP_D: 100, TOOLTIP_POS: 'above', MW_TITLE: 'Graph', svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', 425]], SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path'] }, router: { path: '/modeling' } });
        state = index_js_1.reducer({ modeling: { spn_tgl: 'out', spn_state_val: 0, inputs: [{ preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2' }, { preDefData: 100, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 2, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 0.5, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164' }, { preDefData: 0.1, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2' }, { preDefData: 0.15, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77' }, { preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09' }], TOOLTIP_D: 100, TOOLTIP_POS: 'above', MW_TITLE: 'Graph', svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', 425]], SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path'] }, router: { path: '/modeling' } }, { type: '[Router] Update Location', payload: { path: '/instruction' } });
        expect(state).toEqual({ modeling: { spn_tgl: 'out', spn_state_val: 0, inputs: [{ preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2' }, { preDefData: 100, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 2, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 0.5, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164' }, { preDefData: 0.1, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2' }, { preDefData: 0.15, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77' }, { preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09' }], TOOLTIP_D: 100, TOOLTIP_POS: 'above', MW_TITLE: 'Graph', svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', 425]], SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path'] }, router: { path: '/instruction' } });
    });
    it('store.variables, simple', function () {
        // spn_state_val randomly calculated except cases from 'store.variables, simple'
        var width = specific_service_1.SpecificService.dimension(0.35, 0.4);
        var state;
        state = index_js_1.reducer({
            modeling: {
                spn_tgl: 'out',
                spn_state_val: 100,
                inputs: [{
                        preDefData: 1000,
                        hint: 'Population',
                        dvdrColor: 'warn',
                        interval: [2],
                        toolTip: 'Integer number from 2'
                    }, {
                        preDefData: 100,
                        hint: 'Generations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 2,
                        hint: 'Simulations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 0.5,
                        hint: 'Init. Alleles Balance',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.164'
                    }, {
                        preDefData: 0.1,
                        hint: 'Bottle Neck Probability',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.2'
                    }, {
                        preDefData: 0.15,
                        hint: 'Natural decline',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.77'
                    }, {
                        preDefData: 0.2,
                        hint: 'Natural growth',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.09'
                    }],
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        }, { type: '[Modeling] out,0-0 Spinner' });
        expect(state).toEqual({
            modeling: {
                spn_tgl: 'out',
                spn_state_val: 0,
                inputs: [{
                        preDefData: 1000,
                        hint: 'Population',
                        dvdrColor: 'warn',
                        interval: [2],
                        toolTip: 'Integer number from 2'
                    }, {
                        preDefData: 100,
                        hint: 'Generations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 2,
                        hint: 'Simulations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 0.5,
                        hint: 'Init. Alleles Balance',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.164'
                    }, {
                        preDefData: 0.1,
                        hint: 'Bottle Neck Probability',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.2'
                    }, {
                        preDefData: 0.15,
                        hint: 'Natural decline',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.77'
                    }, {
                        preDefData: 0.2,
                        hint: 'Natural growth',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.09'
                    }],
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        });
        state = index_js_1.reducer({
            modeling: {
                spn_tgl: 'out',
                spn_state_val: 0,
                inputs: [{
                        preDefData: 1000,
                        hint: 'Population',
                        dvdrColor: 'warn',
                        interval: [2],
                        toolTip: 'Integer number from 2'
                    }, {
                        preDefData: 100,
                        hint: 'Generations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 2,
                        hint: 'Simulations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 0.5,
                        hint: 'Init. Alleles Balance',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.164'
                    }, {
                        preDefData: 0.1,
                        hint: 'Bottle Neck Probability',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.2'
                    }, {
                        preDefData: 0.15,
                        hint: 'Natural decline',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.77'
                    }, {
                        preDefData: 0.2,
                        hint: 'Natural growth',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.09'
                    }],
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        }, { type: '[Modeling] out,0-0 Spinner' });
        expect(state).toEqual({
            modeling: {
                spn_tgl: 'out',
                spn_state_val: 0,
                inputs: [{
                        preDefData: 1000,
                        hint: 'Population',
                        dvdrColor: 'warn',
                        interval: [2],
                        toolTip: 'Integer number from 2'
                    }, {
                        preDefData: 100,
                        hint: 'Generations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 2,
                        hint: 'Simulations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 0.5,
                        hint: 'Init. Alleles Balance',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.164'
                    }, {
                        preDefData: 0.1,
                        hint: 'Bottle Neck Probability',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.2'
                    }, {
                        preDefData: 0.15,
                        hint: 'Natural decline',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.77'
                    }, {
                        preDefData: 0.2,
                        hint: 'Natural growth',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.09'
                    }],
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        });
        state = index_js_1.reducer({
            modeling: {
                spn_tgl: 'in',
                spn_state_val: 89,
                inputs: [{
                        preDefData: 1000,
                        hint: 'Population',
                        dvdrColor: 'warn',
                        interval: [2],
                        toolTip: 'Integer number from 2'
                    }, {
                        preDefData: 100,
                        hint: 'Generations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 2,
                        hint: 'Simulations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 0.5,
                        hint: 'Init. Alleles Balance',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.164'
                    }, {
                        preDefData: 0.1,
                        hint: 'Bottle Neck Probability',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.2'
                    }, {
                        preDefData: 0.15,
                        hint: 'Natural decline',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.77'
                    }, {
                        preDefData: 0.2,
                        hint: 'Natural growth',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.09'
                    }],
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        }, { type: '[Modeling] out,100-out Spinner' });
        expect(state).toEqual({
            modeling: {
                spn_tgl: 'out',
                spn_state_val: 100,
                inputs: [{
                        preDefData: 1000,
                        hint: 'Population',
                        dvdrColor: 'warn',
                        interval: [2],
                        toolTip: 'Integer number from 2'
                    }, {
                        preDefData: 100,
                        hint: 'Generations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 2,
                        hint: 'Simulations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 0.5,
                        hint: 'Init. Alleles Balance',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.164'
                    }, {
                        preDefData: 0.1,
                        hint: 'Bottle Neck Probability',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.2'
                    }, {
                        preDefData: 0.15,
                        hint: 'Natural decline',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.77'
                    }, {
                        preDefData: 0.2,
                        hint: 'Natural growth',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.09'
                    }],
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        });
    });
    it('store.variables, random 1', function () {
        var width = specific_service_1.SpecificService.dimension(0.35, 0.4);
        var state;
        state = index_js_1.reducer({
            modeling: {
                spn_tgl: 'out',
                spn_state_val: 0,
                inputs: [{
                        preDefData: 1000,
                        hint: 'Population',
                        dvdrColor: 'warn',
                        interval: [2],
                        toolTip: 'Integer number from 2'
                    }, {
                        preDefData: 100,
                        hint: 'Generations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 2,
                        hint: 'Simulations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 0.5,
                        hint: 'Init. Alleles Balance',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.164'
                    }, {
                        preDefData: 0.1,
                        hint: 'Bottle Neck Probability',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.2'
                    }, {
                        preDefData: 0.15,
                        hint: 'Natural decline',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.77'
                    }, {
                        preDefData: 0.2,
                        hint: 'Natural growth',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.09'
                    }],
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        }, { type: '[Modeling] in,rndm-in Spinner' });
        expect(state).toEqual({
            modeling: {
                spn_tgl: 'in',
                spn_state_val: index_1.inInterval(state.modeling.spn_state_val, [15, 50]),
                inputs: [{
                        preDefData: 1000,
                        hint: 'Population',
                        dvdrColor: 'warn',
                        interval: [2],
                        toolTip: 'Integer number from 2'
                    }, {
                        preDefData: 100,
                        hint: 'Generations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 2,
                        hint: 'Simulations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 0.5,
                        hint: 'Init. Alleles Balance',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.164'
                    }, {
                        preDefData: 0.1,
                        hint: 'Bottle Neck Probability',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.2'
                    }, {
                        preDefData: 0.15,
                        hint: 'Natural decline',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.77'
                    }, {
                        preDefData: 0.2,
                        hint: 'Natural growth',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.09'
                    }],
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        });
    });
    it('store.variables, random 2', function () {
        var width = specific_service_1.SpecificService.dimension(0.35, 0.4);
        var state;
        state = index_js_1.reducer({
            modeling: {
                spn_tgl: 'in',
                spn_state_val: 39,
                inputs: [{
                        preDefData: 1000,
                        hint: 'Population',
                        dvdrColor: 'warn',
                        interval: [2],
                        toolTip: 'Integer number from 2'
                    }, {
                        preDefData: 100,
                        hint: 'Generations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 2,
                        hint: 'Simulations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 0.5,
                        hint: 'Init. Alleles Balance',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.164'
                    }, {
                        preDefData: 0.1,
                        hint: 'Bottle Neck Probability',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.2'
                    }, {
                        preDefData: 0.15,
                        hint: 'Natural decline',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.77'
                    }, {
                        preDefData: 0.2,
                        hint: 'Natural growth',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.09'
                    }],
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        }, { type: '[Modeling] in,rndm-1 Spinner' });
        expect(state).toEqual({
            modeling: {
                spn_tgl: 'in',
                spn_state_val: index_1.inInterval(state.modeling.spn_state_val, [55, 70]),
                inputs: [{
                        preDefData: 1000,
                        hint: 'Population',
                        dvdrColor: 'warn',
                        interval: [2],
                        toolTip: 'Integer number from 2'
                    }, {
                        preDefData: 100,
                        hint: 'Generations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 2,
                        hint: 'Simulations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 0.5,
                        hint: 'Init. Alleles Balance',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.164'
                    }, {
                        preDefData: 0.1,
                        hint: 'Bottle Neck Probability',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.2'
                    }, {
                        preDefData: 0.15,
                        hint: 'Natural decline',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.77'
                    }, {
                        preDefData: 0.2,
                        hint: 'Natural growth',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.09'
                    }],
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        });
    });
    it('store.variables, random 3', function () {
        var width = specific_service_1.SpecificService.dimension(0.35, 0.4);
        var state;
        state = index_js_1.reducer({
            modeling: {
                spn_tgl: 'in',
                spn_state_val: 55,
                inputs: [{
                        preDefData: 1000,
                        hint: 'Population',
                        dvdrColor: 'warn',
                        interval: [2],
                        toolTip: 'Integer number from 2'
                    }, {
                        preDefData: 100,
                        hint: 'Generations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 2,
                        hint: 'Simulations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 0.5,
                        hint: 'Init. Alleles Balance',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.164'
                    }, {
                        preDefData: 0.1,
                        hint: 'Bottle Neck Probability',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.2'
                    }, {
                        preDefData: 0.15,
                        hint: 'Natural decline',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.77'
                    }, {
                        preDefData: 0.2,
                        hint: 'Natural growth',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.09'
                    }],
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        }, { payload: [1000, 100, 2, 0.5, 0.1, 0.15, 0.2], type: '[Modeling] get inputs' });
        expect(state).toEqual({
            modeling: {
                spn_tgl: 'in',
                spn_state_val: index_1.inInterval(state.modeling.spn_state_val, [25, 50]),
                inputs: [{
                        preDefData: 1000,
                        hint: 'Population',
                        dvdrColor: 'warn',
                        interval: [2],
                        toolTip: 'Integer number from 2'
                    }, {
                        preDefData: 100,
                        hint: 'Generations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 2,
                        hint: 'Simulations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 0.5,
                        hint: 'Init. Alleles Balance',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.164'
                    }, {
                        preDefData: 0.1,
                        hint: 'Bottle Neck Probability',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.2'
                    }, {
                        preDefData: 0.15,
                        hint: 'Natural decline',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.77'
                    }, {
                        preDefData: 0.2,
                        hint: 'Natural growth',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.09'
                    }],
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        });
    });
    it('store.variables, random 4', function () {
        var width = specific_service_1.SpecificService.dimension(0.35, 0.4);
        var state;
        state = index_js_1.reducer({
            modeling: {
                spn_tgl: 'in',
                spn_state_val: 31,
                inputs: [{
                        preDefData: 1000,
                        hint: 'Population',
                        dvdrColor: 'warn',
                        interval: [2],
                        toolTip: 'Integer number from 2'
                    }, {
                        preDefData: 100,
                        hint: 'Generations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 2,
                        hint: 'Simulations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 0.5,
                        hint: 'Init. Alleles Balance',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.164'
                    }, {
                        preDefData: 0.1,
                        hint: 'Bottle Neck Probability',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.2'
                    }, {
                        preDefData: 0.15,
                        hint: 'Natural decline',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.77'
                    }, {
                        preDefData: 0.2,
                        hint: 'Natural growth',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.09'
                    }],
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        }, { type: '[Modeling] in,rndm-2 Spinner' });
        expect(state).toEqual({
            modeling: {
                spn_tgl: 'in',
                spn_state_val: index_1.inInterval(state.modeling.spn_state_val, [75, 95]),
                inputs: [{
                        preDefData: 1000,
                        hint: 'Population',
                        dvdrColor: 'warn',
                        interval: [2],
                        toolTip: 'Integer number from 2'
                    }, {
                        preDefData: 100,
                        hint: 'Generations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 2,
                        hint: 'Simulations',
                        dvdrColor: 'warn',
                        interval: [1],
                        toolTip: 'Integer number from 1'
                    }, {
                        preDefData: 0.5,
                        hint: 'Init. Alleles Balance',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.164'
                    }, {
                        preDefData: 0.1,
                        hint: 'Bottle Neck Probability',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.2'
                    }, {
                        preDefData: 0.15,
                        hint: 'Natural decline',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.77'
                    }, {
                        preDefData: 0.2,
                        hint: 'Natural growth',
                        dvdrColor: 'primary',
                        interval: [0, 1],
                        toolTip: 'Value from 0 to 1, for ex. 0.09'
                    }],
                svg_attrs: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        });
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
