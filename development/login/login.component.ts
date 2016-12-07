import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: '../../partials/login.component.html'
})
export class loginComponent {
    user: User;
    constructor(public router: Router, public authService: AuthenticationService) {
        this.user = new User("", "");
    }

    login() {
        this.authService.login(this.user);
    }
}