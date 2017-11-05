import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserModel } from '../_models/user.model';
import { Constants } from '../_helpers/constants';

@Injectable()
export class AuthenticationService{
    private url = Constants.baseUrl+'/'+Constants.errorApi;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    
    constructor(private http: Http){}
    
    login(user: UserModel){
        return this.http.post(this.url, JSON.stringify(user), this.options)
        .map(this.extractData)
        // .do(data => console.log('Response: ' + JSON.stringify(data.body)))
        .catch(this.handleError);
    }

    logout(){
        // localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUser');
    }


    private extractData(response: Response) {
        
        let user = response.json();
        console.log(JSON.stringify(user.body) + ' Auth');
        // console.log(user);
        // return user || {};
        if(user){
            localStorage.setItem('currentUser', JSON.stringify(user.body));
        }
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error || 'Server error');
    }
}