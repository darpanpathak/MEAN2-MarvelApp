import { Injectable } from '@angular/core';
import { contentHeaders } from '../common/headers';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt/angular2-jwt.js';

@Injectable()
export class ProfileServices {
    constructor(private authHttp: AuthHttp) { }

    getProfileList() {
        return this.authHttp.get('/api/profilelist', { headers: contentHeaders })
            .map(res => res.json());
    }

}