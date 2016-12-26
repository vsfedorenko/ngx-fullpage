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
var mnFullpage_service_1 = require("./mnFullpage.service");
var mnFullpage_directive_1 = require("./mnFullpage.directive");
var MnFullpageModule = MnFullpageModule_1 = (function () {
    function MnFullpageModule() {
    }
    MnFullpageModule.forRoot = function () {
        return { ngModule: MnFullpageModule_1, providers: [mnFullpage_service_1.MnFullpageService] };
    };
    return MnFullpageModule;
}());
MnFullpageModule = MnFullpageModule_1 = __decorate([
    core_1.NgModule({
        declarations: [mnFullpage_directive_1.MnFullpageDirective],
        exports: [mnFullpage_directive_1.MnFullpageDirective]
    }),
    __metadata("design:paramtypes", [])
], MnFullpageModule);
exports.MnFullpageModule = MnFullpageModule;
var MnFullpageModule_1;
