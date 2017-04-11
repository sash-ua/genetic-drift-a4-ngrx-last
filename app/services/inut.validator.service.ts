import { Injectable } from '@angular/core';
import {FormControl, AbstractControl, Validators} from "@angular/forms";

// Input string validation. The First stage, second's in the specific.service.applInputsData
@Injectable()
export class InputValidatorService {
    constructor(){}
    inputControl(inputL: number, cond: Range){
        return (
            this.inputConds(
                new FormControl(
                    inputL,
                    Validators.compose([
                        Validators.required,
                        Validators.pattern('([0-9]+)|([0-9]+\.[0-9]+)')
                    ])
                ),
                cond
            )
        )
            ? inputL
            : null;
    }

    inputConds(control: AbstractControl, cond: Range): boolean {
        const v = control.value;
        return (control.status === 'VALID' && v >= 0 && !cond[1]) || (v >= 0 && v <= cond[1]);
    }
}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.

