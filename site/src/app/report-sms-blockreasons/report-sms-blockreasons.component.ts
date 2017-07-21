import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ReportService } from '../report.service';
import { IUDService } from '../iud.service';

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

    todelete = '';
    toadd = '';

    report: {};
    iudresult: {};
    visitorid: {};


    constructor(
        private router: Router,
        private reportService: ReportService,
        private iudService: IUDService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }

    getSMSReasons(): void {
        this.reportService.getSMSBlockReasons(this.visitorid)
              .subscribe(
            data => this.report = JSON.parse(data.RequestResult),
            error => console.log(error),
            () => {
            });

    }

    delReason(todel): void {
        console.log(todel);
        if (todel != '') {
            this.iudService.deleteSMSBlockReasons(this.visitorid, todel)
                .subscribe(
                data => this.iudresult = JSON.parse(data.RequestResult),
                error => {
                    console.log('The Error');
                    console.log(error);
                },
                () => {
                    this.todelete = '';
                    this.getSMSReasons();
                });
        }
    }


    addReason(): void {
        console.log(this.toadd);
        if (this.toadd != '') {
            this.iudService.insertSMSBlockReasons(this.visitorid, this.toadd)
                .subscribe(
                data => this.iudresult = JSON.parse(data.RequestResult),
                error => {
                    console.log('The Error');
                    console.log(error);
                },
                () => {
                    this.toadd = '';
                    this.getSMSReasons();
                });
        }
    }

    setVisitorId(newVisitorID): any {
        this.visitorid = newVisitorID;
        return this.visitorid;
    }



    ngOnInit(): void {
        this.route.parent.params.switchMap((params: Params) =>
            this.setVisitorId(params['visitorid']))
            .subscribe(data => { });
        this.getSMSReasons();
    }


}




