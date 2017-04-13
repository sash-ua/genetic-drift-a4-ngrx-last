"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var computation_service_1 = require("./computation.service");
var index_1 = require("../testing/index");
describe('ComputationService: ', function () {
    var fixture, serv;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                computation_service_1.ComputationService
            ]
        });
        serv = testing_1.TestBed.get(computation_service_1.ComputationService);
    });
    it('rndmGen - produce number from 1 to 10 except 10) ', function () {
        var x = computation_service_1.ComputationService.rndmGen(1, 10);
        expect(x).toMatch(/\d+/);
        expect(typeof x).toBe('number');
        expect(x).toBeGreaterThanOrEqual(1);
        expect(x).toBeLessThan(10);
    });
    it('arrG - should return an array', function () {
        var f = function (arg, v, i, arr) {
            return v + 1;
        };
        var x = serv.arrG(f)([3]);
        expect(x).toEqual([1, 1, 1]);
    });
    it('tossing1 - should produce randomly boolean', function () {
        var x = serv.tossing1(0.5);
        expect(typeof x).toBe('boolean');
    });
    it('bounchCoin1 - should produce percentage of \'true\' in \'edge\' cases, the range [0, 1]', function () {
        var x = index_1.inInterval(serv.bounchCoin1([serv.tossing1, 5, 0.5]), [0, 1]);
        expect(typeof x).toBe('number');
    });
    it('bounchCoin1 - should produce percentage of \'true\' in \'edge\' = 0 cases, the range [0, 1]', function () {
        var x = index_1.inInterval(serv.bounchCoin1([serv.tossing1, 0, 0.5]), [0, 1]);
        expect(x).toEqual(0);
        expect(typeof x).toBe('number');
    });
    it('effPopSize1 - should return number', function () {
        expect(serv.effPopSize1(10)).toEqual(0.1);
        expect(serv.effPopSize1(0)).toEqual(0);
    });
    it('harmonic1 - should return number', function () {
        var x = serv.harmonic1([2, 2, 2, 2, 2]);
        expect(x).toEqual(2);
        x = serv.harmonic1([2, 5, 15, 30, 60]);
        expect(x).toEqual(6);
        x = serv.harmonic1([2, 2, 2, 3, 3]);
        expect(x).toEqual(2);
    });
    it('NRandom - should return number', function () {
        var x = serv.NRandom([100, 0.15, 0.1, 0]);
        expect(typeof x).toBe('number');
    });
    it('NGen - should return number', function () {
        var n0 = 100, growth = 0.15;
        var x = serv.NGen([serv.NRandom, n0, growth, 0.1, 0], 1, 0);
        expect(x).toEqual(n0);
        x = index_1.inInterval(serv.NGen([serv.NRandom, n0, growth, 0.1, 0], 1, 1), [0, n0 + (n0 * growth)]);
        expect(typeof x).toBe('number');
    });
    it('cmptnAlleles - should produce array of arrays', function () {
        var x = serv.cmptnAlleles(serv.bounchCoin1, 0.5, serv.tossing1)([[12, 5, 15, 30, 60]]);
        expect(x.some(function (v) {
            return (typeof v === "number" && index_1.inInterval(v, [0, 1]));
        })).toBeTruthy();
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
