import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { people } from '../trackedperson';

import { ReportService } from '../report.service';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-peopletrack',
  templateUrl: './peopletrack.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './peopletrack.component.css'
  ]
})

export class PeopletrackComponent implements OnInit {

    public person: people;
    public visitorid: {};
    public thecompany: string = "";


    public name: string = "Amber Stephens";
    public addr1: string = "";
    public addr2: string = "";
    public city: string = "Tampa";
    public state: string = "FL";
    public zip: string = "";


    constructor(
        private router: Router,
        private reportService: ReportService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }


    setVisitorId(newVisitorID): any {
        this.visitorid = newVisitorID;
        return this.visitorid;
    }


    thecompanyChange(newValue) {
        this.thecompany = newValue;
    }


    getPerson(): void {
        this.reportService.getTrackPerson(this.visitorid, this.name, this.addr1, this.addr2, this.city, this.state, this.zip)
            .subscribe(
            data => this.person = JSON.parse(JSON.parse(data.RequestResult)[0].result),
            error => console.log(error),
            () => { 
                console.log(this.person);
            });      
    }

    newActionClick(newValue) {
        console.log('Execute the search');
        this.getPerson();
    }


    ngOnInit() {
        this.route.parent.params.switchMap((params: Params) =>
            this.setVisitorId(params['visitorid']))
            .subscribe(data => { });
    }


}
