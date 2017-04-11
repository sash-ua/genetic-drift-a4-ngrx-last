// Angular
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MaterialModule, MdButtonModule, MdDialogModule} from "@angular/material";
import {InputComponent} from "./inputs.component/input.component";
import {SpinnerComponent} from "./progress.spinner/spinner.component";
import {StubComponent} from "./stub.component/stub.component";
import {ModalWindowComponent} from "./modal_window.component/modal_window.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MdDialogModule,
        MaterialModule
    ],
    declarations: [
        InputComponent,
        SpinnerComponent,
        StubComponent,
        ModalWindowComponent
    ],
    exports: [
        InputComponent,
        SpinnerComponent,
        StubComponent,
        ModalWindowComponent
    ],
    providers: []
})

export class SharedModule {}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.