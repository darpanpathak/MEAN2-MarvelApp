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
var headers_1 = require('../common/headers');
require('rxjs/add/operator/map');
var angular2_jwt_js_1 = require('angular2-jwt/angular2-jwt.js');
var ProfileServices = (function () {
    function ProfileServices(authHttp) {
        this.authHttp = authHttp;
    }
    ProfileServices.prototype.getProfileList = function () {
        return this.authHttp.get('/api/profilelist', { headers: headers_1.contentHeaders })
            .map(function (res) { return res.json(); });
    };
    ProfileServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_jwt_js_1.AuthHttp])
    ], ProfileServices);
    return ProfileServices;
}());
exports.ProfileServices = ProfileServices;

//# sourceMappingURL=profile.service.js.map
