import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';
import { User } from '../models/user.model';

@Injectable()
export class AuthenticationService {

    constructor(private router: Router, private http: Http) { }

    logout() {
        localStorage.removeItem("token");
        this.router.navigate(['login']);
    }

    login(user: User) {
        let body = JSON.stringify(user);
        this.http.post('/api/auth/login', body, { headers: contentHeaders })
            .subscribe(
            response => {
                localStorage.setItem('token', JSON.stringify(response.json().token));
                this.router.navigate(['home']);
            },
            error => {
                alert(error.text());
                console.log(error.text());
                return false;
            });

    }

    isLoggedin() {
        if (localStorage.getItem("token") === null) {
            this.router.navigate(['Login']);
        }
        else
        {
            return true;
        }
    }
}