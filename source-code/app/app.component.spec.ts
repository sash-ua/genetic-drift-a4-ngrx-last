import {ComponentFixture, TestBed, async, inject} from "@angular/core/testing";
import {AppComponent} from "./AppComponent";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";
import {Store, StoreModule} from "@ngrx/store";
import "hammerjs";
import {reducer} from "./store.reducers/index";
import {FormsModule} from "@angular/forms";
import {createInjector} from "./testing/injectors";

describe('AppComponent: ', ()=>{
    let el: HTMLElement;
    let fixture: ComponentFixture<AppComponent>;
    let de: DebugElement;
    let comp: AppComponent;
    let store: Store<AppComponent>;
    let serv: AppComponent;
    const evStub4 = {offsetDirection: 4};
    const evStub2 = {offsetDirection: 2};
    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            imports:[
                FormsModule,
                RouterTestingModule,
                StoreModule.provideStore(reducer)
            ],
            declarations: [
                AppComponent
            ],
            providers:[]
        })
            .compileComponents()
            .then(()=>{
                fixture = TestBed.createComponent(AppComponent);
                comp = fixture.componentInstance;
                de = fixture.debugElement.query(By.css('h1'));
                el = de.nativeElement.innerText;
            });
    }));
    beforeEach(()=>{
        const reducers = {
            router: {
                path: '/instruction'
            }
        };
        store = createInjector(StoreModule.provideStore(reducers, {})).get(Store);
    });
    it('should create the component', (()=>{
        expect(comp).toBeDefined();
    }));
    it('should get header>h1>innerText "Genetic drift"', (()=>{
        expect(el).toMatch('Genetic drift');
    }));
    it('onSwipe - 1', (()=>{
        comp.onSwipe(evStub2, store);

        store._dispatcher.subscribe(
            (r: any)=>{
                expect(r.payload.path[0]).toMatch("/modeling");
            }
        );
    }));
    it('onSwipe - 2', (()=>{
        comp.onSwipe(evStub4, store);
        store._dispatcher.subscribe(
            (r: any)=>{
                expect(r.payload.path[0]).toMatch("/instruction");
            }
        );
    }));
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.