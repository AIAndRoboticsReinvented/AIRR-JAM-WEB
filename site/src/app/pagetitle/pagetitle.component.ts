﻿import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.css']
})
export class PagetitleComponent implements OnInit {

  @Input() title: '';

  constructor() { }
  
  ngOnInit() {
  }

}
