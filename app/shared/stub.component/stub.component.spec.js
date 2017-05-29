import { TestBed } from "@angular/core/testing";
import { Renderer2 } from "@angular/core";
import { StubComponent } from "./stub.component";
import { MaterialModule } from "@angular/material";
describe('StubComponent: ', function () {
    var fixture, comp, de, el;
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule
            ],
            declarations: [
                StubComponent
            ],
            providers: [
                Renderer2
            ]
        });
        fixture = TestBed.createComponent(StubComponent);
        comp = fixture.componentInstance;
        comp.body = document.createElement('div');
        de = fixture.debugElement;
        fixture.detectChanges();
    });
    it('should create component', function () {
        expect(comp).toBeDefined();
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
