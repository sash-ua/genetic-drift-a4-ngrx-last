import { reducer } from './index.js';
import { SpecificService } from "../services/specific.service";
import { inInterval } from "../testing/index";
describe('Store tests', function () {
    it('store.paths', function () {
        var state;
        state = reducer({ modeling: { SPN_TGL: 'out', SPN_STATE_VAL: 0, INPUTS: [{ preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2' }, { preDefData: 100, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 2, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 0.5, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164' }, { preDefData: 0.1, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2' }, { preDefData: 0.15, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77' }, { preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09' }], TOOLTIP_D: 100, TOOLTIP_POS: 'above', MW_TITLE: 'Graph', SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', 425]], SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path'] }, router: { path: '' } }, { type: '[Router] Update Location', payload: { path: '/modeling' } });
        expect(state).toEqual({ modeling: { SPN_TGL: 'out', SPN_STATE_VAL: 0, INPUTS: [{ preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2' }, { preDefData: 100, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 2, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 0.5, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164' }, { preDefData: 0.1, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2' }, { preDefData: 0.15, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77' }, { preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09' }], TOOLTIP_D: 100, TOOLTIP_POS: 'above', MW_TITLE: 'Graph', SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', 425]], SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path'] }, router: { path: '/modeling' } });
        state = reducer({ modeling: { SPN_TGL: 'out', SPN_STATE_VAL: 0, INPUTS: [{ preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2' }, { preDefData: 100, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 2, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 0.5, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164' }, { preDefData: 0.1, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2' }, { preDefData: 0.15, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77' }, { preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09' }], TOOLTIP_D: 100, TOOLTIP_POS: 'above', MW_TITLE: 'Graph', SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', 425]], SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path'] }, router: { path: '/modeling' } }, { type: '[Router] Update Location', payload: { path: '/instruction' } });
        expect(state).toEqual({ modeling: { SPN_TGL: 'out', SPN_STATE_VAL: 0, INPUTS: [{ preDefData: 1000, hint: 'Population', dvdrColor: 'warn', interval: [2], toolTip: 'Integer number from 2' }, { preDefData: 100, hint: 'Generations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 2, hint: 'Simulations', dvdrColor: 'warn', interval: [1], toolTip: 'Integer number from 1' }, { preDefData: 0.5, hint: 'Init. Alleles Balance', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.164' }, { preDefData: 0.1, hint: 'Bottle Neck Probability', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.2' }, { preDefData: 0.15, hint: 'Natural decline', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.77' }, { preDefData: 0.2, hint: 'Natural growth', dvdrColor: 'primary', interval: [0, 1], toolTip: 'Value from 0 to 1, for ex. 0.09' }], TOOLTIP_D: 100, TOOLTIP_POS: 'above', MW_TITLE: 'Graph', SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', 425]], SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path'] }, router: { path: '/instruction' } });
    });
    it('store.variables, simple', function () {
        // SPN_STATE_VAL randomly calculated except cases from 'store.variables, simple'
        var width = SpecificService.dimension(0.35, 0.4);
        var state;
        state = reducer({
            modeling: {
                SPN_TGL: 'out',
                SPN_STATE_VAL: 100,
                INPUTS: [{
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
                SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        }, { type: '[Modeling] out,0-0 Spinner' });
        expect(state).toEqual({
            modeling: {
                SPN_TGL: 'out',
                SPN_STATE_VAL: 0,
                INPUTS: [{
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
                SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        });
        state = reducer({
            modeling: {
                SPN_TGL: 'out',
                SPN_STATE_VAL: 0,
                INPUTS: [{
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
                SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        }, { type: '[Modeling] out,0-0 Spinner' });
        expect(state).toEqual({
            modeling: {
                SPN_TGL: 'out',
                SPN_STATE_VAL: 0,
                INPUTS: [{
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
                SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        });
        state = reducer({
            modeling: {
                SPN_TGL: 'in',
                SPN_STATE_VAL: 89,
                INPUTS: [{
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
                SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        }, { type: '[Modeling] out,100-out Spinner' });
        expect(state).toEqual({
            modeling: {
                SPN_TGL: 'out',
                SPN_STATE_VAL: 100,
                INPUTS: [{
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
                SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        });
    });
    it('store.variables, random 1', function () {
        var width = SpecificService.dimension(0.35, 0.4);
        var state;
        state = reducer({
            modeling: {
                SPN_TGL: 'out',
                SPN_STATE_VAL: 0,
                INPUTS: [{
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
                SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        }, { type: '[Modeling] in,rndm-in Spinner' });
        expect(state).toEqual({
            modeling: {
                SPN_TGL: 'in',
                SPN_STATE_VAL: inInterval(state.modeling.SPN_STATE_VAL, [15, 50]),
                INPUTS: [{
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
                SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        });
    });
    it('store.variables, random 2', function () {
        var width = SpecificService.dimension(0.35, 0.4);
        var state;
        state = reducer({
            modeling: {
                SPN_TGL: 'in',
                SPN_STATE_VAL: 39,
                INPUTS: [{
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
                SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        }, { type: '[Modeling] in,rndm-1 Spinner' });
        expect(state).toEqual({
            modeling: {
                SPN_TGL: 'in',
                SPN_STATE_VAL: inInterval(state.modeling.SPN_STATE_VAL, [55, 70]),
                INPUTS: [{
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
                SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        });
    });
    it('store.variables, random 3', function () {
        var width = SpecificService.dimension(0.35, 0.4);
        var state;
        state = reducer({
            modeling: {
                SPN_TGL: 'in',
                SPN_STATE_VAL: 55,
                INPUTS: [{
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
                SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        }, { payload: [1000, 100, 2, 0.5, 0.1, 0.15, 0.2], type: '[Modeling] get inputs' });
        expect(state).toEqual({
            modeling: {
                SPN_TGL: 'in',
                SPN_STATE_VAL: inInterval(state.modeling.SPN_STATE_VAL, [25, 50]),
                INPUTS: [{
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
                SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        });
    });
    it('store.variables, random 4', function () {
        var width = SpecificService.dimension(0.35, 0.4);
        var state;
        state = reducer({
            modeling: {
                SPN_TGL: 'in',
                SPN_STATE_VAL: 31,
                INPUTS: [{
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
                SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
                TOOLTIP_D: 100,
                TOOLTIP_POS: 'above',
                MW_TITLE: 'Graph',
                SVG_COMPS: ['svg', 'g', 'tspan', 'text', 'path']
            }, router: { path: '/modeling' }
        }, { type: '[Modeling] in,rndm-2 Spinner' });
        expect(state).toEqual({
            modeling: {
                SPN_TGL: 'in',
                SPN_STATE_VAL: inInterval(state.modeling.SPN_STATE_VAL, [75, 95]),
                INPUTS: [{
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
                SVG_ATTRS: [['preserveAspectRatio', 'xMidYMid meet'], ['viewBox', '0 0 305 305'], ['height', '100%'], ['width', width]],
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
//# sourceMappingURL=store.spec.js.map