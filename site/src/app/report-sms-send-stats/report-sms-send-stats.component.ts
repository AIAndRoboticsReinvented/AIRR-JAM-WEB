import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { ReportService } from '../report.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-report-sms-send-stats',
    templateUrl: './report-sms-send-stats.component.html',
    styleUrls: [
        '../../assets/css/members.css',
        './report-sms-send-stats.component.css'
    ]
})
export class ReportSmsSendStatsComponent implements OnInit {

    report: {};

    visitorid: {};


    constructor(
        private router: Router,
        private reportService: ReportService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }

    getSMSSendStats(): void {
        this.reportService.getSMSSendStats(this.visitorid)
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
        //console.log('Requesting Responses Now!!!');
        this.getSMSSendStats();
    }



}
