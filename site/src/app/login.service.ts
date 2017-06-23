import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/map';       // Required to use map function 
//import 'rxjs/add/operator/toPromise';


@Injectable()
export class LoginService {


    constructor(private http: Http) { }

    private url = 'http://24.173.148.67/gateway/gateway.svc/Request';
    private request = {};
    private therequest = "";

    private answer;

    getLogin(login, password) {
        this.request = { action: 'Login', login: login, password: password };
        this.therequest = JSON.stringify(this.request);
        return this.http.post(this.url, this.therequest)
            .map(res => res.json());
    }

    getUserName(visitorid) {
        this.request = { action: 'Get User Name', visitorid: visitorid };
        this.therequest = JSON.stringify(this.request);
        return this.http.post(this.url, this.therequest)
            .map(res => res.json());
    }

}
