var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { HammerGestureConfig } from "@angular/platform-browser";
var HammerConfig = (function (_super) {
    __extends(HammerConfig, _super);
    function HammerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // overrides default settings
    HammerConfig.prototype.buildHammer = function (element) {
        return new Hammer.Manager(element, {
            recognizers: [
                [Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL, velocity: 0.30, threshold: 30 }],
            ]
        });
    };
    return HammerConfig;
}(HammerGestureConfig));
export { HammerConfig };
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
