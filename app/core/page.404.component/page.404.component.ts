import {Component, ChangeDetectionStrategy} from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'page-404',
    styles: ['.page-404{color: #b43232; font-size: 34px}'],
    template: '<h1 class="page-404">404. Page not found!</h1>'
})

export class Page404Component{}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.