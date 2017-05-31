import { Component, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';

import { DashboardRoutingModule }             from './dashboard-routing.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
