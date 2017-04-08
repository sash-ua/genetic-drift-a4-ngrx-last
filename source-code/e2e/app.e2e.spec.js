import { browser, by, element } from "protractor";
export function swipeE2e(st, end) {
    browser.touchActions()
        .tapAndHold(st)
        .move(end)
        .release(end)
        .perform();
}
describe('example-app App', function () {
    var stSwipePoint = { x: 200, y: 200 };
    it('should get a current URL after rendered', function () {
        browser.get('/');
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/instruction');
    });
    it('should get a title', function () {
        browser.get('/');
        expect(browser.getTitle()).toEqual('Genetic Drift');
    });
    it('should check proper h1, h2 txt content while on Introduction page', function () {
        browser.get('/');
        expect(element.all(by.css('h1')).first().getText()).toEqual('Genetic drift');
        expect(element.all(by.css('h2')).first().getText()).toEqual('Introduction');
    });
    it('should check proper h1, h2 txt content while on Visualization page', function () {
        browser.get('#/modeling');
        expect(element.all(by.css('h1')).first().getText()).toEqual('Genetic drift');
        expect(element.all(by.css('h2')).first().getText()).toEqual('Visualization');
    });
    it('should release swipe from right to left, start on Introduction page', function () {
        browser.get('/');
        swipeE2e(stSwipePoint, { x: 100, y: 200 });
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/modeling');
    });
    it('should release swipe from left to right, start on Visualization page', function () {
        browser.get('#/modeling');
        swipeE2e(stSwipePoint, { x: 300, y: 200 });
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/instruction');
    });
    it('should release swipe from top to bottom, start on Visualization page, nothing happen', function () {
        browser.get('#/modeling');
        swipeE2e(stSwipePoint, { x: 200, y: 100 });
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/modeling');
    });
    it('should release swipe from bottom to top, start on Visualization page, nothing happen', function () {
        browser.get('#/modeling');
        swipeE2e(stSwipePoint, { x: 200, y: 300 });
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/modeling');
    });
    it('should release swipe from top to bottom, start on Introduction page, nothing happen', function () {
        browser.get('/');
        swipeE2e(stSwipePoint, { x: 200, y: 100 });
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/instruction');
    });
    it('should release swipe from bottom to top, start on Introduction page, nothing happen', function () {
        browser.get('/');
        swipeE2e(stSwipePoint, { x: 200, y: 300 });
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/instruction');
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
//# sourceMappingURL=app.e2e.spec.js.map