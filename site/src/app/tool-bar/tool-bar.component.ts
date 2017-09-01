import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ReportService } from '../report.service';
import { StateMachineService } from '../statemachine.service';
import * as moment from 'moment';


@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './tool-bar.component.css'
  ]
})


export class ToolBarComponent implements OnInit {

    @Input() visitorid: string = "";

    @Input() showaction:boolean = false;
    @Input() theaction: string = "";

    @Input() showthedate: boolean = false;
    @Input() thedate: string = moment().format('YYYY-MM-DD');

    @Input() showcompany: boolean = false;
    @Input() thecompany: string = '';

    @Output() newactionclick: EventEmitter<string> = new EventEmitter<string>(); //Provide a method to show the click.
    @Output() newthedate: EventEmitter<string> = new EventEmitter<string>(); // Provide a method to send the value to the parent.
    @Output() newthecompany: EventEmitter<string> = new EventEmitter<string>(); // Provide a method to send the value to the parent.



    companies: {};


    constructor(
        private reportService: ReportService,
        private statemachine: StateMachineService
    ) { }


    getCompanyID(): void {
        this.statemachine.getCompanyID().then(thecompany => this.thecompany = thecompany);
    }


    getUserCompanies(): void {
        this.reportService.getUserCompanies(this.visitorid)
            .subscribe(
            data => this.companies = JSON.parse(data.RequestResult),
            error => console.log(error),
            () => {
            });
        this.getCompanyID();
    }



    public companychange(newvalue) {
        this.thecompany = newvalue;
        this.statemachine.setCompanyID(newvalue);
        this.newthecompany.emit(this.thecompany);
        this.statemachine.setCompanyID(this.thecompany);
    }

    public datechange(): void {
        this.newthedate.emit(this.thedate);   /// Send the new value back up the line.
    }

    public newActionClick(newvalue): void {
        this.newactionclick.emit(newvalue);   /// Send the new value back up the line.
    }


    ngOnInit() {
        if (this.showcompany) this.getUserCompanies();
    }

}
