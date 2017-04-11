import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';

@Injectable()
export class ErrorHandlerService {
    handleError (error: any): Observable<ErrorHandlerService> {
        console.log(error); // log to console instead to pass error to some handler service
        return Observable.throw(error);
    }
}

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.