﻿import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
    @Input() tiles: {};
  constructor() { }

  ngOnInit() {   
      console.log(this.tiles);
  }

}
