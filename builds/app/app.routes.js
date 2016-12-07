"use strict";
var router_1 = require('@angular/router');
var auth_guard_1 = require('./common/auth.guard');
var login_component_1 = require('./login/login.component');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
// Route Configuration
exports.routes = [
    { path: '', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'about', component: about_component_1.AboutComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.loginComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);

//# sourceMappingURL=app.routes.js.map
