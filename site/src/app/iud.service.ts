import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/map';       // Required to use map function 

@Injectable()
export class IUDService {
    constructor(private http: Http) { }

    private url = 'http://209.34.232.74/gateway/gateway.svc/Request';
    private request = { action: '', requested: '', visitorid: '', value: '' };
    private therequest = "";
    private answer;



    insertSMSBlockReasons(visitorid, reason) {
        this.request.action = 'Insert SMS Block Reason';
        this.request.value = reason;0
        this.request.requested = new Date().getTime().toString();
        this.request.visitorid = visitorid;
        this.therequest = JSON.stringify(this.request);
        console.log('Sending ...');
        console.log(this.therequest);
        return this.http.post(this.url, this.therequest)
            .map(res => res.json());
    }


    deleteSMSBlockReasons(visitorid, reason) {
        this.request.action = 'Delete SMS Block Reason';
        this.request.value = reason; 0
        this.request.requested = new Date().getTime().toString();
        this.request.visitorid = visitorid;
        this.therequest = JSON.stringify(this.request);
        console.log('Sending ...');
        console.log(this.therequest);
        return this.http.post(this.url, this.therequest)
            .map(res => res.json());
    }


}
