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
import { VideoPlayerTestComponent } from './videoplayer/videoplayertest.component';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

@NgModule({
    imports: [BrowserModule, RouterModule, routing, HttpModule, FormsModule, VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule],
    declarations: [AppComponent, loginComponent, HomeComponent, SitemenuComponent, AboutComponent, VideoPlayerTestComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, AUTH_PROVIDERS, AuthGuard, AuthenticationService, ProfileServices],
    bootstrap: [AppComponent]
})
export class AppModule { }
