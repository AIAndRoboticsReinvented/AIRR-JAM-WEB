import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GLocateComponent implements OnInit {

  @Input() lng;
  @Input() lat;

  constructor() { }

  ngOnInit() {
  }

}
