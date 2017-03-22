// Angular
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MaterialModule, MdButtonModule} from "@angular/material";
import {InputComponent} from "./inputs.component/input.component";
import {SpinnerComponent} from "./progress.spinner/spinner.component";
import {StubComponent} from "./stub.component/stub.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [
        InputComponent,
        SpinnerComponent,
        StubComponent,

    ],
    exports: [
        InputComponent,
        SpinnerComponent,
        StubComponent
    ],
    providers: []
})

export class SharedModule {}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.