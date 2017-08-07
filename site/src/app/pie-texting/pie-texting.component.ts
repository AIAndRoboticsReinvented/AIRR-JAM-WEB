import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ReportService } from '../report.service';

@Component({
  selector: 'app-pie-texting',
  templateUrl: './pie-texting.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './pie-texting.component.css'
  ]
})
export class PieTextingComponent implements OnInit {


    public report: {};
    public visitorid: {};


    public pieChartLabels: string[] = []
    public pieChartData: number[] = [];
    public pieChartType: string = 'pie';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }


    constructor(
        private reportService: ReportService,
        private route: ActivatedRoute,
        private location: Location,

    ) { }


    setVisitorId(newVisitorID): any {
        this.visitorid = newVisitorID;
        return this.visitorid;
    }


    getSMSSendStatsToday(): void {
        this.reportService.getSMSSendStatsToday(this.visitorid)
            .subscribe(
            data => this.report = JSON.parse(data.RequestResult),
            error => console.log(error),
            () => {

                var labels: string[] = [];
                var values: number[] = [];

                for (var i in this.report) {
                    values.push(this.report[i].Messages);
                    labels.push('M' + this.report[i].ModemID.toString() + ' [' + this.report[i].Messages.toString() + ']');
                }

                this.pieChartData = values;

                setTimeout(() => {
                    this.pieChartLabels = labels;
                }, 250);

                
                

                setTimeout(() => {
                    this.pieChartData = values;
                }, 250);
                
                
            });

    }

    ngOnInit() {

        this.route.parent.params.switchMap((params: Params) =>
            this.setVisitorId(params['visitorid']))
            .subscribe(data => { });

         this.getSMSSendStatsToday();
  }

}
