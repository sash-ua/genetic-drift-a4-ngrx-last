"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var AppComponent_1 = require("./AppComponent");
var platform_browser_1 = require("@angular/platform-browser");
var testing_2 = require("@angular/router/testing");
var store_1 = require("@ngrx/store");
require("hammerjs");
var index_1 = require("./store.reducers/index");
var forms_1 = require("@angular/forms");
var injectors_1 = require("./testing/injectors");
describe('AppComponent: ', function () {
    var el;
    var fixture;
    var de;
    var comp;
    var store;
    var serv;
    var evStub4 = { offsetDirection: 4 };
    var evStub2 = { offsetDirection: 2 };
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                forms_1.FormsModule,
                testing_2.RouterTestingModule,
                store_1.StoreModule.provideStore(index_1.reducer)
            ],
            declarations: [
                AppComponent_1.AppComponent
            ],
            providers: []
        })
            .compileComponents()
            .then(function () {
            fixture = testing_1.TestBed.createComponent(AppComponent_1.AppComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
            el = de.nativeElement.innerText;
        });
    }));
    beforeEach(function () {
        var reducers = {
            router: {
                path: '/instruction'
            }
        };
        store = injectors_1.createInjector(store_1.StoreModule.provideStore(reducers, {})).get(store_1.Store);
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
