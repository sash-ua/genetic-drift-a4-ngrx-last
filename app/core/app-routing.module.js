var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InstructionComponent } from "./inctruction.component/instruction.component";
import { ModelingComponent } from "./modeling.component/modeling.component";
import { Page404Component } from "./page.404.component/page.404.component";
export var ROUTES = [
    { path: '', redirectTo: 'instruction', pathMatch: 'full' },
    { path: 'instruction', component: InstructionComponent },
    { path: 'modeling', component: ModelingComponent },
    { path: '**', component: Page404Component }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(ROUTES, { useHash: true })
        ],
        exports: [
            RouterModule
        ]
    })
], AppRoutingModule);
export { AppRoutingModule };
