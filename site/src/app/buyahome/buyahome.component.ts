import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

//import { Property } from './property';
//import { PropertyService } from './property.service';

@Component({
  selector: 'app-buyahome',
  templateUrl: './buyahome.component.html',
  styleUrls: ['./buyahome.component.css']
})

export class BuyahomeComponent implements OnInit {

  title = "Buy A Home";

  constructor() { }

  ngOnInit() {
  }

}

