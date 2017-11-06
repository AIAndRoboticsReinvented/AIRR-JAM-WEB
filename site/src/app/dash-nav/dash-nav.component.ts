import { Component, Input, OnInit }             from '@angular/core';
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
        ReportsSMS: string,
        ReportsSite: string,
    }

    @Input() visitorid: {};
    @Input() companyid: {};
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
            ReportsSite: '0',
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
            if (panel == 'ReportsSite')
                if (state) this.displayState.ReportsSite = '1'; else this.displayState.ReportsSite = '0';


        if (panel == 'Views')
            if (state) this.displayState.ViewsPanel = '1'; else this.displayState.ViewsPanel = '0';
    }

    
    Show(Feature): void {

        if (Feature == 'Dashboard')
        {
            this.router.navigate(['/dashboard', this.visitorid, this.companyid]);
        }
        else if (Feature == 'About') {
            this.router.navigate(['/dashboard', this.visitorid, this.companyid, 'about']);
        }
        else if (Feature == 'Dialer Survey') {
            this.router.navigate(['/dashboard', this.visitorid, this.companyid, 'reportdialersurvey']);
        }
        else if (Feature == 'PeopleTrack') {
            this.router.navigate(['/dashboard', this.visitorid, this.companyid, 'peopletrack']);
        }
        else if (Feature == 'Site Contact Requests') {
            this.router.navigate(['/dashboard', this.visitorid, this.companyid, 'reportsitecontactrequests']);
        }        
        else if (Feature == 'SMS Blocked') {
            this.router.navigate(['/dashboard', this.visitorid, this.companyid, 'reportsmsblocked']);
        }
        else if (Feature == 'SMS Block Reasons') {
            this.router.navigate(['/dashboard', this.visitorid, this.companyid, 'reportsmsblockreasons']);
        }
        else if (Feature == 'SMS Responses')
        {
            this.router.navigate(['/dashboard', this.visitorid, this.companyid, 'reportsmsresponses']);
        }
        else if (Feature == 'SMS Send Stats') {
            this.router.navigate(['/dashboard', this.visitorid, this.companyid, 'reportsmssendstats']);
        }


    }

    Compare(A: string, B: string): boolean {
        return A == B;        
    }


}
