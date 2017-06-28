import { Component, Input, OnInit }           from '@angular/core';
import { Router, ActivatedRoute, Params }     from '@angular/router';
import { Location }                           from '@angular/common';

import { DashboardRoutingModule }             from './dashboard-routing.module';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './dashboard.component.css'
  ]
})

export class DashboardComponent implements OnInit {

    visitorid: {};
    navState = 'Show';

    constructor(
        private route: ActivatedRoute,
        private location: Location,
    ) { }


    setVisitorId(newVisitorID): any {
        this.visitorid = newVisitorID;
        return this.visitorid;
    }

    ngOnInit() {
        this.route.params.switchMap((params: Params) =>
            this.setVisitorId(params['visitorid']))
            .subscribe(data => { });        
    }

    navStateChange(newValue) {
        this.navState = newValue;
    }


}
