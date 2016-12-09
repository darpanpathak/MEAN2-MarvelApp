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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var auth_guard_1 = require('./common/auth.guard');
var angular2_jwt_js_1 = require('angular2-jwt/angular2-jwt.js');
var app_component_1 = require('./app.component');
var login_component_1 = require('./login/login.component');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var sitemenu_component_1 = require('./sitemenu/sitemenu.component');
var app_routes_1 = require('./app.routes');
var authentication_service_1 = require('./services/authentication.service');
var profile_service_1 = require('./services/profile.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule, app_routes_1.routing, http_1.HttpModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, login_component_1.loginComponent, home_component_1.HomeComponent, sitemenu_component_1.SitemenuComponent, about_component_1.AboutComponent],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, angular2_jwt_js_1.AUTH_PROVIDERS, auth_guard_1.AuthGuard, authentication_service_1.AuthenticationService, profile_service_1.ProfileServices],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
