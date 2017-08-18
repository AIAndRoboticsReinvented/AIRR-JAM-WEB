import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ReportService } from '../report.service';
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

    @Input() showthedate: boolean = false;
    @Input() thedate: string = moment().format('YYYY-MM-DD');
    @Output() newthedate: EventEmitter<string> = new EventEmitter<string>(); // Provide a method to send the value to the parent.

    @Input() showcompany: boolean = false;
    @Input() thecompany: string = moment().format('YYYY-MM-DD');
    @Output() newthecompany: EventEmitter<string> = new EventEmitter<string>(); // Provide a method to send the value to the parent.



    companies: {};


    constructor(
        private reportService: ReportService
    ) { }

    getUserCompanies(): void {
        this.reportService.getUserCompanies(this.visitorid)
            .subscribe(
            data => this.companies = JSON.parse(data.RequestResult),
            error => console.log(error),
            () => {
            });
    }


    public companychange(newvalue) {
        this.thecompany = newvalue;
        this.newthecompany.emit(this.thecompany);
    }

    public datechange(): void {
        this.newthedate.emit(this.thedate);   /// Send the new value back up the line.
    }

    ngOnInit() {
        if (this.showcompany) this.getUserCompanies();
    }

}
