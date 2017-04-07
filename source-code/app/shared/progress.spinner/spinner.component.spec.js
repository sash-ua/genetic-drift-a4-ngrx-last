import { TestBed, async } from "@angular/core/testing";
import { SpinnerComponent } from "./spinner.component";
import { MaterialModule } from "@angular/material";
describe('SpinnerComponent: ', function () {
    var fixture, comp, de, el;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule
            ],
            declarations: [
                SpinnerComponent
            ]
        }).compileComponents()
            .then(function () {
            fixture = TestBed.createComponent(SpinnerComponent);
            comp = fixture.componentInstance;
            comp.value = 50;
            de = fixture.debugElement;
            fixture.detectChanges();
        });
    }));
    it('should create component', function () {
        expect(comp).toBeDefined();
    });
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
//# sourceMappingURL=spinner.component.spec.js.map