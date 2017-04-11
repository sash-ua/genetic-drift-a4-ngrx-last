
import { NgModule } from '@angular/core';
import {
    MdProgressSpinner, MdInputContainer, MdSpinner, MdInputModule, MdProgressSpinnerModule,
    MdInputDirective, MdButtonModule, MdButton, MdAnchor
} from "@angular/material";


@NgModule({
    imports: [
        MdInputModule,
        MdProgressSpinnerModule,
        MdButtonModule
    ],
    exports: [
        MdProgressSpinner,
        MdInputContainer,
        MdInputDirective,
        MdButton,
    ],
    declarations: [
        // MdProgressSpinner,
        // MdInputContainer
    ],
    providers: [],
})
export class MyMaterialModule { }


//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.