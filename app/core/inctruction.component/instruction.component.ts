
import {Component, HostBinding, ChangeDetectionStrategy} from "@angular/core";
import { AnimationsServices} from "../../services/animations.service";

@Component({
    moduleId: module.id,
    template:
    `<section class="wrapper wrapper__introduction">
        <h2>Introduction</h2>
        <p class="introduction__txt">Genetic drift is a probabilistic process of allele recombination in the genotype. It acts to reduce a genetic variation.</p>
        <p class="introduction__txt">The effect of a drift is proportional to the population size: the smaller population, the greater the drift effect.</p>
        <p class="introduction__txt">The effective population size is a key concept - it is the size of an ideal (Wright-Fisher) 
            population that shows the same decay of the genetic variation as the actual population of interest.</p>
        <h2>Legend</h2>
        <p class="introduction__txt">If the inputted values are incorrect, the computing based on the last correct values!</p>
        <p class="introduction__txt">Population - the number of people in the population, the number is rounded to integer for computing, the minimal value 2.</p>
        <p class="introduction__txt">Generations - the number of generation, the number is rounded to integer for computing, the minimal value 1.</p>
        <p class="introduction__txt">Simulations - the number of simulation, the number is rounded to integer for computing, the minimal value 1.</p>
        <p class="introduction__txt">Init. Alleles Balance - the balance of alleles (A1A2) in the genotype, the value from 0 to 1.</p>
        <p class="introduction__txt">Bottle Neck Probability (BNP) - the probability occurrence of events that strongly change the size of a population, 
            like migration, epidemics, wars etc. When BNP occur the population randomly decrease. The value from 0 to 1. 
            The number of population is limited to:</p>
            <span> (previous population) * (1 - (Natural decline * 2)) </span>
        <p class="introduction__txt">Natural decline - natural population decrease, the value from 0 to 1.</p>
        <p class="introduction__txt">Natural growth - natural population increase, the value from 0 to 1.</p>
        <h4>Warning:</h4><span>Be careful inputting large values, they initiate a large amount of computation that can hang your browser!</span>
    </section>`,
    styleUrls: ['instruction.component.css'],
    providers: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        AnimationsServices.animatonThreeStates(
            'routeAnimationLeft',
            {opacity: 1, transform: 'translateX(0)'},
            [{opacity: 0, transform: 'translateX(-100%)'}, {opacity: 0, transform: 'translateX(-100%)'}],
            ['0.4s ease-in', '0.4s ease-out']
        )]
})

export class InstructionComponent{
    @HostBinding('@routeAnimationLeft') routeAnimationLeft: AnimationsServices = true;
    @HostBinding('style.position')  position = 'absolute';
}
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.