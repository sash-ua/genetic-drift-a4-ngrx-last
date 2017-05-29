"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var error_handler_service_1 = require("./error.handler.service");
describe('error.handler.service: ', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [error_handler_service_1.ErrorHandlerService]
        });
    });
    it('should emit \'test\'', (testing_1.inject([error_handler_service_1.ErrorHandlerService], function (serv) {
        serv.handleError('test').subscribe(function (resp) { return resp; }, function (error) {
            expect(error).toEqual('test');
        });
    })));
});
//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License. 
