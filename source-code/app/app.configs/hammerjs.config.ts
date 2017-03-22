import {HammerGestureConfig} from "@angular/platform-browser";

export class HammerConfig extends HammerGestureConfig {
    // overrides default settings
    buildHammer(element: HTMLElement) {
        return new Hammer.Manager(element, {
            recognizers: [
                [Hammer.Swipe,{ direction: Hammer.DIRECTION_HORIZONTAL, velocity: 0.30, threshold: 30 }],
            ]
        });
    }
}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.