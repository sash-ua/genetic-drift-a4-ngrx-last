import {ComponentFixture, TestBed, async, inject} from "@angular/core/testing";
import {browser, by, element, protractor} from "protractor";
import {Observable} from "rxjs/Observable";

export type E2E = {x: number, y: number}

export const swipeTest = (st: E2E, end: E2E) => {
    return Observable.create((o)=>{
        o.next(browser.touchActions()
            .tapAndHold(st)
            .move(end)
            .release(end)
            .perform());
    });
};

describe('E2E, genetic drift: ', function() {
    const stSwipePoint: E2E = {x: 200, y: 200};
    beforeEach(async () => {
        return await browser.get('/');
    });
    it('1 should get a current URL after rendered', function() {
        expect<any>(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/instruction');
    });
    it('2 should get a title', function() {
        expect<any>(browser.getTitle()).toEqual('Genetic Drift');
    });
    it('3 should check proper h1, h2 txt content while on Introduction page', () => {
        expect<any>(element.all(by.css('h1')).first().getText()).toEqual('Genetic drift');
        expect<any>(element.all(by.css('h2')).first().getText()).toEqual('Introduction');
    });
    it('4 should check proper h1, h2 txt content while on Visualization page', () => {
        browser.get('#/modeling');
        expect<any>(element.all(by.css('h1')).first().getText()).toEqual('Genetic drift');
        expect<any>(element.all(by.css('h2')).first().getText()).toEqual('Visualization');
    });
    it('5 should release swipe from right to left, start on Introduction page', ()=>{
        swipeTest(stSwipePoint, {x: 100, y: 200}).subscribe((r)=>{
            expect<any>(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/modeling');
        });
    });
    it('6 should release swipe from left to right, start on Visualization page', ()=>{
        browser.get('#/modeling', 1000);
        swipeTest(stSwipePoint, {x: 300, y: 200}).subscribe(()=>{
            expect<any>(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/instruction');
        });
    });
    it('7 should release swipe from top to bottom, start on Visualization page, nothing happen', ()=>{
        browser.get('#/modeling');
        swipeTest(stSwipePoint, {x: 200, y: 100}).subscribe(()=>{
            expect<any>(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/modeling');
        });
    });
    it('8 should release swipe from bottom to top, start on Visualization page, nothing happen', ()=>{
        browser.get('#/modeling');
        swipeTest(stSwipePoint, {x: 200, y: 300}).subscribe(()=>{
            expect<any>(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/modeling');
        });
    });
    it('9 should release swipe from top to bottom, start on Introduction page, nothing happen', ()=>{
        swipeTest(stSwipePoint, {x: 200, y: 100}).subscribe(()=>{
            expect<any>(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/instruction');
        });
    });
    it('10 should release swipe from bottom to top, start on Introduction page, nothing happen', ()=>{
        swipeTest(stSwipePoint, {x: 200, y: 300}).subscribe(()=>{
            expect<any>(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/instruction');
        });
    });
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.