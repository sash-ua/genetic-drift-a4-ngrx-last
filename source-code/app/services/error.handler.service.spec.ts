
import {inject, TestBed, async} from "@angular/core/testing";
import {ErrorHandlerService} from "./error.handler.service";

describe('error.handler.service', ()=>{
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ErrorHandlerService]
        });
    });

    it('error.handler.service', (inject([ErrorHandlerService], (serv: ErrorHandlerService)=>{
        serv.handleError('test').subscribe(
            resp => resp,
            error => {
                expect(error).toEqual('test');
            }
        )
    })))
});

//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.