
import {ComponentFixture, TestBed, async} from "@angular/core/testing";
import {InstructionComponent} from "./instruction.component";
import {DebugElement} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "@angular/material";

describe('InstructionComponent', ()=>{
    let fixture: ComponentFixture<InstructionComponent>;
    let comp: InstructionComponent;
    let de: DebugElement;

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            imports:[
                BrowserAnimationsModule,
                MaterialModule
            ],
            declarations:[
                InstructionComponent
            ]
        })
            .compileComponents()
            .then(()=>{
                fixture = TestBed.createComponent(InstructionComponent);
                comp = fixture.componentInstance;
                fixture.detectChanges();
            })
    }));
    it('InstructionComponent - should create component', ()=>{
        expect(comp).toBeDefined();
    })
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.