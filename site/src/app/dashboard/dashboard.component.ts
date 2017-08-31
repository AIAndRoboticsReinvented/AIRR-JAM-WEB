import { Component, Input, OnInit }           from '@angular/core';
import { Router, ActivatedRoute, Params }     from '@angular/router';
import { Location } from '@angular/common';
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
    companyid: {};

    // When navState is Show the nav bar on the left is hidden
    navState = 'Show'; 

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private location: Location,
    ) { }


    setVisitorId(newVisitorID): any {
        this.visitorid = newVisitorID;
        return this.visitorid;
    }

    setCompanyId(newCompanyID): any {
        this.companyid = newCompanyID;
        return this.companyid;
    }



    ngOnInit() {
        this.route.params.switchMap((params: Params) =>
            this.setVisitorId(params['visitorid']))
            .subscribe(data => { });        

        this.route.params.switchMap((params: Params) =>
            this.setCompanyId(params['companyid']))
            .subscribe(data => { });

    }

    navStateChange(newValue) {
        this.navState = newValue;
    }


}
