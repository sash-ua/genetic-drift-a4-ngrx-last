
import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {MaterialModule} from "@angular/material";

@Component({
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'progress-spinner-d',
    template: `<md-progress-spinner [mode]="mode" [value]="value"></md-progress-spinner>`,
    styleUrls: ['spinner.component.css']
})
export class SpinnerComponent {
    @Input() mode: MaterialModule = 'determinate';
    @Input('spinner-start-val') value: MaterialModule;
}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.