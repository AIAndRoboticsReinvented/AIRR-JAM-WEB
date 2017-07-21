﻿import { Component, Input, OnInit }             from '@angular/core';
import { ActivatedRoute, Router, Params }       from '@angular/router';


@Component({
  selector: 'app-dash-nav',
  templateUrl: './dash-nav.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './dash-nav.component.css'
  ]
})

export class DashNavComponent implements OnInit {

    parentRouter = Router;

    displayState: {
        AdminPanel: string,
        ViewsPanel: string,
        ReportsPanel: string,
        ReportsSMS:string
    }

    @Input() visitorid: {};
    @Input() navState: {};

    constructor(
        private router: Router,
        private location: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.displayState = {
            AdminPanel: '1',
            ViewsPanel: '1',
            ReportsPanel: '1',
            ReportsSMS: '0',
        };

    }

    SetPanel(panel:string, state:boolean) : void
    {
        if (panel == 'Admin')
            if (state) this.displayState.AdminPanel = '1'; else this.displayState.AdminPanel = '0';
        if (panel == 'Reports')
            if (state) this.displayState.ReportsPanel = '1'; else this.displayState.ReportsPanel = '0';
            if (panel == 'ReportsSMS')
                if (state) this.displayState.ReportsSMS = '1'; else this.displayState.ReportsSMS = '0';


        if (panel == 'Views')
            if (state) this.displayState.ViewsPanel = '1'; else this.displayState.ViewsPanel = '0';
    }

    
    Show(Feature): void {

        if (Feature == 'Dashboard')
        {
            this.router.navigate(['/dashboard', this.visitorid]);
        }
        else if (Feature == 'About') {
            this.router.navigate(['/dashboard', this.visitorid, 'about']);
        }
        else if (Feature == 'Dialer Survey') {
            this.router.navigate(['/dashboard', this.visitorid, 'reportdialersurvey']);
        }
        else if (Feature == 'SMS Blocked') {
            this.router.navigate(['/dashboard', this.visitorid, 'reportsmsblocked']);
        }
        else if (Feature == 'SMS Block Reasons') {
            this.router.navigate(['/dashboard', this.visitorid, 'reportsmsblockreasons']);
        }
        else if (Feature == 'SMS Responses')
        {
            this.router.navigate(['/dashboard', this.visitorid, 'reportsmsresponses']);
        }
        else if (Feature == 'SMS Send Stats') {
            this.router.navigate(['/dashboard', this.visitorid, 'reportsmssendstats']);
        }


    }

    Compare(A: string, B: string): boolean {
        return A == B;        
    }


}
