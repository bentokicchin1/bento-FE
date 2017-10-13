import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { UserModel } from '../_models/user.model';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/users', this.jwt());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt());
    }

    create(user: UserModel) {
        return this.http.post('/api/users', user, this.jwt());
    }

    update(user: UserModel) {
        return this.http.put('/api/users/' + user.id, user, this.jwt());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}