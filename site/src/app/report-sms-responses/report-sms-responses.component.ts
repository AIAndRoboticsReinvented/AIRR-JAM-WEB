import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { SMSReceived } from '../datatypes/sms';
import { ReportService } from '../report.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-report-sms-responses',
  templateUrl: './report-sms-responses.component.html',
  styleUrls: ['./report-sms-responses.component.css']
})
export class ReportSmsResponsesComponent implements OnInit {

    report: SMSReceived[];

    visitorid: {};


    constructor(
        private router: Router,
        private reportService: ReportService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }

    getSMSResponses(): void {
        this.reportService.getSMSResponses(this.visitorid)
            .subscribe(
            data => this.report = JSON.parse(data.RequestResult),
            error => console.log(error),
            () => {
                console.log('Responses Loaded');
                console.log(this.report);
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
        console.log('Requesting Responses Now!!!');
        this.getSMSResponses();
    }



}
