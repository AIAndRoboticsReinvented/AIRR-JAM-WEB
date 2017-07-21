import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/map';       // Required to use map function 
//import 'rxjs/add/operator/toPromise';

import { Teammember } from './teammember';

@Injectable()
export class TeamService {
    constructor(private http: Http) { }

    private url = 'http://209.34.232.74/gateway/gateway.svc/Request';
    private request =  {action: 'Get Team Members', requested: ''};
    private therequest = "";
    private answer;
     

    getTeam() {
        this.request.requested = new Date().getTime().toString();
        this.therequest = JSON.stringify(this.request);
        return this.http.post(this.url, this.therequest)
            .map(res => res.json());
    }

}
