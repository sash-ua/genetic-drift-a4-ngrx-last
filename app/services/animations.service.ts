import {
    Injectable, AnimationEntryMetadata
} from '@angular/core';
import {AnimationT, AnimationStylesT} from "../types/types";
import {trigger, state, transition, style, animate} from "@angular/animations";

@Injectable()
export class AnimationsServices {
    static animatonTwoStates(name: string, [...states]: Array<any>, [...stylesAnim]: AnimationT[], [...trs]: Array<any>): AnimationEntryMetadata{
        return trigger(name,[
            state(states[0], style(stylesAnim[0])),
            state(states[1], style(stylesAnim[1])),
            transition(states[0]+' =>'+states[1], [
                animate(trs[0])
            ]),
            transition(states[1]+' =>'+states[0], [
                animate(trs[1])
            ])])
    }
    static animatonThreeStates(name: string, stStyle: AnimationT, [...trsStyles]: [AnimationStylesT], [...trsAnimate]: Array<any>): AnimationEntryMetadata {
        return trigger(name, [
            state('*',
                style(stStyle)
            ),
            transition(':enter', [
                style(trsStyles[0]),
                animate(trsAnimate[0])
            ]),
            transition(':leave', [
                // style(trsStyles[0]),
                animate(trsAnimate[1],
                    style(trsStyles[1]))
            ])
        ])
    }
 // ToDo. Work in JIT but cannot pass ng-compilation for AOT
    // static animatonTwoStates(name: string, [...states]: Array<any>, [...stylesAnim]: AnimationT[], [...trs]: Array<any>): AnimationEntryMetadata{
    //     let [a, b] = states.map(function(v, i, arr){
    //         return [state(v, style(stylesAnim[i])), transition((i === 0) ? `${arr[i]} => ${arr[i+1]}` : `${arr[i-1]} => ${arr[i]}`, animate(trs[i]))];
    //     });
    //     return trigger(name,[...a, ...b]);
    // }
    //
    // static animatonThreeStates(name: string, stateStyles: AnimationStylesT, [...trsStyles]: [AnimationStylesT], [...trsAnimate]: Array<any>): AnimationEntryMetadata {
    //     return trigger(name,[
    //         state('*',
    //             style(stateStyles)
    //         ),
    //         ...trsStyles.map(function(v, i){
    //             return (i === 0)
    //                 ? transition(':enter', [style(trsStyles[i]), animate(trsAnimate[i])])
    //                 : transition(':leave', [animate(trsAnimate[i], style(trsStyles[i]))]);
    //         })
    //
    //     ])
    // }

}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.


