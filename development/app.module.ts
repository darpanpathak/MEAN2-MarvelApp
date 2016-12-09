import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './common/auth.guard';
import { AUTH_PROVIDERS } from 'angular2-jwt/angular2-jwt.js';

import { AppComponent } from './app.component';
import { loginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SitemenuComponent } from './sitemenu/sitemenu.component';
import { routing } from './app.routes';
import { AuthenticationService } from './services/authentication.service';
import { ProfileServices } from './services/profile.service';

@NgModule({
    imports: [BrowserModule, RouterModule, routing, HttpModule, FormsModule],
    declarations: [AppComponent, loginComponent, HomeComponent, SitemenuComponent, AboutComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, AUTH_PROVIDERS, AuthGuard, AuthenticationService, ProfileServices],
    bootstrap: [AppComponent]
})
export class AppModule { }
