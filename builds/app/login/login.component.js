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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_model_1 = require('../models/user.model');
var authentication_service_1 = require('../services/authentication.service');
var loginComponent = (function () {
    function loginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.user = new user_model_1.User("", "");
    }
    loginComponent.prototype.login = function () {
        this.authService.login(this.user);
    };
    loginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: '../../partials/login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService])
    ], loginComponent);
    return loginComponent;
}());
exports.loginComponent = loginComponent;

//# sourceMappingURL=login.component.js.map
