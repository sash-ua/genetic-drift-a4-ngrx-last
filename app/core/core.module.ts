
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Page404Component} from "./page.404.component/page.404.component";
import {InstructionComponent} from "./inctruction.component/instruction.component";
import {ModelingComponent} from "./modeling.component/modeling.component";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "../shared/shared.module";
import {D3Service} from "../services/d3.service";
import {DialogsService} from "../services/dialogs.service";
import {ModalWindowComponent} from "../shared/modal_window.component/modal_window.component";
import {MyMaterialModule} from "../shared/my.material.module/my.material.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule,
        SharedModule,
        MyMaterialModule,
    ],
    declarations: [
        Page404Component,
        InstructionComponent,
        ModelingComponent,
    ],
    exports:[
        Page404Component,
        InstructionComponent,
        ModelingComponent,
        AppRoutingModule,
    ],
    providers:[
        D3Service,
        DialogsService
    ],
    // DialogService entry point
    entryComponents: [
        ModalWindowComponent
    ],
})

export class CoreModule{

}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.