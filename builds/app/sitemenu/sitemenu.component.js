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
var authentication_service_1 = require('../services/authentication.service');
var SitemenuComponent = (function () {
    function SitemenuComponent(authService) {
        this.authService = authService;
        this.isLoggedin = authService.isLoggedin();
        this.username = JSON.parse(localStorage.getItem("username"));
    }
    SitemenuComponent.prototype.logout = function () {
        this.authService.logout();
    };
    SitemenuComponent = __decorate([
        core_1.Component({
            selector: 'site-menu',
            moduleId: module.id,
            templateUrl: '../../partials/sitemenu.component.html'
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
    ], SitemenuComponent);
    return SitemenuComponent;
}());
exports.SitemenuComponent = SitemenuComponent;

//# sourceMappingURL=sitemenu.component.js.map
