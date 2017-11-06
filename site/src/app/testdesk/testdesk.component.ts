import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testdesk',
  templateUrl: './testdesk.component.html',
  styleUrls: ['./testdesk.component.css']
})
export class TestdeskComponent implements OnInit {
    //location = {};
    //setPosition(position) {
    //    this.location = position.coords;
    //    console.log(position.coords);
    //    console.log(this.location);
    //}
  constructor() { }

  ngOnInit() {
      //if (navigator.geolocation) {
      //    navigator.geolocation.getCurrentPosition(position => {
      //        this.location = position.coords;
      //        console.log(position.coords);
      //    });
      //}
  }
}
