/// <reference path="./jasmine-matchers.d.ts" />
////  Jasmine Custom Matchers ////
// Be sure to extend jasmine-matchers.d.ts when adding matchers
/// <reference path="./jasmine-matchers.d.ts" />
export default function addMatchers() {
    jasmine.addMatchers({
        toHaveText: toHaveText
    });
}
function toHaveText() {
    return {
        compare: function (actual, expectedText, expectationFailOutput) {
            var actualText = elementText(actual);
            var pass = actualText.indexOf(expectedText) > -1;
            var message = pass ? '' : composeMessage();
            return { pass: pass, message: message };
            function composeMessage() {
                var a = (actualText.length < 100 ? actualText : actualText.substr(0, 100) + '...');
                var efo = expectationFailOutput ? " '" + expectationFailOutput + "'" : '';
                return "Expected element to have text content '" + expectedText + "' instead of '" + a + "'" + efo;
            }
        }
    };
}
function elementText(n) {
    if (n instanceof Array) {
        return n.map(elementText).join('');
    }
    if (n.nodeType === Node.COMMENT_NODE) {
        return '';
    }
    if (n.nodeType === Node.ELEMENT_NODE && n.hasChildNodes()) {
        return elementText(Array.prototype.slice.call(n.childNodes));
    }
    if (n.nativeElement) {
        n = n.nativeElement;
    }
    return n.textContent;
}
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=jasmine-matchers.js.map