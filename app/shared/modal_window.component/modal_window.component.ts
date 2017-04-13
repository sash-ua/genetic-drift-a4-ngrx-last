import {ChangeDetectionStrategy, Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: `for-test`,
    template: `
        <button md-button class="modal-wndw__btn"
                (click)="dialogRef.close()">X</button>
        <h2 md-dialog-title>{{ title }}</h2>
        <stub-cmpnt [stub-cmpnt-body]="element"></stub-cmpnt>`,
    styles: [`
        h2{
            text-align: center;
            text-transform: uppercase;
            margin: 0 0 0 40px;
            padding: 0;
        }
        .modal-wndw__btn{
            position: relative;
            min-width: 40px;
            padding: 0;
            float: right;
        }
    `]
})
export class ModalWindowComponent{
    title: string;
    element: SVGAElement;
    constructor(public dialogRef: MdDialogRef<ModalWindowComponent>) {}
}



//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.