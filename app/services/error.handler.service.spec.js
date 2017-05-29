import { inject, TestBed } from "@angular/core/testing";
import { ErrorHandlerService } from "./error.handler.service";
describe('error.handler.service: ', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [ErrorHandlerService]
        });
    });
    it('should emit \'test\'', (inject([ErrorHandlerService], function (serv) {
        serv.handleError('test').subscribe(function (resp) { return resp; }, function (error) {
            expect(error).toEqual('test');
        });
    })));
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
