import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';



import * as moment from 'moment';


@Component({
  selector: 'app-dash-welcome',
  templateUrl: './dash-welcome.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './dash-welcome.component.css'
  ]
})
export class DashWelcomeComponent implements OnInit {

    visitorid: {};
    

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private location: Location
        
    ) { }

    public thedate: string = moment().format('YYYY-MM-DD');
    public thecompany: string = "";

    setVisitorId(newVisitorID): any {
        this.visitorid = newVisitorID;
        return this.visitorid;
    }

    ngOnInit() {
        this.route.parent.params.switchMap((params: Params) =>
            this.setVisitorId(params['visitorid']))
            .subscribe(data => { });
    }

    thecompanyChange(newValue) {
        this.thecompany = newValue;
    }

    thedateChange(newValue) {
        this.thedate = newValue;
    }


}
