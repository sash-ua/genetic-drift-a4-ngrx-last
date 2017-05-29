import { TestBed, async } from "@angular/core/testing";
import { InstructionComponent } from "./instruction.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";
describe('InstructionComponent', function () {
    var fixture;
    var comp;
    var de;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                MaterialModule
            ],
            declarations: [
                InstructionComponent
            ]
        })
            .compileComponents()
            .then(function () {
            fixture = TestBed.createComponent(InstructionComponent);
            comp = fixture.componentInstance;
            fixture.detectChanges();
        });
    }));
    it('InstructionComponent - should create component', function () {
        expect(comp).toBeDefined();
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
