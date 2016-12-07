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
var http_1 = require('@angular/http');
var headers_1 = require('../common/headers');
var AuthenticationService = (function () {
    function AuthenticationService(router, http) {
        this.router = router;
        this.http = http;
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("token");
        this.router.navigate(['login']);
    };
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        this.http.post('/api/auth/login', body, { headers: headers_1.contentHeaders })
            .subscribe(function (response) {
            localStorage.setItem('token', JSON.stringify(response.json().token));
            _this.router.navigate(['home']);
        }, function (error) {
            alert(error.text());
            console.log(error.text());
            return false;
        });
    };
    AuthenticationService.prototype.isLoggedin = function () {
        if (localStorage.getItem("token") === null) {
            this.router.navigate(['Login']);
        }
        else {
            return true;
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;

//# sourceMappingURL=authentication.service.js.map
