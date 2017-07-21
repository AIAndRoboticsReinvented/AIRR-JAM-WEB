﻿import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/map';       // Required to use map function 

@Injectable()
export class ReportService {
    constructor(private http: Http) { }

    private url = 'http://209.34.232.74/gateway/gateway.svc/Request';
    private request = { action: '', requested: '', visitorid: '' };
    private therequest = "";
    private answer;





    getSMSBlocked(visitorid) {
        this.request.action = 'Report SMS Blocked';
        this.request.requested = new Date().getTime().toString();
        this.request.visitorid = visitorid;
        this.therequest = JSON.stringify(this.request);
        return this.http.post(this.url, this.therequest)
            .map(res => res.json());
    }

    
    getSMSBlockReasons(visitorid) {
        this.request.action = 'Report SMS Block Reasons';
        this.request.requested = new Date().getTime().toString();
        this.request.visitorid = visitorid;
        this.therequest = JSON.stringify(this.request);
        return this.http.post(this.url, this.therequest)
            .map(res => res.json());
    }


    getSMSResponses(visitorid) {
        this.request.action = 'Report SMS Responses';
        this.request.requested = new Date().getTime().toString();
        this.request.visitorid = visitorid;
        this.therequest = JSON.stringify(this.request);
        return this.http.post(this.url, this.therequest)
            .map(res => res.json());
    }

    getSMSSendStats(visitorid) {
        this.request.action = 'Report SMS Send Stats';
        this.request.requested = new Date().getTime().toString();
        this.request.visitorid = visitorid;
        this.therequest = JSON.stringify(this.request);
        return this.http.post(this.url, this.therequest)
            .map(res => res.json());
    }


    getDialerSurvey(visitorid) {
        this.request.action = 'Report Dialer Survey';
        this.request.requested = new Date().getTime().toString();
        this.request.visitorid = visitorid;
        this.therequest = JSON.stringify(this.request);
        return this.http.post(this.url, this.therequest)
            .map(res => res.json());
    }


}