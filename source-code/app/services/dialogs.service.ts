import {Observable} from "rxjs/Observable";
import { MdDialogRef, MdDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import {ModalWindowComponent} from "../shared/modal_window.component/modal_window.component";

@Injectable()
export class DialogsService {
    constructor(private dialog: MdDialog) {}

    public confirm(title: string, element: any): Observable<boolean> {
        let dialogRef: MdDialogRef<any> = this.dialog.open(ModalWindowComponent);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.element = element;
        return dialogRef.afterClosed();
    }
}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.