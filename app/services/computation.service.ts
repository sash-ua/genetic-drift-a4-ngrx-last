
import { Injectable } from '@angular/core';

@Injectable()
export class ComputationService {
    constructor() { }
    // Return random number from min to max (ex. max).
    static rndmGen(min: number, max: number): number{
        return Math.floor(Math.random()* (max - min) + min);
    }
    // Array generator
    arrG (func: Function, ...arg: Array<any>): Function{
        return (iteration: Array<number>): Array<any>  => {
            return new Array(iteration[0]).fill(0).map((v: any, i: number, arr: Array<number>) => func(arg, v, i, arr));
        };
    };
    // Randomly generate true  / false (heads / tail).
    tossing1 (p: number): boolean{
        return (Math.random() <= p);
    };
    // Calculation of results from function 'fn'. 'fn ' return true / false,
    // bounchCoin1 returns percentage of 'true' in 'edge' cases. Result (interval[0, 1]).
    bounchCoin1 ([fn, edge, p]: Array<any>): number {
        let h = 0,
            q = edge;
        while (edge--){
            if(fn(p)) {
                h++;
            }
        }
        return q ? h/q : q;
    };

    effPopSize1(N: number): number{
        return N ? 1/N : N;
    };
    // Calculate eff. population size
    harmonic1(generations: Array<number>): number{
        return Math.round(generations.length / generations.reduce(( acc, val ) => {
                return acc + this.effPopSize1( val );
            }, 0 ));
    };
    // growth, BNF & MD are from interval[0, 1].
    NRandom ([n0, growth, BNF, MD]: Array<number>): number {
        return Math.random() < BNF
            ? n0 + Math.floor(Math.random() * (1+ growth - MD) - (Math.random() * (n0 * (1 - (MD*2)))))
            : n0 + Math.floor(Math.random() * (1+ growth - MD));
    };
    // Calculate next generation size.
    // Take:
    // fn- function NRandom,
    // n0 - prev. population,
    // growth - max. population growth,
    // BNF - bottle neck factor,
    // MD - max. decrease of population,
    // s - v, i, arr from arrG.
    NGen([fn, ...args]: Array<any>, ...s: Array<any>): number{
        return (s[1] === 0 ) ? args[0] : fn([...args]);
    };
    // In context of this application.
    // cmptnAlleles get (bounchCoin1, origin percentage of one of alleles(initial 0.5), tossing1)([simulations] ) =>
    // Array of arrays(quantity depends of simulations) of p (for example: percentage of allele A1 in the genotype).
    // Every next p computed randomly, exclude first.
    // Result [[0.5, 0.48,...],[0.5, 0.7,...],...]
    cmptnAlleles (fn: Function, p: number, ...s: Array<Function>): Function {
        return ([arr]: Array<any>): Array<number> => {
            let a1 = p;
            return [a1].concat(arr.map((v: number, i: number, arr: Array<number>): number => {
                return a1 = fn([s[0], v, a1]);
            }))
        }
    };
}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.