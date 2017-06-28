import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-nav',
  templateUrl: './dash-nav.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './dash-nav.component.css'
  ]
})
export class DashNavComponent implements OnInit {


  @Input() visitorid: {};
  @Input() navState: {};

  constructor() { }

  ngOnInit() {
  }

}
