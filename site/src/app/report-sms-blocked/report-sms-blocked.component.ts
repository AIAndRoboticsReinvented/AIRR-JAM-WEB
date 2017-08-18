import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

//import { SMSBlocked } from '../datatypes/sms';
import { ReportService } from '../report.service';

import * as moment from 'moment';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-report-sms-blocked',
  templateUrl: './report-sms-blocked.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './report-sms-blocked.component.css'
  ]
})
export class ReportSmsBlockedComponent implements OnInit {

    report: {};
    visitorid: {};


    public thedate: string = moment().format('YYYY-MM-DD');
    

    thedateChange(newValue) {
        this.thedate = newValue;
        this.getSMSBlocked();
    }



    constructor(
        private router: Router,
        private reportService: ReportService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }

    getSMSBlocked(): void {
        this.reportService.getSMSBlocked(this.visitorid, this.thedate)
            .subscribe(
            data => this.report = JSON.parse(data.RequestResult),
            error => console.log(error),
            () => {
                //console.log('Responses Loaded');
                //console.log(this.report);
            });
    }

    setVisitorId(newVisitorID): any {
        this.visitorid = newVisitorID;
        return this.visitorid;
    }


    ngOnInit(): void {
        this.route.parent.params.switchMap((params: Params) =>
            this.setVisitorId(params['visitorid']))
            .subscribe(data => { });
        //console.log(this.route.firstChild.params);
        this.getSMSBlocked();
    }


}



