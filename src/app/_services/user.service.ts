import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { UserModel } from '../_models/user.model';

@Injectable()
export class UserService {
    private baseUrl = 'http://www.mocky.io/v2/59ef878a2e0000bb291c5f6b';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getAll() {
        return this.http.get(this.baseUrl, this.jwt());
    }

    getById(id: number) {
        return this.http.get(this.baseUrl + id, this.jwt());
    }

    create(user: UserModel) {
        return this.http.post(this.baseUrl, user, this.options)
            .map(this.extractData)
            .do(data => console.log('createProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
        
        // return this.http.post(this.baseUrl, user, this.jwt());
    }

    update(user: UserModel) {
        return this.http.put(this.baseUrl + user.id, user, this.jwt());
    }

    delete(id: number) {
        return this.http.delete(this.baseUrl + id, this.jwt());
    }


    private extractData(response: Response) {
        let body = response.json();
        return body || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
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