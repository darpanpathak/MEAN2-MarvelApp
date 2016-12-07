import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileServices {
    constructor(private http: Http) { }

    getProfileList() {
        return this.http.get('/api/profilelist', { headers: contentHeaders })
            .map(res => res.json());
    }

}