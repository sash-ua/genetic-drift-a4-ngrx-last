
import { NgModule } from '@angular/core';
import {
    MdProgressSpinner, MdInputContainer, MdInputModule, MdProgressSpinnerModule,
    MdInputDirective, MdButtonModule, MdButton, MdDialogModule, MdTooltipModule, MdTooltip,
    MdRaisedButtonCssMatStyler, MdButtonCssMatStyler, MdProgressSpinnerCssMatStyler
} from "@angular/material";


@NgModule({
    imports: [
        MdTooltipModule,
        MdDialogModule,
        MdInputModule,
        MdProgressSpinnerModule,
        MdButtonModule
    ],
    exports: [
        MdProgressSpinner,
        MdProgressSpinnerCssMatStyler,
        MdInputContainer,
        MdInputDirective,
        MdButton,
        MdRaisedButtonCssMatStyler,
        MdButtonCssMatStyler,
        MdTooltip
    ],
    declarations: [],
    providers: [],
})
export class MyMaterialModule { }


//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.