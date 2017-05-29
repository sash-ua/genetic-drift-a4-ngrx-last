var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, ChangeDetectionStrategy } from "@angular/core";
import { AnimationsServices } from "../../services/animations.service";
var InstructionComponent = (function () {
    function InstructionComponent() {
        this.routeAnimationLeft = true;
        this.position = 'absolute';
    }
    return InstructionComponent;
}());
__decorate([
    HostBinding('@routeAnimationLeft'),
    __metadata("design:type", AnimationsServices)
], InstructionComponent.prototype, "routeAnimationLeft", void 0);
__decorate([
    HostBinding('style.position'),
    __metadata("design:type", Object)
], InstructionComponent.prototype, "position", void 0);
InstructionComponent = __decorate([
    Component({
        moduleId: module.id,
        template: "<section class=\"wrapper wrapper__introduction\">\n        <h2>Introduction</h2>\n        <p class=\"introduction__txt\">Genetic drift is a probabilistic process of allele recombination in the genotype. It acts to reduce a genetic variation.</p>\n        <p class=\"introduction__txt\">The effect of a drift is proportional to the population size: the smaller population, the greater the drift effect.</p>\n        <p class=\"introduction__txt\">The effective population size is a key concept - it is the size of an ideal (Wright-Fisher) \n            population that shows the same decay of the genetic variation as the actual population of interest.</p>\n        <h2>Legend</h2>\n        <p class=\"introduction__txt\">If the inputted values are incorrect, the computing based on the last correct values!</p>\n        <p class=\"introduction__txt\">Population - the number of people in the population, the number is rounded to integer for computing, the minimal value 2.</p>\n        <p class=\"introduction__txt\">Generations - the number of generation, the number is rounded to integer for computing, the minimal value 1.</p>\n        <p class=\"introduction__txt\">Simulations - the number of simulation, the number is rounded to integer for computing, the minimal value 1.</p>\n        <p class=\"introduction__txt\">Init. Alleles Balance - the balance of alleles (A1A2) in the genotype, the value from 0 to 1.</p>\n        <p class=\"introduction__txt\">Bottle Neck Probability (BNP) - the probability occurrence of events that strongly change the size of a population, \n            like migration, epidemics, wars etc. When BNP occur the population randomly decrease. The value from 0 to 1. \n            The number of population is limited to:</p>\n            <span> (previous population) * (1 - (Natural decline * 2)) </span>\n        <p class=\"introduction__txt\">Natural decline - natural population decrease, the value from 0 to 1.</p>\n        <p class=\"introduction__txt\">Natural growth - natural population increase, the value from 0 to 1.</p>\n        <h4>Warning:</h4><span>Be careful inputting large values, they initiate a large amount of computation that can hang your browser!</span>\n    </section>",
        styleUrls: ['instruction.component.css'],
        providers: [],
        changeDetection: ChangeDetectionStrategy.OnPush,
        animations: [
            AnimationsServices.animatonThreeStates('routeAnimationLeft', { opacity: 1, transform: 'translateX(0)' }, [{ opacity: 0, transform: 'translateX(-100%)' }, { opacity: 0, transform: 'translateX(-100%)' }], ['0.4s ease-in', '0.4s ease-out'])
        ]
    })
], InstructionComponent);
export { InstructionComponent };
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
