import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ReportService } from '../report.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-report-sms-blockreasons',
  templateUrl: './report-sms-blockreasons.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './report-sms-blockreasons.component.css'
  ]
})
export class ReportSmsBlockreasonsComponent implements OnInit {

    report: {};

    visitorid: {};


    constructor(
        private router: Router,
        private reportService: ReportService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }

    getSMSResponses(): void {
        this.reportService.getSMSBlockReasons(this.visitorid)
            .subscribe(
            data => this.report = JSON.parse(data.RequestResult),
            error => console.log(error),
            () => {
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
        this.getSMSResponses();
    }


}




