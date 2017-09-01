import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/map';       // Required to use map function 

@Injectable()
export class ReportService {
    constructor(private http: Http) { }

    private url = 'http://209.34.232.74/gateway/gateway.svc/Request';
    private request = { action: '', requested: '', visitorid: '', thedate: '', companyid:'', name: '', addr1:'', addr2:'', city:'', state:'', zip:'' };
    private therequest = "";
    private answer;


    // Report Contact Requests
    getSiteContactRequests(visitorid) {
        var request = (this.request);
        request.action = 'Report Contact Requests';
        request.requested = new Date().getTime().toString();
        request.visitorid = visitorid;
        var therequest = JSON.stringify(request);
        return this.http.post(this.url, therequest)
            .map(res => res.json());
    }


    // Report SMS Blocked
    getSMSBlocked(visitorid, thedate) {
        var request = (this.request);
        request.action = 'Report SMS Blocked';
        request.requested = new Date().getTime().toString();
        request.visitorid = visitorid;
        request.thedate = thedate;
        var therequest = JSON.stringify(request);
        return this.http.post(this.url, therequest)
            .map(res => res.json());
    }

    // Report SMS Block Reasons
    getSMSBlockReasons(visitorid) {
        var request = (this.request);
        request.action = 'Report SMS Block Reasons';
        request.requested = new Date().getTime().toString();
        request.visitorid = visitorid;
        var therequest = JSON.stringify(request);
        return this.http.post(this.url, therequest)
            .map(res => res.json());
    }

    // Report SMS Responses
    getSMSResponses(visitorid) {
        var request = (this.request);
        request.action = 'Report SMS Responses';
        request.requested = new Date().getTime().toString();
        request.visitorid = visitorid;
        var therequest = JSON.stringify(request);
        return this.http.post(this.url, therequest)
            .map(res => res.json());
    }

    // Report SMS Send Stats
    getSMSSendStats(visitorid) {
        var request = (this.request);
        request.action = 'Report SMS Send Stats';
        request.requested = new Date().getTime().toString();
        request.visitorid = visitorid;
        var therequest = JSON.stringify(request);

        return this.http.post(this.url, therequest)
            .map(res => res.json());
    }

    // Report SMS Send Stats Today
    getSMSSendStatsToday(visitorid, thedate,thecompany) {
        var request = (this.request);
        request.action = 'Report SMS Send Stats Today';
        request.requested = new Date().getTime().toString();        
        request.visitorid = visitorid;
        request.thedate = thedate;
        request.companyid = thecompany;
        var therequest = JSON.stringify(request);
        return this.http.post(this.url, therequest)
            .map(res => res.json());
    }

    // Report Dialer Survey
    getDialerSurvey(visitorid) {
        var request = (this.request);
        request.action = 'Report Dialer Survey';
        request.requested = new Date().getTime().toString();
        request.visitorid = visitorid;
        var therequest = JSON.stringify(request);
        return this.http.post(this.url, therequest)
            .map(res => res.json());
    }

    // Get Track Person
    getTrackPerson(visitorid, name, addr1, addr2, city, state, zip) {
        var request = (this.request);
        request.action = 'Get Track Person';
        request.requested = new Date().getTime().toString();
        request.visitorid = visitorid;
        request.name = name;
        request.addr1 = addr1;
        request.addr2 = addr2;
        request.city = city;
        request.state = state;
        request.zip = zip;
        var therequest = JSON.stringify(request);
        return this.http.post(this.url, therequest)
            .map(res => res.json());
    }


    // Get User Companies
    getUserCompanies(visitorid) {
        var request = (this.request);
        request.action = 'Get User Companies';
        request.requested = new Date().getTime().toString();
        request.visitorid = visitorid;
        var therequest = JSON.stringify(request);
        return this.http.post(this.url, therequest)
            .map(res => res.json());
    }


}
