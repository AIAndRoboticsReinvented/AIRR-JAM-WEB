import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/map';       // Required to use map function 

import { ContactRequest } from './contact-request';

@Injectable()
export class ContactRequestService {
    constructor(private http: Http) { }

    postRequest(contactrequest) {
        var url = 'http://209.34.232.74/gateway/gateway.svc/Request';
        var therequest = "";
        var request: any = Object.assign({action : 'Contact Request'},contactrequest);

        therequest = JSON.stringify(request);

        return this.http.post(url, therequest)
            .map(res => res.json());
    }
}
