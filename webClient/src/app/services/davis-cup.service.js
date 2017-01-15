"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var constants_service_1 = require("./constants.service");
var DavisCupService = (function () {
    function DavisCupService(http, ConstantsService) {
        this.http = http;
        this.ConstantsService = ConstantsService;
        this._davisUrl = this.ConstantsService.SERVER_URL + ':' + this.ConstantsService.SERVER_PORT + '/result_list'; // URL to web api
    }
    DavisCupService.prototype.getDavisCups = function () {
        return this.http.get(this._davisUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DavisCupService.prototype.handleError = function (error) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return DavisCupService;
}());
DavisCupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, constants_service_1.ConstantsService])
], DavisCupService);
exports.DavisCupService = DavisCupService;
//# sourceMappingURL=davis-cup.service.js.map