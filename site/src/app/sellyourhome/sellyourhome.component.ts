import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sellyourhome',
  templateUrl: './sellyourhome.component.html',
  styleUrls: ['./sellyourhome.component.css']
})
export class SellyourhomeComponent implements OnInit {

  title = "Sell Your Home";

  constructor() { }

  ngOnInit() {
  }

}
