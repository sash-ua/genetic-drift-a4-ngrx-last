var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { browser, by, element } from "protractor";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime';
import { TEST_URL } from "../protractor.conf";
export var swipeTest = function (st, end) {
    return Observable.create(function (o) {
        o.next(browser.touchActions()
            .tapAndHold(st)
            .move(end)
            .release(end)
            .perform());
    });
};
export var path = function () {
    return browser.getCurrentUrl();
};
describe('E2E, genetic drift: ', function () {
    var _this = this;
    var stSwipePoint = { x: 100, y: 100 };
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, browser.get('/')];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); });
    it('1 should get a current URL after rendered', function () {
        expect(browser.getCurrentUrl()).toEqual(TEST_URL + "#/instruction");
    });
    it('2 should get a title', function () {
        expect(browser.getTitle()).toEqual('Genetic Drift');
    });
    it('3 should check proper h1, h2 txt content while on Introduction page', function () {
        expect(element.all(by.css('h1')).first().getText()).toEqual('Genetic drift');
        expect(element.all(by.css('h2')).first().getText()).toEqual('Introduction');
    });
    it('4 should check proper h1, h2 txt content while on Visualization page', function () {
        browser.get(TEST_URL + "#/modeling");
        expect(element.all(by.css('h1')).first().getText()).toEqual('Genetic drift');
        expect(element.all(by.css('h2')).first().getText()).toEqual('Visualization');
    });
    it('5 should release swipe from left to right, start on Visualization page', function () {
        browser.get(TEST_URL + "#/modeling");
        swipeTest(stSwipePoint, { x: 200, y: 100 }).subscribe(function () {
            expect(browser.getCurrentUrl()).toEqual(TEST_URL + "#/instruction");
        });
    });
    it('6 should release swipe from right to left, start on Introduction page', function () {
        swipeTest(stSwipePoint, { x: 0, y: 100 }).subscribe(function (r) {
            expect(browser.getCurrentUrl()).toEqual(TEST_URL + "#/modeling");
        });
    });
    it('7 should release swipe from top to bottom, start on Visualization page, nothing happen', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            browser.get(TEST_URL + "#/modeling");
            swipeTest(stSwipePoint, { x: 100, y: 0 }).subscribe(function () {
                expect(browser.getCurrentUrl()).toEqual(TEST_URL + "#/modeling");
            });
            return [2 /*return*/];
        });
    }); });
    it('8 should release swipe from bottom to top, start on Visualization page, nothing happen', function () {
        browser.get(TEST_URL + "#/modeling");
        swipeTest(stSwipePoint, { x: 100, y: 200 }).subscribe(function () {
            expect(browser.getCurrentUrl()).toEqual(TEST_URL + "#/modeling");
        });
    });
    it('9 should release swipe from top to bottom, start on Introduction page, nothing happen', function () {
        swipeTest(stSwipePoint, { x: 100, y: 0 }).subscribe(function () {
            expect(browser.getCurrentUrl()).toEqual(TEST_URL + "#/instruction");
        });
    });
    it('10 should release swipe from bottom to top, start on Introduction page, nothing happen', function () {
        swipeTest(stSwipePoint, { x: 100, y: 200 }).subscribe(function () {
            expect(browser.getCurrentUrl()).toEqual(TEST_URL + "#/instruction");
        });
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
