import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-dash-welcome',
  templateUrl: './dash-welcome.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './dash-welcome.component.css'
  ]
})
export class DashWelcomeComponent implements OnInit {

  constructor() { }

  public thedate: string = moment().format('YYYY-MM-DD');

  ngOnInit() {
  }

  thedateChange(newValue) {
      this.thedate = newValue;
  }


}
