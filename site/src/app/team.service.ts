﻿import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/map';       // Required to use map function 
//import 'rxjs/add/operator/toPromise';

import { Teammember } from './teammember';

@Injectable()
export class TeamService {
    constructor(private http: Http) { }

    private url = 'http://24.173.148.67/gateway/gateway.svc/Request';
    private request =  {action: 'Get Team Members'};
    private therequest = "";
    private answer;


    getTeam() {
        this.therequest = JSON.stringify(this.request);
        return this.http.post(this.url, this.therequest)
            .map(res => res.json());
    }

}