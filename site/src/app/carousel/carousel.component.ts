import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
    @Input() tiles: {};
    @Input() id: {};
  constructor() { }

  ngOnInit() {   
      console.log(this.tiles);
  }
  showcontrols() {
      if (this.tiles[1]) return '';
      return 'hidden'; 
  }
  fullid() {
      return '#' + this.id;
  }
}
