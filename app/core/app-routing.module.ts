import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InstructionComponent} from "./inctruction.component/instruction.component";
import {ModelingComponent} from "./modeling.component/modeling.component";
import {Page404Component} from "./page.404.component/page.404.component";

export const ROUTES: Routes = [
    { path: '', redirectTo: 'instruction', pathMatch: 'full' },
    { path: 'instruction', component: InstructionComponent },
    { path: 'modeling', component: ModelingComponent },
    { path: '**', component: Page404Component }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}