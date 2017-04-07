import {Component} from "@angular/core";
import "hammerjs";
import {Store} from "@ngrx/store";
import * as fromRoot from './store.reducers/index';
import {replace} from "@ngrx/router-store";

@Component({
    moduleId: module.id,
    selector: 'app-root',
    template:
    `<div (swipe)="onSwipe($event, store)" class="wrapper">
        <header>
            <h1 class="header__title introduction__txt">Genetic drift</h1>
        </header>
        <main>
            <nav>
                <ul class="nav">
                    <li class="nav__el">
                        <a routerLink="/instruction" routerLinkActive="active" [class.activeR]="active" class="nav_link link">Introduction</a>
                    </li>
                    <li class="nav__el">
                        <a routerLink="/modeling" routerLinkActive="active" [class.activeR]="active" class="nav_link link">Modeling</a>
                    </li>
                </ul>
            </nav>
            <div class="line-stub"></div>
            <router-outlet></router-outlet>
        </main>
    </div>`,
    styleUrls: ['app.component.css'],
    providers: []
})

export class AppComponent {
    constructor(
        private store: Store<fromRoot.State>
    ){}
    onSwipe(e: HammerInput, store: Store<fromRoot.State>){
        if(e.offsetDirection === 4){
            store.dispatch(replace(['/instruction'], {}));
        } else if (e.offsetDirection === 2){
            store.dispatch(replace(['/modeling'], {}));
        }
    }
}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.