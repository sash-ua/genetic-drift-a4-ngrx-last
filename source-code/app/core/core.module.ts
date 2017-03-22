
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Page404Component} from "./page.404.component/page.404.component";
import {InstructionComponent} from "./inctruction.component/instruction.component";
import {ModelingComponent, ModalWindowComponent} from "./modeling.component/modeling.component";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "../shared/shared.module";
import {D3Service} from "../services/d3.service";
import {DialogsService} from "../services/dialogs.service";
import {MaterialModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule,
        SharedModule,
        MaterialModule
    ],
    declarations: [
        Page404Component,
        InstructionComponent,
        ModelingComponent,
        ModalWindowComponent
    ],
    exports:[
        Page404Component,
        InstructionComponent,
        ModelingComponent,
        AppRoutingModule,
        ModalWindowComponent
    ],
    providers:[
        D3Service,
        DialogsService
    ],
    entryComponents: [
        ModalWindowComponent,
    ],
})

export class CoreModule{

}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.