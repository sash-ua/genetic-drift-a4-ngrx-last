import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./AppComponent";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { Store, StoreModule } from "@ngrx/store";
import "hammerjs";
import { reducer } from "./store.reducers/index";
import { FormsModule } from "@angular/forms";
import { createInjector } from "./testing/injectors";
describe('AppComponent: ', function () {
    var el;
    var fixture;
    var de;
    var comp;
    var store;
    var serv;
    var evStub4 = { offsetDirection: 4 };
    var evStub2 = { offsetDirection: 2 };
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                RouterTestingModule,
                StoreModule.provideStore(reducer)
            ],
            declarations: [
                AppComponent
            ],
            providers: []
        })
            .compileComponents()
            .then(function () {
            fixture = TestBed.createComponent(AppComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement.query(By.css('h1'));
            el = de.nativeElement.innerText;
        });
    }));
    beforeEach(function () {
        var reducers = {
            router: {
                path: '/instruction'
            }
        };
        store = createInjector(StoreModule.provideStore(reducers, {})).get(Store);
    });
    it('should create the component', (function () {
        expect(comp).toBeDefined();
    }));
    it('should get header>h1>innerText "Genetic drift"', (function () {
        expect(el).toMatch('Genetic drift');
    }));
    it('onSwipe - 1', (function () {
        comp.onSwipe(evStub2, store);
        store._dispatcher.subscribe(function (r) {
            expect(r.payload.path[0]).toMatch("/modeling");
        });
    }));
    it('onSwipe - 2', (function () {
        comp.onSwipe(evStub4, store);
        store._dispatcher.subscribe(function (r) {
            expect(r.payload.path[0]).toMatch("/instruction");
        });
    }));
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
