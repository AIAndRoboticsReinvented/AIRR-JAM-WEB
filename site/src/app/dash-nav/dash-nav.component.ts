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

    displayState : {}

    @Input() visitorid: {};
    @Input() navState: {};

    constructor(
        private router: Router,
        private location: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.displayState = {
            AdminPanel: 1,
        };

    }

    Show(Feature): void {

        if (Feature == 'Dashboard')
        {
            this.router.navigate(['/dashboard', this.visitorid]);
        }
        if (Feature == 'About') {
            this.router.navigate(['/dashboard', this.visitorid, 'about']);
        }


    }

}
