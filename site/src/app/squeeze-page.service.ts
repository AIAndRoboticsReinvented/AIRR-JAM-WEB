import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/map';       // Required to use map function 

import { SqueezePage } from './squeeze-page';

@Injectable()
export class SqueezePageService {
    constructor(private http: Http) { }

    private url = 'http://24.173.148.67/gateway/gateway.svc/Request';
    private request = { action: 'Get Squeeze Page', pageid:0 };
    private therequest = "";
    private answer;

    getSqueezePage(PageID) {
        console.log("PageID");
        console.log(PageID);
        // Apend the requested page id to the request
        this.request.pageid = PageID;
        // Build the full request
        this.therequest = JSON.stringify(this.request);
        // Send the request to the server
        return this.http.post(this.url, this.therequest)
            .map(res => res.json());
    }

}
