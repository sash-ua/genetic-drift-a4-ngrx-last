import {Observable} from "rxjs/Observable";
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import {ModalWindowComponent} from "../core/modeling.component/modeling.component";

@Injectable()
export class DialogsService {
    static dialog: MdDialog;
    constructor(dialog: MdDialog) {
        DialogsService.dialog = dialog;
    }

    public confirm(title: string, element: any): Observable<boolean> {
        let dialogRef: MdDialogRef<any> = DialogsService.dialog.open(ModalWindowComponent);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.element = element;
        return dialogRef.afterClosed();
    }
}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.