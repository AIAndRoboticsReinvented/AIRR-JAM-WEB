import { Component, Input, OnInit } from '@angular/core';

import { people } from '../trackedperson';

@Component({
  selector: 'app-trackedperson',
  templateUrl: './trackedperson.component.html',
  styleUrls: [
      '../../assets/css/members.css',
      './trackedperson.component.css'
  ]
})
export class TrackedpersonComponent implements OnInit {

  constructor() { }

  @Input() person: people;

  test(): void {
    console.log(this.person);
  }

  ngOnInit() {      
  }

}
