import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ReportService } from '../report.service';
//import * as moment from 'moment';

@Component({
  selector: 'app-pie-texting',
  templateUrl: './pie-texting.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './pie-texting.component.css'
  ]
})
export class PieTextingComponent implements OnInit {

    @Input() public thedate: string = '1900-01-01'; //moment().format('YYYY-MM-DD');

    public report: {};
    public visitorid: {};

    public barChartOptions: any = {
        legend: { position: 'left', display: false, }
    }


    public pieChartLabels: string[] = []
    public pieChartData: number[] = [];
    public pieChartType: string = 'pie';

    

    // events 
    public chartClicked(e: any): void {
        //console.log(e);
    }

    public chartHovered(e: any): void {
        //console.log(e);
    }


    ngOnChanges(changes: any) {
        this.getSMSSendStatsToday();
    }


    public datechange(): void {
        //this.getSMSSendStatsToday();
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
        this.reportService.getSMSSendStatsToday(this.visitorid, this.thedate)
            .subscribe(
            data => this.report = JSON.parse(data.RequestResult),
            error => console.log(error),
            () => {

                var labels: string[] = [];
                var values: number[] = [];


                try {
                    for (var i in this.report) {
                        values.push(this.report[i].Messages);
                        labels.push('M' + this.report[i].ModemID.toString() + ' [' + this.report[i].Messages.toString() + ']');
                    }
                }
                catch (err) {
                    labels = ['NONE'];
                    values = [100];
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
0